
class Modell {
    #ertek
    #lista = []
    #lepes
    constructor() {
        this.#ertek = "X";
        this.#lista =[".",".",".",".",".",".",".",".","."]
        this.lepes = 0;
    }


    getErtek(){
        return this.#ertek;
    }

    valtas(index){
        this.#lepes++;
        if (this.#ertek === "X") {
            this.#ertek =  "O"
        }
        else{
            this.#ertek = "X"
        } 
        this.#lista[index] = this.#ertek;
    }

    vegevanE(){
        let eredmeny = this.#vizszintesEll()
        if (eredmeny.indexOf("XXX")>-1) {
            return " X nyert"
        }else if(eredmeny.indexOf("OOO")>-1){
            return "O nyert"

        }else{
            return "nincs Vége"
        }

        if (this.#lepes >= 9) {
            return "vége"
        }
        return "nincs vége"
    }

    #vizszintesEll(){
        let vText = "";
        for (let index = 0; index < this.#lista.length; index++) {
            vText = this.#lista[index]
            if (index % 3 == 2) {
                vText += "@";
            }
            
        }
        console.log(vText);
        return vText
    }
}
export default Modell;
