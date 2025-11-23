export const getProductVibe = async (productName) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    const companies = [
        { name: 'EcoThreads', rating: 'A', ethics: 'Fair Trade Certified' },
        { name: 'FastFashion Corp', rating: 'D', ethics: 'Labor Violations Reported' },
        { name: 'GreenLife', rating: 'A+', ethics: 'Carbon Neutral' },
        { name: 'UrbanStyle', rating: 'C', ethics: 'Mixed Record' },
        { name: 'NatureWear', rating: 'B+', ethics: 'Recycled Materials' },
    ];

    const materials = [
        'Organic Cotton', 'Recycled Polyester', 'Hemp', 'Bamboo', 'Tencel',
        'Virgin Polyester', 'Conventional Cotton', 'Nylon'
    ];

    const company = companies[Math.floor(Math.random() * companies.length)];
    const score = Math.floor(Math.random() * 40) + 60; // 60-100

    // Pick 2-3 random materials
    const productMaterials = [];
    const numMaterials = Math.floor(Math.random() * 2) + 2;
    for (let i = 0; i < numMaterials; i++) {
        productMaterials.push(materials[Math.floor(Math.random() * materials.length)]);
    }

    return {
        company: company.name,
        companyRating: company.rating,
        ethics: company.ethics,
        score: score,
        carbonFootprint: `${Math.floor(Math.random() * 20) + 5} kg CO2e`,
        waterUsage: `${Math.floor(Math.random() * 500) + 100} gal`,
        materials: [...new Set(productMaterials)], // Unique
        alternatives: score < 80 ? 2 : 0
    };
};
