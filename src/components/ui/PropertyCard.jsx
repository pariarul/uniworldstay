'use client';
import Image from 'next/image';
import { MapPin, Star, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const PropertyCard = ({ property, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
        >
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                    {property.type}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-amber-500 shadow-sm">
                    <div className="flex items-center space-x-1">
                        <Star size={14} fill="currentColor" />
                        <span className="text-xs font-bold text-slate-900">{property.rating}</span>
                    </div>
                </div>
            </div>

            <div className="p-5">
                <div className="flex items-center text-slate-500 text-xs mb-2">
                    <MapPin size={14} className="mr-1" />
                    {property.location}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-1">
                    {property.title}
                </h3>

                <div className="flex items-center text-slate-600 text-sm mb-4">
                    <GraduationCap size={16} className="mr-2 text-primary" />
                    {property.distance}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <div>
                        <span className="text-2xl font-bold text-primary">${property.price}</span>
                        <span className="text-slate-500 text-sm font-medium">/month</span>
                    </div>
                    <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary transition-colors">
                        View Details
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default PropertyCard;
