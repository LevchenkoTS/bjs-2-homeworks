"use strict"

function compareArrays(arr1, arr2) {
    const compare = arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
    return compare;
  
}

function getUsersNamesInAgeRange(users, gender) {
    return users
    .filter(user => user.gender === gender)
    .map(user => user.age)
    .reduce((acc, item, index, arr) => acc + item / arr.length,0);
    
}