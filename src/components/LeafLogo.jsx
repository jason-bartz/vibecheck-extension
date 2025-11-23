import React from 'react';

export default function LeafLogo({ className = "w-5 h-5", color = "currentColor" }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Elegant leaf shape with organic curves */}
            <path
                d="M12 3C8 3 5 6 5 10C5 14 7 17 10 19C11 19.5 12 20 12 21C12 20 13 19.5 14 19C17 17 19 14 19 10C19 6 16 3 12 3Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            {/* Central vein */}
            <path
                d="M12 6C12 6 12 15 12 18"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* Left side veins */}
            <path
                d="M12 9C12 9 10 10 9 11M12 12C12 12 10 13 9.5 14"
                stroke={color}
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* Right side veins */}
            <path
                d="M12 9C12 9 14 10 15 11M12 12C12 12 14 13 14.5 14"
                stroke={color}
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
