'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/experience', label: 'Experience' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="nav-container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`nav-item ${isActive ? 'active' : ''}`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="nav-item-bg"
                                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                                />
                            )}
                            {item.label}
                        </Link>
                    );
                })}
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
