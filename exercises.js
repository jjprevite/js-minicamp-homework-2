//Do not change any of the function names

function getBiggest(x, y) {
  //x and y are integers.  Return the larger integer
  //if they are the same return either one
  if (x > y) {
    return x;
  }
  else if (y > x) {
    return y;
  }
  else 
    return x || y;
}

function greeting(language) {
  //return a greeting for three different languages:
  //language: 'German' -> 'Guten Tag!'
  //language: 'English' -> 'Hello!'
  //language: 'Spanish' -> 'Hola!'
  //if language is undefined return 'Hello!'
  if (language === 'German') {
    return 'Guten Tag!';
  }
  else if (language === 'English') {
    return 'Hello!';
  }
  else if (language === 'Spanish') {
    return 'Hola!';
  }
  else return 'Hello!';
}

function isTenOrFive(num) {
  //return true if num is 10 or 5
  //otherwise return false
  if (num === 10 || num === 5) {
    return true;
  }
  else return false;
}

function isInRange(num) {
  //return true if num is less than 50 and greater than 20
  if (num < 50 && num > 20) {
    return true;
  }
  else return false;
}


function isInteger(num) {
  //return true if num is an integer
  //0.8 -> false
  //1 -> true
  //-10 -> true
  //otherwise return false
  //hint: you can solve this using Math.floor
  var isRounded = Math.floor(num);
  
  if (isRounded === num) {
    return true;
  } else return false;
}

function fizzBuzz(num) {
  //if num is divisible by 3 return 'fizz'
  //if num is divisible by 5 return 'buzz'
  //if num is divisible by 3 & 5 return 'fizzbuzz'
  //otherwise return num
  for (var i = 0; i < num; i++) {
    
    if ((num % 3) === 0 && (num % 5) === 0) {
      return 'fizzbuzz';
    } else if (num % 3 === 0) {
      return 'fizz';
    } else if (num % 5 === 0) {
      return 'buzz';
    } else return num;
  
  }
}

function isPrime(num) {
  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers
    for(var i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
  

function returnFirst(arr) {
  //return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  //return the last item of the array
  return arr[arr.length-1];
}

function getArrayLength(arr) {
  return arr.length;
}

function incrementByOne(arr) { //CHECK THIS AGAIN
  //arr is an array of integers  
  //increase each integer by one
  //return the array
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 1;
  }
  return arr;
}

function addItemToArray(arr, item) {
  //add the item to the end of the array
  //return the array
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  //add the item to the front of the array
  //return the array
  //hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) { //CHECK AGAIN
  //words is an array of strings
  //return a string that is all of the words concatenated together
  //spaces need to be between each word
  //example: ['Hello', 'world!'] -> 'Hello world!'
  var sentence = '';
  for (var i = 0; i < words.length; i++) {
    sentence = words.join(' ');
  } return sentence;
}

function contains(arr, item) {
  //check to see if item is inside of arr
  //return true if it is, otherwise return false
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  } return false;
}

function addNumbers(numbers) { //UNSURE
  //numbers is an array of integers.
  //add all of the integers and return the value
  var sum = 0;
  
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  } return sum;
}

function averageTestScore(testScores) {
  //testScores is an array.  Iterate over testScores and compute the average.
  //return the average
  var sum = 0;
  for (var i = 0; i < testScores.length; i++) {
    sum += testScores[i];
} return sum/testScores.length;
}

function largestNumber(numbers) { //UNSURE
  //numbers is an array of integers
  //return the largest integer
  return Math.max.apply(null, numbers);
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
