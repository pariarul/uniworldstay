'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Phone, ArrowRight } from 'lucide-react';

const ContactCTA = () => {
    return (
        <section className="py-24 max-w-7xl mx-auto px-4">
            <div className="relative rounded-[40px] bg-primary overflow-hidden p-8 md:p-16 lg:p-24 shadow-2xl">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Ready to find your <br />new home abroad?
                        </h2>
                        <p className="text-blue-100 text-lg leading-relaxed max-w-md">
                            Our support team is here to help you every step of the way. Get in touch with us for personalized housing advice.
                        </p>
                        <div className=" sm:flex-row gap-6">
                            <a href="tel:+9196133 33393" className="flex items-center space-x-4 bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-all border border-white/10">
                                <div className="w-12 h-12 bg-white text-primary rounded-xl flex items-center justify-center">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-blue-200 opacity-80">Call Us</p>
                                    <p className="text-lg font-bold">+91 96133 33393</p>
                                </div>
                            </a>
                            <a href="mailto:info@uniworldstay.com" className="mt-2 flex items-center space-x-4 bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-all border border-white/10">
                                <div className="w-12 h-12 bg-white text-primary rounded-xl flex items-center justify-center">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-blue-200 opacity-80">Email Us</p>
                                    <p className="text-lg font-bold">info@uniworldstay.com</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="bg-white rounded-[32px] p-8 md:p-12 text-slate-900 shadow-2xl ">
                        <h3 className="text-2xl font-bold mb-6">Quick Enquiry</h3>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                            <button className="w-full bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-primary-hover shadow-lg shadow-blue-500/20 transition-all">
                                <span>Start Conversation</span>
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
