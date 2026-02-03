'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropertyCard from '@/components/ui/PropertyCard';
import { properties } from '@/data/mockData';
import { Search, Filter, SlidersHorizontal, MapPin } from 'lucide-react';

export default function PropertiesPage() {
    const [filter, setFilter] = useState({
        country: 'All',
        city: 'All',
        type: 'All'
    });

    const [searchTerm, setSearchTerm] = useState('');

    const filteredProperties = properties.filter(p => {
        const matchesCountry = filter.country === 'All' || p.location.includes(filter.country);
        const matchesType = filter.type === 'All' || p.type === filter.type;
        const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.location.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCountry && matchesType && matchesSearch;
    });

    const countries = ['All', 'Canada', 'UK', 'Ireland', 'Australia', 'Germany', 'New Zealand'];
    const types = ['All', 'Studio', 'Ensuite', 'Shared', '1BHK', 'Apartment', 'Private Room'];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Available Properties</h1>
                    <p className="text-slate-500">Discover verified co-living spaces near your university.</p>
                </div>

                {/* Filter Bar */}
                <div className="bg-white p-4 md:p-6 rounded-[32px] shadow-sm border border-slate-100 mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center">
                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search by city or property..."
                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Country Filter */}
                        <div className="flex items-center space-x-3 px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl">
                            <MapPin size={18} className="text-primary" />
                            <select
                                className="bg-transparent text-sm font-semibold text-slate-700 outline-none w-full appearance-none cursor-pointer"
                                value={filter.country}
                                onChange={(e) => setFilter({ ...filter, country: e.target.value })}
                            >
                                {countries.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>

                        {/* Type Filter */}
                        <div className="flex items-center space-x-3 px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl">
                            <Filter size={18} className="text-primary" />
                            <select
                                className="bg-transparent text-sm font-semibold text-slate-700 outline-none w-full appearance-none cursor-pointer"
                                value={filter.type}
                                onChange={(e) => setFilter({ ...filter, type: e.target.value })}
                            >
                                {types.map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                        </div>

                        {/* Sort/More Toggle */}
                        <button className="flex items-center justify-center space-x-2 bg-slate-900 text-white rounded-2xl py-3 px-8 font-bold hover:bg-primary transition-all">
                            <SlidersHorizontal size={18} />
                            <span>Apply Filters</span>
                        </button>
                    </div>
                </div>

                {/* Results Info */}
                <div className="flex items-center justify-between mb-8">
                    <p className="text-slate-600 font-medium">
                        Showing <span className="font-bold text-slate-900">{filteredProperties.length}</span> results
                    </p>
                    <div className="flex items-center space-x-2 text-sm">
                        <span className="text-slate-400">Sort by:</span>
                        <select className="bg-transparent font-bold text-slate-900 outline-none cursor-pointer">
                            <option>Recommended</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest First</option>
                        </select>
                    </div>
                </div>

                {/* Listings Grid */}
                <AnimatePresence mode="popLayout">
                    {filteredProperties.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProperties.map((p, i) => (
                                <PropertyCard key={p.id} property={p} index={i} />
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-24 bg-white rounded-3xl border border-slate-100"
                        >
                            <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">No properties found</h3>
                            <p className="text-slate-500">Try adjusting your filters or search term.</p>
                            <button
                                onClick={() => { setFilter({ country: 'All', city: 'All', type: 'All' }); setSearchTerm('') }}
                                className="mt-6 text-primary font-bold hover:underline"
                            >
                                Clear all filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
