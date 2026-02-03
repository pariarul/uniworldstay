'use client';
import { useState } from 'react';
import { Search, MapPin, Building, GraduationCap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const SearchBar = () => {
    const [searchData, setSearchData] = useState({
        college: '',
        campus: '',
        city: '',
        propertyType: 'All Types'
    });

    const propertyTypes = ['All Types', 'Studio', 'Ensuite', 'Shared', '1BHK', 'Apartment'];

    const handleChange = (e) => {
        setSearchData({ ...searchData, [e.target.name]: e.target.value });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-5xl mx-auto w-full"
        >
            <div className="bg-white/80 backdrop-blur-xl p-2 rounded-3xl shadow-2xl border border-white/50">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                    {/* College */}
                    <div className="px-4 py-3 hover:bg-white rounded-2xl transition-all border border-transparent hover:border-slate-100 flex flex-col">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 flex items-center">
                            <GraduationCap size={12} className="mr-1" /> College
                        </label>
                        <input
                            type="text"
                            name="college"
                            placeholder="Enter University"
                            value={searchData.college}
                            onChange={handleChange}
                            className="bg-transparent text-sm font-semibold text-slate-900 border-none outline-none placeholder:text-slate-300 w-full"
                        />
                    </div>

                    {/* Campus */}
                    <div className="px-4 py-3 hover:bg-white rounded-2xl transition-all border border-transparent hover:border-slate-100 flex flex-col">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 flex items-center">
                            <Building size={12} className="mr-1" /> Campus
                        </label>
                        <input
                            type="text"
                            name="campus"
                            placeholder="Select Campus"
                            value={searchData.campus}
                            onChange={handleChange}
                            className="bg-transparent text-sm font-semibold text-slate-900 border-none outline-none placeholder:text-slate-300 w-full"
                        />
                    </div>

                    {/* City */}
                    <div className="px-4 py-3 hover:bg-white rounded-2xl transition-all border border-transparent hover:border-slate-100 flex flex-col">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 flex items-center">
                            <MapPin size={12} className="mr-1" /> City
                        </label>
                        <input
                            type="text"
                            name="city"
                            placeholder="Where to?"
                            value={searchData.city}
                            onChange={handleChange}
                            className="bg-transparent text-sm font-semibold text-slate-900 border-none outline-none placeholder:text-slate-300 w-full"
                        />
                    </div>

                    {/* Property Type & Search Button */}
                    <div className="flex items-center space-x-2 pl-4 pr-2">
                        <div className="flex-1 flex flex-col">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                                Type
                            </label>
                            <select
                                name="propertyType"
                                value={searchData.propertyType}
                                onChange={handleChange}
                                className="bg-transparent text-sm font-semibold text-slate-900 border-none outline-none appearance-none cursor-pointer w-full"
                            >
                                {propertyTypes.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                        <button className="bg-primary hover:bg-primary-hover text-white w-14 h-14 md:w-full md:h-12 rounded-2xl flex items-center justify-center transition-all group shadow-lg shadow-blue-500/30">
                            <span className="hidden md:block mr-2 font-bold mb-0.5">Search</span>
                            <Search size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SearchBar;
