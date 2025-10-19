import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './Icons';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = targetElement.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            setIsMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { href: '#manifesto', label: 'Manifesto' },
        { href: '#services', label: 'Services' },
        { href: '#web3', label: 'Web3' },
        { href: '#process', label: 'Process' },
        { href: '#events', label: 'Work' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-[1001] flex justify-between items-center transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${scrolled ? 'bg-darker/95 backdrop-blur-3xl saturate-150 py-5 md:py-7 px-[6%] border-b border-neon-gold/10' : 'bg-transparent py-8 md:py-12 px-[6%]'}`}>
                <div className="text-2xl font-black tracking-[6px] relative overflow-hidden">
                    <span className="bg-gradient-to-r from-white to-neon-gold bg-clip-text text-transparent">
                        MULTIZ
                    </span>
                </div>
                <ul className="hidden md:flex gap-14 list-none items-center">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="interactive text-gray-light text-sm font-normal tracking-[1.5px] uppercase transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] relative hover:text-neon-gold before:content-[''] before:absolute before:-bottom-2 before:left-1/2 before:w-0 before:h-px before:bg-neon-gold before:transition-all before:duration-400 before:ease-[cubic-bezier(0.4,0,0.2,1)] before:-translate-x-1/2 hover:before:w-full">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    className="md:hidden interactive z-[1002]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <XIcon className="w-8 h-8 text-white" /> : <MenuIcon className="w-8 h-8 text-white" />}
                </button>
            </nav>

            <div className={`fixed inset-0 z-[1000] bg-darker/95 backdrop-blur-3xl transition-opacity duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <ul className="flex flex-col items-center justify-center h-full gap-12">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="interactive text-3xl text-gray-light hover:text-neon-gold transition-colors duration-300">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Navbar;