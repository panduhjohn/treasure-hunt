// # Find the treasure!

// We have found a map that has marked places that might contain the treasure we are looking for!

const places = [
    'Brazil',
    'Portugal', 
    'Peru',
    'Spain', 
    'Montenegro',
    'Canada',
    'Mexico', 
    'Kosovo',
];

// There is a secret place that wasn't in the map and it's name it starts with a `F` their known for their High Tower! Add that place to the array.
// for(let i =0; i < places.length; i++){
//     console.log(places[i])
//     console.log(places[i][0])
// }

places.push('France');
console.log(places);

// Last night someone already delivered the news that they already checked the places that start with a `P`, and the treasure is not there. Remove the places that start with a `p` from the places array. 

places.splice(1, 2);
console.log(places);

// Today an ancient person found out another fact written in the the map. The place has more than 5 letters but less than 10! Using this knowledge remove the places that their length is less than 5 and more than 10.
let placesMiddle = [];
for (let i = 0; i < places.length; i++)
    if (places[i].length > 5 && places[i].length < 10) {
        console.log(places[i]);
        placesMiddle.push(places[i])
    }
    console.log(placesMiddle)

// A group checked the places left but only the ones that didn't end with an `O`. Now we know that the place where the treasure is hidden ends with an `O`, so write the code that makes the array to be left with only the places that end with an `O`.
let placesThatEndWithO = [];
for (let i = 0; i < placesMiddle.length; i++) {
    if (placesMiddle[i][placesMiddle[i].length - 1] === 'o') {
        console.log(placesMiddle[i]);
        placesThatEndWithO.push(placesMiddle[i]);
    }
}
console.log(placesThatEndWithO);


// Only a King can open the treasure because the place starts with a `K`.  Now that we know with what it starts and what it ends we can find the place. Write the code to find the place and and `console.log` that place!

let treasure = [];
for (let i = 0; i < placesThatEndWithO.length; i++) {
    if (placesThatEndWithO[i][0] === 'K') {
        console.log(placesThatEndWithO[i]);
        treasure.push(placesThatEndWithO[i])
    }
}

// You can re-assign or make new arrays on your journey! 




// *Real life fact there is real treasure in that country!
