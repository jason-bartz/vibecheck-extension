import React from 'react';
import { X, ArrowLeft } from 'lucide-react';
import LeafLogo from './LeafLogo';

export default function Header({
    setIsOpen,
    selectedMaterial,
    setSelectedMaterial,
    isAddingMaterial,
    setIsAddingMaterial,
    productType,
    selectedEthicsTag,
    setSelectedEthicsTag
}) {
    const handleBack = () => {
        if (selectedEthicsTag) {
            setSelectedEthicsTag(null);
            return;
        }
        if (selectedMaterial) setSelectedMaterial(null);
        if (isAddingMaterial) setIsAddingMaterial(false);
    };

    const showBack = selectedMaterial || isAddingMaterial || selectedEthicsTag;

    let title = 'Product Impact';
    if (selectedEthicsTag) {
        title = 'Ethics Detail';
    } else if (selectedMaterial) {
        title = selectedMaterial.name;
    } else if (isAddingMaterial) {
        title = 'Add Material';
    } else if (productType) {
        title = `${productType} Impact`;
    }

    return (
        <div className="relative p-6 pb-4 bg-gradient-to-b from-earth-cream/50 to-transparent border-b border-earth-sage/10">
            <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-earth-sage/10 rounded-full transition-colors z-10 text-earth-sage hover:text-earth-charcoal"
            >
                <X className="w-4 h-4" />
            </button>

            {showBack && (
                <button
                    onClick={handleBack}
                    className="absolute top-4 left-4 p-2 hover:bg-earth-sage/10 rounded-full transition-colors z-10 flex items-center gap-1 text-earth-sage hover:text-earth-charcoal"
                >
                    <ArrowLeft className="w-4 h-4" />
                </button>
            )}

            <div className="flex items-center gap-2 mb-2 justify-center">
                <LeafLogo className="w-4 h-4 text-earth-sage" />
                <span className="text-xs font-bold text-earth-sage uppercase tracking-wider font-sans">Vibecheck</span>
            </div>
            <h2 className="text-2xl font-bold text-earth-charcoal text-center font-serif">
                {title}
            </h2>
        </div>
    );
}
