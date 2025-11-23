import React from 'react';
import { Award, AlertTriangle, XCircle, CheckCircle } from 'lucide-react';
import { CERTIFICATION_DB } from '../services/scanner';

export default function EthicsDetail({ tag }) {
    const tagKey = tag.toLowerCase();
    const certData = CERTIFICATION_DB[tagKey];

    if (!certData) {
        return (
            <div className="h-full flex flex-col items-center justify-center p-6 text-center animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="bg-earth-sage/10 p-4 rounded-full mb-4">
                    <Award className="w-8 h-8 text-earth-sage" />
                </div>
                <h3 className="text-lg font-bold text-earth-charcoal font-serif mb-2">{tag}</h3>
                <p className="text-sm text-earth-charcoal/70 font-sans">No detailed information available for this certification.</p>
            </div>
        );
    }

    const getBadgeIcon = () => {
        switch (certData.badge) {
            case 'prestigious':
            case 'strong':
                return <Award className="w-5 h-5 text-earth-sage" />;
            case 'good':
                return <CheckCircle className="w-5 h-5 text-green-600" />;
            case 'warning':
                return <AlertTriangle className="w-5 h-5 text-amber-600" />;
            case 'critical':
                return <XCircle className="w-5 h-5 text-red-600" />;
            default:
                return null;
        }
    };

    const getBadgeStyle = () => {
        switch (certData.badge) {
            case 'prestigious':
                return 'bg-gradient-to-br from-earth-sage/20 via-earth-sage/15 to-green-500/10 text-earth-sage border-earth-sage/30';
            case 'strong':
                return 'bg-earth-sage/10 text-earth-sage border-earth-sage/25';
            case 'good':
                return 'bg-green-500/10 text-green-700 border-green-500/25';
            case 'warning':
                return 'bg-amber-500/10 text-amber-700 border-amber-500/25';
            case 'critical':
                return 'bg-red-500/12 text-red-700 border-red-500/30';
            default:
                return 'bg-gray-100 text-gray-700 border-gray-300';
        }
    };

    const getBadgeLabel = () => {
        switch (certData.badge) {
            case 'prestigious':
                return 'Prestigious Certification';
            case 'strong':
                return 'Strong Certification';
            case 'good':
                return 'Good Practice';
            case 'warning':
                return 'Concern';
            case 'critical':
                return 'Critical Issue';
            default:
                return 'Certification';
        }
    };

    return (
        <div className="h-full overflow-y-auto p-6 animate-in fade-in slide-in-from-right-4 duration-300">
            {/* Header */}
            <div className="flex flex-col items-center text-center mb-6">
                <div className="mb-4 p-4 bg-white/60 rounded-2xl shadow-sm border border-earth-sage/10">
                    {getBadgeIcon()}
                </div>
                <h3 className="text-xl font-bold text-earth-charcoal font-serif mb-3">{certData.name}</h3>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border shadow-sm ${getBadgeStyle()}`}>
                    {getBadgeLabel()}
                </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
                <div className="bg-white/60 p-4 rounded-xl border border-earth-sage/10 shadow-sm">
                    <h4 className="text-xs font-semibold text-earth-charcoal/60 mb-3 font-sans uppercase tracking-wider">Overview</h4>
                    <p className="text-sm text-earth-charcoal leading-relaxed font-sans">{certData.description}</p>
                </div>

                {certData.details && (
                    <div className="bg-white/60 p-4 rounded-xl border border-earth-sage/10 shadow-sm">
                        <h4 className="text-xs font-semibold text-earth-charcoal/60 mb-3 font-sans uppercase tracking-wider">Details</h4>
                        <p className="text-sm text-earth-charcoal/80 leading-relaxed font-sans">{certData.details}</p>
                    </div>
                )}

                {/* Score Impact */}
                <div className="bg-white/60 p-4 rounded-xl border border-earth-sage/10 shadow-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-earth-charcoal/60 font-sans uppercase tracking-wider">Impact on Score</span>
                        <span className={`text-xl font-bold font-serif ${certData.score > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {certData.score > 0 ? '+' : ''}{certData.score}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
