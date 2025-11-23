// Material database with sustainability scores (0-100)
// Material database with sustainability scores (0-100)
export const MATERIAL_DB = {
    'organic cotton': {
        score: 90,
        type: 'Natural',
        description: 'Grown without toxic pesticides or synthetic fertilizers, keeping soil healthy and water clean.',
        impact: 'Uses 91% less water than conventional cotton and produces 46% fewer greenhouse gas emissions.',
        water_intensity: 'Low',
        carbon_intensity: 'Low',
        biodegradable: 'Yes',
        carbon_kg: 1.8,  // kg CO2e per kg of fabric
        water_liters: 5000  // liters per kg of fabric
    },
    'recycled polyester': {
        score: 85,
        type: 'Recycled',
        description: 'Made from post-consumer plastic bottles, giving a second life to waste that would otherwise end up in landfills.',
        impact: 'Reduces energy consumption by 59% compared to virgin polyester and lowers carbon emissions.',
        water_intensity: 'Medium',
        carbon_intensity: 'Medium',
        biodegradable: 'No',
        carbon_kg: 3.5,  // 59% less than virgin polyester
        water_liters: 200
    },
    'hemp': {
        score: 95,
        type: 'Natural',
        description: 'One of the most eco-friendly fabrics. It grows quickly, requires little water, and naturally resists pests.',
        impact: 'Absorbs more CO2 per hectare than any forest or commercial crop. Returns nutrients to the soil.',
        water_intensity: 'Very Low',
        carbon_intensity: 'Very Low',
        biodegradable: 'Yes',
        carbon_kg: 0.8,  // Carbon negative crop
        water_liters: 2500
    },
    'linen': {
        score: 90,
        type: 'Natural',
        description: 'Made from the flax plant, linen is biodegradable, strong, and naturally moth resistant.',
        impact: 'Flax can grow in poor soil without irrigation. The entire plant is used, resulting in zero waste.',
        water_intensity: 'Low',
        carbon_intensity: 'Low',
        biodegradable: 'Yes',
        carbon_kg: 1.2,
        water_liters: 2500
    },
    'tencel': {
        score: 85,
        type: 'Semi-Synthetic',
        description: 'A brand of lyocell, made from sustainably sourced wood pulp in a closed-loop system.',
        impact: '99% of the water and solvents used in the process are recovered and reused.',
        water_intensity: 'Low',
        carbon_intensity: 'Low',
        biodegradable: 'Yes',
        carbon_kg: 2.0,
        water_liters: 1000
    },
    'lyocell': {
        score: 85,
        type: 'Semi-Synthetic',
        description: 'A cellulose fiber made from dissolving pulp (bleached wood pulp) using dry jet-wet spinning.',
        impact: 'Closed-loop production process recycles almost all solvents used.',
        water_intensity: 'Low',
        carbon_intensity: 'Low',
        biodegradable: 'Yes',
        carbon_kg: 2.0,
        water_liters: 1000
    },
    'cotton': {
        score: 60,
        type: 'Natural',
        description: 'The most common natural fiber, but conventional farming is resource-intensive.',
        impact: 'Requires heavy irrigation and accounts for 16% of global insecticide use.',
        water_intensity: 'High',
        carbon_intensity: 'Medium',
        biodegradable: 'Yes',
        carbon_kg: 5.5,  // Conventional cotton
        water_liters: 10000
    },
    'bamboo': {
        score: 80,
        type: 'Natural',
        description: 'Fast-growing grass that requires no fertilizer and self-regenerates from its own roots.',
        impact: 'Can be sustainable, but chemical processing (viscose method) can be harmful if not managed well.',
        water_intensity: 'Low',
        carbon_intensity: 'Low',
        biodegradable: 'Yes',
        carbon_kg: 2.5,
        water_liters: 3000
    },
    'polyester': {
        score: 30,
        type: 'Synthetic',
        description: 'A plastic-based fabric derived from petroleum. It is durable but environmentally costly.',
        impact: 'Energy-intensive production. Sheds microplastics into water systems with every wash.',
        water_intensity: 'Medium',
        carbon_intensity: 'High',
        biodegradable: 'No',
        carbon_kg: 8.5,  // Virgin polyester
        water_liters: 300
    },
    'nylon': {
        score: 25,
        type: 'Synthetic',
        description: 'A silky thermoplastic material. Very strong but produces nitrous oxide during manufacturing.',
        impact: 'Nitrous oxide is a greenhouse gas 300x more potent than CO2. Also sheds microplastics.',
        water_intensity: 'High',
        carbon_intensity: 'Very High',
        biodegradable: 'No',
        carbon_kg: 12.0,  // Very high due to N2O emissions
        water_liters: 500
    },
    'acrylic': {
        score: 20,
        type: 'Synthetic',
        description: 'A synthetic fiber made from polymers formed by acrylonitrile or vinyl cyanide.',
        impact: 'Production involves highly toxic chemicals. Releases huge amounts of microplastics.',
        water_intensity: 'Medium',
        carbon_intensity: 'High',
        biodegradable: 'No',
        carbon_kg: 10.0,
        water_liters: 400
    },
    'spandex': {
        score: 30,
        type: 'Synthetic',
        description: 'Known for its exceptional elasticity. Also known as elastane or Lycra.',
        impact: 'Petroleum-based and energy-intensive. Makes recycling blended fabrics very difficult.',
        water_intensity: 'Medium',
        carbon_intensity: 'Medium',
        biodegradable: 'No',
        carbon_kg: 6.5,  // Similar to polyester, petroleum-based
        water_liters: 350
    },
    'elastane': {
        score: 30,
        type: 'Synthetic',
        description: 'Another name for Spandex. Adds stretch to garments but complicates recycling.',
        impact: 'Derived from fossil fuels. Non-biodegradable and energy intensive to produce.',
        water_intensity: 'Medium',
        carbon_intensity: 'Medium',
        biodegradable: 'No',
        carbon_kg: 6.5,  // Same as spandex
        water_liters: 350
    },
    'viscose': {
        score: 40,
        type: 'Semi-Synthetic',
        description: 'Made from wood pulp, but often uses toxic chemicals like carbon disulfide in production.',
        impact: 'Can contribute to deforestation. Chemical waste often pollutes local water sources.',
        water_intensity: 'High',
        carbon_intensity: 'Medium',
        biodegradable: 'Yes',
        carbon_kg: 4.5,  // Semi-synthetic, chemical processing
        water_liters: 6000
    },
    'rayon': {
        score: 35,
        type: 'Semi-Synthetic',
        description: 'The first manufactured fiber, made from regenerated cellulose fiber.',
        impact: 'Similar to viscose, the production process is chemically intensive and polluting.',
        water_intensity: 'High',
        carbon_intensity: 'Medium',
        biodegradable: 'Yes',
        carbon_kg: 4.5,  // Similar to viscose
        water_liters: 6000
    },
    'wool': {
        score: 65,
        type: 'Animal',
        description: 'Natural fiber from sheep. Renewable and biodegradable, but methane emissions are an issue.',
        impact: 'Sheep produce methane (greenhouse gas). Overgrazing can lead to land degradation.',
        water_intensity: 'Medium',
        carbon_intensity: 'High',
        biodegradable: 'Yes',
        carbon_kg: 10.5,  // High due to methane emissions from sheep
        water_liters: 4500
    },
    'leather': {
        score: 40,
        type: 'Animal',
        description: 'Durable material from animal hides. Tanning process is often toxic.',
        impact: 'Cattle farming drives deforestation. Chromium tanning releases toxic chemicals.',
        water_intensity: 'Very High',
        carbon_intensity: 'Very High',
        biodegradable: 'Partially'
    },
    'silk': {
        score: 70,
        type: 'Animal',
        description: 'Natural protein fiber produced by silkworms. Low carbon footprint but energy intensive.',
        impact: 'Mulberry trees (food for silkworms) sequester carbon. Processing requires high energy.',
        water_intensity: 'High',
        carbon_intensity: 'Low',
        biodegradable: 'Yes',
        carbon_kg: 3.0,  // Lower carbon, but energy-intensive processing
        water_liters: 8000
    },
    // --- Natural Plant-Based ---
    'pima cotton': { score: 65, type: 'Natural', description: 'High-quality cotton with longer fibers. Durable but resource-intensive.', impact: 'Similar to conventional cotton, requires significant water and pesticides.', water_intensity: 'High', carbon_intensity: 'Medium', biodegradable: 'Yes', carbon_kg: 5.5, water_liters: 10000 },
    'egyptian cotton': { score: 65, type: 'Natural', description: 'Premium cotton from the Nile Delta. Luxurious but water-thirsty.', impact: 'Grown in arid regions requiring heavy irrigation.', water_intensity: 'Very High', carbon_intensity: 'Medium', biodegradable: 'Yes', carbon_kg: 6.0, water_liters: 12000 },
    'jute': { score: 95, type: 'Natural', description: 'The "Golden Fiber". Rain-fed crop with little need for fertilizer or pesticides.', impact: 'Absorbs CO2 and enriches the soil. Completely biodegradable.', water_intensity: 'Low', carbon_intensity: 'Very Low', biodegradable: 'Yes', carbon_kg: 0.7, water_liters: 2000 },
    'ramie': { score: 85, type: 'Natural', description: 'One of the oldest fiber crops. Strong, durable, and resistant to bacteria.', impact: 'Requires chemical processing to de-gum the fibers.', water_intensity: 'Medium', carbon_intensity: 'Low', biodegradable: 'Yes', carbon_kg: 1.5, water_liters: 3500 },
    'sisal': { score: 90, type: 'Natural', description: 'Derived from the agave plant. Very durable and renewable.', impact: 'Grows in arid lands, no pesticides needed.', water_intensity: 'Low', carbon_intensity: 'Low', biodegradable: 'Yes', carbon_kg: 1.0, water_liters: 2000 },
    'kapok': { score: 95, type: 'Natural', description: 'Silky fiber from the Ceiba tree fruit. Naturally buoyant and thermal.', impact: 'Wild harvested, no pesticides or irrigation needed.', water_intensity: 'Low', carbon_intensity: 'Very Low', biodegradable: 'Yes', carbon_kg: 0.6, water_liters: 1500 },
    'piña': { score: 90, type: 'Natural', description: 'Made from pineapple leaf fibers (agricultural waste).', impact: 'Upcycles waste product. No additional land or water needed.', water_intensity: 'Low', carbon_intensity: 'Low', biodegradable: 'Yes', carbon_kg: 0.9, water_liters: 1000 },
    'banana fiber': { score: 90, type: 'Natural', description: 'Extracted from banana tree stems (waste). Strong and biodegradable.', impact: 'Reduces agricultural waste. Minimal processing.', water_intensity: 'Low', carbon_intensity: 'Low', biodegradable: 'Yes', carbon_kg: 0.9, water_liters: 1000 },
    'nettle fiber': { score: 95, type: 'Natural', description: 'Wild-harvested or sustainably farmed. Similar to linen.', impact: 'Grows without pesticides or irrigation. Improves soil biodiversity.', water_intensity: 'Low', carbon_intensity: 'Very Low', biodegradable: 'Yes', carbon_kg: 0.8, water_liters: 2000 },
    'abaca': { score: 90, type: 'Natural', description: 'Manila hemp. Very strong and resistant to saltwater damage.', impact: 'Sustainable crop that prevents soil erosion.', water_intensity: 'Medium', carbon_intensity: 'Low', biodegradable: 'Yes', carbon_kg: 1.2, water_liters: 3000 },
    'coir': { score: 90, type: 'Natural', description: 'Fiber from coconut husks. Durable and rot-resistant.', impact: 'Utilizes waste product from coconut industry.', water_intensity: 'Low', carbon_intensity: 'Low', biodegradable: 'Yes', carbon_kg: 1.0, water_liters: 1500 },

    // --- Natural Animal-Based ---
    'merino wool': { score: 70, type: 'Animal', description: 'Fine, soft wool. Renewable but land-intensive.', impact: 'Methane emissions from sheep. Land use concerns.', water_intensity: 'Medium', carbon_intensity: 'High', biodegradable: 'Yes', carbon_kg: 10.5, water_liters: 4500 },
    'lambswool': { score: 70, type: 'Animal', description: 'Soft wool from the first shearing. Renewable.', impact: 'Similar impact to general wool.', water_intensity: 'Medium', carbon_intensity: 'High', biodegradable: 'Yes', carbon_kg: 10.5, water_liters: 4500 },
    'cashmere': { score: 50, type: 'Animal', description: 'Soft fiber from cashmere goats. High demand causes overgrazing.', impact: 'Overgrazing leads to desertification in Mongolia/China.', water_intensity: 'Medium', carbon_intensity: 'High', biodegradable: 'Yes', carbon_kg: 12.0, water_liters: 5000 },
    'mohair': { score: 55, type: 'Animal', description: 'From Angora goats. Durable and lustrous.', impact: 'Land degradation issues. Ethical concerns in some supply chains.', water_intensity: 'Medium', carbon_intensity: 'High', biodegradable: 'Yes', carbon_kg: 11.0, water_liters: 4800 },
    'alpaca': { score: 75, type: 'Animal', description: 'Soft, warm fiber. Alpacas are gentle on the land (soft pads, not hooves).', impact: 'More efficient than sheep. Lower methane emissions.', water_intensity: 'Low', carbon_intensity: 'Medium', biodegradable: 'Yes', carbon_kg: 7.0, water_liters: 3500 },
    'angora': { score: 40, type: 'Animal', description: 'From Angora rabbits. Extremely soft.', impact: 'Major ethical concerns regarding animal welfare (plucking).', water_intensity: 'Medium', carbon_intensity: 'Medium', biodegradable: 'Yes', carbon_kg: 6.0, water_liters: 4000 },
    'camel hair': { score: 70, type: 'Animal', description: 'Collected when camels molt naturally.', impact: 'Sustainable harvesting, but livestock impact exists.', water_intensity: 'Low', carbon_intensity: 'Medium', biodegradable: 'Yes', carbon_kg: 7.5, water_liters: 3800 },
    'vicuña': { score: 80, type: 'Animal', description: 'Rare, wild-harvested wool. Extremely fine.', impact: 'Wild animals sheared alive and released. Sustainable management key.', water_intensity: 'Low', carbon_intensity: 'Low', biodegradable: 'Yes', carbon_kg: 4.0, water_liters: 2500 },
    'llama': { score: 75, type: 'Animal', description: 'Coarser than alpaca but very durable.', impact: 'Low environmental footprint.', water_intensity: 'Low', carbon_intensity: 'Medium', biodegradable: 'Yes', carbon_kg: 7.0, water_liters: 3500 },
    'qiviut': { score: 80, type: 'Animal', description: 'Underwool of the musk ox. Warmer than wool.', impact: 'Sustainably harvested from wild or farmed herds.', water_intensity: 'Low', carbon_intensity: 'Low', biodegradable: 'Yes', carbon_kg: 5.0, water_liters: 3000 },
    'yak wool': { score: 75, type: 'Animal', description: 'Soft undercoat of yaks. Renewable.', impact: 'Low impact traditional herding.', water_intensity: 'Low', carbon_intensity: 'Medium', biodegradable: 'Yes', carbon_kg: 7.5, water_liters: 3800 },
    'cowhide': { score: 40, type: 'Animal', description: 'Standard leather. Byproduct of meat industry but tanning is toxic.', impact: 'High carbon footprint (cattle). Chrome tanning pollution.', water_intensity: 'Very High', carbon_intensity: 'Very High', biodegradable: 'Partially', carbon_kg: 17.0, water_liters: 17000 },
    'sheepskin': { score: 40, type: 'Animal', description: 'Leather with wool attached.', impact: 'Similar to leather/wool impacts.', water_intensity: 'High', carbon_intensity: 'High', biodegradable: 'Partially', carbon_kg: 14.0, water_liters: 12000 },
    'suede': { score: 40, type: 'Animal', description: 'Underside of animal skin. Soft but fragile.', impact: 'Same environmental costs as leather.', water_intensity: 'Very High', carbon_intensity: 'Very High', biodegradable: 'Partially', carbon_kg: 17.0, water_liters: 17000 },
    'fur': { score: 10, type: 'Animal', description: 'Animal pelt with hair. High ethical and environmental cost.', impact: 'Energy intensive processing. Ethical concerns.', water_intensity: 'High', carbon_intensity: 'High', biodegradable: 'Yes', carbon_kg: 15.0, water_liters: 10000 },
    'shearling': { score: 40, type: 'Animal', description: 'Sheepskin tanned with wool left on.', impact: 'Tanning chemicals and livestock impact.', water_intensity: 'High', carbon_intensity: 'High', biodegradable: 'Partially', carbon_kg: 14.0, water_liters: 12000 },
    'down': { score: 50, type: 'Animal', description: 'Duck/goose feathers. Natural insulator.', impact: 'Live-plucking ethical concerns. Processing water use.', water_intensity: 'High', carbon_intensity: 'Medium', biodegradable: 'Yes', carbon_kg: 6.0, water_liters: 7000 },
    'feathers': { score: 50, type: 'Animal', description: 'Decorative or insulating.', impact: 'Ethical concerns.', water_intensity: 'Medium', carbon_intensity: 'Medium', biodegradable: 'Yes', carbon_kg: 5.0, water_liters: 5000 },

    // --- Semi-Synthetic/Cellulose-Based ---
    'modal': { score: 60, type: 'Semi-Synthetic', description: 'Type of rayon from beech trees. Softer and more durable.', impact: 'Beech trees require less water, but chemical processing is needed.', water_intensity: 'Medium', carbon_intensity: 'Medium', biodegradable: 'Yes', carbon_kg: 3.5, water_liters: 5000 },
    'cupro': { score: 65, type: 'Semi-Synthetic', description: 'Regenerated cellulose from cotton linter (waste).', impact: 'Uses waste product, but production uses copper and ammonia.', water_intensity: 'High', carbon_intensity: 'Medium', biodegradable: 'Yes', carbon_kg: 3.0, water_liters: 7000 },
    'acetate': { score: 35, type: 'Semi-Synthetic', description: 'Wood pulp processed with acetic acid.', impact: 'Chemical intensive. Often not biodegradable due to additives.', water_intensity: 'High', carbon_intensity: 'Medium', biodegradable: 'No', carbon_kg: 5.0, water_liters: 7500 },
    'triacetate': { score: 30, type: 'Semi-Synthetic', description: 'Chemically treated acetate. More heat resistant.', impact: 'Heavy chemical use. Not biodegradable.', water_intensity: 'High', carbon_intensity: 'High', biodegradable: 'No', carbon_kg: 5.5, water_liters: 8000 },

    // --- Synthetic/Petroleum-Based ---
    'polypropylene': { score: 40, type: 'Synthetic', description: 'Thermoplastic polymer. Lightweight and moisture wicking.', impact: 'Fossil fuel based. Recyclable but often isn\'t.', water_intensity: 'Low', carbon_intensity: 'Medium', biodegradable: 'No', carbon_kg: 6.0, water_liters: 250 },
    'olefin': { score: 40, type: 'Synthetic', description: 'Another name for polypropylene/polyethylene fibers.', impact: 'Low energy to produce but plastic based.', water_intensity: 'Low', carbon_intensity: 'Medium', biodegradable: 'No', carbon_kg: 6.0, water_liters: 250 },
    'polyethylene': { score: 35, type: 'Synthetic', description: 'Common plastic. Used in some textiles.', impact: 'Fossil fuel based. Microplastic pollution.', water_intensity: 'Low', carbon_intensity: 'Medium', biodegradable: 'No', carbon_kg: 5.5, water_liters: 200 },
    'pvc': { score: 10, type: 'Synthetic', description: 'Polyvinyl Chloride. "Vinyl" clothing.', impact: 'Releases toxic chlorine/dioxins during production and disposal.', water_intensity: 'Medium', carbon_intensity: 'Very High', biodegradable: 'No', carbon_kg: 14.0, water_liters: 600 },
    'vinyl': { score: 10, type: 'Synthetic', description: 'PVC fabric. Shiny and waterproof.', impact: 'Highly toxic lifecycle.', water_intensity: 'Medium', carbon_intensity: 'Very High', biodegradable: 'No', carbon_kg: 14.0, water_liters: 600 },
    'lurex': { score: 20, type: 'Synthetic', description: 'Yarn with metallic appearance. Plastic/metal laminate.', impact: 'Impossible to recycle. Microplastic shedding.', water_intensity: 'Medium', carbon_intensity: 'High', biodegradable: 'No', carbon_kg: 9.0, water_liters: 400 },
    'kevlar': { score: 40, type: 'Synthetic', description: 'High-strength synthetic fiber.', impact: 'Energy intensive production. Durable (long life).', water_intensity: 'High', carbon_intensity: 'High', biodegradable: 'No', carbon_kg: 11.0, water_liters: 800 },
    'gore-tex': { score: 20, type: 'Synthetic', description: 'Waterproof membrane (PTFE).', impact: 'Often uses PFAS ("forever chemicals"). Very hard to recycle.', water_intensity: 'High', carbon_intensity: 'High', biodegradable: 'No', carbon_kg: 13.0, water_liters: 900 },
    'fleece': { score: 30, type: 'Synthetic', description: 'Soft insulating fabric, usually polyester.', impact: 'Major source of microplastic pollution in oceans.', water_intensity: 'Medium', carbon_intensity: 'High', biodegradable: 'No', carbon_kg: 8.5, water_liters: 300 },

    // --- Specialty & Emerging ---
    'vegan leather': { score: 60, type: 'Synthetic', description: 'Often PU or PVC based (plastic).', impact: 'Cruelty-free but often plastic pollution. Check for bio-based.', water_intensity: 'Medium', carbon_intensity: 'Medium', biodegradable: 'No', carbon_kg: 7.0, water_liters: 500 },
    'mushroom leather': { score: 90, type: 'Specialty', description: 'Mycelium-based leather alternative.', impact: 'Grown in labs/vertical farms. Low land/water use. Biodegradable.', water_intensity: 'Low', carbon_intensity: 'Low', biodegradable: 'Yes', carbon_kg: 1.5, water_liters: 800 },
    'cactus leather': { score: 85, type: 'Specialty', description: 'Made from Nopal cactus.', impact: 'Cactus needs little water. Partial plastic binders often used.', water_intensity: 'Very Low', carbon_intensity: 'Low', biodegradable: 'Partially', carbon_kg: 2.0, water_liters: 600 },
    'apple leather': { score: 80, type: 'Specialty', description: 'Made from apple juice industry waste.', impact: 'Upcycles waste. Usually mixed with PU (plastic).', water_intensity: 'Low', carbon_intensity: 'Low', biodegradable: 'Partially', carbon_kg: 2.5, water_liters: 700 },
    'seacell': { score: 90, type: 'Specialty', description: 'Lyocell embedded with seaweed.', impact: 'Seaweed is renewable and regenerative.', water_intensity: 'Low', carbon_intensity: 'Low', biodegradable: 'Yes', carbon_kg: 1.8, water_liters: 1000 },
    'soy fiber': { score: 80, type: 'Specialty', description: 'Protein fiber from soybean waste (tofu production).', impact: 'Upcycles waste. Chemical processing required.', water_intensity: 'Medium', carbon_intensity: 'Low', biodegradable: 'Yes', carbon_kg: 2.0, water_liters: 3500 },
    'milk fiber': { score: 70, type: 'Specialty', description: 'Made from waste milk casein.', impact: 'Uses dairy waste but chemical intensive.', water_intensity: 'High', carbon_intensity: 'Medium', biodegradable: 'Yes', carbon_kg: 4.0, water_liters: 6000 },
    'spider silk': { score: 85, type: 'Specialty', description: 'Lab-grown protein fiber mimicking spider silk.', impact: 'Fermentation based. No animals involved. Strong and biodegradable.', water_intensity: 'Low', carbon_intensity: 'Low', biodegradable: 'Yes', carbon_kg: 2.5, water_liters: 1200 },
    'recycled ocean plastic': { score: 90, type: 'Recycled', description: 'Plastic harvested from oceans/beaches.', impact: 'Cleans up environment. Energy intensive recycling.', water_intensity: 'Medium', carbon_intensity: 'Low', biodegradable: 'No', carbon_kg: 4.0, water_liters: 250 },
    'cork': { score: 95, type: 'Natural', description: 'Bark of cork oak. Harvested without killing tree.', impact: 'Trees absorb more CO2 after harvesting. Renewable.', water_intensity: 'Low', carbon_intensity: 'Very Low', biodegradable: 'Yes', carbon_kg: 0.5, water_liters: 1000 },
};

