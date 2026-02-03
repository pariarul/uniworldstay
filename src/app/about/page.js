'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Target, Eye, Globe2, ShieldCheck, Users2, Trophy } from 'lucide-react';

export default function AboutPage() {
    const values = [
        { icon: Globe2, title: 'Global Reach', desc: 'Connecting students and travelers to co-living spaces in 6 major countries and growing.' },
        { icon: ShieldCheck, title: 'Trust & Safety', desc: 'Every property is manually verified by our local teams to ensure high standards of safety.' },
        { icon: Users2, title: 'Community Driven', desc: 'We don\'t just provide a room; we provide a community of like-minded individuals.' },
        { icon: Trophy, title: 'Excellence', desc: 'Committed to providing the best-in-class service for students and travelers globally.' }
    ];

    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-50 py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <span className="text-primary font-bold uppercase tracking-widest text-sm block">Our Journey</span>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                                Empowering Global <span className="text-primary">Explorers</span>
                            </h1>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Uniworldstay, a division of RV Properties, was founded with a single mission: to simplify high-quality housing for students and travelers around the globe.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative rounded-[40px] overflow-hidden shadow-2xl h-[400px]"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop"
                                alt="Our Team"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-10 rounded-[32px] bg-white border border-slate-100 shadow-xl shadow-slate-200/50"
                    >
                        <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-8">
                            <Target size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
                        <p className="text-slate-500 leading-relaxed">
                            To provide affordable, safe, and comfortable global accommodation solutions that allow students and travelers to focus on their growth and experiences, rather than housing worries.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-10 rounded-[32px] bg-white border border-slate-100 shadow-xl shadow-slate-200/50"
                    >
                        <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-8">
                            <Eye size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
                        <p className="text-slate-500 leading-relaxed">
                            To be the world's most trusted co-living platform, bridging the gap between local housing providers and international tenants through technology and humanity.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
                        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {values.map((v, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors">
                                    <v.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Redux */}
            <section className="py-24 max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-12">Global Housing Support at Scale</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: 'Offices Worldwide', val: '4' },
                        { label: 'Countries Covered', val: '15+' },
                        { label: 'Active Tenants', val: '5k+' },
                        { label: 'Partnerships', val: '200+' }
                    ].map((stat, i) => (
                        <div key={i}>
                            <p className="text-4xl font-extrabold text-primary mb-2">{stat.val}</p>
                            <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
