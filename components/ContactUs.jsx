"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [formStatus, setFormStatus] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setFormStatus("Sending...");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setFormStatus("Failed to send the message. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setFormStatus("Something went wrong. Please try again later.");
        }
    };

    return (
        <div
            id="contact"
            className="min-h-screen flex items-center flex-col justify-center bg-[#1E002E] px-6">
            <div className='flex justify-center relative text-[60px] sm:text-[120px] md:text-[180px] xl:text-[280px] tracking-tight font-extrabold text-[#6B5E77] mb-[80px]'>
                CONTACT
                <div className='flex justify-center absolute text-[30px] sm:text-[60px] md:text-[100px] xl:text-[140px] bottom-0 font-extrabold text-[#FCF961]'>CONTACT
                </div>
            </div>
            <div className="max-w-4xl w-full p-11 bg-[#1E002E] border-2 border-[#FCF961] shadow-lg rounded-2xl hover:shadow-[0_0_35px_rgba(252,249,120,1)]">
                

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                        
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent border-b border-gray-600 text-gray-300 py-2 focus:outline-none focus:border-[#FCF961] transition-colors"
                            placeholder="Name"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent border-b border-gray-600 text-gray-300 py-2 focus:outline-none focus:border-[#FCF961] transition-colors"
                            placeholder="E-mail"
                        />
                    </div>

                    

                    {/* Message Field */}
                    <div>
                        <input
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent border-b border-gray-600 text-gray-300 py-2 mb-4 focus:outline-none focus:border-[#FCF961] transition-colors"
                            placeholder="Enter your message"
                        ></input>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-6 py-3 bg-[#dfdb23]  text-black rounded-full px-11 shadow-lg hover:bg-[#9c9a29] transition-all"
                        >
                            Submit
                        </button>
                    </div>
                </form>

                {/* Status Message */}
                {formStatus && <p className="mt-4 text-center text-[#AA2490]">{formStatus}</p>}
            </div>
        </div>
    );
}