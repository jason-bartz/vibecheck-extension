import React from 'react';
import { Info, AlertCircle } from 'lucide-react';

export default function MaterialDetail({ selectedMaterial }) {
    const getScoreColor = (s) => {
        if (s >= 80) return 'text-earth-sage';
        if (s >= 60) return 'text-yellow-600';
        if (s >= 40) return 'text-gray-500';
        if (s >= 20) return 'text-earth-terracotta';
        return 'text-red-700';
    };

    return (
        <div className="space-y-6 animate-in slide-in-from-right-8 fade-in duration-300">
            {/* Material Score */}
            <div className="flex items-center justify-between bg-white/60 p-4 rounded-2xl border border-earth-sage/10 shadow-sm">
                <div>
                    <p className="text-sm text-earth-sage mb-1 font-sans font-medium">Material Score</p>
                    <div className={`text-3xl font-bold font-serif ${getScoreColor(selectedMaterial.score)}`}>
                        {selectedMaterial.score}/100
                    </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold border font-sans ${selectedMaterial.type === 'Natural' ? 'border-green-500/30 text-green-600 bg-green-500/10' :
                    selectedMaterial.type === 'Recycled' ? 'border-blue-500/30 text-blue-600 bg-blue-500/10' :
                        selectedMaterial.type === 'Animal' ? 'border-orange-500/30 text-orange-600 bg-orange-500/10' :
                            'border-red-500/30 text-red-600 bg-red-500/10'
                    }`}>
                    {selectedMaterial.type}
                </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
                <h3 className="text-sm font-semibold text-earth-sage flex items-center gap-2 font-sans uppercase tracking-wider">
                    <Info className="w-4 h-4" />
                    About
                </h3>
                <p className="text-sm text-earth-charcoal leading-relaxed bg-white/60 p-4 rounded-xl border border-earth-sage/10 font-serif">
                    {selectedMaterial.description}
                </p>
            </div>

            {/* Impact */}
            <div className="space-y-2">
                <h3 className="text-sm font-semibold text-earth-sage flex items-center gap-2 font-sans uppercase tracking-wider">
                    <AlertCircle className="w-4 h-4" />
                    Environmental Impact
                </h3>
                <p className="text-sm text-earth-charcoal leading-relaxed bg-white/60 p-4 rounded-xl border border-earth-sage/10 font-serif">
                    {selectedMaterial.impact}
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-2">
                <div className="bg-white/60 p-2 rounded-xl border border-earth-sage/10 text-center shadow-sm">
                    <p className="text-[10px] text-earth-sage uppercase tracking-wider mb-1 font-sans font-bold">Water</p>
                    <p className="text-sm font-bold text-earth-charcoal font-serif">{selectedMaterial.water_intensity}</p>
                </div>
                <div className="bg-white/60 p-2 rounded-xl border border-earth-sage/10 text-center shadow-sm">
                    <p className="text-[10px] text-earth-sage uppercase tracking-wider mb-1 font-sans font-bold">Carbon</p>
                    <p className="text-sm font-bold text-earth-charcoal font-serif">{selectedMaterial.carbon_intensity}</p>
                </div>
                <div className="bg-white/60 p-2 rounded-xl border border-earth-sage/10 text-center shadow-sm">
                    <p className="text-[10px] text-earth-sage uppercase tracking-wider mb-1 font-sans font-bold">Bio</p>
                    <p className="text-sm font-bold text-earth-charcoal font-serif">{selectedMaterial.biodegradable}</p>
                </div>
            </div>
        </div>
    );
}
