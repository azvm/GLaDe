const app = new Vue({
    el: "#app",
    data() {
        return {
            currentLanguageIndex: 0,
            encodedText: "A QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
        }
    },
    computed: {
        currentLanguage() {
            return LANGUAGES[this.currentLanguageIndex]
        },
        decodedText() {
            return this.currentLanguage.decode(this.encodedText)
        },
        encodedTextInputStyle() {
            return {
                "font-family": this.currentLanguage.game,
                "writing-mode": this.currentLanguage.writingMode,
                "text-orientation": this.currentLanguage.textOrientation,
                "resize": "vertical",
                "overflow": "auto"
            }
        },
        keypadStyle() {
            return {
                "font-family": this.currentLanguage.game,
            }
        },
        encodedTextInput() {
            return document.getElementById("encodedText")
        }
    },
    methods: {
        synchronizeInput() {
            this.encodedTextInput.textContent = this.encodedText
        },
        inputDirect(event) {
            this.encodedText = event.target.textContent
            this.synchronizeInput()
        },
        inputKeypad(character) {
            this.encodedText += character
            this.synchronizeInput()
        },
        clear() {
            this.encodedText = ""
            this.synchronizeInput()
        }
    },
    mounted() {
        this.synchronizeInput()
    }
})