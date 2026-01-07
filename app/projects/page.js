'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        title: 'Aether OS',
        category: 'System Design',
        year: '2024',
        tags: ['C++', 'Rust', 'Kernels'],
        image: '/projects/aether.png',
        description: 'A microkernel-based operating system designed for high-concurrency neural compute.',
        color: '#0ea5e9',
        github: 'https://github.com',
        link: 'https://example.com'
    },
    {
        title: 'Nexus Protocol',
        category: 'Web3 / Infra',
        year: '2023',
        tags: ['Solidity', 'Go', 'IBC'],
        image: '/projects/nexus.png',
        description: 'Decentralized liquidity aggregation protocol for cross-chain asset transfers.',
        color: '#8b5cf6',
        github: 'https://github.com',
        link: 'https://example.com'
    },
    {
        title: 'Lumina UI',
        category: 'Design System',
        year: '2024',
        tags: ['React', 'Framer', 'Style'],
        image: '/projects/lumina.png',
        description: 'State-of-the-art design system focused on glassmorphism and motion physics.',
        color: '#ec4899',
        github: 'https://github.com',
        link: 'https://example.com'
    },
    {
        title: 'Titan Engine',
        category: 'Graphics',
        year: '2022',
        tags: ['Vulkan', 'C++', 'SIMD'],
        image: '/projects/titan.png',
        description: 'Real-time path tracing engine built for extreme performance on modern GPUs.',
        color: '#f97316',
        github: 'https://github.com',
        link: 'https://example.com'
    },
    {
        title: 'Vertex AI',
        category: 'Machine Learning',
        year: '2024',
        tags: ['Python', 'PyTorch', 'CUDA'],
        image: '/projects/aether.png',
        description: 'Distributed training framework for large language models.',
        color: '#10b981',
        github: 'https://github.com',
        link: 'https://example.com'
    },
    {
        title: 'Chronos DB',
        category: 'Database',
        year: '2023',
        tags: ['Rust', 'LSM-Tree', 'Dist.'],
        image: '/projects/nexus.png',
        description: 'High-performance time-series database with native compression.',
        color: '#f59e0b',
        github: 'https://github.com',
        link: 'https://example.com'
    },
];

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateXVal = ((y - centerY) / centerY) * 12;
        const rotateYVal = ((centerX - x) / centerX) * 12;

        setRotateX(rotateXVal);
        setRotateY(rotateYVal);
        setMousePos({ x, y });
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50, rotateY: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 1.2,
                ease: [0.215, 0.61, 0.355, 1],
                delay: index * 0.05
            }}
            style={{
                perspective: 1200,
                rotateX: useSpring(rotateX, { damping: 25, stiffness: 150 }),
                rotateY: useSpring(rotateY, { damping: 25, stiffness: 150 }),
            }}
            className="creative-project-card"
        >
            {/* Background Index Number */}
            <div className="card-bg-number">{index + 1}</div>

            {/* Spotlight Glow Effect */}
            <div
                className="card-spotlight"
                style={{
                    background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${project.color}15, transparent 80%)`
                }}
            />

            <div className="project-image-container">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="project-image"
                    style={{ objectFit: 'cover' }}
                    priority={index < 2}
                />
                <div className="project-overlay" style={{ background: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)` }} />

                <div className="image-tag">{project.category}</div>
            </div>

            <div className="project-content">
                <div className="project-header">
                    <span className="project-year-pill">{project.year}</span>
                    <div className="project-links">
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: -10 }}
                            className="mag-icon"
                        >
                            <Github size={20} />
                        </motion.a>
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            className="mag-icon"
                        >
                            <ArrowUpRight size={22} />
                        </motion.a>
                    </div>
                </div>

                <div className="project-info">
                    <h3 className="project-title-creative">
                        {project.title.split('').map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 + (i * 0.03) }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h3>
                    <p className="project-description">{project.description}</p>

                    <div className="project-tags-row">
                        {project.tags.map((tag, i) => (
                            <motion.span
                                key={i}
                                className="project-tag-pill"
                                whileHover={{ backgroundColor: project.color + '22', borderColor: project.color }}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function Projects() {
    const containerRef = useRef(null);
    const { scrollXProgress } = useScroll({
        container: containerRef
    });

    const scaleX = useSpring(scrollXProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="projects-container">
            <div className="projects-header-section">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="section-label"
                >
                    Portfolio / 2022-2024
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="hero-title"
                >
                    PROJECTS
                </motion.h2>

                {/* Scroll Indicator */}
                <div className="scroll-progress-container">
                    <motion.div className="scroll-progress-bar" style={{ scaleX }} />
                </div>
            </div>

            <div className="horizontal-scroll-wrapper" ref={containerRef}>
                <div className="projects-horizontal-list">
                    {projects.map((project, i) => (
                        <ProjectCard key={i} project={project} index={i} />
                    ))}

                    <motion.div
                        className="more-projects-card"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h3>MORE WORKS</h3>
                        <p>Currently building next-gen infrastructure.</p>
                        <a href="https://github.com" target="_blank" className="github-explore-btn">
                            Explore Github <Github size={16} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
