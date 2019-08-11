const button = document.getElementById('convert');
const input = document.getElementById('numbers');
const result = document.getElementById('result');
const romNum = {
  0: '',
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
  10: 'X',
  20: 'XX',
  30: 'XXX',
  40: 'XL',
  50: 'L',
  60: 'LX',
  70: 'LXX',
  80: 'LXXX',
  90: 'XC',
  100: 'C',
  200: 'CC',
  300: 'CCC',
  400: 'CD',
  500: 'D',
  600: 'DC',
  700: 'DCC',
  800: 'DCCC',
  900: 'CM',
  1000: 'M',
  2000: 'MM',
  3000: 'MMM'
};

function numberIntoUnits(num) {
  if (num === 0) {
    return;
  }
  let spreadNum = [];
  let i = 1;

  while (num > 0) {
    spreadNum.unshift((num % 10) * i);
    num = Math.floor(num / 10);
    i *= 10;
  }
  // console.log('spreadNum:', spreadNum);
  return spreadNum;
}

function swapArrToRoman(arr) {
  let romanArr = [];

  for (let num of arr) {
    let romanKey = romNum[num];
    romanArr.push(romanKey);
    // console.log('pull num from Obj:', romNum[num]);
  }
  // console.log('romanArr:', romanArr);
  return romanArr.join('');
}

function convertNumToRoman(arr) {
  // let romanEach = '';
  let finalRoman = [];
  for (num of arr) {
    if (num === 0) {
      continue;
    }
    let numArray = numberIntoUnits(num);
    console.log(numArray);
    let romanArray = swapArrToRoman(numArray);
    console.log(romanArray);
    finalRoman.push(romanArray);
  }
  // console.log('finalRoman:', finalRoman);
  return finalRoman;
}
let inputNumbers = [];

input.addEventListener('keyup', function(event) {
  inputNumbers = input.value.split(',');
});
console.log(convertNumToRoman(input.value));
button.addEventListener('click', function(event) {
  result.innerHTML = convertNumToRoman(inputNumbers);
});
