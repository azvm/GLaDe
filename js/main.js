const app = new Vue({
  el: "#app",

  data() {
    return {
      currentLanguageIndex: 0,
      encodedText: "A QUICK BROWN FOX JUMPS OVER THE LAZY DOG",
    };
  },

  computed: {
    currentLanguage() {
      return LANGUAGES[this.currentLanguageIndex];
    },

    decodedText() {
      return this.currentLanguage.decode(this.encodedText);
    },

    fontStyle() {
      return {
        "font-family": this.currentLanguage.fontFamily,
      };
    },
  },
});
