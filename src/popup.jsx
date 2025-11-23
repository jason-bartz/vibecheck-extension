import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="w-64 p-4 bg-vibe-dark text-white">
            <h1 className="text-xl font-bold text-vibe-green mb-2">Vibecheck</h1>
            <p className="text-sm text-gray-400">Extension is active. Visit a product page to check the vibe!</p>
        </div>
    </React.StrictMode>,
)
