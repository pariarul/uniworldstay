'use client';
import { useState } from 'react';
import { Send, User, Phone, Mail, Globe, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        country: 'Canada',
        message: ''
    });

    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ type: 'success', message: 'Thank you! Your message has been sent.' });
        setFormData({ name: '', mobile: '', email: '', country: 'Canada', message: '' });

        // Reset status after 5 seconds
        setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    };

    return (
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                <MessageSquare className="mr-3 text-primary" size={24} />
                Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 flex items-center">
                            <User size={14} className="mr-2 text-primary" /> Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 flex items-center">
                            <Phone size={14} className="mr-2 text-primary" /> Mobile Number
                        </label>
                        <input
                            type="tel"
                            name="mobile"
                            required
                            value={formData.mobile}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all"
                            placeholder="+1 234 567 890"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 flex items-center">
                            <Mail size={14} className="mr-2 text-primary" /> Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 flex items-center">
                            <Globe size={14} className="mr-2 text-primary" /> Preferred Country
                        </label>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all cursor-pointer"
                        >
                            <option value="Canada">Canada</option>
                            <option value="UK">United Kingdom</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Australia">Australia</option>
                            <option value="Germany">Germany</option>
                            <option value="New Zealand">New Zealand</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Message</label>
                    <textarea
                        name="message"
                        rows="5"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all resize-none"
                        placeholder="How can we help you?"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-primary-hover shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5"
                >
                    <span>Send Enquiry</span>
                    <Send size={18} />
                </button>

                {status.message && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`p-4 rounded-xl text-center text-sm font-semibold ${status.type === 'success' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-red-50 text-red-600 border border-red-100'
                            }`}
                    >
                        {status.message}
                    </motion.div>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
