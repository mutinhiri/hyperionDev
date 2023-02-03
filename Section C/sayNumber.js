function sayNumber(num) {
  // An array of words to represent numbers from 0 to 19
  const numWords = [    "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"  ];

  // An array of words to represent tens from 20 to 90
  const tensWords = [    "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"  ];

  // Convert the input numeral to a string and get its length
  let numStr = num.toString();
  let numLen = numStr.length;

  // Initialize an empty result string
  let result = "";

  // If the input numeral is less than 20, return the corresponding word
  if (num < 20) {
    result = numWords[num];
  }
  // If the input numeral has 2 digits, handle it as a tens and units combination
  else if (numLen === 2) {
    let tens = parseInt(numStr[0]);
    let units = parseInt(numStr[1]);
    result = tensWords[tens - 2];
    if (units !== 0) {
      result += " " + numWords[units];
    }
  }
  // If the input numeral has more than 2 digits, handle it as a combination of thousands, hundreds, tens and units
  else {
    let thousands = parseInt(numStr[0]);
    let hundreds = parseInt(numStr[numLen - 3]);
    let tens = parseInt(numStr[numLen - 2]);
    let units = parseInt(numStr[numLen - 1]);
    if (thousands > 0) {
      result += numWords[thousands] + " Thousand";
    }
    if (hundreds > 0) {
      result += " " + numWords[hundreds] + " Hundred";
    }
    if (tens > 0 || units > 0) {
      result += " ";
      if (tens < 2) {
        result += numWords[tens * 10 + units];
      } else {
        result += tensWords[tens - 2];
        if (units > 0) {
          result += " " + numWords[units];
        }
      }
    }
  }

  // Add a period at the end of the result string
  result += ".";

  // Return the result string
  return result;
}

console.log(sayNumber(9001))