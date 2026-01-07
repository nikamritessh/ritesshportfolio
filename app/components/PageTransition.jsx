'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const pageVariants = {
    initial: {
        opacity: 0,
        filter: 'blur(12px)',
        scale: 1.05,
        y: 20,
    },
    animate: {
        opacity: 1,
        filter: 'blur(0px)',
        scale: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        filter: 'blur(12px)',
        scale: 0.95,
        y: -20,
    }
};

const pageTransition = {
    duration: 1,
    ease: [0.645, 0.045, 0.355, 1], // Cinematic cubic-bezier
};

export default function PageTransition({ children }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.main
                key={pathname}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
                className="screen-container"
            >
                {children}
            </motion.main>
        </AnimatePresence>
    );
}
