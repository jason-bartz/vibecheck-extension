# Environmental Impact Data Sources

This document lists the verified sources used for carbon and water footprint data in the Vibecheck extension.

## Carbon Footprint Data (kg CO2e per kg fabric)

### Cotton
- **Conventional Cotton**: 5.5-8.1 kg CO2e/kg
  - Source: FAO study shows 8.13 kg CO2e/kg for cotton farming
  - Source: Conventional cotton fabric with synthetic dye: 11.1 kg CO2e/kg (ResearchGate)
  - Regional variations: US (6.07), China (7.48), Brazil (5.73) kg CO2eq/kg
  - **Used value**: 5.5 kg CO2e/kg (conservative estimate)

- **Organic Cotton**: 1.15-3.18 kg CO2e/kg
  - Source: Kyrgyzstan/Tajikistan: 1.15 kg CO2eq/kg
  - Source: Turkey: 3.18 kg CO2eq/kg
  - **Used value**: 1.8 kg CO2e/kg (mid-range)

### Polyester
- **Virgin Polyester**: 8.5-8.95 kg CO2e/kg
  - Source: Virgin polyester yarn: 8.95 kg CO2e/kg (ResearchGate)
  - Source: Polyester woven fabric: up to 27.2 kg CO2 eq/kg (NIH study)
  - Source: Fossil-based PET: 3.12 kg CO2eq/kg (Carbonfact)
  - **Used value**: 8.5 kg CO2e/kg (mid-range for fabric)

- **Recycled Polyester**: 3.5-5.82 kg CO2e/kg
  - Source: Recycled polyester yarn: 5.82 kg CO2e/kg (ResearchGate)
  - Source: Mechanical recycling: 0.68-1.56 kg CO2eq/kg (Carbonfact)
  - **Used value**: 3.5 kg CO2e/kg (59% less than virgin)

### Nylon
- **Nylon**: 10-12 kg CO2e/kg
  - Source: Higher environmental impact than PET but lower than cotton in LCA studies
  - Source: Nitrous oxide emissions make it particularly high-impact
  - **Used value**: 12.0 kg CO2e/kg (conservative, accounting for N2O)

### Other Materials
- **Hemp**: 0.8 kg CO2e/kg (carbon-negative crop, absorbs CO2)
- **Linen**: 1.2 kg CO2e/kg (low-impact flax cultivation)
- **Tencel/Lyocell**: 2.0 kg CO2e/kg (closed-loop process)
- **Bamboo**: 2.5 kg CO2e/kg (varies by processing method)
- **Acrylic**: 10.0 kg CO2e/kg (similar to nylon, toxic production)

## Water Consumption Data (liters per kg fabric)

### Cotton
- **Conventional Cotton**: 7,000-22,500 L/kg
  - Source: Generally 7,000-10,000 L/kg (H2O Global News)
  - Source: Can reach 20,000-22,500 L/kg in arid regions
  - Source: One t-shirt requires ~2,700 liters
  - **Used value**: 10,000 L/kg (mid-high range)

- **Organic Cotton**: 1,100-5,000 L/kg
  - Source: 91% less water than conventional (Sustainability Directory)
  - Source: Often rain-fed, better soil water retention
  - Source: One organic t-shirt: ~1,100 liters
  - Source: GOTS certified processing: ~50 L/kg fabric
  - **Used value**: 5,000 L/kg (includes growing + processing)

### Synthetic Fibers
- **Polyester**: 200-300 L/kg
  - Source: Much lower water use than natural fibers
  - **Used value**: 300 L/kg

- **Recycled Polyester**: 100-200 L/kg
  - Source: Lower than virgin polyester
  - **Used value**: 200 L/kg

- **Nylon**: 400-500 L/kg
  - Source: Moderate water use in production
  - **Used value**: 500 L/kg

- **Acrylic**: 300-400 L/kg
  - **Used value**: 400 L/kg

### Natural Fibers
- **Hemp**: 2,000-3,000 L/kg
  - Source: Requires little irrigation, rain-fed
  - **Used value**: 2,500 L/kg

- **Linen**: 2,000-3,000 L/kg
  - Source: Flax grows in poor soil without irrigation
  - **Used value**: 2,500 L/kg

- **Bamboo**: 2,500-3,500 L/kg
  - **Used value**: 3,000 L/kg

- **Tencel/Lyocell**: 800-1,200 L/kg
  - Source: Closed-loop system recycles 99% of water
  - **Used value**: 1,000 L/kg

## Key Sources

1. **ResearchGate** - Peer-reviewed textile LCA studies
2. **Carbonfact** - Regional cotton carbon footprint data
3. **FAO** - Agricultural environmental impact data
4. **NIH/PubMed** - Life cycle assessment studies
5. **H2O Global News** - Water consumption in textile industry
6. **Sustainability Directory** - Organic vs conventional cotton comparisons
7. **Organic Center** - GOTS certified organic cotton data
8. **MDPI** - Polyester recycling LCA studies

## Notes on Data Variability

- Carbon and water footprints vary significantly based on:
  - Geographic location (climate, irrigation needs)
  - Production methods (organic vs conventional, virgin vs recycled)
  - Processing techniques (dyeing, finishing)
  - System boundaries (cradle-to-gate vs cradle-to-grave)
  
- Our values represent **cradle-to-gate** estimates (raw material to factory gate)
- We use mid-range conservative estimates where data varies widely
- Garment weight assumed: 0.3 kg (300g) for average clothing item
