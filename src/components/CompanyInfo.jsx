import React from 'react';
import { Factory } from 'lucide-react';
import EthicsTags from './EthicsTags';

export default function CompanyInfo({ data, selectedEthicsTag, setSelectedEthicsTag }) {
    const getGradeColor = (grade) => {
        if (grade.startsWith('A')) return 'bg-earth-sage/20 text-earth-sage border-earth-sage/30';
        if (grade.startsWith('B')) return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
        if (grade.startsWith('C')) return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
        if (grade.startsWith('D')) return 'bg-earth-terracotta/10 text-earth-terracotta border-earth-terracotta/20';
        return 'bg-red-500/10 text-red-600 border-red-500/20';
    };

    return (
        <div className="space-y-3">
            <h3 className="text-sm font-semibold text-earth-sage flex items-center gap-2 font-sans tracking-wide">
                <Factory className="w-4 h-4" />
                Company Ethics
            </h3>
            <div className="bg-white/60 p-4 rounded-xl border border-earth-sage/10 space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                    <p className="font-bold text-earth-charcoal font-serif text-lg">{data.company}</p>
                    <div className={`px-3 py-1 rounded-lg text-sm font-bold border ${getGradeColor(data.companyRating)}`}>
                        {data.companyRating}
                    </div>
                </div>
                <EthicsTags
                    ethics={data.ethics}
                    selectedTag={selectedEthicsTag}
                    setSelectedTag={setSelectedEthicsTag}
                />
            </div>
        </div>
    );
}
