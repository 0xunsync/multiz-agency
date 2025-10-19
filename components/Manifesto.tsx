import React, { useState, useEffect, useRef } from 'react';
import SectionWrapper from './SectionWrapper';

const Metric: React.FC<{ value: number; label: string }> = ({ value, label }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let start = 0;
                    const end = value;
                    if (start === end) return;

                    const duration = 2000;
                    const startTime = Date.now();

                    const step = () => {
                        const now = Date.now();
                        const progress = Math.min((now - startTime) / duration, 1);
                        const current = Math.floor(progress * end);
                        setCount(current);

                        if (progress < 1) {
                            requestAnimationFrame(step);
                        } else {
                            setCount(end);
                        }
                    };

                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.6 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, [value]);

    return (
        <div ref={ref} className="text-left">
            <div className="text-[clamp(3rem,5vw,4.5rem)] font-extrabold text-neon-gold mb-3 leading-none tracking-[-2px]">
                {count}+
            </div>
            <div className="text-sm text-gray-text uppercase tracking-[2px] font-normal">
                {label}
            </div>
        </div>
    );
};


const Manifesto: React.FC = () => {
    return (
        <SectionWrapper id="manifesto" className="py-16 md:py-24 px-[6%] flex items-center justify-center relative bg-graphite before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px before:bg-gradient-to-r before:from-transparent before:via-neon-gold/30 before:to-transparent overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="manifesto-text z-10">
                    <span className="text-xs tracking-[4px] text-neon-gold font-normal mb-6 uppercase inline-block before:content-[''] before:inline-block before:w-10 before:h-px before:bg-neon-gold before:mr-4 before:align-middle">Our Philosophy</span>
                    <h2 className="text-[clamp(2.8rem,7vw,5.5rem)] mb-12 font-extrabold leading-tight tracking-[-2px]">We don't push rosters. <span className="bg-gradient-to-r from-neon-gold to-gold-bright bg-clip-text text-transparent">We curate futures.</span></h2>
                    <p className="text-[clamp(1.15rem,2vw,1.5rem)] leading-loose font-light text-gray-light mb-10">Every venue has a heartbeat. Every crowd, an energy signature. At Multiz, we don't believe in one-size-fits-all line-ups. We listen first, then architect sonic experiences that resonate with your unique vision.</p>
                    <p className="text-[clamp(1.15rem,2vw,1.5rem)] leading-loose font-light text-gray-light mb-10">Whether it's an intimate club night in Tel Aviv, a sprawling festival in the desert, or a pioneering metaverse event—we match the right artist to the right moment, creating memories that linger long after the last note fades.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mt-16 pt-16 border-t border-neon-gold/10">
                        <Metric value={250} label="Events Curated" />
                        <Metric value={80} label="Artist Network" />
                        <Metric value={20} label="Venues" />
                    </div>
                </div>
                
                <div className="relative flex items-center justify-center h-[400px] sm:h-[500px] lg:h-full min-h-[500px]">
                    <div className="absolute w-full h-full max-w-[700px] max-h-[700px] bg-[repeating-conic-gradient(rgba(201,169,97,0.03)_0%_2deg,transparent_2deg_10deg)] rounded-full opacity-50 animate-[spin_60s_linear_infinite_reverse]"></div>
                    <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] animate-[orbFloat_25s_ease-in-out_infinite]">
                        {/* Glowing Core */}
                        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(201,169,97,0.25)_0%,transparent_65%)] blur-2xl"></div>
                        
                        {/* Spinning Rings */}
                        <div className="absolute inset-0 rounded-full border border-neon-gold/15 animate-[spin_40s_linear_infinite]"></div>
                        <div className="absolute inset-[15%] rounded-full border border-neon-gold/10 animate-[spin_35s_linear_infinite_reverse]"></div>
                        <div className="absolute inset-[30%] rounded-full border border-cyan/15 animate-[spin_25s_linear_infinite]"></div>

                        {/* Central Orb */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 bg-gradient-to-br from-neon-gold to-gold-bright rounded-full shadow-[0_0_80px_20px_rgba(201,169,97,0.4)]">
                            <div className="w-full h-full rounded-full bg-black/30"></div>
                        </div>
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
};

export default Manifesto;