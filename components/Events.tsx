import React, { useState, useEffect } from 'react';
import SectionWrapper from './SectionWrapper';
import { PlayIcon, XIcon } from './Icons';

const events = [
    { id: 'LDXz86HVwl8', title: 'Grounded Festival Mainstage' },
    { id: 'CPcOk2sKzCM', title: 'Intimate Club Night: Zappa TLV' },
    { id: 't3qS6bvx6ro', title: 'Danny Tenaglia at The Block' },
    { id: 'LE_q8D8Upuk', title: 'Desert Rave Experience' },
    { id: 'gQWFpaxWrcs', title: 'Boiler Room Session' },
    { id: 'KASfkZi91Zs', title: 'Metaverse Concert: Decentraland' },
    { id: 'NF8Mrs52lTQ', title: 'Warehouse Takeover' },
];

const VideoModal: React.FC<{ videoId: string; onClose: () => void }> = ({ videoId, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-[2000] flex items-center justify-center p-4 animate-fadeIn">
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg shadow-2xl shadow-neon-gold/20">
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                ></iframe>
                <button
                    onClick={onClose}
                    className="interactive absolute -top-4 -right-4 w-10 h-10 bg-neon-gold text-black rounded-full flex items-center justify-center z-10 hover:scale-110 transition-transform"
                    aria-label="Close video player"
                >
                    <XIcon className="w-6 h-6" />
                </button>
            </div>
            <div className="absolute inset-0" onClick={onClose}></div>
        </div>
    );
};

const Events: React.FC = () => {
    const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

    const openModal = (videoId: string) => {
        setSelectedVideoId(videoId);
    };

    const closeModal = () => {
        setSelectedVideoId(null);
    };

    return (
        <>
            <SectionWrapper id="events" className="py-16 md:py-24 px-[6%] flex items-center justify-center bg-black">
                <div className="w-full">
                    <div className="text-left mb-12 md:mb-16 max-w-[900px]">
                        <span className="text-xs tracking-[4px] text-neon-gold font-normal mb-6 uppercase inline-block before:content-[''] before:inline-block before:w-10 before:h-px before:bg-neon-gold before:mr-4 before:align-middle">Our Portfolio</span>
                        <h2 className="text-[clamp(3rem,8vw,6rem)] mb-8 font-extrabold tracking-[-3px] leading-none">Events We've Booked</h2>
                         <p className="text-[clamp(1.1rem,2vw,1.4rem)] text-gray-light font-light leading-relaxed">From intimate clubs to sprawling festivals, here's a glimpse into the moments and movements we've helped architect.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        {events.map((event) => (
                            <div
                                key={event.id}
                                onClick={() => openModal(event.id)}
                                className="interactive group aspect-video rounded-xl overflow-hidden relative cursor-pointer border border-neon-gold/10 shadow-lg transition-all duration-500 hover:shadow-neon-gold/20 hover:border-neon-gold/30 hover:-translate-y-2"
                            >
                                <img
                                    src={`https://img.youtube.com/vi/${event.id}/hqdefault.jpg`}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300"></div>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                                    <PlayIcon className="w-8 h-8 fill-white" />
                                </div>
                                <h3 className="absolute bottom-0 left-0 p-4 md:p-5 text-white font-semibold text-sm md:text-base leading-tight">
                                    {event.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
            {selectedVideoId && <VideoModal videoId={selectedVideoId} onClose={closeModal} />}
        </>
    );
};

export default Events;