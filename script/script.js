
        /**
         * - Initialisation des variables 
        
        const joueurGauche = document.getElementById("gauche");
        const joueurDroite = document.getElementById("droite");
       ;
        

        let jGAclique = false;
        let JDAclique = false;

        let jGciseaux = false;
        let jGpierre = false;
        let jGfeuille = false;

        let jDciseaux = false;
        let jDpierre = false;
        let jDfeuille = false;

        function Appshifumi(mainDuJoueur) {
            let choix = Math.ceil(Math.random() * 3);
            switch (choix) {
                case 1:
                    mainDuJoueur.setAttribute("src", "/res/ciseaux.png")
                    if (mainDuJoueur.id === "gauche") {
                        jGciseaux = true;
                    } else {
                        jDciseaux = true;
                    }
                    break;
                case 2:
                    mainDuJoueur.setAttribute("src", "/res/pierre.png")
                    if (mainDuJoueur.id === "gauche") {
                        jGpierre = true;
                    } else {
                        jDpierre = true;
                    }
                    break;
                case 3:
                    mainDuJoueur.setAttribute("src", "/res/feuille.png")
                    if (mainDuJoueur.id === "gauche") {
                        jGfeuille = true;
                    } else {
                        jDfeuille = true;
                    }
                    break;
                default:
                    break;
            }
        }
 **/
        /**
         *  AJout des écouteur sur les images de gauche et de droite
        
        joueurGauche.addEventListener("click", function () {
            if (!jGAclique) {
                Appshifumi(joueurGauche)
                jGAclique = true;
                quiGagne();
            }
        });

        joueurDroite.addEventListener("click", function () {
            if (!JDAclique) {
                Appshifumi(joueurDroite);
                joueurDroite.style.transform = "scaleX(-1)";
                JDAclique = true;
                quiGagne();
            }
        });
 **/
        /**
         * Fonction qui détermine le gagnant :
     
        function quiGagne() {
            if (jGAclique && JDAclique) {
                if ((jGciseaux && jDciseaux) || (jGpierre && jDpierre) || (jGfeuille && jDfeuille)) {
                    //Draw
                    annonce.innerHTML = "C'est une égalité !<br> Voulez-vous recommencer ?<br>(cliquer-moi !)";
                    fond.style.backgroundColor = "gold";
                } else {
                    if ((jGciseaux && jDfeuille) || (jGpierre && jDciseaux) || (jGfeuille && jDpierre)) {
                        // Gauche gagne 
                        fond.style.backgroundColor = "blue";
                        annonce.innerHTML = "C'est le joueur de gauche qui gagne !<br> Voulez-vous recommencer ?<br>(cliquer-moi !)";
                    } else {
                        // Droite gagne
                        fond.style.backgroundColor = "red";
                        annonce.innerHTML = "C'est le joueur de droite qui gagne !<br> Voulez-vous recommencer ?<br>(cliquer-moi !)";
                    }
                }
                //Ajout d'un écouteur sur la balise p 
                annonce.addEventListener("click", function () {
                    jGAclique = false;
                    JDAclique = false;

                    jGciseaux = false;
                    jGpierre = false;
                    jGfeuille = false;

                    jDciseaux = false;
                    jDpierre = false;
                    jDfeuille = false;
                    joueurDroite.setAttribute("src", "/res/croix.png");
                    joueurGauche.setAttribute("src", "/res/croix.png");
                    fond.style.backgroundColor = "black";
                    annonce.innerHTML = "Prêt ?"
                    console.log("PATATE!!!!")
                });
            }
        }
 **/

        const fond = document.querySelector(".conteneur")
        const annonce = document.getElementById("annonceur");
        let j1 = new Joueur();
        let j2 = new Joueur();

        const double = document.querySelector(".double");

        double.appendChild(j1.getHtml());
        double.appendChild(j2.getHtml());

        window.checkGagnant = function(){
            Joueur.CheckQuiGagne(j1, j2, fond, annonce, double);
        }

        
