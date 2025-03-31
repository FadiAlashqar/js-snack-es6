// Snack 2:

const teams = [
    {
        name: 'Juventus',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Inter',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Napoli',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Atalanta',
        points: 0,
        fouls: 0,
    },
]

const max = 100;

function generatePoints(num) {
    return Math.floor(Math.random() * num) + 1
    
}

let randomNum = generatePoints(max);

const teamsFoulsPoints = [];

for (let i = 0; i < teams.length; i++) {
    
    let randomPoints = generatePoints(max);
    let randomFouls = generatePoints(max);

    teams[i].fouls = randomFouls;
    teams[i].points = randomPoints;
    teamsFoulsPoints.push({ name: teams[i].name, fouls: teams[i].fouls, points: teams[i].points, });

    
}
console.log(teamsFoulsPoints);