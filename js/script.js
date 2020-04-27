class Writing {
    constructor(elementId) {
        this.elementEl = document.getElementById(elementId);

        this.initWriting();
    }

    initWriting() {
        let arrayText = this.elementEl.innerHTML.split('');
        this.elementEl.innerHTML = '';
        arrayText.forEach((letter, index) => {
            setTimeout(() => {
                this.elementEl.innerHTML += letter
            }, 75 * index);
        })
    }
}

let writingH1 = new Writing('h1-text')
let WritingParagraph = new Writing('paragraph-text')