// Certification and Ethics database with bonus scores and badge levels
export const CERTIFICATION_DB = {
    // === PRESTIGIOUS CERTIFICATIONS (Badge Level) ===
    'certified b corporation': {
        name: 'Certified B Corporation',
        score: 20,
        badge: 'prestigious',
        description: 'Meets the highest standards of verified social and environmental performance, public transparency, and legal accountability to balance profit and purpose.',
        details: 'B Corps are legally required to consider the impact of their decisions on workers, customers, suppliers, community, and the environment.'
    },
    'fair trade certified': {
        name: 'Fair Trade Certified',
        score: 18,
        badge: 'prestigious',
        description: 'Ensures fair wages, safe working conditions, and sustainable practices for farmers and workers in developing countries.',
        details: 'Prohibits child labor, forced labor, and discrimination while promoting environmental sustainability and community development.'
    },
    'global organic textile standard': {
        name: 'Global Organic Textile Standard',
        score: 20,
        badge: 'prestigious',
        description: 'The world\'s leading textile processing standard for organic fibers, covering ecological and social criteria throughout the entire supply chain.',
        details: 'Requires organic status of textiles, prohibits toxic inputs, ensures social compliance, and mandates environmental management.'
    },

    // === STRONG CERTIFICATIONS ===
    'bluesign approved': {
        name: 'bluesign® Approved',
        score: 15,
        badge: 'strong',
        description: 'Ensures responsible use of resources, eliminates harmful substances, and provides safer working environments.',
        details: 'Covers the entire textile supply chain from raw materials to finished product with strict chemical management.'
    },
    'global recycled standard': {
        name: 'Global Recycled Standard',
        score: 12,
        badge: 'strong',
        description: 'Verifies recycled content in products and tracks responsible social, environmental, and chemical practices.',
        details: 'Requires minimum 20% recycled content and certification of the entire supply chain.'
    },
    'oeko-tex standard 100': {
        name: 'OEKO-TEX® Standard 100',
        score: 10,
        badge: 'strong',
        description: 'Certifies that textiles are tested and free from harmful substances at every production stage.',
        details: 'Tests for over 100 harmful substances, going beyond national and international requirements.'
    },
    'cradle to cradle certified': {
        name: 'Cradle to Cradle Certified',
        score: 15,
        badge: 'strong',
        description: 'Measures achievement across five categories: material health, material reuse, renewable energy, water stewardship, and social fairness.',
        details: 'Products are designed for circular economy, ensuring materials can be safely returned to nature or industry.'
    },

    // === GOOD CERTIFICATIONS ===
    'peta-approved vegan': {
        name: 'PETA-Approved Vegan',
        score: 8,
        badge: 'good',
        description: 'Certifies that no animal-derived materials or by-products were used in manufacturing.',
        details: 'Ensures cruelty-free production without animal testing or animal-derived ingredients.'
    },
    'organic certified': {
        name: 'Organic Certified',
        score: 10,
        badge: 'good',
        description: 'Materials grown without synthetic pesticides, fertilizers, or GMOs.',
        details: 'Promotes soil health, biodiversity, and reduces environmental pollution.'
    },
    'recycled content': {
        name: 'Recycled Content',
        score: 8,
        badge: 'good',
        description: 'Contains materials diverted from waste streams and reprocessed into new products.',
        details: 'Reduces virgin resource extraction and energy consumption.'
    },
    'carbon neutral certified': {
        name: 'Carbon Neutral Certified',
        score: 10,
        badge: 'good',
        description: 'Company offsets 100% of its carbon emissions through verified carbon reduction projects.',
        details: 'Measures, reduces, and offsets greenhouse gas emissions across operations.'
    },

    // === NEGATIVE PRACTICES (Warning Level) ===
    'fast fashion': {
        name: 'Fast Fashion Model',
        score: -15,
        badge: 'warning',
        description: 'Business model based on rapid production of high volumes of cheap clothing, often with poor labor conditions.',
        details: 'Contributes to overproduction, waste, and exploitation of workers in developing countries.'
    },
    'ultra fast fashion': {
        name: 'Ultra Fast Fashion',
        score: -25,
        badge: 'critical',
        description: 'Extreme fast fashion with daily new styles, rock-bottom prices, and severe environmental and social concerns.',
        details: 'Often involves forced labor, toxic chemicals, and massive textile waste. Prioritizes speed and cost over all else.'
    },
    'no transparency': {
        name: 'No Supply Chain Transparency',
        score: -10,
        badge: 'warning',
        description: 'Company does not disclose information about suppliers, working conditions, or environmental practices.',
        details: 'Lack of transparency often indicates poor labor practices and environmental standards.'
    },
    'greenwashing': {
        name: 'Greenwashing Concerns',
        score: -8,
        badge: 'warning',
        description: 'Misleading marketing claims about environmental benefits without substantive action or verification.',
        details: 'Uses vague terms like "eco-friendly" without third-party certification or measurable impact.'
    }
};

