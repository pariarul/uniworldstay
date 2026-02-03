'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Lock } from 'lucide-react';

const features = [
    {
        icon: ShieldCheck,
        title: 'Trusted Housing Partner',
        description: 'We partner with the best housing providers globally to ensure quality and reliability.'
    },
    {
        icon: MapPin,
        title: 'Prime Locations',
        description: 'All our properties are located close to major universities and city centers.'
    },
    {
        icon: Lock,
        title: 'Safe & Verified Properties',
        description: 'Every listing on our platform undergoes a rigorous verification process.'
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-slate-900 mb-4"
                    >
                        Why Choose Us
                    </motion.h2>
                    <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group text-center"
                        >
                            <div className="w-20 h-20 bg-blue-50 text-primary rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-6 shadow-sm group-hover:shadow-xl group-hover:shadow-blue-200">
                                <feature.icon size={36} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                            <p className="text-slate-500 leading-relaxed max-w-xs mx-auto">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
