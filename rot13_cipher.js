const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const ROTATE_SHIFT = 13;
const ZERO_INDEX_ADJUSTMENT = 1;

function findRotate13Index(letter) {
  let indexLetter = ALPHABET.indexOf(letter);

  if (indexLetter <= (ROTATE_SHIFT - ZERO_INDEX_ADJUSTMENT)) {
    indexLetter += ROTATE_SHIFT;
  } else {
    indexLetter -= ROTATE_SHIFT;
  }

  return indexLetter;
}

function charNotInAlphabet(character) {
  return !ALPHABET.includes(character.toLowerCase());
}

function charIsLowerCase(character) {
  return character.toLowerCase() === character;
}

function charIsUpperCase(character) {
  return character.toUpperCase() === character;
}

function rot13(string) {
  let rotString = '';

  for (let indexString = 0; indexString < string.length; indexString++) {
    let char = string[indexString];

    if (charNotInAlphabet(char)) {
      rotString += char;
    } else if (charIsLowerCase(char)) {
      let rotatedLowerCharIndex = findRotate13Index(char);
      rotString += ALPHABET[rotatedLowerCharIndex];
    } else if (charIsUpperCase(char)) {
      let rotatedUpperCharIndex = findRotate13Index(char.toLowerCase())
      rotString += ALPHABET[rotatedUpperCharIndex].toUpperCase();
    }
  }

  return rotString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.') === 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.');

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')) === 'Teachers open the door, but you must enter by yourself.');

// logs:
// Teachers open the door, but you must enter by yourself.