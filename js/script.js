class Writing {
    constructor(elementId) {
        this.textareaEl = document.querySelector('textarea')
        this.buttonEl = document.querySelector('button')
        this.inputEl = document.querySelector('.velocity')
        this.showText = document.querySelector('.show-text');
        
        this.buttonEl.addEventListener('click', () => {
            let text = this.textareaEl.value
            let velocity = this.inputEl.value
            this.initWriting(velocity, ...text);
        })
    }

    initWriting(velocity, ...text) {
        let arrayText = [...text];
        this.showText.innerHTML = ''
        arrayText.forEach((letter, index) => {
           
            setTimeout(() => {
                this.showText.innerHTML += letter
            }, velocity * index);
        })
    }
}

new Writing()

