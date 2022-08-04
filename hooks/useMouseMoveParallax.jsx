import { useEffect, useMemo, useRef } from "react";

export default function useMouseMoveParallax({
    depth = 1, // relative depth of movement
    direction = 0, // in degrees
}) {
    const elementRef = useRef(null);
    const elementPos = useMemo(() => {
        if (!elementRef.current) return { x: 0, y: 0 };
        const box = elementRef.current.getBoundingClientRect();
        const xCenter = (box.left + box.right) / 2;
        const yCenter = (box.top + box.bottom) / 2;
        return { x: xCenter, y: yCenter };
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

            const r = Math.sqrt((xOffset ** 2) + (yOffset ** 2));
            const curAngle = Math.atan2(yOffset, xOffset);
            const nextAngle = curAngle + (direction * (Math.PI / 180));
            const newCoords = {
                x: r * Math.cos(nextAngle),
                y: r * Math.sin(nextAngle),
            };
            elementRef.current.style.transform = `translate3d(${newCoords.x}px, ${newCoords.y}px, 0)`;
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
