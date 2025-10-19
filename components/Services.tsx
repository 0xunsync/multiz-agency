import React from 'react';
import SectionWrapper from './SectionWrapper';
import { FestivalIcon, NightclubIcon, MetaverseIcon, SyncIcon } from './Icons';

interface ServiceItemProps {
    index: string;
    icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    tags: string[];
}

const ServiceItem: React.FC<ServiceItemProps> = ({ index, icon, title, description, tags }) => {
    return (
        <div className="interactive group bg-gradient-to-br from-graphite to-darker p-8 sm:p-12 md:p-16 border border-neon-gold/10 rounded-3xl relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-4 hover:shadow-2xl hover:shadow-neon-gold/15">
             <div className="absolute inset-0 rounded-3xl p-px bg-gradient-to-br from-neon-gold to-cyan opacity-0 transition-opacity duration-700 group-hover:opacity-40 [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [-webkit-mask-composite:xor] [mask-composite:exclude]"></div>
             <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-neon-gold/10 to-transparent transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:left-full"></div>
            
            <span className="text-sm text-neon-gold font-normal tracking-[3px] mb-12 block">{index}</span>
            <div className="w-[90px] h-[90px] mb-12 relative">
                {React.cloneElement(icon, { className: "w-full h-full stroke-neon-gold stroke-[1.5] fill-none transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:stroke-gold-bright group-hover:scale-110 group-hover:rotate-3" })}
            </div>
            <h3 className="text-[clamp(1.6rem,3vw,2.2rem)] mb-7 text-white font-bold tracking-[-1px] leading-tight">{title}</h3>
            <p className="font-light leading-relaxed text-gray-text text-base mb-10">{description}</p>
            <div className="flex flex-wrap gap-4">
                {tags.map(tag => (
                    <span key={tag} className="py-2.5 px-6 bg-neon-gold/10 border border-neon-gold/15 rounded-full text-xs text-neon-gold font-normal tracking-wide transition-all duration-300 group-hover:bg-neon-gold/20 group-hover:border-neon-gold/30">{tag}</span>
                ))}
            </div>
        </div>
    );
};

const Services: React.FC = () => {
    const services = [
        { index: '01', icon: <FestivalIcon />, title: 'Festivals & Large-Scale Events', description: 'Commanding stages that hold thousands. We source headliners and supporting acts who understand the electric energy of open-air crowds and can turn moments into movements.', tags: ['Headline Acts', 'Stage Curation', 'Multi-Day Programming'] },
        { index: '02', icon: <NightclubIcon />, title: 'Nightclubs & Intimate Venues', description: 'The sacred space where bass meets soul. We book DJs and live acts who respect the ritual of the dancefloor—artists who don\'t just play music, but guide journeys.', tags: ['Resident DJs', 'Guest Performers', 'Underground Culture'] },
        { index: '03', icon: <MetaverseIcon />, title: 'Virtual Events & Metaverse', description: 'Pioneering the digital frontier. From Decentraland stages to custom virtual worlds, we bring live music to spaces where imagination sets the only limits.', tags: ['3D Environments', 'Virtual Reality', 'Hybrid Experiences'] },
        { index: '04', icon: <SyncIcon />, title: 'Sync & Media Projects', description: 'The perfect soundtrack for your story. Music supervision and original scores for film, television, advertising, and brand campaigns that demand emotional resonance.', tags: ['Music Supervision', 'Original Scores', 'Brand Campaigns'] },
    ];

    return (
        <SectionWrapper id="services" className="min-h-screen py-16 md:py-24 px-[6%] flex items-center justify-center bg-black">
            <div>
                <div className="text-center mb-16 md:mb-20 max-w-[900px] mx-auto">
                    <span className="text-xs tracking-[4px] text-neon-gold font-normal mb-6 uppercase inline-block before:content-[''] before:inline-block before:w-10 before:h-px before:bg-neon-gold before:mr-4 before:align-middle">What We Do</span>
                    <h2 className="text-[clamp(3.5rem,8vw,6rem)] mb-8 font-extrabold tracking-[-3px] leading-none">Sonic Architecture</h2>
                    <p className="text-[clamp(1.1rem,2vw,1.4rem)] text-gray-light font-light leading-relaxed">From dancefloors to digital realms, we bring the perfect sound to every space. Our expertise spans the spectrum of modern music experiences.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {services.map(service => <ServiceItem key={service.index} {...service} />)}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Services;