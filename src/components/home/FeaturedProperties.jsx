'use client';
import { motion } from 'framer-motion';
import PropertyCard from '@/components/ui/PropertyCard';
import { properties } from '@/data/mockData';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const FeaturedProperties = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Properties</h2>
                        <p className="text-slate-500">
                            Discover our most popular and highly rated co-living spaces handpicked for your comfort and convenience.
                        </p>
                    </div>
                    <Link
                        href="/properties"
                        className="group flex items-center space-x-2 text-primary font-bold hover:text-primary-hover transition-colors"
                    >
                        <span>Explore All Listings</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.slice(0, 3).map((property, index) => (
                        <PropertyCard key={property.id} property={property} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProperties;
