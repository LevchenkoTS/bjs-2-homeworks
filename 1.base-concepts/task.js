"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d === 0) {
    arr = [-b / (2 * a)];
  }

  if (d > 0) {
    arr = [(-b + Math.sqrt(d) ) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)]
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let currentTime = new Date();
  let currentMonth = currentTime.getMonth();  
  let currentYear = currentTime.getFullYear(); 

  if (String(parseFloat(percent, 10)) != String(percent)) {
    return 'Параметр "Процентная ставка" содержит неправильное значение "' + percent + '"';
  }  
  if (String(parseFloat(contribution, 10)) != String(contribution)) {
    return 'Параметр "Начальный взнос" содержит неправильное значение "' + contribution + '"';
  } 
  if (String(parseFloat(amount, 10)) != String(amount)) {
    return 'Параметр "Общая стоимость" содержит неправильное значение "' + amount + '"';
  } 
  
  let bodyCredit = amount - contribution;
  let months = date.getMonth() - currentMonth + (12 * (date.getFullYear() - currentYear));
  let monthlyPercent = percent / 12 / 100;
  let monthlyPayment = bodyCredit * (monthlyPercent + monthlyPercent / (Math.pow(1 + monthlyPercent,months) - 1));  
  let totalAmount = +parseFloat(monthlyPayment * months).toFixed(2);
  return totalAmount;
}