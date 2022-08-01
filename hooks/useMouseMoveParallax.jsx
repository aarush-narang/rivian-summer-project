import { useEffect, useMemo, useRef } from "react";

export default function useMouseMoveParallax({
    depth = 1,
}) {
    const elementRef = useRef(null);
    const elementPos = useMemo(() => {
        if (!elementRef.current) return { x: 0, y: 0 };
        const { top, left } = elementRef.current.getBoundingClientRect();
        return { x: left, y: top };
    }, [elementRef]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { x, y } = elementPos;
            const { clientX, clientY } = e;
            const xDiff = clientX - x;
            const yDiff = clientY - y;
            const xPercent = (xDiff / window.innerWidth) * 100;
            const yPercent = (yDiff / window.innerHeight) * 100;
            const xOffset = xPercent * depth;
            const yOffset = yPercent * depth;
            elementRef.current.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [depth, elementPos]);

    return {
        ref: elementRef,
    };
}
