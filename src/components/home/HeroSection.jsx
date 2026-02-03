'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SearchBar from './SearchBar';
import { countries } from '@/data/mockData';
import { useState } from 'react';

const HeroSection = () => {
    const [activeTab, setActiveTab] = useState('Canada');

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-widest"
                >
                    GLOBAL HOUSING FOR STUDENTS & TRAVELERS
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight"
                >
                    Co-Living <span className="text-primary">Simplified</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    Find your perfect home abroad with Uniworldstay. Global housing & support services for students and travelers across 6 major countries.
                </motion.p>

                {/* Country Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-2 mb-8"
                >
                    {countries.map((country) => (
                        <button
                            key={country.name}
                            onClick={() => setActiveTab(country.name)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === country.name
                                ? 'bg-primary text-white shadow-lg shadow-blue-500/30'
                                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100 shadow-sm'
                                }`}
                        >
                            {country.name}
                        </button>
                    ))}
                </motion.div>

                <SearchBar />

                {/* Stats Preview */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-16 text-slate-400 text-sm font-medium flex items-center justify-center space-x-8"
                >
                    <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="relative w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                <Image
                                    src={`https://i.pravatar.cc/100?u=${i}`}
                                    alt="user"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <p>Trusted by <span className="text-slate-900 font-bold">5000+</span> tenants across the world</p>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
