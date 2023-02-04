const assert = require('assert');

function sayNumber(num) {
  if (num === 0) return "Zero.";
  
  let result = "";
  const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  const places = ["", "Thousand", "Million", "Billion", "Trillion"];

  let i = 0;
  while (num > 0) {
    let n = num % 1000;
    let temp = "";
    if (n >= 100) {
      temp += ones[Math.floor(n/100)] + " Hundred ";
      n %= 100;
    }
    if (n >= 20) {
      temp += tens[Math.floor(n/10)] + " ";
      n %= 10;
    }
    temp += ones[n];
    result = (temp + " " + places[i] + " " + result).trim();
    i++;
    num = Math.floor(num/1000);
  }

  return result + ".";
}

assert.equal(sayNumber(0), "Zero.");
assert.equal(sayNumber(1), "One.");
assert.equal(sayNumber(12), "Twelve.");
assert.equal(sayNumber(123), "One Hundred Twenty Three.");
assert.equal(sayNumber(1234), "One Thousand Two Hundred Thirty Four.");
assert.equal(sayNumber(1234567), "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven.");

console.log('tests passed')
