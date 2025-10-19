import React from 'react';
import SectionWrapper from './SectionWrapper';
import { InstagramIcon, EmailIcon, LinkedInIcon, XIcon } from './Icons';

const Contact: React.FC = () => {
    const socialLinks: { href: string; label: string; icon: React.ReactElement<React.SVGProps<SVGSVGElement>> }[] = [
        { href: 'https://www.instagram.com/multizhub', label: 'Instagram', icon: <InstagramIcon /> },
        { href: 'mailto:max@multiz.agency', label: 'Email', icon: <EmailIcon /> },
        { href: 'https://www.linkedin.com/company/multinft', label: 'LinkedIn', icon: <LinkedInIcon /> },
        { href: 'https://x.com/multinft', label: 'X', icon: <XIcon /> },
    ];
    return (
        <SectionWrapper id="contact" className="min-h-screen py-16 md:py-24 px-[6%] flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-b from-dark-gray via-graphite to-[rgba(201,169,97,0.02)]">
            <div className="absolute w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(201,169,97,0.12)_0%,transparent_70%)] rounded-full filter blur-3xl top-1/2 left-1/2 animate-contactGlow"></div>
            <div className="relative z-10">
                <span className="text-xs tracking-[4px] text-neon-gold font-normal mb-6 uppercase inline-block before:content-[''] before:inline-block before:w-10 before:h-px before:bg-neon-gold before:mr-4 before:align-middle">Let's Connect</span>
                <h2 className="text-[clamp(2.5rem,8vw,7rem)] mb-8 font-black tracking-[-4px] leading-none">Create Something Extraordinary</h2>
                <p className="text-[clamp(1.3rem,3vw,2rem)] mb-20 font-light text-gray-light max-w-[850px] mx-auto leading-relaxed">Whether you're planning an intimate gathering, a festival, or breaking new ground in the metaverse—let's architect the perfect sonic experience together.</p>
                
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center flex-wrap mb-20">
                    <a href="mailto:max@multiz.agency" className="interactive group relative inline-flex items-center gap-4 py-5 px-10 md:py-7 md:px-16 bg-neon-gold border-2 border-neon-gold text-black text-sm font-semibold tracking-[2px] rounded-xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] uppercase hover:-translate-y-1 hover:shadow-2xl hover:shadow-neon-gold/40">
                        <span className="relative z-10">Start a Project</span>
                        <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-700 group-hover:w-[600px] group-hover:h-[600px]"></div>
                    </a>
                     <a href="mailto:max@multiz.agency" className="interactive group relative inline-flex items-center gap-4 py-5 px-10 md:py-7 md:px-16 bg-transparent border-2 border-neon-gold text-neon-gold text-sm font-semibold tracking-[2px] rounded-xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] uppercase hover:-translate-y-1 hover:shadow-2xl hover:shadow-neon-gold/40 hover:text-black hover:border-gold-bright">
                        <span className="relative z-10">General Inquiry</span>
                        <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-neon-gold rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-700 group-hover:w-[600px] group-hover:h-[600px]"></div>
                    </a>
                </div>

                <div className="flex justify-center gap-8 mt-20">
                    {socialLinks.map(({href, label, icon}) => (
                         <a key={label} href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="interactive group w-16 h-16 border border-neon-gold/25 rounded-full flex items-center justify-center text-gray-text transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-neon-gold hover:-translate-y-2 hover:shadow-2xl hover:shadow-neon-gold/30">
                            {React.cloneElement(icon, { className: "w-6 h-6 stroke-gray-text stroke-[1.5] fill-none transition-all duration-500 group-hover:stroke-neon-gold" })}
                        </a>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;