// =====================================
// Regex to filter only letters a to z, A to Z.
const regexOnlyLetters = /[a-zA-Z]/g;

// Regex to filter non-letter characters. (^ = NOT gate)
const regexNotLetters = /[^a-zA-Z]/g;
// =====================================
function repeatLetters(inputStr) {
  // Debug
  //console.log("Input [1]: " + inputStr);
  // ================x
  // Filter only a to z, A to Z from the input.
  let inputStrParsed = inputStr.match(regexOnlyLetters);
  // Debug
  //console.log("Input [2]: ", inputStrParsed);
  // ================x
  // Filter out non-letter characters.
  const excludedStr = inputStr.match(regexNotLetters);
  // ================x
  // Print out excluded non-letter characters, if any.
  if (excludedStr !== null && excludedStr.length > 0)
    console.log(`Characters Excluded from the input: [${excludedStr}]`);
  // ================x
  let result = "";

  // Loop Iteration -> Repeat characters.
  inputStrParsed.forEach((character, iterAt) => {
    // With use of ".repeat" function.
    result += character.repeat(iterAt + 1);

    // Without use of ".repeat" function.
    for (let i = 0; i < iterAt + 1; ++i)
      result += character;
    
    if (iterAt < inputStrParsed.length - 1)
      result += "-";
  });
  // ================x
  return result;
}
// =====================================
let input = "abcd";
console.log(`Result 1 [${input}]: `, repeatLetters(input));
console.log("------");
// =====================================
input = "RqaEzty";
console.log(`Result 2 [${input}]: `, repeatLetters(input));
console.log("------");
// =====================================
input = "cwAt";
console.log(`Result 3 [${input}]: `, repeatLetters(input));
console.log("------");
// =====================================
input = "01aa-jjb23";
console.log(`Result 3 [${input}]: `, repeatLetters(input));
console.log("------");
// =====================================