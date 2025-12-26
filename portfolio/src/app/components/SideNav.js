"use client";
import { useEffect, useState } from "react";



export default function SideNav() {
    const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrolledToBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50;
            if (scrolledToBottom && !hasScrolledToBottom) {
                setHasScrolledToBottom(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasScrolledToBottom]);

    if (!hasScrolledToBottom) return null;

    return (
        <nav className="side-nav border border-white">
            <ul>
                <li>Home</li>
                <li>Projects</li>
                <li>Other Work</li>
                <li>Connect</li>
            </ul>
        </nav>
    );
}