// Snack 1:

const bikes = [
    {
        name: 'BMX',
        weight: 15,
    },
    {
        name: 'Mountain bike',
        weight: 10,
    },
    {
        name: 'City bike',
        weight: 12,
    },
    {
        name: 'racing bike',
        weight: 8,
    },
]

let maxWeight = bikes[0].weight;

for (let i = 0; i < bikes.length; i++) {
    if (maxWeight > bikes[i].weight) {
        
        maxWeight = bikes[i].weight;
        
    }
    
}

console.log(`l'ammontare della bici meno pesante è di ${maxWeight} Kg`);
