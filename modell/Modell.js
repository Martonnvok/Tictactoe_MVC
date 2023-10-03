
class Modell {
    #ertek
    constructor() {
        this.#ertek = "X";
    }


    getErtek(){
        return this.#ertek;
    }

    valtas(){
        if (this.#ertek === "X") {
            this.#ertek =  "O"
        }
        else{
            this.#ertek = "X"
        } 
    }
}
export default Modell;
