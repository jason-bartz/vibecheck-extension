import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { scanPageForMaterials, recalculateScore, MATERIAL_DB } from './services/scanner';
import LeafLogo from './components/LeafLogo';

// Components
import Header from './components/Header';
import ScoreCard from './components/ScoreCard';
import MetricsGrid from './components/MetricsGrid';
import CompanyInfo from './components/CompanyInfo';
import MaterialList from './components/MaterialList';
import MaterialDetail from './components/MaterialDetail';
import AddMaterial from './components/AddMaterial';
import ActionButtons from './components/ActionButtons';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [isAddingMaterial, setIsAddingMaterial] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Auto-scan on mount and URL change to determine visibility
  useEffect(() => {
    const checkVisibility = () => {
      const result = scanPageForMaterials();
      // Only set data if we haven't already (to preserve state) or if it's a fresh navigation
      // But for visibility check, we just need to know if it's applicable.
      // We'll store the initial scan result so the user doesn't have to wait again if they click.
      setData(result);
      setIsVisible(result.isApplicable);
    };

    checkVisibility();

    // Listen for URL changes (for SPAs)
    let lastUrl = location.href;
    const observer = new MutationObserver(() => {
      const url = location.href;
      if (url !== lastUrl) {
        lastUrl = url;
        checkVisibility();
      }
    });

    observer.observe(document, { subtree: true, childList: true });

    return () => observer.disconnect();
  }, []);

  const handleCheck = async () => {
    setIsOpen(true);
    // Data is already scanned from the effect, but we can re-scan if needed.
    // For now, let's use the cached data to be instant.
    if (!data) {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      const result = scanPageForMaterials();
      setData(result);
      setIsVisible(result.isApplicable);
      setLoading(false);
    }
  };

  // If not applicable, render nothing (effectively "disappears")
  if (!isVisible && !isOpen) return null;

  const handleAddMaterial = (materialKey) => {
    const newMaterial = {
      name: materialKey.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      ...MATERIAL_DB[materialKey]
    };

    // Filter out "Unknown Materials" placeholder if it exists
    const currentMaterials = data.materials.filter(m => m.type !== 'Unknown');
    const updatedMaterials = [...currentMaterials, newMaterial];

    const newData = recalculateScore(updatedMaterials);
    setData(newData);
    setIsAddingMaterial(false);
    setSearchQuery('');
  };

  const filteredMaterials = Object.keys(MATERIAL_DB).filter(key =>
    key.toLowerCase().includes(searchQuery.toLowerCase()) &&
    !data?.materials.some(m => m.name.toLowerCase() === key.toLowerCase())
  );

  return (
    <div className="font-sans antialiased p-4">
      {!isOpen && (
        <button
          onClick={handleCheck}
          className="group relative flex items-center gap-3 bg-earth-charcoal text-earth-cream px-6 py-4 rounded-full shadow-[0_4px_20px_rgba(44,62,80,0.2)] hover:shadow-[0_6px_25px_rgba(44,62,80,0.3)] transition-all duration-300 hover:-translate-y-1 border border-earth-sage/20 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-earth-sage/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <LeafLogo className="w-5 h-5 text-earth-sage" />
          <span className="font-bold tracking-wide font-serif">Check Vibe</span>
        </button>
      )}

      {isOpen && (
        <div
          className="relative w-[380px] backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 overflow-hidden animate-in slide-in-from-bottom-8 fade-in duration-300 bg-earth-cream/95"
        >
          <Header
            setIsOpen={setIsOpen}
            selectedMaterial={selectedMaterial}
            setSelectedMaterial={setSelectedMaterial}
            isAddingMaterial={isAddingMaterial}
            setIsAddingMaterial={setIsAddingMaterial}
          />

          {/* Content */}
          <div className="p-6 pt-2 min-h-[400px]">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-64 space-y-4">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 border-4 border-earth-sage/20 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-earth-sage rounded-full border-t-transparent animate-spin"></div>
                </div>
                <p className="text-earth-sage animate-pulse font-serif italic">Scanning page for materials...</p>
              </div>
            ) : selectedMaterial ? (
              <MaterialDetail selectedMaterial={selectedMaterial} />
            ) : isAddingMaterial ? (
              <AddMaterial
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                filteredMaterials={filteredMaterials}
                handleAddMaterial={handleAddMaterial}
              />
            ) : data ? (
              !data.isApplicable && !isAddingMaterial ? (
                <div className="flex flex-col items-center justify-center h-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
                  <div className="w-16 h-16 rounded-full bg-earth-sage/10 flex items-center justify-center">
                    <LeafLogo className="w-8 h-8 text-earth-sage/50" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-earth-charcoal font-serif">No Clothing Detected</h3>
                    <p className="text-sm text-gray-500 font-sans leading-relaxed px-4">
                      We couldn't find any clothing materials or retailer info on this page.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsAddingMaterial(true)}
                    className="px-6 py-3 bg-earth-cream border border-earth-sage/20 rounded-xl text-earth-sage font-bold hover:bg-earth-sage/10 transition-colors font-sans flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add Material Manually
                  </button>
                </div>
              ) : (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <ScoreCard score={data.score} />

                  <MetricsGrid
                    data={data}
                    activeTooltip={activeTooltip}
                    setActiveTooltip={setActiveTooltip}
                  />

                  <CompanyInfo data={data} />

                  <MaterialList
                    data={data}
                    setSelectedMaterial={setSelectedMaterial}
                    setIsAddingMaterial={setIsAddingMaterial}
                  />

                  <ActionButtons data={data} />
                </div>
              )
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
