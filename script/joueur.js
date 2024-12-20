class Joueur {

    shi;

    constructor() {
        this.shi = "";
        this.html = this.generateHtml();
    }

    generateHtml() {
        const div = document.createElement("div");
        const img = document.createElement("img");


        div.classList.add("blocMain", "jGauche");

        img.src = "./res/croix.png"
        img.classList.add("image");

        div.appendChild(img);

        div.addEventListener("click", () => {
            this.choixAleat(img);
            div.style.pointerEvents = "none";

        });
        return div;
    }

    getHtml() {
        return this.html;
    }

    choixAleat(img) {
        let choix = Math.ceil(Math.random() * 3);

        switch (choix) {
            case 1:
                img.setAttribute("src", "./res/ciseaux.png")
                this.shi = "ciseaux";

                break;
            case 2:
                img.setAttribute("src", "./res/pierre.png")
                this.shi = "pierre";
                break;
            case 3:
                img.setAttribute("src", "./res/feuille.png")
                this.shi = "feuille";
                break;
            default:
                break;
        }

        window.checkGagnant();
    }

    static CheckQuiGagne(j1, j2, fond, annonce, div) {
        if (j1.shi !== "" && j2.shi !== "") {
            console.log("test");

            if (j1.shi === j2.shi) {
                // Égalité
                annonce.innerHTML = "C'est une égalité !<br> Voulez-vous recommencer ?<br>(cliquez-moi !)";
                fond.style.backgroundColor = "gold";
            } else {
                if (
                    (j1.shi === "ciseaux" && j2.shi === "feuille") ||
                    (j1.shi === "pierre" && j2.shi === "ciseaux") ||
                    (j1.shi === "feuille" && j2.shi === "pierre")
                ) {
                    // Gauche gagne
                    fond.style.backgroundColor = "blue";
                    annonce.innerHTML = "C'est le joueur de gauche qui gagne !<br> Voulez-vous recommencer ?<br>(cliquez-moi !)";
                } else {
                    // Droite gagne
                    fond.style.backgroundColor = "red";
                    annonce.innerHTML = "C'est le joueur de droite qui gagne !<br> Voulez-vous recommencer ?<br>(cliquez-moi !)";
                }
            }
        }

        annonce.addEventListener("click", ()=>{
            double.innerHTML ="";
            double.appendChild(j1.reset());
            double.appendChild(j2.reset());
            annonce.innerText = "Prêt ?";
            fond.style.backgroundColor = "black";
        })
    }

    

    reset(){
        this.shi = "";
        return  this.generateHtml();
    }
}