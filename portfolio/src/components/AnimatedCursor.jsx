import { useState, useEffect } from 'react';

export default function AnimatedCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  useEffect(() => {
    // Check if mobile on mount and resize
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    // Early return if mobile
    if (isMobile) return;

    // Only hide cursor on elements that have our custom cursor
    const addCursorStyle = () => {
      const styleElement = document.createElement('style');
      styleElement.innerHTML = `
        * {
          cursor: none !important;
        }
      `;
      document.head.appendChild(styleElement);
      return styleElement;
    };
    
    const styleElement = addCursorStyle();
    
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
    
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const onMouseLeave = () => {
      setHidden(true);
    };
    
    const onMouseEnter = () => {
      setHidden(false);
    };
    
    const onMouseDown = () => {
      setClicked(true);
    };
    
    const onMouseUp = () => {
      setClicked(false);
    };
    
    // Add event listeners for hoverable elements
    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select')
        .forEach(el => {
          el.addEventListener('mouseenter', () => setHovered(true));
          el.addEventListener('mouseleave', () => setHovered(false));
        });
    };
    
    addEventListeners();
    handleLinkHoverEvents();
    
    return () => {
      removeEventListeners();
      document.head.removeChild(styleElement);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [isMobile]); // Re-run effect if isMobile changes
  
  // Return null for mobile (disables the cursor completely)
  if (isMobile) return null;

  return (
    <>
      {/* Main cursor circle */}
      <div 
        className={`
          fixed pointer-events-none z-50 rounded-full
          transition-transform duration-200 ease-out
          ${hidden ? 'opacity-0' : 'opacity-45'}
          ${clicked ? 'scale-75' : 'scale-100'}
          ${hovered ? 'scale-150' : 'scale-100'}
        `}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          height: '85px',
          width: '85px',
          backgroundColor: '#FFD700',
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.1s ease-in-out, transform 0.1s ease-in-out'
        }}
      />
    </>
  );
}