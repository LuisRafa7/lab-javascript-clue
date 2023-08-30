// ITERATION 1

// Suspects Array

const suspectsArray = [
    { firstName: 'Luis', lastName: 'Henriques', occupation: 'dentist', age: 33, description: '123', image: 'photo1', color: 'azul' },
    { firstName: 'Celina', lastName: 'Ferreira', occupation: 'TO', age: 33, description: '234', image: 'photo2', color: 'cor-de-rosa' }, 
    { firstName: 'Jose', lastName: 'Henriques', occupation: 'TOC', age: 33, description: '345', image: 'photo3', color: 'laranja' },
    { firstName: 'Gabriela', lastName: 'Lemos', occupation: 'Estudante', age: 9, description: '456', image: 'photo4', color: 'amarelo' },
    { firstName: 'Sofia', lastName: 'Henriques', occupation: '???', age: 21, description: '567', image: 'photo5', color: 'preto' },
    { firstName: 'Julio', lastName: 'Rocha', occupation: '???', age: 27, description: '678', image: 'photo6', color: 'roxo' }
];

// Rooms Array

const roomsArray = [
    { name: 'room1'},
    { name: 'room2'},
    { name: 'room3'},
    { name: 'room4'},
    { name: 'room5'},
    { name: 'room6'},
    { name: 'room7'},
    { name: 'room8'},
    { name: 'room9'},
    { name: 'room10'},
    { name: 'room11'},
    { name: 'room12'},
    { name: 'room13'},
    { name: 'room14'},
    { name: 'room15'}
];

// Weapons Array

const weaponsArray = [
    { name: "weapon1", weight: 1000 },
    { name: "weapon2", weight: 900 },
    { name: "weapon3", weight: 800 },
    { name: "weapon4", weight: 700 },
    { name: "weapon5", weight: 600 },
    { name: "weapon6", weight: 500 },
    { name: "weapon7", weight: 400 },
    { name: "weapon8", weight: 300 },
    { name: "weapon9", weight: 200 }
];


// ITERATION 2

function selectRandom(arr) {
    const pickNumber = Math.floor(Math.random() * arr.length);
    const select = arr[pickNumber];
    return select
}

function pickMystery() {
    let suspect = selectRandom(suspectsArray);
    let room = selectRandom(roomsArray);
    let weapon = selectRandom(weaponsArray);
    const mystery = {
        suspect,
        room,
        weapon
    }

    return mystery
    
}

let mystery1 = pickMystery();


// ITERATION 3

function revealMystery() {
    let reveal = `${mystery1.suspect.firstName} ${mystery1.suspect.lastName} killed Mr. Boddy using the ${mystery1.weapon.name} in the ${mystery1.room.name}!`;
    return reveal;
}


