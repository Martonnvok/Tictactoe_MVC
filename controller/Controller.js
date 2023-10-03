import JatekTerView from "../view/JatekTerView.js";
import Modell from "../modell/Modell.js";

class Controller {

    constructor() {
        const MODELL = new Modell();
        const TICTACOE = new JatekTerView($(".tictactoe"));

        $(window).on("click",(event) => {
            console.log(event.detail);
            MODELL.valtas(event.detail.getIndex());
            event.detail.setJel(MODELL.getErtek());
            console.log(MODELL.vegevanE());
        });


    }
}

export default Controller;