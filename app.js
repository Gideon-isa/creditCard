// All valid credit card numbers
const valid1 = "4539 6779 0801 6808";
const valid2 = "5535 7667 6875 1439";
const valid3 = "3716 1201 9985 236";
const valid4 = "6011 1443 4068 2905";
const valid5 = "4539 4049 6786 9666";

// All invalid credit card numbers
const invalid1 = "4532 7787 7109 1795";
const invalid2 = "5795 5933 9213 4643";
const invalid3 = "3757 9608 4459 914";
const invalid4 = "6011 1279 6177 7935";
const invalid5 = "5382 0197 7288 3854";

// Can be either valid or invalid
const notCertain1 = "3448 0196 8305 414";
const notCertain2 = "5466 1008 6162 0239";
const notCertain3 = "6011 3770 2096 2656 203";
const notCertain4 = "4929 8771 6921 7093";
const notCertain5 = "4913 5404 6307 2523";

// An array of all the arrays above

const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, notCertain1, notCertain2, notCertain3, notCertain4, notCertain5]



function transformStrArr(string){
    let newArray = string.replace(/\s+/g,""); 
    let array2 = newArray.split("").map(parseFloat);
    // result = "" 
    // for(let i = 0; i < array2.length; i++){
    //     result = array2
    return array2;
    }
    // return array2;

console.log(transformStrArr(valid1));
console.log(transformStrArr(valid2));
console.log(transformStrArr(valid3));
console.log(transformStrArr(valid4));
console.log(transformStrArr(invalid1));


function  validateCard(array) {
    let moduloArray = [];    // declare an empty for testing
    let sum = 0;
    
    // creating a copy(moduloArray) of the target array
    for(let i = 0; i < array.length; i++){
        moduloArray.push(array[i]);

    }

    // by the Luhn algorithm, iterating from the second to the last and two steps back
    for (let i = array.length - 2; i >= 0; i -= 2){
        if (array[i] * 2 > 9) {
            moduloArray[i] = (array[i] * 2) - 9;
        } else {
            moduloArray[i] = (array[i] * 2);
        }
    }

    // suming all elements 
    for(let k = 0; k < moduloArray.length; k++) {
        sum += moduloArray[k];
    }

    
    return sum % 10 === 0;
    return 

}

console.log(validateCard(transformStrArr(valid1)));
console.log(validateCard(transformStrArr(valid2)));
console.log(validateCard(transformStrArr(valid3)));
console.log(validateCard(transformStrArr(valid4)));
console.log(validateCard(transformStrArr(invalid1)));
console.log(validateCard(transformStrArr(invalid2)));
console.log(validateCard(transformStrArr(invalid3)));

let nestedArray = [[4,5,3,9,6,7,7,9,0,8,0,6,8,0,8], [5,5,3,5,7,6,6,7,6,8,7,5,1,4,3,9], 
[3,7,1,6,1,2,0,1,9,9,8,5,2,3,6], [6,0,1,1,1,4,4,3,4,0,6,8,2,9,0,5], [4,5,3,9,4,0,4,9,6,7,8,6,9,6,6,6], 
[4,5,3,2,7,7,8,7,7,1,0,9,1,7,9,5], [5,7,9,5,5,9,3,3,9,2,1,3,4,6,4,3], [3,7,5,7,9,6,0,8,4,4,5,9,9,1,4], 
[6,0,1,1,1,2,7,9,6,1,7,7,7,9,3,5], [5,3,8,2,0,1,9,7,7,2,8,8,3,8,5,4], [3,4,4,8,0,1,9,6,8,3,0,5,4,1,4], [5,4,6,6,1,0,0,8,6,1,6,2,0,2,3,9], [6,0,1,1,3,7,7,0,2,0,9,6,2,6,5,6,2,0,3], [4,9,2,9,8,7,7,1,6,9,2,1,7,0,9,3], [4,9,1,3,5,4,0,4,6,3,0,7,2,5,2,3]];


function findInvalidCards (checkInvalidCards){
    //array for invalid cards
    let invalidCards = [];

    for(let i = 0; i < checkInvalidCards.length; i++) {
        if (validateCard(checkInvalidCards[i]) !== true) {
            invalidCards.push(checkInvalidCards[i])
        }
    }
    console.log(invalidCards);

    return invalidCards;
}

console.log(findInvalidCards(validateCard(transformStrArr(valid1))));

function idInvalidCardIssuers(invalidCards) {
    //calling the findInvalidCards function
    // invalidCards = findInvalidCards(invalidCards);

    let invalidCardIssuers = [];

    for(let i = 0; i < invalidCards.length; i++) {
        if (invalidCards[i][0] === 3 && !invalidCardCompanies.includes('Amex (American Express)')) {
            invalidCardIssuers.push("Amex (American Express")  // pushes "Amex" into the array

        } else if (invalidCards[1][0] === 4 && !invalidCardCompanies.includes('Visa')) {
            invalidCardIssuers.push("Visa")
            
        } else if (invalidCards[i][0] === 5 && !invalidCardCompanies.includes('Mastercard')) {
            invalidCardIssuers.push("Mastercard")

        } else if (invalidCards[i][0] === 6 && !invalidCardCompanies.includes('Discover')) {
            invalidCardIssuers.push("Discover")
        }else {
            console.log("Card Issuer not found");
        }
    }

    return invalidCardIssuers;
};


// console.log(idInvalidCardIssuers(findInvalidCards(validateCard(transformStrArr(invalidCardIssuers)))));


console.log(idInvalidCardIssuers((findInvalidCards(validateCard(transformStrArr(valid1))))));

console.log(idInvalidCardIssuers(batch));

 