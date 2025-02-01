import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin, FaMale } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Footer() {
    const navItems = [
        { name: "Home", link: "/" },
        { name: "About", link: "#about" },
        { name: "Tracks", link: "#tracks" },
        { name: "Prizes", link: "#prizes" },
        { name: "Sponsors", link: "#sponsors" },
        { name: "Contact Us", link: "#contact" },
        { name: "Code of Conduct", link: "https://docs.google.com/document/d/1aqwBeHFdfbiiINS1anuogG11zQtV9WP0A65SZ9yEp3g/edit?usp=sharing" },
    ];

    const socialLinks = [
        // { icon: <IoIosMail />, link: "https://www.facebook.com/OssomeHacks" },
        { icon: <FaTwitter />, link: "https://x.com/GithubSrm" },
        { icon: <FaInstagram />, link: "https://www.instagram.com/githubsrm/" },
        { icon: <FaGithub />, link: "https://github.com/SRM-IST-KTR" },
        { icon: <FaLinkedin />, link: "https://www.linkedin.com/company/githubsrm/" },
    ];

    return (
        <footer className="w-full py-10 bg-[#1E002E] text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
                {/* Left Logo */}
                <div className="mb-6 md:mb-0">
                    <Image src="/OHLOGO.svg" alt="Ossome Hacks Logo" width={150} height={50} />
                </div>

                {/* Navigation Links */}
                <nav className="grid grid-cols-2 gap-4 md:flex md:gap-8 text-center md:text-left">
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.link} className="text-sm hover:underline">
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Right Logo */}
                <div className="mt-6 md:mt-0">
                    <Image src="/logo.png" alt="Community Logo" width={150} height={50} />
                </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex justify-center space-x-6 text-white">
                {socialLinks.map((social, idx) => (
                    <a
                        key={idx}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg hover:text-[#FCF961] transition-colors duration-300"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>

            {/* Copyright Section */}
            <div className="mt-10 border-t border-white/[0.2] pt-6 text-center text-sm">
                <p>
                    Copyright © {new Date().getFullYear()} Ossome Hacks. All rights reserved.
                </p>
            </div>
        </footer>
    );
}