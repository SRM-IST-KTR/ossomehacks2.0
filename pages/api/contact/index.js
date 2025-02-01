import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Only POST requests are allowed" });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 587, // Switch to TLS port
        secure: false, // Use TLS instead of SSL
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        tls: {
            rejectUnauthorized: false, // Try this if self-signed certificate issues arise
        },
    });

    try {
        await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to: process.env.SMTP_TO,
            replyTo: email,
            subject: "New Contact Form Submission",
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        });

        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error.message);
        console.log("Error details:", error);
        console.error("Error details:", error);

        if (error.response) {
            console.error("SMTP Response Error:", error.response);  // Response from the SMTP server (if any)
        }

        res.status(500).json({
            error: "Failed to send email. Please check server logs for more details.",
            details: error.message,
        });
    }
}