import { useEffect, useRef, useState } from 'react';

const interactiveSelector = 'a, button, [role="button"], input, textarea, select, label';

export default function AnimatedCursor() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const frameId = useRef(0);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
    );

    const updateEnabled = () => setEnabled(mediaQuery.matches);
    updateEnabled();

    mediaQuery.addEventListener('change', updateEnabled);
    return () => mediaQuery.removeEventListener('change', updateEnabled);
  }, []);

  useEffect(() => {
    if (!enabled || !outerRef.current || !innerRef.current) return undefined;

    const outer = outerRef.current;
    const inner = innerRef.current;
    const styleElement = document.createElement('style');
    styleElement.textContent = '* { cursor: none !important; }';
    document.head.appendChild(styleElement);

    let hidden = false;
    let hover = false;
    let pressed = false;

    const render = () => {
      current.current.x += (target.current.x - current.current.x) * 0.15;
      current.current.y += (target.current.y - current.current.y) * 0.15;

      const baseScale = hover ? 1.5 : 1;
      const pressScale = pressed ? 0.7 : 1;
      const totalScale = baseScale * pressScale;

      outer.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%) scale(${totalScale})`;
      inner.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0) translate(-50%, -50%)`;

      const opacity = hidden ? '0' : '1';
      outer.style.opacity = opacity;
      inner.style.opacity = opacity;

      frameId.current = window.requestAnimationFrame(render);
    };

    const onMouseMove = (event) => {
      target.current.x = event.clientX;
      target.current.y = event.clientY;
      if (!hidden && current.current.x === 0 && current.current.y === 0) {
        current.current.x = event.clientX;
        current.current.y = event.clientY;
      }
    };

    const onMouseLeave = () => {
      hidden = true;
    };

    const onMouseEnter = () => {
      hidden = false;
    };

    const onPointerDown = () => {
      pressed = true;
    };

    const onPointerUp = () => {
      pressed = false;
    };

    const onPointerOver = (event) => {
      hover = Boolean(event.target.closest(interactiveSelector));
    };

    const onPointerOut = (event) => {
      const related = event.relatedTarget;
      hover = Boolean(related && related.closest(interactiveSelector));
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('mouseup', onPointerUp);
    document.addEventListener('mouseover', onPointerOver);
    document.addEventListener('mouseout', onPointerOut);

    frameId.current = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frameId.current);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('mouseup', onPointerUp);
      document.removeEventListener('mouseover', onPointerOver);
      document.removeEventListener('mouseout', onPointerOut);
      document.head.removeChild(styleElement);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={outerRef}
        className="pointer-events-none fixed left-0 top-0 z-[90] h-10 w-10 rounded-full border border-yellow-300/60 bg-yellow-300/8 mix-blend-screen transition-[opacity,border-color,background-color] duration-300"
      />
      <div
        ref={innerRef}
        className="pointer-events-none fixed left-0 top-0 z-[91] h-1.5 w-1.5 rounded-full bg-yellow-300 shadow-[0_0_6px_rgba(250,204,21,0.4)] transition-opacity duration-200"
      />
    </>
  );
}
