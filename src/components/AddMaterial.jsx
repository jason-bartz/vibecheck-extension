import React from 'react';
import { Search, Plus } from 'lucide-react';

export default function AddMaterial({ searchQuery, setSearchQuery, filteredMaterials, handleAddMaterial }) {
    return (
        <div className="space-y-4 animate-in slide-in-from-right-8 fade-in duration-300">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-earth-sage" />
                <input
                    type="text"
                    placeholder="Search materials..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/80 border border-earth-sage/20 rounded-xl py-3 pl-10 pr-4 text-earth-charcoal placeholder-earth-sage/50 focus:outline-none focus:border-earth-sage transition-colors font-sans shadow-inner"
                    autoFocus
                />
            </div>
            <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredMaterials.map(key => (
                    <button
                        key={key}
                        onClick={() => handleAddMaterial(key)}
                        className="w-full text-left p-3 rounded-xl hover:bg-earth-sage/10 transition-colors flex items-center justify-between group border border-transparent hover:border-earth-sage/10"
                    >
                        <span className="text-earth-charcoal group-hover:text-earth-sage capitalize font-serif">{key}</span>
                        <Plus className="w-4 h-4 text-gray-400 group-hover:text-earth-sage" />
                    </button>
                ))}
                {filteredMaterials.length === 0 && (
                    <p className="text-center text-gray-400 py-4 font-sans italic">No matching materials found</p>
                )}
            </div>
        </div>
    );
}
