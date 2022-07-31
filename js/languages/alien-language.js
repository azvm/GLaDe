const alienLanguage = {
  name: "Alien Language",
  game: "Environmental Station Alpha",
  fontFamily: "ESA",
  characters: ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM,."],
  decode: (encodedText) => encodedText,
};

if (LANGUAGES) {
  LANGUAGES.push(alienLanguage);
} else {
  var LANGUAGES = [alienLanguage];
}
