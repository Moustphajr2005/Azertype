/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} manches : le nombre de manches jouées
 */
function afficherResultat(score, manches) {
    let spanScore = document.querySelector(".zoneScore span")
    let affichageScore = `${score} / ${manches}`
    spanScore.innerText = affichageScore
    console.log(`Votre score est de ${score}  sur ${manches}`)
}

function afficherProposition(proposition) {
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText = proposition
}

function lancerJeu() {
    // Initialisations
    let i = 0
    let score = 0
    let manches = 0

    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    afficherProposition(listeMots[i])

    btnValiderMot.addEventListener("click", () => {
        console.log(inputEcriture.value)
        let reponseUtilisateur = inputEcriture.value

        if (reponseUtilisateur === listeMots[i]) {
            score++
        }

        manches++
        i++

        afficherResultat(score, manches)

        inputEcriture.value = ''

        if (listeMots[i] === undefined) {
            afficherProposition("Le jeu est fini")
            btnValiderMot.disabled = true
        } else {
            afficherProposition(listeMots[i])
        }
    });

    afficherResultat(score, manches)
}