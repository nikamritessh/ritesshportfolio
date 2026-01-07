'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import {
    Moon,
    Sun,
    Zap,
    Leaf,
    Sunset,
    Cpu,
    RefreshCcw,
    Copy,
    Check,
    Palette,
    Eye,
    Code,
    Layout,
    Type,
    Sparkles
} from 'lucide-react';
import './theme-lab.css';

const presetsList = [
    { name: 'Midnight', bg: '#000000', secondary: '#0a0a0a', text: '#ffffff', accent: '#ffffff', icon: <Moon size={18} /> },
    { name: 'Pure Snow', bg: '#ffffff', secondary: '#f8fafc', text: '#0f172a', accent: '#2563eb', icon: <Sun size={18} /> },
    { name: 'Nebula', bg: '#0f172a', secondary: '#1e293b', text: '#f8fafc', accent: '#8b5cf6', icon: <Zap size={18} /> },
    { name: 'Forest', bg: '#064e3b', secondary: '#065f46', text: '#ecfdf5', accent: '#10b981', icon: <Leaf size={18} /> },
    { name: 'Sunset', bg: '#450a0a', secondary: '#7f1d1d', text: '#fef2f2', accent: '#ef4444', icon: <Sunset size={18} /> },
    { name: 'Cyber', bg: '#0d0221', secondary: '#261447', text: '#00f2ff', accent: '#ff0055', icon: <Cpu size={18} /> },
];

