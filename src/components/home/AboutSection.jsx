'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const AboutSection = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop"
                                alt="About Uniworldstay"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Decoration */}
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full -z-10" />
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent/5 rounded-full -z-10" />

                        <div className="absolute bottom-10 left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 z-20 hidden md:block animate-float">
                            <p className="text-3xl font-bold text-primary">100%</p>
                            <p className="text-sm font-semibold text-slate-500">Verified Listings</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">About Uniworldstay</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                                Your Trusted Global <br /><span className="text-primary italic font-serif">Housing Partner</span>
                            </h2>
                        </div>
                        <p className="text-slate-500 leading-relaxed text-lg">
                            Uniworldstay provides affordable global accommodation services tailored for students and international travelers.
                            Our mission is to simplify the housing search process by offering verified, high-quality co-living spaces
                            in major education hubs around the world.
                        </p>

                        <ul className="space-y-4">
                            {[
                                'Affordable global accommodation solutions',
                                'Verified properties with onsite support',
                                'Flexible booking terms for international students',
                                'Transparent pricing with no hidden costs'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center space-x-3 text-slate-700 font-medium">
                                    <CheckCircle2 className="text-primary shrink-0" size={20} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/about"
                            className="inline-flex items-center space-x-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary transition-all group lg:mt-6 shadow-xl shadow-slate-200"
                        >
                            <span>Learn More About Us</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
