"use strict"

function getArrayParams(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let min = arr [0];
  let max = arr [0];
  let sum = arr [0];

  for (let i = 1; i < arr.length; i++) {
   if (arr[i] > max) {max = arr[i]};
   if (arr[i] < min) {min = arr[i]};
   sum += arr[i];
  }

  let avg = (sum / arr.length).toFixed(2);
  avg = +avg;

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  
  let sum = 0;
  if (arr.length > 0){
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0){
      sumEvenElement += arr[i];
    } else sumOddElement += arr[i];
  }
  let difference = sumEvenElement - sumOddElement;
  return difference;
  }



function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0){
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  let average = sumEvenElement / countEvenElement;
  return average;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const element = arrOfArr[i];
    const result = func(...element);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
