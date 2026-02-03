'use client';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

const StatsCard = ({ icon, label, value, index }) => {
    const Icon = LucideIcons[icon] || LucideIcons.Activity;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center"
        >
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon className="text-primary" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-1">{value}</h3>
            <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">{label}</p>
        </motion.div>
    );
};

export default StatsCard;
