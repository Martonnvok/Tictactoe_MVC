class TictactoeView {
    #divElem;
    #jel;
    #allapot;
    constructor(divElem, jel) {
        this.#divElem = divElem;
        this.#jel = jel
        this.#allapot = true;
        this.#htmlMegjelenites();

        this.elem = $(".tictactoe:last-child");
        this.pElem = this.elem.children("p");
        $(".tictactoe").on("click",() => {
            if (this.#allapot) {
                this.#esemenyTrigger("click");
                this.#allapot = false;
            }
            
        });
    }

    getIndex(){
        return this.#jel;
    }

    setJel(jel){
        this.pElem.html(jel);
    }
    #htmlMegjelenites() {
        let txt = `<div class ="tictactoe"><p class = "valtozzMeg"> X </p></div`;

        this.#divElem.append(txt);
    }

    #esemenyTrigger(esemenyNev) {
        const E = new CustomEvent(esemenyNev, {detail: this});
        window.dispatchEvent(E);
    }
}

export default TictactoeView;