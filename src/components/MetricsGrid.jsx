import React from 'react';
import { Leaf, Droplets, Info, X } from 'lucide-react';

export default function MetricsGrid({ data, activeTooltip, setActiveTooltip }) {
    return (
        <div className="grid grid-cols-2 gap-3 relative">
            {/* Tooltip */}
            {activeTooltip && data.metrics && (
                <div className="absolute bottom-full left-0 right-0 mb-2 p-4 bg-earth-charcoal rounded-xl border border-earth-sage/20 shadow-xl z-20 animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-md font-sans ${data.metrics[activeTooltip].context === 'Low' ? 'bg-green-500/20 text-green-300' :
                            data.metrics[activeTooltip].context === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                                'bg-red-500/20 text-red-300'
                            }`}>
                            {data.metrics[activeTooltip].context} Impact
                        </span>
                        <button onClick={() => setActiveTooltip(null)} className="text-gray-400 hover:text-white">
                            <X className="w-3 h-3" />
                        </button>
                    </div>
                    <p className="text-sm text-white font-medium mb-1 font-serif">{data.metrics[activeTooltip].comparison}</p>
                    <p className="text-xs text-gray-300 leading-relaxed font-sans">{data.metrics[activeTooltip].description}</p>
                    <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-earth-charcoal border-r border-b border-earth-sage/20 rotate-45"></div>
                </div>
            )}

            <div className="bg-white/60 p-3 rounded-xl border border-earth-sage/10 relative group shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-earth-sage">
                        <Leaf className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Carbon</span>
                    </div>
                    <button
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 'carbon' ? null : 'carbon'); }}
                        className="text-earth-sage/60 hover:text-earth-sage transition-colors"
                    >
                        <Info className="w-3 h-3" />
                    </button>
                </div>
                <p className="font-semibold text-earth-charcoal font-serif text-lg">{data.carbonFootprint}</p>
            </div>

            <div className="bg-white/60 p-3 rounded-xl border border-earth-sage/10 relative group shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-earth-sage">
                        <Droplets className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Water</span>
                    </div>
                    <button
                        onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === 'water' ? null : 'water'); }}
                        className="text-earth-sage/60 hover:text-earth-sage transition-colors"
                    >
                        <Info className="w-3 h-3" />
                    </button>
                </div>
                <p className="font-semibold text-earth-charcoal font-serif text-lg">{data.waterUsage}</p>
            </div>
        </div>
    );
}
