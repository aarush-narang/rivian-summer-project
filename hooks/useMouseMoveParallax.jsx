import { useEffect, useRef } from "react";

export default function useMouseMoveParallax({
    depth = 1, // relative depth of movement
    direction = 0, // in degrees
}) {
    const elementRef = useRef(null);

    useEffect(() => {
        // check if element is in view
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;

            if (clientX === 0 || clientY === 0) return;
            if (!elementRef.current) return;

            const box = elementRef.current.getBoundingClientRect();
            const xDiff = clientX - (box.width / 2);
            const yDiff = clientY - (box.height / 2);

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
    }, [depth, direction]);

    return {
        ref: elementRef,
    };
}
