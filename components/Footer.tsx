
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black py-10 md:py-16 px-[6%] text-center border-t border-neon-gold/10">
            <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
                <div className="text-lg font-extrabold tracking-[4px] text-neon-gold">
                    MULTIZ
                </div>
                <div className="text-gray-text text-sm font-light">
                    © 2025 Multiz. Curating sonic experiences worldwide.
                </div>
                <div className="flex gap-8">
                    <a href="#" className="interactive text-gray-text text-sm tracking-widest transition-colors duration-300 hover:text-neon-gold">Privacy</a>
                    <a href="#" className="interactive text-gray-text text-sm tracking-widest transition-colors duration-300 hover:text-neon-gold">Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
