'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CountryCard = ({ country, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative h-48 md:h-64 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-all"
        >
            <Image
                src={country.image}
                alt={country.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                    <h3 className="text-xl font-bold text-white mb-1">{country.name}</h3>
                    <p className="text-white/80 text-xs font-medium uppercase tracking-widest">Explore Properties</p>
                </div>
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 group-hover:bg-primary group-hover:border-primary transition-all">
                    <ArrowRight size={20} />
                </div>
            </div>
        </motion.div>
    );
};

export default CountryCard;
