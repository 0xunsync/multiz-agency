
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(201,169,97,0.15),transparent),radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(0,229,204,0.08),transparent)] bg-black"></div>
      
      <div className="absolute w-full h-full">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(201,169,97,0.12),transparent_70%)] filter blur-2xl animate-orbFloat -top-52 -left-28"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(0,229,204,0.1),transparent_70%)] filter blur-[60px] animate-[orbFloat_15s_ease-in-out_infinite_reverse] -bottom-28 -right-12"></div>
      </div>

      <div className="absolute w-full h-full bg-[linear-gradient(rgba(201,169,97,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(201,169,97,0.02)_1px,transparent_1px)] bg-[length:80px_80px] animate-gridScroll opacity-50"></div>
      
      <div className="relative z-10 text-center max-w-[1300px] px-12">
        <div className="text-sm sm:text-base md:text-lg lg:text-xl tracking-[5px] font-normal text-neon-gold mb-10 opacity-0 animate-[fadeInUp_1.2s_0.3s_cubic-bezier(0.4,0,0.2,1)_forwards] uppercase">
            Boutique Music & Artist Booking
        </div>
        
        <h1 className="text-[clamp(2.5rem,10vw,8rem)] font-black leading-[0.95] mb-6 opacity-0 tracking-[-4px] italic animate-[fadeInUp_1.4s_0.5s_cubic-bezier(0.4,0,0.2,1)_forwards]">Your Vision.</h1>
        <h1 className="text-[clamp(2.5rem,10vw,8rem)] font-black leading-[0.95] mb-6 opacity-0 tracking-[-4px] italic animate-[fadeInUp_1.4s_0.7s_cubic-bezier(0.4,0,0.2,1)_forwards] bg-gradient-to-r from-white to-neon-gold bg-clip-text text-transparent">Your Sound.</h1>
        
        <p className="text-[clamp(1rem,2.5vw,1.5rem)] font-light mt-8 md:mt-12 text-gray-light opacity-0 animate-[fadeInUp_1.4s_0.9s_cubic-bezier(0.4,0,0.2,1)_forwards] max-w-[900px] mx-auto leading-normal">
            We don't curate playlists. We architect experiences. From underground sanctuaries to digital frontiers, we match artists to moments that matter.
        </p>
      </div>
      
      <div className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5 opacity-0 animate-[fadeIn_1.5s_2s_forwards]">
        <div className="w-0.5 h-[70px] bg-neon-gold/15 rounded-full overflow-hidden relative">
          <div className="w-full h-1/3 bg-gradient-to-b from-neon-gold to-transparent animate-scrollFill"></div>
        </div>
        <span className="text-xs tracking-[3px] text-gray-text font-normal uppercase">Discover</span>
      </div>
    </section>
  );
};

export default Hero;
