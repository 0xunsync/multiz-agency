import React from 'react';
import SectionWrapper from './SectionWrapper';
import { ListenIcon, MatchIcon, DeliverIcon } from './Icons';

const ProcessStep: React.FC<{ icon: React.ReactElement<React.SVGProps<SVGSVGElement>>; title: string; description: string }> = ({ icon, title, description }) => {
    return (
        <div className="text-center relative group">
            <div className="w-24 h-24 mx-auto mb-12 bg-gradient-to-br from-neon-gold/10 to-cyan/5 rounded-full flex items-center justify-center border border-neon-gold/20 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-neon-gold/20 group-hover:to-cyan/10 group-hover:shadow-[0_0_60px_rgba(201,169,97,0.3)]">
                {React.cloneElement(icon, { className: "w-11 h-11 stroke-neon-gold stroke-[1.5] fill-none transition-all duration-500 group-hover:stroke-gold-bright" })}
            </div>
            <h3 className="text-2xl mb-6 text-neon-gold font-bold tracking-[-0.5px]">{title}</h3>
            <p className="text-base text-gray-text leading-relaxed font-light">{description}</p>
        </div>
    );
};

const Process: React.FC = () => {
    return (
        <SectionWrapper id="process" className="min-h-screen py-16 md:py-24 px-[6%] flex items-center justify-center bg-dark-gray relative">
            <div className="max-w-[1200px] mx-auto text-center">
                <span className="text-xs tracking-[4px] text-neon-gold font-normal mb-6 uppercase inline-block before:content-[''] before:inline-block before:w-10 before:h-px before:bg-neon-gold before:mr-4 before:align-middle">Our Approach</span>
                <h2 className="text-[clamp(3rem,8vw,6rem)] mb-12 md:mb-16 font-extrabold tracking-[-3px]">How We Work</h2>
                <div className="relative">
                    <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-neon-gold to-transparent"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20 mt-16 md:mt-24">
                        <ProcessStep icon={<ListenIcon />} title="Listen" description="We begin by understanding your vision, audience DNA, and the unique atmosphere you're creating. Deep listening is where magic starts." />
                        <ProcessStep icon={<MatchIcon />} title="Match" description="From our curated network, we match artists whose sonic signature, energy, and ethos align perfectly with your vision and values." />
                        <ProcessStep icon={<DeliverIcon />} title="Deliver" description="We handle every detail—contracts, logistics, tech riders—ensuring flawless execution so you can focus on creating unforgettable moments." />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Process;