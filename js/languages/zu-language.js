const zuLanguage = {
  name: "Zu Language",
  game: "Fez",
  fontFamily: "Fez",
  characters: ["0123456789", "③④⑤⑥⑦⑩", "QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"],
  decode: (encodedText) =>
    encodedText
      .replace("③", "3")
      .replace("④", "4")
      .replace("⑤", "5")
      .replace("⑥", "6")
      .replace("⑦", "7")
      .replace("⑩", "10"),
};

if (LANGUAGES) {
  LANGUAGES.push(zuLanguage);
} else {
  var LANGUAGES = [zuLanguage];
}
