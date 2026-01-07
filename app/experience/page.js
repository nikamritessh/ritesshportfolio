'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experiences = [
    {
        company: 'Stellar Tech',
        role: 'Staff Engineer',
        period: '2022 — Present',
        location: 'San Francisco, CA',
        description: 'Architecting distributed systems and leading core infrastructure teams.',
        details: [
            'Led migration of monolithic architecture to microservices, improving scalability by 300%.',
            'Mentored 15+ senior engineers and defined engineering excellence standards.',
            'Architected a real-time data processing engine handling 1M+ events per second.'
        ],
        tags: ['Distributed Systems', 'Go', 'Kubernetes', 'Architecture']
    },
    {
        company: 'Nova Labs',
        role: 'Senior Software Engineer',
        period: '2019 — 2022',
        location: 'Remote',
        description: 'Developed high-performance trading engines and real-time data pipelines.',
        details: [
            'Optimized low-latency trading algorithms, reducing execution time by 40ms.',
            'Built a real-time monitoring dashboard used by the ops team globally.',
            'Implemented automated CI/CD pipelines reducing deployment errors by 60%.'
        ],
        tags: ['Trading Systems', 'C++', 'Python', 'Low Latency']
    },
    {
        company: 'Quantum Systems',
        role: 'Software Engineer',
        period: '2017 — 2019',
        location: 'New York, NY',
        description: 'Built cloud-native applications and optimized database performance.',
        details: [
            'Developed high-traffic web applications serving 2M+ monthly active users.',
            'Redesigned database schemas resulting in 50% faster query response times.',
            'Collaborated with UX teams to implement reactive and fluid user interfaces.'
        ],
        tags: ['React', 'Node.js', 'PostgreSQL', 'AWS']
    },
    {
        company: 'Nebula Soft',
        role: 'Junior Developer',
        period: '2015 — 2017',
        location: 'London, UK',
        description: 'Early stage development of consumer-facing web applications.',
        details: [
            'Contributed to the development of a flagship e-commerce platform.',
            'Fixed critical bugs in legacy codebases and improved overall stability.',
            'Participated in daily stand-ups and agile development cycles.'
        ],
        tags: ['JavaScript', 'HTML/CSS', 'Ruby on Rails']
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

export default function Experience() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div className="content-center" style={{ paddingBottom: '150px' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
                <span className="section-label">Professional Journey</span>
                <h2 className="hero-title" style={{ fontSize: 'clamp(40px, 10vw, 140px)', marginBottom: '80px' }}>
                    EXPERIENCE
                </h2>
            </motion.div>

            <motion.div
                ref={containerRef}
                className="timeline-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Horizontal progress bar for the timeline */}
                <motion.div
                    className="timeline-line"
                    style={{
                        scaleY,
                        transformOrigin: 'top',
                        background: 'linear-gradient(to bottom, var(--accent), transparent)'
                    }}
                />

                {/* Static line behind the animated one */}
                <div className="timeline-line" style={{ opacity: 0.1, background: 'var(--text-primary)' }} />

                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        variants={itemVariants}
                        className="experience-item"
                    >
                        <div className="timeline-dot" />

                        <div className="experience-card">
                            <span className="experience-number">
                                0{experiences.length - i}
                            </span>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px', marginBottom: '32px' }}>
                                <div>
                                    <h3 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                                        {exp.role}
                                    </h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                                        <span style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)' }}>{exp.company}</span>
                                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text-muted)' }} />
                                        <span style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 500 }}>{exp.location}</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                                    <span style={{
                                        padding: '8px 20px',
                                        borderRadius: '99px',
                                        border: '1px solid var(--border-medium)',
                                        fontSize: '12px',
                                        fontWeight: 600,
                                        color: 'var(--text-primary)',
                                        background: 'var(--bg-secondary)',
                                        whiteSpace: 'nowrap',
                                        display: 'inline-block'
                                    }}>
                                        {exp.period}
                                    </span>
                                </div>
                            </div>

                            <p style={{
                                fontSize: '18px',
                                lineHeight: 1.6,
                                color: 'var(--text-secondary)',
                                marginBottom: '28px',
                                maxWidth: '90%'
                            }}>
                                {exp.description}
                            </p>

                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                                marginBottom: '40px'
                            }}>
                                {exp.details.map((detail, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + (idx * 0.1) }}
                                        style={{
                                            display: 'flex',
                                            gap: '16px',
                                            fontSize: '15px',
                                            color: 'var(--text-secondary)',
                                            lineHeight: 1.6
                                        }}
                                    >
                                        <span style={{ color: 'var(--text-primary)', opacity: 0.5, fontSize: '12px', marginTop: '4px' }}>—</span>
                                        {detail}
                                    </motion.li>
                                ))}
                            </ul>

                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                {exp.tags.map((tag, idx) => (
                                    <span key={idx} className="skill-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
