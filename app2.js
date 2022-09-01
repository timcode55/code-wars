function findMissingLetter(array) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let index = alphabet.indexOf(array[0].toLowerCase());
  for (let i = 1; i < array.length; i++) {
    if (array[i].toLowerCase() !== alphabet[index + 1]) {
      let result = alphabet[index + 1];
      return array[0] === array[0].toUpperCase()
        ? result.toUpperCase()
        : result.toLowerCase();
    }
    index++;
  }
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"])); //, 'e');
console.log(findMissingLetter(["O", "Q", "R", "S"])); //, 'P');
console.log(findMissingLetter(["G", "H", "J", "K", "L", "M"])); //, 'I');
