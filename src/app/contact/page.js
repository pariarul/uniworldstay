'use client';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, Instagram, Linkedin, Facebook } from 'lucide-react';
import ContactForm from '@/components/ui/ContactForm';

export default function ContactPage() {
    const contactInfo = [
        {
            icon: Phone,
            label: 'Call Us',
            value: '+91 999 551 9999',
            sub: 'Mon-Sat from 9am to 6pm',
            href: 'tel:+919995519999'
        },
        {
            icon: Mail,
            label: 'Email Us',
            value: 'info@uniworldstay.com',
            sub: 'We usually reply within 24h',
            href: 'mailto:info@uniworldstay.com'
        },
        {
            icon: MapPin,
            label: 'Visit Us',
            value: 'RV Tower, High Road, Thrissur',
            sub: 'Kerala, India – 680001',
            href: '#'
        }
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-widest mb-4"
                    >
                        Get In Touch
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">We're Here to Help</h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Have questions about our properties or the booking process? Reach out to our team and we'll get back to you shortly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Info Side */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-white p-8 md:p-10 rounded-[32px] border border-slate-100 shadow-sm space-y-10">
                            {contactInfo.map((info, i) => (
                                <div key={i} className="flex items-start space-x-5">
                                    <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center shrink-0">
                                        <info.icon size={22} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{info.label}</h3>
                                        <a href={info.href} className="text-xl font-bold text-slate-900 hover:text-primary transition-colors block mb-1">
                                            {info.value}
                                        </a>
                                        <p className="text-sm text-slate-500 font-medium">{info.sub}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="pt-8 border-t border-slate-50">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Follow Our Socials</h3>
                                <div className="flex space-x-4">
                                    {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                                        <a key={i} href="#" className="w-12 h-12 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                            <Icon size={20} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Support Box */}
                        <div className="bg-primary rounded-[32px] p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
                            <div className="relative z-10 flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
                                    <p className="text-blue-100 text-sm">Our global team is available for students in every time zone.</p>
                                </div>
                                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                                    <MessageSquare size={28} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:col-span-7">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
