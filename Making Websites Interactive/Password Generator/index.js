const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const pswGen1 = document.getElementById("pswd1");
const pswGen2 = document.getElementById("pswd2");

function generatePassword() {
  let pswGen = [];
  for (let i = 0; i <= 16; i++) {
    pswGen.push(characters[generateRandomNum()]);
  }
  return pswGen.join("");
}

function generateRandomNum() {
  return Math.floor(Math.random() * characters.length);
}

function setGeneratedPsw() {
  pswGen1.value = generatePassword();
  pswGen2.value = generatePassword();
  pswGen1.onclick = (e) => {
    navigator.clipboard.writeText(pswGen1.value);
    alert("Password copied to clipboard");
  };

  pswGen2.onclick = (e) => {
    navigator.clipboard.writeText(pswGen2.value);
    alert("Password copied to clipboard");
  };
}
