import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function ActionButtons({ data }) {
    if (!data.alternatives || data.alternatives <= 0) return null;

    return (
        <button className="w-full py-3 bg-earth-sage text-white font-bold rounded-xl hover:bg-earth-sage/90 transition-colors flex items-center justify-center gap-2 font-sans shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200">
            View {data.alternatives} Better Alternatives
            <ChevronRight className="w-4 h-4" />
        </button>
    );
}