// Retailer database with base scores
const RETAILER_DB = {
    // --- Fast Fashion ---
    'zara.com': { score: 35, ethics: 'Fast Fashion Giant', company: 'Zara' },
    'hm.com': { score: 40, ethics: 'Fast Fashion - Improving', company: 'H&M' },
    'forever21.com': { score: 20, ethics: 'Fast Fashion', company: 'Forever 21' },
    'shein.com': { score: 10, ethics: 'Ultra Fast Fashion', company: 'Shein' },
    'temu.com': { score: 10, ethics: 'Ultra Fast Fashion', company: 'Temu' },
    'boohoo.com': { score: 15, ethics: 'Fast Fashion', company: 'Boohoo' },
    'prettylittlething.com': { score: 15, ethics: 'Fast Fashion', company: 'PrettyLittleThing' },
    'fashionnova.com': { score: 15, ethics: 'Ultra Fast Fashion', company: 'Fashion Nova' },
    'missguided.com': { score: 20, ethics: 'Fast Fashion', company: 'Missguided' },
    'asos.com': { score: 40, ethics: 'Fast Fashion Marketplace', company: 'ASOS' },
    'primark.com': { score: 30, ethics: 'Fast Fashion', company: 'Primark' },
    'uniqlo.com': { score: 40, ethics: 'Fast Fashion - Basics', company: 'Uniqlo' },
    'gap.com': { score: 50, ethics: 'Mass Market', company: 'Gap' },
    'oldnavy.gap.com': { score: 40, ethics: 'Fast Fashion', company: 'Old Navy' },
    'topshop.com': { score: 35, ethics: 'Fast Fashion', company: 'Topshop' },
    'urbanoutfitters.com': { score: 35, ethics: 'Fast Fashion', company: 'Urban Outfitters' },
    'ae.com': { score: 45, ethics: 'Mass Market', company: 'American Eagle' },
    'abercrombie.com': { score: 45, ethics: 'Mass Market', company: 'Abercrombie & Fitch' },
    'hollisterco.com': { score: 40, ethics: 'Mass Market', company: 'Hollister' },

    // --- Mid-Market ---
    'jcrew.com': { score: 50, ethics: 'Standard Practices', company: 'J.Crew' },
    'bananarepublic.gap.com': { score: 50, ethics: 'Standard Practices', company: 'Banana Republic' },
    'madewell.com': { score: 55, ethics: 'Denim Focus', company: 'Madewell' },
    'anthropologie.com': { score: 40, ethics: 'Lack of Transparency', company: 'Anthropologie' },
    'freepeople.com': { score: 40, ethics: 'Lack of Transparency', company: 'Free People' },
    'cos.com': { score: 55, ethics: 'Sustainable Initiatives', company: 'COS' },
    'stories.com': { score: 50, ethics: 'Sustainable Initiatives', company: '& Other Stories' },
    'ganni.com': { score: 70, ethics: 'Responsibility Focus', company: 'Ganni' },
    'mango.com': { score: 45, ethics: 'Fast Fashion - Improving', company: 'Mango' },
    'boden.co.uk': { score: 60, ethics: 'Ethical Sourcing', company: 'Boden' },
    'llbean.com': { score: 60, ethics: 'Durable Goods', company: 'L.L.Bean' },
    'landsend.com': { score: 50, ethics: 'Standard Practices', company: 'Lands\' End' },
    'eddiebauer.com': { score: 55, ethics: 'Outdoor Heritage', company: 'Eddie Bauer' },
    'jjill.com': { score: 50, ethics: 'Standard Practices', company: 'J.Jill' },
    'chicos.com': { score: 50, ethics: 'Standard Practices', company: 'Chico\'s' },
    'anntaylor.com': { score: 45, ethics: 'Standard Practices', company: 'Ann Taylor' },
    'loft.com': { score: 45, ethics: 'Standard Practices', company: 'Loft' },

    // --- Luxury ---
    'louisvuitton.com': { score: 50, ethics: 'Luxury Conglomerate', company: 'Louis Vuitton' },
    'gucci.com': { score: 65, ethics: 'Kering Sustainability', company: 'Gucci' },
    'chanel.com': { score: 50, ethics: 'Luxury Heritage', company: 'Chanel' },
    'hermes.com': { score: 60, ethics: 'Artisanal Quality', company: 'Hermès' },
    'prada.com': { score: 55, ethics: 'Re-Nylon Initiatives', company: 'Prada' },
    'dior.com': { score: 50, ethics: 'Luxury Conglomerate', company: 'Dior' },
    'burberry.com': { score: 65, ethics: 'Sustainability Goals', company: 'Burberry' },
    'versace.com': { score: 50, ethics: 'Luxury Fashion', company: 'Versace' },
    'armani.com': { score: 50, ethics: 'Luxury Fashion', company: 'Armani' },
    'dolcegabbana.com': { score: 40, ethics: 'Transparency Issues', company: 'Dolce & Gabbana' },
    'balenciaga.com': { score: 60, ethics: 'Kering Sustainability', company: 'Balenciaga' },
    'ysl.com': { score: 60, ethics: 'Kering Sustainability', company: 'Saint Laurent' },
    'valentino.com': { score: 55, ethics: 'Luxury Fashion', company: 'Valentino' },
    'givenchy.com': { score: 50, ethics: 'Luxury Conglomerate', company: 'Givenchy' },
    'fendi.com': { score: 50, ethics: 'Luxury Conglomerate', company: 'Fendi' },
    'bottegaveneta.com': { score: 60, ethics: 'Kering Sustainability', company: 'Bottega Veneta' },
    'celine.com': { score: 50, ethics: 'Luxury Conglomerate', company: 'Celine' },
    'loewe.com': { score: 55, ethics: 'Luxury Craftsmanship', company: 'Loewe' },
    'alexandermcqueen.com': { score: 60, ethics: 'Kering Sustainability', company: 'Alexander McQueen' },
    'stellamccartney.com': { score: 85, ethics: 'Sustainable Luxury', company: 'Stella McCartney' },

    // --- Athletic ---
    'nike.com': { score: 60, ethics: 'Move to Zero', company: 'Nike' },
    'adidas.com': { score: 65, ethics: 'Ocean Plastic Initiatives', company: 'Adidas' },
    'puma.com': { score: 60, ethics: 'Sustainability Goals', company: 'Puma' },
    'underarmour.com': { score: 50, ethics: 'Standard Practices', company: 'Under Armour' },
    'lululemon.com': { score: 55, ethics: 'Transparency Issues', company: 'Lululemon' },
    'athleta.gap.com': { score: 80, ethics: 'B Corp Certified', company: 'Athleta' },
    'reebok.com': { score: 55, ethics: 'Standard Practices', company: 'Reebok' },
    'newbalance.com': { score: 55, ethics: 'Standard Practices', company: 'New Balance' },
    'asics.com': { score: 60, ethics: 'Sustainability Goals', company: 'Asics' },
    'fila.com': { score: 45, ethics: 'Standard Practices', company: 'Fila' },
    'champion.com': { score: 45, ethics: 'Standard Practices', company: 'Champion' },
    'columbia.com': { score: 65, ethics: 'Outdoor Standards', company: 'Columbia' },
    'thenorthface.com': { score: 70, ethics: 'Renewed Program', company: 'The North Face' },
    'arcteryx.com': { score: 75, ethics: 'Durable/Repair Focus', company: 'Arc\'teryx' },
    'salomon.com': { score: 65, ethics: 'Outdoor Standards', company: 'Salomon' },
    'hoka.com': { score: 60, ethics: 'Standard Practices', company: 'Hoka' },
    'on-running.com': { score: 65, ethics: 'Sustainability Focus', company: 'On Running' },
    'gymshark.com': { score: 50, ethics: 'Activewear', company: 'Gymshark' },
    'aloyoga.com': { score: 50, ethics: 'Activewear', company: 'Alo Yoga' },
    'vuoriclothing.com': { score: 70, ethics: 'Climate Neutral', company: 'Vuori' },
    'outdoorvoices.com': { score: 65, ethics: 'Sustainable Materials', company: 'Outdoor Voices' },

    // --- Outdoor ---
    'patagonia.com': { score: 95, ethics: 'Industry Leader', company: 'Patagonia' },
    'rei.com': { score: 85, ethics: 'Co-op Model', company: 'REI' },
    'fjallraven.com': { score: 85, ethics: 'Durable/Sustainable', company: 'Fjällräven' },
    'hellyhansen.com': { score: 70, ethics: 'Ocean Focus', company: 'Helly Hansen' },
    'mountainhardwear.com': { score: 65, ethics: 'Outdoor Standards', company: 'Mountain Hardwear' },
    'mammut.com': { score: 75, ethics: 'Bluesign Partner', company: 'Mammut' },
    'blackdiamond.com': { score: 70, ethics: 'Outdoor Standards', company: 'Black Diamond' },
    'merrell.com': { score: 60, ethics: 'Standard Practices', company: 'Merrell' },
    'timberland.com': { score: 70, ethics: 'Tree Planting', company: 'Timberland' },
    'carhartt.com': { score: 55, ethics: 'Durable Workwear', company: 'Carhartt' },
    'dickies.com': { score: 50, ethics: 'Workwear', company: 'Dickies' },
    'duluthtrading.com': { score: 55, ethics: 'Durable Goods', company: 'Duluth Trading' },

    // --- Denim ---
    'levi.com': { score: 70, ethics: 'Water<Less Tech', company: 'Levi\'s' },
    'wrangler.com': { score: 55, ethics: 'Standard Practices', company: 'Wrangler' },
    'lee.com': { score: 55, ethics: 'Standard Practices', company: 'Lee' },
    'diesel.com': { score: 55, ethics: 'Sustainability Strategy', company: 'Diesel' },
    'g-star.com': { score: 75, ethics: 'Cradle to Cradle', company: 'G-Star Raw' },
    'truereligion.com': { score: 40, ethics: 'Standard Practices', company: 'True Religion' },
    '7forallmankind.com': { score: 50, ethics: 'Standard Practices', company: '7 For All Mankind' },
    'citizensofhumanity.com': { score: 60, ethics: 'Vertical Integration', company: 'Citizens of Humanity' },
    'agjeans.com': { score: 60, ethics: 'Water Recycling', company: 'AG Jeans' },
    'rag-bone.com': { score: 55, ethics: 'Standard Practices', company: 'Rag & Bone' },

    // --- Department/Multi-Brand ---
    'nordstrom.com': { score: 50, ethics: 'Sustainable Style Category', company: 'Nordstrom' },
    'macys.com': { score: 40, ethics: 'Mass Market', company: 'Macy\'s' },
    'bloomingdales.com': { score: 40, ethics: 'Mass Market', company: 'Bloomingdale\'s' },
    'saksfifthavenue.com': { score: 40, ethics: 'Luxury Retailer', company: 'Saks Fifth Avenue' },
    'neimanmarcus.com': { score: 40, ethics: 'Luxury Retailer', company: 'Neiman Marcus' },
    'dillards.com': { score: 40, ethics: 'Mass Market', company: 'Dillard\'s' },
    'kohls.com': { score: 40, ethics: 'Mass Market', company: 'Kohl\'s' },
    'jcpenney.com': { score: 35, ethics: 'Mass Market', company: 'JCPenney' },
    'target.com': { score: 50, ethics: 'Target Forward', company: 'Target' },
    'walmart.com': { score: 35, ethics: 'Mass Market', company: 'Walmart' },
    'costco.com': { score: 50, ethics: 'Bulk/Efficiency', company: 'Costco' },
    'tjmaxx.tjx.com': { score: 40, ethics: 'Off-Price', company: 'TJ Maxx' },
    'marshalls.com': { score: 40, ethics: 'Off-Price', company: 'Marshalls' },
    'rossstores.com': { score: 35, ethics: 'Off-Price', company: 'Ross' },
    'burlington.com': { score: 35, ethics: 'Off-Price', company: 'Burlington' },

    // --- Online ---
    'amazon.com': { score: 35, ethics: 'Marketplace - Mixed', company: 'Amazon' },
    'zalando.com': { score: 60, ethics: 'Sustainability Flag', company: 'Zalando' },
    'revolve.com': { score: 30, ethics: 'Fast Fashion Marketplace', company: 'Revolve' },
    'farfetch.com': { score: 55, ethics: 'Conscious Edit', company: 'Farfetch' },
    'net-a-porter.com': { score: 55, ethics: 'Net Sustain', company: 'Net-a-Porter' },
    'ssense.com': { score: 50, ethics: 'Luxury Marketplace', company: 'SSENSE' },
    'matchesfashion.com': { score: 50, ethics: 'Luxury Marketplace', company: 'Matches Fashion' },
    'mytheresa.com': { score: 50, ethics: 'Luxury Marketplace', company: 'Mytheresa' },
    '24s.com': { score: 50, ethics: 'Luxury Marketplace', company: '24S' },
    'shopbop.com': { score: 40, ethics: 'Amazon Subsidiary', company: 'Shopbop' },

    // --- Sustainable ---
    'eileenfisher.com': { score: 90, ethics: 'Circular Systems', company: 'Eileen Fisher' },
    'wearpact.com': { score: 85, ethics: 'Fair Trade Certified, Global Organic Textile Standard, Organic Certified, Carbon Neutral Certified', company: 'Pact' },
    'wearethought.com': { score: 85, ethics: 'Natural Fabrics', company: 'Thought Clothing' },
    'peopletree.co.uk': { score: 90, ethics: 'Fair Trade Pioneer', company: 'People Tree' },
    'kowtowclothing.com': { score: 90, ethics: 'Fair Trade Organic', company: 'Kowtow' },
    'outerknown.com': { score: 85, ethics: 'Ocean Protection', company: 'Outerknown' },
    'allbirds.com': { score: 80, ethics: 'Carbon Neutral', company: 'Allbirds' },
    'veja-store.com': { score: 85, ethics: 'Ethical Sourcing', company: 'Veja' },
    'nisolo.com': { score: 85, ethics: 'Living Wages', company: 'Nisolo' },
    'girlfriend.com': { score: 85, ethics: 'Recycled Materials', company: 'Girlfriend Collective' },
    'organicbasics.com': { score: 85, ethics: 'Eco-Friendly Basics', company: 'Organic Basics' },
    'pangaia.com': { score: 80, ethics: 'Material Science', company: 'Pangaia' },
    'tentree.com': { score: 90, ethics: 'Tree Planting', company: 'Tentree' },
    'prana.com': { score: 75, ethics: 'Fair Trade', company: 'prAna' },
    'indigenous.com': { score: 85, ethics: 'Fair Trade', company: 'Indigenous' },
    'matethelabel.com': { score: 85, ethics: 'Organic/Non-Toxic', company: 'MATE the Label' },
    'amourvert.com': { score: 80, ethics: 'Sustainable Practices', company: 'Amour Vert' },
    'everlane.com': { score: 75, ethics: 'Transparent Pricing', company: 'Everlane' },
    'reformation.com': { score: 80, ethics: 'Sustainable Focus', company: 'Reformation' },

    // --- Footwear ---
    'skechers.com': { score: 40, ethics: 'Standard Practices', company: 'Skechers' },
    'crocs.com': { score: 45, ethics: 'Bio-based Materials', company: 'Crocs' },
    'drmartens.com': { score: 55, ethics: 'Durability', company: 'Dr. Martens' },
    'vans.com': { score: 50, ethics: 'Standard Practices', company: 'Vans' },
    'converse.com': { score: 50, ethics: 'Nike Subsidiary', company: 'Converse' },
    'clarks.com': { score: 55, ethics: 'Standard Practices', company: 'Clarks' },
    'stevemadden.com': { score: 35, ethics: 'Fast Fashion Footwear', company: 'Steve Madden' },
    'dsw.com': { score: 40, ethics: 'Retailer', company: 'DSW' },
    'footlocker.com': { score: 40, ethics: 'Retailer', company: 'Foot Locker' },
    'finishline.com': { score: 40, ethics: 'Retailer', company: 'Finish Line' },
    'zappos.com': { score: 45, ethics: 'Amazon Subsidiary', company: 'Zappos' },
    'stuartweitzman.com': { score: 50, ethics: 'Luxury Footwear', company: 'Stuart Weitzman' },
    'jimmychoo.com': { score: 50, ethics: 'Luxury Footwear', company: 'Jimmy Choo' },
    'manoloblahnik.com': { score: 50, ethics: 'Luxury Footwear', company: 'Manolo Blahnik' },
    'christianlouboutin.com': { score: 50, ethics: 'Luxury Footwear', company: 'Christian Louboutin' },
    'birkenstock.com': { score: 65, ethics: 'Durable/Natural', company: 'Birkenstock' },
    'ugg.com': { score: 50, ethics: 'Animal Materials', company: 'UGG' },
    'toms.com': { score: 70, ethics: 'B Corp', company: 'Toms' },
    'rothys.com': { score: 85, ethics: 'Recycled Plastic', company: 'Rothy\'s' },

    // --- Lingerie ---
    'victoriassecret.com': { score: 40, ethics: 'Improving Standards', company: 'Victoria\'s Secret' },
    'calvinklein.com': { score: 55, ethics: 'PVH Sustainability', company: 'Calvin Klein' },
    'tommyjohn.com': { score: 50, ethics: 'Standard Practices', company: 'Tommy John' },
    'thirdlove.com': { score: 50, ethics: 'Standard Practices', company: 'ThirdLove' },
    'savagex.com': { score: 40, ethics: 'Fast Fashion Model', company: 'Savage X Fenty' },
    'ae.com/aerie': { score: 60, ethics: 'Real Good Collection', company: 'Aerie' },
    'laperla.com': { score: 50, ethics: 'Luxury Lingerie', company: 'La Perla' },
    'agentprovocateur.com': { score: 50, ethics: 'Luxury Lingerie', company: 'Agent Provocateur' },
    'wacoal-america.com': { score: 50, ethics: 'Standard Practices', company: 'Wacoal' },
    'hankypanky.com': { score: 60, ethics: 'Made in USA', company: 'Hanky Panky' },
    'spanx.com': { score: 50, ethics: 'Standard Practices', company: 'Spanx' },
    'knix.com': { score: 65, ethics: 'Leakproof/Sustainable', company: 'Knix' },

    // --- Children ---
    'carters.com': { score: 45, ethics: 'Standard Practices', company: 'Carter\'s' },
    'oshkosh.com': { score: 45, ethics: 'Carter\'s Subsidiary', company: 'OshKosh B\'gosh' },
    'childrensplace.com': { score: 40, ethics: 'Standard Practices', company: 'The Children\'s Place' },
    'gap.com/browse/division.do?cid=5643': { score: 50, ethics: 'Gap Inc.', company: 'Gap Kids' },
    'gymboree.com': { score: 40, ethics: 'Standard Practices', company: 'Gymboree' },
    'hannaandersson.com': { score: 75, ethics: 'Organic Cotton/Durable', company: 'Hanna Andersson' },
    'teacollection.com': { score: 65, ethics: 'Global Inspired', company: 'Tea Collection' },
    'primary.com': { score: 70, ethics: 'OEKO-TEX Certified', company: 'Primary' },
    'boden.co.uk/en-gb/mini-boden': { score: 60, ethics: 'Boden Sustainability', company: 'Mini Boden' },
    'janieandjack.com': { score: 50, ethics: 'Standard Practices', company: 'Janie and Jack' },

    // --- Plus-Size ---
    'torrid.com': { score: 40, ethics: 'Fast Fashion', company: 'Torrid' },
    'lanebryant.com': { score: 45, ethics: 'Standard Practices', company: 'Lane Bryant' },
    'eloquii.com': { score: 45, ethics: 'Standard Practices', company: 'Eloquii' },
    'universalstandard.com': { score: 70, ethics: 'Inclusive/Quality', company: 'Universal Standard' },
    '11honore.com': { score: 55, ethics: 'Luxury Plus', company: '11 Honoré' },
    'navabi.com': { score: 50, ethics: 'Retailer', company: 'Navabi' },

    // --- Workwear ---
    'brooksbrothers.com': { score: 50, ethics: 'Standard Practices', company: 'Brooks Brothers' },
    'hugoboss.com': { score: 60, ethics: 'Sustainability Strategy', company: 'Hugo Boss' },
    'theory.com': { score: 60, ethics: 'Good Wool', company: 'Theory' },
    'reiss.com': { score: 50, ethics: 'Standard Practices', company: 'Reiss' },
    'tedbaker.com': { score: 55, ethics: 'Standard Practices', company: 'Ted Baker' },
    'paulsmith.com': { score: 60, ethics: 'Classic Quality', company: 'Paul Smith' },
    'mmlafleur.com': { score: 65, ethics: 'Durable/Quality', company: 'MM.LaFleur' },
    'suitsupply.com': { score: 65, ethics: 'Fair Wear Foundation', company: 'Suitsupply' },

    // --- Swimwear ---
    'speedo.com': { score: 55, ethics: 'Recycled Nylon', company: 'Speedo' },
    'arenasport.com': { score: 55, ethics: 'Standard Practices', company: 'Arena' },
    'tyr.com': { score: 50, ethics: 'Standard Practices', company: 'TYR' },
    'billabong.com': { score: 50, ethics: 'Recycled Collections', company: 'Billabong' },
    'roxy.com': { score: 50, ethics: 'Recycled Collections', company: 'Roxy' },
    'quiksilver.com': { score: 50, ethics: 'Recycled Collections', company: 'Quiksilver' },
    'vitaminaswim.com': { score: 80, ethics: 'Sustainable Swim', company: 'Vitamin A' },
    'summersalt.com': { score: 75, ethics: 'Recycled Materials', company: 'Summersalt' },
    'andieswim.com': { score: 65, ethics: 'Eco-Nylon', company: 'Andie' },

    // --- International ---
    'muji.com': { score: 70, ethics: 'Minimalist/Sustainable', company: 'Muji' },
    'superdry.com': { score: 65, ethics: 'Organic Cotton Goals', company: 'Superdry' },
    'next.co.uk': { score: 50, ethics: 'Standard Practices', company: 'Next' },
    'riverisland.com': { score: 40, ethics: 'Fast Fashion', company: 'River Island' },
    'newlook.com': { score: 35, ethics: 'Fast Fashion', company: 'New Look' },
    'c-and-a.com': { score: 65, ethics: 'Cradle to Cradle', company: 'C&A' },
    'peacocks.co.uk': { score: 30, ethics: 'Fast Fashion', company: 'Peacocks' },
    'bershka.com': { score: 35, ethics: 'Inditex', company: 'Bershka' },
    'pullandbear.com': { score: 35, ethics: 'Inditex', company: 'Pull&Bear' },
    'massimodutti.com': { score: 50, ethics: 'Inditex Premium', company: 'Massimo Dutti' },
    'stradivarius.com': { score: 35, ethics: 'Inditex', company: 'Stradivarius' },
    'oysho.com': { score: 45, ethics: 'Inditex', company: 'Oysho' },
};

