import TictactoeView from "./TictactoeView.js";

class JatekTerView {
    divElem;
    jel;
    constructor(szuloElem) {
            for (let index = 0; index < 9; index++) {
                new TictactoeView(szuloElem, index);
                
            }
    }

    
}

export default JatekTerView;