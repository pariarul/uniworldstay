'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative"
        >
            <div className="absolute top-8 right-8 text-blue-50">
                <Quote size={48} fill="currentColor" />
            </div>

            <p className="text-slate-600 leading-relaxed italic mb-8 relative z-10">
                "{testimonial.content}"
            </p>

            <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/10">
                    <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{testimonial.role}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;
