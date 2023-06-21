function  stringLength(string) {
  const length = string.length;
  if(length === 0) {
    throw new Error('string must have at least 1 char. ');
  }

  if ( length > 10) {
    throw new Error('string must be less then 10.')
  }
  return length;
}

// second task
function verseString(string) {
    return string.split("").reverse().join("");
}

// third task
class calculate {
    add (x, y){
        return x+y;
    }
    subtract (x, y){
        return x-y;
    }
    divide (x, y){
        return x/y;
    }
    multiply (x,y){
        return x*y;
    }
}

//task four
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error('Input should be a string');
  }

  const arr = string.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const capitalizedString = arr.join(" ");
  return capitalizedString;
}

module.exports = [ stringLength, verseString, calculate, capitalize];