'use client';
import { motion } from 'framer-motion';
import CountryCard from '@/components/ui/CountryCard';
import { countries } from '@/data/mockData';

const CountryGrid = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Explore Our Global Reach</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        We offer premium accommodation solutions in the most sought-after student destinations worldwide.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {countries.map((country, index) => (
                        <CountryCard key={country.id} country={country} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CountryGrid;
