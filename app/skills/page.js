'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Layers,
    Server,
    Cpu,
    Globe,
    Code2,
    Zap,
    ShieldCheck,
    Terminal
} from 'lucide-react';

const skills = [
    {
        category: 'Architecture',
        icon: <Layers size={24} />,
        description: 'System design and scalable infrastructure.',
        items: ['Microservices', 'Event-Driven', 'Cloud Native', 'Serverless']
    },
    {
        category: 'Backend',
        icon: <Server size={24} />,
        description: 'High-performance API and logic layers.',
        items: ['Rust', 'Go', 'Node.js', 'PostgreSQL', 'Redis', 'Kafka']
    },
    {
        category: 'Frontend',
        icon: <Cpu size={24} />,
        description: 'Immersive and performant interfaces.',
        items: ['Next.js', 'React', 'TypeScript', 'Framer Motion', 'WebGPU']
    },
    {
        category: 'DevOps',
        icon: <Globe size={24} />,
        description: 'Automated deployment and operations.',
        items: ['Kubernetes', 'Docker', 'Terraform', 'CI/CD', 'AWS / GCP']
    },
    {
        category: 'Languages',
        icon: <Code2 size={24} />,
        description: 'Proficiency in diverse programming syntax.',
        items: ['C++', 'Rust', 'TypeScript', 'Python', 'Zig']
    },
    {
        category: 'Security',
        icon: <ShieldCheck size={24} />,
        description: 'Hardening and protective measures.',
        items: ['OAuth', 'JWT', 'Encryption', 'Pentesting', 'SecOps']
    },
];

export default function Skills() {
    return (
        <div className="content-center">
            <motion.span className="section-label">Technical Proficiency</motion.span>
            <motion.h2
                className="hero-title"
                style={{ fontSize: 'clamp(40px, 6vw, 80px)', marginBottom: '64px' }}
            >
                SKILLS & <br /> TECHNOLOGIES
            </motion.h2>

            <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
                {skills.map((skillGroup, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 + 0.3, duration: 0.8 }}
                        className="luxury-card"
                        style={{
                            position: 'relative',
                            overflow: 'hidden',
                            padding: '40px'
                        }}
                    >
                        {/* Background Icon Decoration */}
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            right: '-20px',
                            opacity: 0.03,
                            transform: 'scale(5)'
                        }}>
                            {skillGroup.icon}
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                            <div style={{
                                padding: '12px',
                                background: 'var(--bg-secondary)',
                                borderRadius: '12px',
                                border: '1px solid var(--border-subtle)',
                                color: 'var(--text-primary)'
                            }}>
                                {skillGroup.icon}
                            </div>
                            <div>
                                <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text-primary)' }}>{skillGroup.category}</h3>
                                <p style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    {skillGroup.description}
                                </p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {skillGroup.items.map((skill, j) => (
                                <motion.span
                                    key={j}
                                    whileHover={{ scale: 1.1, backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)' }}
                                    style={{
                                        fontSize: '12px',
                                        padding: '8px 16px',
                                        borderRadius: '99px',
                                        border: '1px solid var(--border-subtle)',
                                        color: 'var(--text-secondary)',
                                        fontWeight: 500,
                                        transition: 'all 0.3s ease',
                                        cursor: 'default'
                                    }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>

                        <motion.div
                            style={{
                                marginTop: '32px',
                                height: '1px',
                                width: '100%',
                                background: 'linear-gradient(90deg, transparent, var(--border-medium), transparent)'
                            }}
                        />
                    </motion.div>
                ))}
            </div>
            <div style={{ marginTop: '120px' }}>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="section-label"
                >
                    Tools of the Trade
                </motion.span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2px', background: 'var(--border-subtle)', marginTop: '32px' }}>
                    {[
                        { name: 'Terminal', desc: 'Warp / iTerm2', icon: <Terminal size={20} /> },
                        { name: 'IDE', desc: 'VS Code / Cursor', icon: <Zap size={20} /> },
                        { name: 'Design', desc: 'Figma', icon: <Layers size={20} /> },
                        { name: 'Version Control', desc: 'GitHub / GitLab', icon: <Globe size={20} /> },
                    ].map((tool, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ backgroundColor: 'var(--bg-secondary)' }}
                            style={{ background: 'var(--bg-primary)', padding: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}
                        >
                            <div style={{ color: 'var(--text-muted)' }}>{tool.icon}</div>
                            <h4 style={{ fontSize: '16px', fontWeight: 600 }}>{tool.name}</h4>
                            <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{tool.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
