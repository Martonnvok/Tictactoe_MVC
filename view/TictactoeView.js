class TictactoeView {
    divElem;
    jel;
    constructor(divElem, jel) {
        this.divElem = divElem;
        this.jel = jel
        this.#htmlMegjelenites();

        this.elem = $(".tictactoe");
        this.pElem = this.elem.children("p");
        $(".tictactoe").on("click",() => {
            this.#esemenyTrigger("click");
        });
    }

    setJel(jel){
        this.pElem.html(jel);
    }
    #htmlMegjelenites() {
        let txt = `<div class ="tictactoe"><p class = "valtozzMeg"> X </p></div`;

        this.divElem.append(txt);
    }

    #esemenyTrigger(esemenyNev) {
        const E = new CustomEvent(esemenyNev);
        window.dispatchEvent(E);
    }
}

export default TictactoeView;