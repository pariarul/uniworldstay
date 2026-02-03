'use client';

import StatsCard from '@/components/ui/StatsCard';
import { stats } from '@/data/mockData';

const StatsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatsCard
              key={stat.id}
              {...stat}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
