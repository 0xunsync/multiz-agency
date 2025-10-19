
import React, { useState, useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const onMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0';
      if (followerRef.current) followerRef.current.style.opacity = '0';
    };

    const onMouseEnter = () => {
        if (cursorRef.current) cursorRef.current.style.opacity = '1';
        if (followerRef.current) followerRef.current.style.opacity = '1';
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const animateFollower = () => {
      const dX = mousePos.x - followerPos.current.x;
      const dY = mousePos.y - followerPos.current.y;
      
      followerPos.current.x += dX * 0.1;
      followerPos.current.y += dY * 0.1;
      
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(-50%, -50%) translate(${followerPos.current.x}px, ${followerPos.current.y}px) scale(${isHovering ? 1.3 : 1})`;
      }
      
      animationFrameId = requestAnimationFrame(animateFollower);
    };

    animateFollower();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos, isHovering]);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-2.5 h-2.5 bg-neon-gold rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150 ease-in-out"
        style={{
          left: 0,
          top: 0,
          opacity: 0,
          transform: `translate(-50%, -50%) translate(${mousePos.x}px, ${mousePos.y}px) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
      <div
        ref={followerRef}
        className="fixed w-10 h-10 border border-neon-gold/40 rounded-full pointer-events-none z-[9998] transition-transform duration-300 ease-in-out"
        style={{
          left: 0,
          top: 0,
          opacity: 0,
        }}
      />
    </>
  );
};

export default CustomCursor;
