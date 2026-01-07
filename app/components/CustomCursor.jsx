'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
    const cursorY = useSpring(0, { stiffness: 500, damping: 28 });
    const followerX = useSpring(0, { stiffness: 250, damping: 20 });
    const followerY = useSpring(0, { stiffness: 250, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            cursorX.set(e.clientX - 6);
            cursorY.set(e.clientY - 6);
            followerX.set(e.clientX - 20);
            followerY.set(e.clientY - 20);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('.luxury-card') ||
                target.closest('.nav-item')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY, followerX, followerY]);

    return (
        <>
            <motion.div
                className="custom-cursor"
                style={{
                    x: cursorX,
                    y: cursorY,
                    scale: isHovering ? 2.5 : 1,
                }}
            />
            <motion.div
                className="custom-cursor-follower"
                style={{
                    x: followerX,
                    y: followerY,
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0 : 1,
                }}
            />
        </>
    );
}
