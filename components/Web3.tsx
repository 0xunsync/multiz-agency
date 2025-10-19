import React from 'react';
import SectionWrapper from './SectionWrapper';

// Fix: Add TypeScript definitions for the <model-viewer> custom element.
// This extends the global JSX namespace to include 'model-viewer' and its specific properties,
// resolving the "Property 'model-viewer' does not exist on type 'JSX.IntrinsicElements'" error.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          ar?: boolean;
          arModes?: string;
          cameraControls?: boolean;
          autoRotate?: boolean;
          shadowIntensity?: string;
          exposure?: string;
          environmentImage?: string;
        },
        HTMLElement
      >;
    }
  }
}

const avatarSkin = {
    name: 'Avatar Skin',
    description: 'A custom wearable skin for the metaverse, blending futuristic aesthetics with street style.',
    src: '/3ditems/degenskin23.glb',
};

const Web3: React.FC = () => {
    return (
        <SectionWrapper id="web3" className="py-16 md:py-24 px-[6%] flex items-center justify-center relative bg-dark-gray before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px before:bg-gradient-to-r before:from-transparent before:via-neon-gold/30 before:to-transparent overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="web3-text z-10">
                    <span className="text-xs tracking-[4px] text-neon-gold font-normal mb-6 uppercase inline-block before:content-[''] before:inline-block before:w-10 before:h-px before:bg-neon-gold before:mr-4 before:align-middle">Digital Wearables & 3D Studio</span>
                    <h2 className="text-[clamp(2.8rem,7vw,5.5rem)] mb-12 font-extrabold leading-tight tracking-[-2px]">Your Brand, Reimagined for <span className="bg-gradient-to-r from-neon-gold to-gold-bright bg-clip-text text-transparent">GEN Z.</span></h2>
                    <p className="text-[clamp(1.1rem,1.8vw,1.3rem)] leading-relaxed font-light text-gray-light mb-8">
                        The next generation isn't just online; they're building worlds. Multiz is your gateway to Gen Z's digital life, transforming your brand into immersive experiences they'll actually use. We craft stunning <strong className="font-semibold text-neon-gold/90">digital wearables, avatar skins, and fully-branded virtual environments</strong> that resonate with their culture, deploying them across platforms like <strong className="font-semibold text-neon-gold/90">Decentraland</strong> and <strong className="font-semibold text-neon-gold/90">The Sandbox</strong>.
                    </p>
                    <p className="text-[clamp(1.1rem,1.8vw,1.3rem)] leading-relaxed font-light text-gray-light">
                        As traditional social spaces evolve, Gen Z seeks authentic connections in the metaverse. Virtual nightclubs and digital merchandise aren't just assets; they're the new cultural hubs. Partner with us to unlock global reach, create new revenue streams, and build a lasting legacy with the generation that defines what's next.
                    </p>
                </div>

                <div className="relative flex flex-col items-center justify-center min-h-[500px] lg:min-h-[600px] bg-graphite/30 border border-neon-gold/10 rounded-3xl p-4 md:p-6">
                    <div className="w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden mb-4 cursor-grab">
                        <model-viewer
                            src={avatarSkin.src}
                            alt={avatarSkin.name}
                            ar
                            arModes="webxr scene-viewer quick-look"
                            cameraControls
                            autoRotate
                            shadowIntensity="1"
                            exposure="1.2"
                            environmentImage="neutral"
                            style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
                        >
                        </model-viewer>
                    </div>
                    <div className="w-full text-center">
                         <h3 className="text-xl font-bold text-white mb-2">{avatarSkin.name}</h3>
                         <p className="text-sm text-gray-text mb-4 h-10">{avatarSkin.description}</p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Web3;