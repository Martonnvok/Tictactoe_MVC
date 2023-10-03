import TictactoeView from "../view/TictactoeView.js";
import Modell from "../modell/Modell.js";

class Controller {

    constructor() {
        const MODELL = new Modell();
        const TICTACOE = new TictactoeView($(".tictactoe"), MODELL.getErtek());

        $(window).on("click",() => {
            MODELL.valtas();
            TICTACOE.setJel(MODELL.getErtek());
        });


    }
}

export default Controller;