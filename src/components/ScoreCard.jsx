import React from 'react';

export default function ScoreCard({ score }) {
    const getScoreColor = (s) => {
        if (s >= 80) return 'text-earth-sage';
        if (s >= 60) return 'text-yellow-600'; // Darker yellow for elegance
        if (s >= 40) return 'text-gray-500';
        if (s >= 20) return 'text-earth-terracotta';
        return 'text-red-700';
    };

    const getEmoji = (s) => {
        if (s >= 80) return '🤩';
        if (s >= 60) return '🙂';
        if (s >= 40) return '😐';
        if (s >= 20) return '😕';
        return '😫';
    };

    const colorClass = getScoreColor(score);

    return (
        <div className="flex items-center justify-between bg-earth-cream/50 p-4 rounded-2xl border border-earth-sage/20 shadow-sm">
            <div>
                <p className="text-sm text-earth-sage mb-1 font-sans font-medium">Overall Score</p>
                <div className={`text-4xl font-bold font-serif ${colorClass}`}>
                    {score}/100
                </div>
            </div>
            <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center relative shadow-inner">
                <div className="absolute inset-0 rounded-full border-4 border-earth-sand" />
                <div
                    className={`absolute inset-0 rounded-full border-4 ${colorClass.replace('text-', 'border-')} border-r-transparent rotate-45 transition-all duration-1000 ease-out`}
                    style={{ clipPath: `polygon(0 0, 100% 0, 100% ${score}%, 0 100%)` }}
                />
                <span className="text-2xl filter drop-shadow-sm">{getEmoji(score)}</span>
            </div>
        </div>
    );
}
