import React from 'react';
import { Plus } from 'lucide-react';

export default function MaterialList({ data, setSelectedMaterial, setIsAddingMaterial }) {
    return (
        <div className="space-y-2">
            <h3 className="text-sm font-semibold text-earth-sage font-sans uppercase tracking-wider">Materials (Click for details)</h3>
            <div className="flex flex-wrap gap-2">
                {data.materials.map((m, i) => (
                    <button
                        key={i}
                        onClick={() => setSelectedMaterial(m)}
                        className="px-3 py-1 bg-white/60 rounded-full text-xs text-earth-charcoal border border-earth-sage/20 hover:bg-earth-sage/10 hover:border-earth-sage hover:text-earth-charcoal transition-all cursor-pointer font-sans shadow-sm"
                    >
                        {m.name}
                    </button>
                ))}
                <button
                    onClick={() => setIsAddingMaterial(true)}
                    className="px-3 py-1 bg-earth-sage/10 rounded-full text-xs text-earth-sage border border-earth-sage/30 hover:bg-earth-sage/20 transition-all cursor-pointer flex items-center gap-1 font-sans font-bold"
                >
                    <Plus className="w-3 h-3" /> Add
                </button>
            </div>
        </div>
    );
}
