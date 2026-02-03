'use client';
import { motion } from 'framer-motion';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { testimonials } from '@/data/mockData';

const TestimonialsSection = () => {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Voices of our Community</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Listen to what our residents have to say about their experience living with Uniworldstay.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
