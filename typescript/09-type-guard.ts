interface Bird {
    fly();

    layEggs();
}

interface Fish {
    swim();

    layEggs();
}

function getSmallPet(): Fish | Bird {
    return Math.random() > 0.5 ? {
        fly: () => {
            console.log("Bird fly")
        },
        layEggs() {
            console.log("Bird layEggs")
        }
    } : {
        swim() {
            console.log('Fish swim')
        },
        layEggs() {
            console.log("Fish layEggs")
        }
    }
}

let pet = getSmallPet();
pet.layEggs(); // okay
// pet.swim();    // errors

// if (pet.swim) {
//     pet.swim();
// } else if (pet.fly) {
//     pet.fly();
// }

if ((pet as Fish).swim) {
    (pet as Fish).swim();
} else if ((pet as Bird).fly) {
    (pet as Bird).fly();
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

if (isFish(pet)) {
    pet.swim();
} else {
    pet.fly();
}
