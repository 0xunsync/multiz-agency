import React from 'react';

const collaborations = [
    "Decentraland", "The Sandbox", "Marc Romboy", "Danny Tenaglia",
    "Christian Smith", "Grounded Festival", "Zappa",
    "Music TLV", "Comfort 13"
];

const Marquee: React.FC = () => {
    const marqueeContent = [...collaborations, ...collaborations]; // Duplicate for seamless loop
    return (
        <div className="relative my-12">
            <div className="relative w-full overflow-hidden py-8">
                <div className="flex animate-marqueeScroll group-hover:pause w-max">
                    {marqueeContent.map((name, index) => (
                        <div key={index} className="px-8 md:px-16 py-10 text-xl md:text-2xl font-medium whitespace-nowrap text-gray-text transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] tracking-wide relative hover:text-neon-gold hover:scale-110 hover:drop-shadow-[0_0_30px_rgba(201,169,97,0.5)]">
                            <span className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-neon-gold rounded-full -translate-y-1/2 opacity-0 group-hover:opacity-30 transition-opacity"></span>
                            {name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Collaborations: React.FC = () => {
    return (
        <section id="collaborations" className="bg-graphite py-16 md:py-24 overflow-hidden">
            <div className="text-center px-[6%] mb-12 md:mb-16">
                <span className="text-xs tracking-[4px] text-neon-gold font-normal mb-6 uppercase inline-block before:content-[''] before:inline-block before:w-10 before:h-px before:bg-neon-gold before:mr-4 before:align-middle">Our Network</span>
                <h2 className="text-[clamp(3rem,8vw,6rem)] mb-8 font-extrabold tracking-[-3px]">Trusted Collaborations</h2>
                <p className="text-[clamp(1.1rem,2vw,1.4rem)] text-gray-light font-light max-w-[700px] mx-auto">World-class artists, iconic venues, and visionary brands we've had the honor of working with.</p>
            </div>
            <div className="group">
                <Marquee />
            </div>
        </section>
    );
};

export default Collaborations;