const ThemeLab = () => {
    const { customColors, updateCustomColors, resetTheme, theme } = useTheme();
    const [copied, setCopied] = useState(false);
    const [activeTab, setActiveTab] = useState('design'); // 'design' | 'code'
    const [isScanning, setIsScanning] = useState(false);

    const handleColorChange = (key, value) => {
        updateCustomColors({ [key]: value });
    };

    const applyPreset = (preset) => {
        setIsScanning(true);
        setTimeout(() => {
            updateCustomColors({
                primary: preset.bg,
                secondary: preset.secondary,
                text: preset.text,
                accent: preset.accent,
            });
            setIsScanning(false);
        }, 600);
    };

    const copyConfig = () => {
        const config = `:root {
  --bg-primary: ${customColors.primary || (theme === 'dark' ? '#000000' : '#ffffff')};
  --bg-secondary: ${customColors.secondary || (theme === 'dark' ? '#0a0a0a' : '#f8f9fa')};
  --text-primary: ${customColors.text || (theme === 'dark' ? '#ffffff' : '#0f172a')};
  --accent: ${customColors.accent || (theme === 'dark' ? '#ffffff' : '#2563eb')};
}`;
        navigator.clipboard.writeText(config);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const currentPrimary = customColors.primary || (theme === 'dark' ? '#000000' : '#ffffff');
    const currentText = customColors.text || (theme === 'dark' ? '#ffffff' : '#0f172a');
    const currentAccent = customColors.accent || (theme === 'dark' ? '#ffffff' : '#2563eb');
    const currentSecondary = customColors.secondary || (theme === 'dark' ? '#0a0a0a' : '#f8f9fa');

    return (
        <main className="screen-container">
            <div className="content-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="lab-wrapper"
                >
                    {/* Header Section */}
                    <motion.div variants={itemVariants} className="lab-header">
                        <div className="badge-luxury">
                            <Sparkles size={14} className="icon-sparkle" />
                            <span>Experimental Laboratory</span>
                        </div>
                        <h1 className="hero-title-lab">Aesthetic Mastery</h1>
                        <p className="lab-description">
                            The Theme Lab is where art meets code. Fine-tune every pixel, pulse, and pigment to create a portfolio that resonates with your unique creative frequency.
                        </p>
                    </motion.div>

                    <div className="lab-main-grid">
                        {/* Control Panel */}
                        <motion.div variants={itemVariants} className="panel control-panel">
                            <div className="panel-header">
                                <Palette size={20} />
                                <h2>Control Tower</h2>
                            </div>

                            <div className="panel-content">
                                <div className="control-section">
                                    <h3 className="section-subtitle">Aesthetic Presets</h3>
                                    <div className="presets-grid">
                                        {presetsList.map((preset) => (
                                            <button
                                                key={preset.name}
                                                className="preset-card"
                                                onClick={() => applyPreset(preset)}
                                                style={{
                                                    '--preset-bg': preset.bg,
                                                    '--preset-text': preset.text,
                                                    '--preset-accent': preset.accent
                                                }}
                                            >
                                                <div className="preset-preview">
                                                    <div className="preset-dot" style={{ background: preset.accent }} />
                                                    {preset.icon}
                                                </div>
                                                <span>{preset.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="control-section mt-8">
                                    <h3 className="section-subtitle">Precision Tuning</h3>
                                    <div className="pickers-list">
                                        {[
                                            { label: 'Primary Base', key: 'primary', icon: <Layout size={16} /> },
                                            { label: 'Surface 2', key: 'secondary', icon: <Layout size={16} /> },
                                            { label: 'Typography', key: 'text', icon: <Type size={16} /> },
                                            { label: 'Accent Highlight', key: 'accent', icon: <Zap size={16} /> },
                                        ].map((item) => (
                                            <div key={item.key} className="picker-row">
                                                <div className="picker-info">
                                                    {item.icon}
                                                    <span>{item.label}</span>
                                                </div>
                                                <div className="color-input-wrapper">
                                                    <span className="hex-label">{customColors[item.key] || (theme === 'dark' ? presetsList[0][item.key === 'primary' ? 'bg' : item.key] : presetsList[1][item.key === 'primary' ? 'bg' : item.key])}</span>
                                                    <input
                                                        type="color"
                                                        value={customColors[item.key] || (theme === 'dark' ? (item.key === 'primary' ? '#000000' : (item.key === 'secondary' ? '#0a0a0a' : (item.key === 'text' ? '#ffffff' : '#ffffff'))) : (item.key === 'primary' ? '#ffffff' : (item.key === 'secondary' ? '#f8fafc' : (item.key === 'text' ? '#0f172a' : '#2563eb'))))}
                                                        onChange={(e) => handleColorChange(item.key, e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="panel-footer">
                                    <button className="btn-secondary" onClick={resetTheme}>
                                        <RefreshCcw size={16} />
                                        Reset Environment
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Preview Panel */}
                        <motion.div variants={itemVariants} className="panel preview-panel">
                            <div className="panel-header space-between">
                                <div className="header-left">
                                    <Eye size={20} />
                                    <h2>Live Environment</h2>
                                </div>
                                <div className="tab-switcher">
                                    <button
                                        className={activeTab === 'design' ? 'active' : ''}
                                        onClick={() => setActiveTab('design')}
                                    >
                                        <Layout size={14} />
                                    </button>
                                    <button
                                        className={activeTab === 'code' ? 'active' : ''}
                                        onClick={() => setActiveTab('code')}
                                    >
                                        <Code size={14} />
                                    </button>
                                </div>
                            </div>

                            <div className="panel-content preview-env">
                                <AnimatePresence mode="wait">
                                    {activeTab === 'design' ? (
                                        <motion.div
                                            key="design"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className="preview-viewport"
                                            style={{
                                                backgroundColor: currentPrimary,
                                                color: currentText,
                                                '--preview-accent': currentAccent,
                                                '--preview-secondary': currentSecondary
                                            }}
                                        >
                                            <div className="viewport-header">
                                                <div className="dots">
                                                    <div className="dot-v" />
                                                    <div className="dot-v" />
                                                    <div className="dot-v" />
                                                </div>
                                                <div className="address-bar">portfolio.ritesh.dev</div>
                                            </div>

                                            <div className="viewport-content">
                                                {isScanning && (
                                                    <motion.div
                                                        initial={{ top: '-10%' }}
                                                        animate={{ top: '110%' }}
                                                        transition={{ duration: 0.6, ease: "linear" }}
                                                        className="scan-line"
                                                    />
                                                )}
                                                <nav className="mini-nav">
                                                    <div className="logo-m" style={{ background: currentAccent, color: currentPrimary }}>R</div>
                                                    <div className="nav-links-m">
                                                        <div className="link-m" />
                                                        <div className="link-m" />
                                                        <div className="link-m active-m" style={{ color: currentAccent }} />
                                                    </div>
                                                </nav>

                                                <div className="hero-mock">
                                                    <span className="label-m" style={{ color: currentAccent }}>Experience Designer</span>
                                                    <h3 className="title-m">Designing for the future.</h3>
                                                    <p className="description-m">Explore my digital garden of ideas and interfaces.</p>

                                                    <div className="element-grid-m">
                                                        <div className="mock-card-m" style={{ backgroundColor: currentSecondary }}>
                                                            <div className="card-top-m" />
                                                            <div className="card-line-m" />
                                                            <div className="card-line-m short-m" />
                                                        </div>
                                                        <div className="mock-card-m" style={{ backgroundColor: currentSecondary }}>
                                                            <div className="card-top-m" />
                                                            <div className="card-line-m" />
                                                            <div className="card-line-m short-m" />
                                                        </div>
                                                    </div>

                                                    <button className="mock-btn-m" style={{ backgroundColor: currentAccent, color: currentPrimary }}>
                                                        View Projects
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="code"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="code-viewport"
                                        >
                                            <div className="code-header">
                                                <span>variables.css</span>
                                                <button onClick={copyConfig} className="copy-btn">
                                                    {copied ? <Check size={14} /> : <Copy size={14} />}
                                                </button>
                                            </div>
                                            <pre>
                                                <code>
                                                    {`:root {
  --bg-primary: ${currentPrimary};
  --bg-secondary: ${currentSecondary};
  --text-primary: ${currentText};
  --accent: ${currentAccent};
}`}
                                                </code>
                                            </pre>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

export default ThemeLab;
