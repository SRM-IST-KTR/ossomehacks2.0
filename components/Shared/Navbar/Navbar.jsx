"use client";
import React from "react";
import { FloatingNav } from "../../ui/navbar-menu";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import { IconAward, IconMapPin, IconStar } from "@tabler/icons-react";

export default function Navbar() {
    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "About",
            link: "/about",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Tracks",
            link: "/tracks",
            icon: <IconMapPin className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Prizes",
            link: "/prizes",
            icon: <IconAward className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Sponsors",
            link: "/sponsors",
            icon: <IconStar className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Contact Us",
            link: "/contact",
            icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
    ];

    return (
        <div className="relative w-full">
            <FloatingNav
                navItems={navItems}
                startLogo="/OHLOGO.svg"
                endLogo="/gcsrm_black.svg"
            />
        </div>
    );
}