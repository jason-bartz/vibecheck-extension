import React from 'react';
import { Leaf, Droplets, Info, X } from 'lucide-react';

export default function MetricsGrid({ data, activeTooltip, setActiveTooltip }) {
    return (
        <div className="grid grid-cols-2 gap-3 relative">
            {/* Tooltip */}
            {activeTooltip && data.metrics && (
                <div className="absolute bottom-full left-0 right-0 mb-3 p-4 bg-gradient-to-br from-earth-cream/95 to-white/95 backdrop-blur-sm rounded-2xl border border-earth-sage/20 shadow-[0_8px_30px_rgba(44,62,80,0.15)] z-20 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="flex items-center justify-between mb-3">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full font-sans ${data.metrics[activeTooltip].context === 'Low' ? 'bg-green-500/15 text-green-700' :
                            data.metrics[activeTooltip].context === 'Medium' ? 'bg-yellow-500/15 text-yellow-700' :
                                'bg-red-500/15 text-red-700'
                            }`}>
                            {data.metrics[activeTooltip].context} Impact
                        </span>
                        <button onClick={() => setActiveTooltip(null)} className="text-earth-charcoal/40 hover:text-earth-charcoal transition-colors">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                    <p className="text-sm text-earth-charcoal font-medium mb-2 font-serif">{data.metrics[activeTooltip].comparison}</p>
                    <p className="text-xs text-earth-charcoal/70 leading-relaxed font-sans">{data.metrics[activeTooltip].description}</p>
                    <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-earth-cream/95 to-white/95 border-r border-b border-earth-sage/20 rotate-45"></div>
                </div>
            )}

            <div className="bg-white/60 p-3 rounded-xl border border-earth-sage/10 relative group shadow-sm hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-earth-sage">
                        <Leaf className="w-4 h-4" />
                        <span className="text-xs font-semibold tracking-wide font-sans">Carbon</span>
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

            <div className="bg-white/60 p-3 rounded-xl border border-earth-sage/10 relative group shadow-sm hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-earth-sage">
                        <Droplets className="w-4 h-4" />
                        <span className="text-xs font-semibold tracking-wide font-sans">Water</span>
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
