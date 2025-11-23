import React from 'react';

export default function LeafLogo({ className = "w-5 h-5", color = "currentColor" }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 3C7.5 3 4 6.5 4 11C4 14.5 6 17.5 9 19L12 22L15 19C18 17.5 20 14.5 20 11C20 6.5 16.5 3 12 3Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            <path
                d="M12 8V16M12 8C10 8 8 9.5 8 11.5M12 8C14 8 16 9.5 16 11.5"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