export const recalculateScore = (currentMaterials) => {
    const domain = window.location.hostname.replace('www.', '');

    // 1. Calculate Material Score
    let totalMaterialScore = 0;
    let materialCount = 0;

    currentMaterials.forEach(m => {
        if (m.score) {
            totalMaterialScore += m.score;
            materialCount++;
        }
    });

    const materialScore = materialCount > 0 ? Math.round(totalMaterialScore / materialCount) : 50;

    // 2. Re-scan for certifications (we need to keep track of them, but for now we'll re-scan text or assume static)
    // Ideally, we should pass certifications in, but for this refactor we'll re-scan the page for certs since that doesn't change with manual material adds
    const text = document.body.innerText.toLowerCase();
    const foundCertifications = new Set();
    let certScoreBonus = 0;

    Object.keys(CERTIFICATION_DB).forEach(cert => {
        const regex = new RegExp(`\\b${cert}\\b`, 'i');
        if (regex.test(text)) {
            foundCertifications.add(CERTIFICATION_DB[cert].name);
            certScoreBonus += CERTIFICATION_DB[cert].score;
        }
    });

    const ethicsScore = Math.min(100, 50 + certScoreBonus);

    // 3. Check Retailer DB
    let retailerData = null;
    Object.keys(RETAILER_DB).forEach(d => {
        if (domain.includes(d) || d.includes(domain)) {
            retailerData = RETAILER_DB[d];
        }
    });

    // 4. Final Score
    let finalScore;
    if (retailerData) {
        finalScore = Math.round((retailerData.score * 0.5) + (materialScore * 0.3) + (ethicsScore * 0.2));
    } else {
        finalScore = Math.round((materialScore * 0.6) + (ethicsScore * 0.4));
    }

    const certsList = Array.from(foundCertifications);
    let ethicsText = retailerData ? retailerData.ethics : (foundCertifications.size > 0 ? certsList.join(', ') : (finalScore > 80 ? 'Eco-Friendly Practices' : 'Standard Practices'));

    if (foundCertifications.size > 0 && retailerData) {
        ethicsText = `${retailerData.ethics} • ${certsList.join(', ')}`;
    }

    // Calculate realistic carbon and water based on materials
    // Assume average garment weight: 0.3 kg (300g) for most clothing items
    const GARMENT_WEIGHT_KG = 0.3;

    let totalCarbon = 0;
    let totalWater = 0;
    let materialsWithData = 0;

    currentMaterials.forEach(material => {
        if (material.carbon_kg && material.water_liters) {
            totalCarbon += material.carbon_kg * GARMENT_WEIGHT_KG;
            totalWater += material.water_liters * GARMENT_WEIGHT_KG;
            materialsWithData++;
        }
    });

    // Common garment types to detect
    const PRODUCT_TYPES = [
        'T-Shirt', 'Shirt', 'Blouse', 'Top', 'Tank Top', 'Polo', 'Sweater', 'Cardigan', 'Hoodie', 'Sweatshirt',
        'Jeans', 'Pants', 'Trousers', 'Leggings', 'Joggers', 'Shorts', 'Skirt',
        'Dress', 'Jumpsuit', 'Romper',
        'Jacket', 'Coat', 'Blazer', 'Vest', 'Parka',
        'Underwear', 'Bra', 'Panties', 'Boxers', 'Briefs', 'Socks',
        'Swimwear', 'Bikini', 'Swimsuit',
        'Shoes', 'Sneakers', 'Boots', 'Sandals', 'Heels',
        'Bag', 'Backpack', 'Purse', 'Wallet',
        'Hat', 'Cap', 'Beanie', 'Scarf', 'Gloves'
    ];

    function detectProductType() {
        const textToScan = [
            document.title,
            document.querySelector('h1')?.innerText,
            document.querySelector('meta[property="og:title"]')?.content,
            document.querySelector('meta[name="title"]')?.content
        ].filter(Boolean).join(' ').toLowerCase();

        // Find the first matching product type (longest match first to avoid partials like "Shirt" matching "T-Shirt")
        // Sort types by length descending
        const sortedTypes = [...PRODUCT_TYPES].sort((a, b) => b.length - a.length);

        for (const type of sortedTypes) {
            if (textToScan.includes(type.toLowerCase())) {
                return type;
            }
        }

        return null;
    }

    // If we have material data, use it; otherwise fall back to score-based estimate
    let carbonValue, waterValue;
    if (materialsWithData > 0) {
        // Average if multiple materials
        carbonValue = Math.round(totalCarbon / materialsWithData * 10) / 10;  // Round to 1 decimal
        waterValue = Math.round(totalWater / materialsWithData);  // Convert to gallons (1L ≈ 0.264 gal, but keeping in liters for now)
    } else {
        // Fallback to old formula
        carbonValue = Math.round(100 - finalScore + 5);
        waterValue = Math.round((100 - finalScore) * 10);
    }

    // Context Logic - adjusted for realistic values
    const carbonContext = carbonValue < 2 ? 'Low' : carbonValue < 5 ? 'Medium' : 'High';
    const waterContext = waterValue < 1500 ? 'Low' : waterValue < 4000 ? 'Medium' : 'High';

    // Comparison Logic
    // 1 kg CO2e ~ 2.5 miles driving
    const driveMiles = Math.round(carbonValue * 2.5);
    // Convert liters to gallons for shower comparison (1 shower ~ 75 liters)
    const showers = Math.round(waterValue / 75);

    const isKnownRetailer = !!retailerData;
    const hasMaterials = currentMaterials.length > 0 && currentMaterials[0].type !== 'Unknown';
    const isApplicable = isKnownRetailer || hasMaterials;

    return {
        isApplicable,
        materials: currentMaterials,
        score: finalScore,
        carbonFootprint: `${carbonValue} kg CO2e`,
        waterUsage: `${waterValue} L`,  // Changed to liters
        metrics: {
            carbon: {
                value: carbonValue,
                context: carbonContext,
                comparison: `Equivalent to driving ${driveMiles} miles 🚗`,
                description: carbonContext === 'High' ? 'High emissions due to synthetic materials or production processes.' : 'Lower emissions from sustainable sourcing.'
            },
            water: {
                value: waterValue,
                context: waterContext,
                comparison: `Equivalent to ${showers} showers 🚿`,
                description: waterContext === 'High' ? 'High water usage typical of conventional cotton or dyeing.' : 'Water-efficient production methods.'
            }
        },
        company: retailerData ? retailerData.company : domain.charAt(0).toUpperCase() + domain.slice(1).split('.')[0],
        companyRating: finalScore >= 80 ? 'A' : finalScore >= 60 ? 'B' : finalScore >= 40 ? 'C' : finalScore >= 20 ? 'D' : 'F',
        ethics: ethicsText,
        alternatives: finalScore < 70 ? Math.floor(Math.random() * 3) + 1 : 0
    };
};

