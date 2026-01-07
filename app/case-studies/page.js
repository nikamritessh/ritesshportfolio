'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

const caseStudies = [
    {
        id: '01',
        title: 'Architecting for 10M+ Users',
        category: 'Infrastructure & Scaling',
        problem: 'Legacy system could not handle peak traffic, resulting in 15% downtime and cascading failures.',
        solution: 'Designed a global multi-region mesh architecture with automated health-check failover and distributed edge caching layers.',
        metrics: [
            { label: 'Uptime', value: '99.99%' },
            { label: 'Latency', value: '-40%' },
            { label: 'Cost', value: '-25%' }
        ],
        image: '/case-studies/infra.png',
        color: '#00f2ff'
    },
    {
        id: '02',
        title: 'HFT Pipeline Optimization',
        category: 'Low-Latency Engineering',
        problem: 'Order execution speed was bottlenecked by system-level garbage collection and synchronous network IO calls.',
        solution: 'Rewrote core data pipelines in Rust using lock-free ring buffers and zero-copy deserialization for maximum throughput.',
        metrics: [
            { label: 'Tail Latency', value: '10μs' },
            { label: 'Throughput', value: '500k/s' },
            { label: 'Reliability', value: '100%' }
        ],
        image: '/case-studies/finance.png',
        color: '#ffd700'
    },
    {
        id: '03',
        title: 'Neural Compute Distribution',
        category: 'Machine Learning Ops',
        problem: 'Training large-scale models across distributed clusters faced significant synchronization overhead and data drift.',
        solution: 'Implemented a custom gradient compression algorithm and switched to an asynchronous parameter server architecture.',
        metrics: [
            { label: 'Training Time', value: '-60%' },
            { label: 'Sync Overhead', value: '-80%' },
            { label: 'Accuracy', value: '+5%' }
        ],
        image: '/case-studies/ml.png',
        color: '#bd00ff'
    },
];

const CaseStudySection = ({ study, index }) => {
    const isEven = index % 2 === 0;

    return (
        <section className={`case-study-section ${isEven ? 'row' : 'row-reverse'}`}>
            <div className="study-visual">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                    className="visual-container"
                >
                    <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="study-img"
                        style={{ objectFit: 'cover' }}
                    />
                    <div className="visual-overlay" style={{ background: `linear-gradient(${isEven ? 'to right' : 'to left'}, var(--bg-primary), transparent)` }} />
                </motion.div>
            </div>

            <div className="study-details">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <span className="study-id">{study.id}</span>
                    <span className="study-category" style={{ color: study.color }}>{study.category}</span>
                    <h3 className="study-title">{study.title}</h3>

                    <div className="study-content-grid">
                        <div className="content-block">
                            <h4 className="block-label">The Challenge</h4>
                            <p className="block-text">{study.problem}</p>
                        </div>
                        <div className="content-block">
                            <h4 className="block-label">Our Solution</h4>
                            <p className="block-text">{study.solution}</p>
                        </div>
                    </div>

                    <div className="study-metrics-row">
                        {study.metrics.map((metric, i) => (
                            <div key={metric.label} className="metric-item">
                                <span className="metric-value" style={{ color: study.color }}>{metric.value}</span>
                                <span className="metric-label">{metric.label}</span>
                            </div>
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="luxury-button"
                        style={{ marginTop: '40px', background: study.color, color: 'black' }}
                    >
                        Read Technical Paper
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default function CaseStudies() {
    return (
        <div className="case-studies-page">
            <div className="case-studies-hero">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="section-label"
                >
                    System Deep-Dives
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="hero-title"
                >
                    CASE STUDIES
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, repeat: Infinity, duration: 2 }}
                    className="scroll-hint"
                >
                    SCROLL TO EXPLORE <ArrowDown size={14} />
                </motion.div>
            </div>

            <div className="studies-container">
                {caseStudies.map((study, i) => (
                    <CaseStudySection key={study.id} study={study} index={i} />
                ))}
            </div>
        </div>
    );
}
