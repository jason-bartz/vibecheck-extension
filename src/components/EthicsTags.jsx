import React from 'react';
import { Award, AlertTriangle, XCircle } from 'lucide-react';
import { CERTIFICATION_DB } from '../services/scanner';

export default function EthicsTags({ ethics, selectedTag, setSelectedTag }) {
    // Parse ethics string into individual tags (handle bullets and commas) and remove duplicates
    const tags = [...new Set(ethics.split(/[•,]/).map(tag => tag.trim()).filter(tag => tag.length > 0))];

    const getBadgeStyle = (badge) => {
        switch (badge) {
            case 'prestigious':
                return {
                    bg: 'bg-gradient-to-br from-earth-sage/20 via-earth-sage/15 to-green-500/10',
                    text: 'text-earth-sage',
                    border: 'border-earth-sage/30',
                    icon: Award,
                    shadow: 'shadow-sm',
                    glow: 'ring-1 ring-earth-sage/20',
                    iconBg: 'bg-earth-sage/10'
                };
            case 'strong':
                return {
                    bg: 'bg-earth-sage/8',
                    text: 'text-earth-sage',
                    border: 'border-earth-sage/25',
                    icon: Award,
                    shadow: 'shadow-sm',
                    glow: '',
                    iconBg: 'bg-earth-sage/10'
                };
            case 'good':
                return {
                    bg: 'bg-green-500/8',
                    text: 'text-green-700',
                    border: 'border-green-500/25',
                    icon: null,
                    shadow: 'shadow-sm',
                    glow: '',
                    iconBg: ''
                };
            case 'warning':
                return {
                    bg: 'bg-amber-500/8',
                    text: 'text-amber-700',
                    border: 'border-amber-500/25',
                    icon: AlertTriangle,
                    shadow: 'shadow-sm',
                    glow: '',
                    iconBg: 'bg-amber-500/10'
                };
            case 'critical':
                return {
                    bg: 'bg-red-500/10',
                    text: 'text-red-700',
                    border: 'border-red-500/30',
                    icon: XCircle,
                    shadow: 'shadow-sm',
                    glow: 'ring-1 ring-red-500/15',
                    iconBg: 'bg-red-500/10'
                };
            default:
                return {
                    bg: 'bg-white/60',
                    text: 'text-earth-charcoal',
                    border: 'border-earth-sage/20',
                    icon: null,
                    shadow: 'shadow-sm',
                    glow: '',
                    iconBg: ''
                };
        }
    };

    return (
        <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => {
                // Import CERTIFICATION_DB to check badge level
                const tagKey = tag.toLowerCase();
                const certData = CERTIFICATION_DB[tagKey];
                const badge = certData?.badge || 'default';
                const style = getBadgeStyle(badge);
                const Icon = style.icon;

                return (
                    <button
                        key={index}
                        onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 cursor-pointer font-sans ${style.bg} ${style.text} ${style.border} ${style.shadow} ${style.glow} hover:scale-[1.02] hover:shadow-md flex items-center gap-2`}
                    >
                        {Icon && (
                            <div className={`p-0.5 rounded ${style.iconBg}`}>
                                <Icon className="w-3 h-3" />
                            </div>
                        )}
                        <span>{tag}</span>
                    </button>
                );
            })}
        </div>
    );
}