export const scanPageForMaterials = () => {
    let textToScan = '';
    let jsonLdMaterials = new Set();

    // Strategy 1: Parse JSON-LD Structured Data (Highest Priority)
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    scripts.forEach(script => {
        try {
            const data = JSON.parse(script.textContent);

            const extractStrings = (obj) => {
                let str = '';
                if (typeof obj === 'string') {
                    return obj.toLowerCase() + ' ';
                } else if (Array.isArray(obj)) {
                    obj.forEach(item => str += extractStrings(item));
                } else if (typeof obj === 'object' && obj !== null) {
                    // Prioritize 'material', 'description', 'disambiguatingDescription'
                    if (obj.material) str += extractStrings(obj.material);
                    if (obj.description) str += extractStrings(obj.description);
                    Object.values(obj).forEach(val => str += extractStrings(val));
                }
                return str;
            };

            const jsonText = extractStrings(data);
            Object.keys(MATERIAL_DB).forEach(material => {
                const regex = new RegExp(`\\b${material}\\b`, 'i');
                if (regex.test(jsonText)) {
                    jsonLdMaterials.add(material);
                }
            });
        } catch (e) {
            // Silently fail
        }
    });

    // If we found materials in JSON-LD, trust them implicitly and skip noisy body scan
    // unless it's very few, then maybe we still scan body but be careful.
    // For now, let's trust JSON-LD if it yields results.
    if (jsonLdMaterials.size > 0) {
        // Filter substrings (e.g. remove "cotton" if "organic cotton" exists)
        const sortedMaterials = Array.from(jsonLdMaterials).sort((a, b) => b.length - a.length);
        const finalMaterials = new Set();
        sortedMaterials.forEach(m => {
            const isSubstring = Array.from(finalMaterials).some(existing => existing.includes(m));
            if (!isSubstring) {
                finalMaterials.add(m);
            }
        });

        return processFoundMaterials(finalMaterials);
    }

    // Strategy 2: Scan Cleaned DOM (Exclude Footer/Nav)
    // Clone body to avoid modifying actual page
    const bodyClone = document.body.cloneNode(true);

    // Remove noise elements
    const noiseSelectors = [
        'footer', 'nav', 'header',
        '.footer', '.nav', '.header',
        '[class*="footer"]', '[class*="nav"]', '[class*="header"]',
        '[class*="related"]', '[class*="recommend"]', '[class*="suggestion"]', '[class*="also-like"]',
        '[id*="related"]', '[id*="recommend"]', '[id*="suggestion"]'
    ];
    noiseSelectors.forEach(sel => {
        const elements = bodyClone.querySelectorAll(sel);
        elements.forEach(el => el.remove());
    });

    // Try to find main content area first
    const contentSelectors = ['main', 'article', '#content', '.product-detail', '.product-description'];
    let contentRoot = bodyClone;
    for (const sel of contentSelectors) {
        const el = bodyClone.querySelector(sel);
        if (el) {
            contentRoot = el;
            break;
        }
    }

    textToScan += contentRoot.textContent.toLowerCase() + ' ';

    // Strategy 3: Meta Tags (Add to text)
    const metas = document.querySelectorAll('meta[name="description"], meta[property="og:description"]');
    metas.forEach(meta => {
        if (meta.content) {
            textToScan += meta.content.toLowerCase() + ' ';
        }
    });

    const foundMaterials = new Set();
    Object.keys(MATERIAL_DB).forEach(material => {
        const regex = new RegExp(`\\b${material}\\b`, 'i');
        if (regex.test(textToScan)) {
            foundMaterials.add(material);
        }
    });

    // Filter substrings for body scan as well
    const sortedMaterials = Array.from(foundMaterials).sort((a, b) => b.length - a.length);
    const finalMaterials = new Set();
    sortedMaterials.forEach(m => {
        // Check if this material is a substring of an ALREADY ADDED longer material
        // e.g. "cotton" is substring of "organic cotton"
        const isSubstring = Array.from(finalMaterials).some(existing => existing.includes(m));
        if (!isSubstring) {
            finalMaterials.add(m);
        }
    });

    return processFoundMaterials(finalMaterials);
};

const processFoundMaterials = (foundMaterialsSet) => {
    const materialsList = Array.from(foundMaterialsSet).map(m => ({
        name: m.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        ...MATERIAL_DB[m]
    }));

    const initialMaterials = materialsList.length > 0 ? materialsList : [{
        name: 'Unknown Materials',
        type: 'Unknown',
        score: 50,
        description: 'No specific fabric details found. Try expanding "Details" or "Composition" sections.',
        impact: 'Unable to determine impact.',
        water_intensity: '?',
        carbon_intensity: '?',
        biodegradable: '?'
    }];

    return recalculateScore(initialMaterials);
};
