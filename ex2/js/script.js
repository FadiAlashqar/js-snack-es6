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

const teamsFouls = [];

for (let i = 0; i < teams.length; i++) {
    
    let randomNum = generatePoints(max);
    teams[i].fouls = randomNum;
    teamsFouls.push({ name: teams[i].name, fouls: teams[i].fouls });

    
}
console.log(teamsFouls);