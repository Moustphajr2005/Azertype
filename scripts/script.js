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
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}

function lancerJeu() {
   
    let i = 0
    let score = 0
    let manches = 0
    let listeProposition = listeMots

    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    let listeBtnRadio = document.querySelectorAll(".optionSource input")

    afficherProposition(listeProposition[i])
    afficherResultat(score, manches)

    // Changement de source : on repart de zéro
    for (let index = 0; index < listeBtnRadio.length; index++) {
        listeBtnRadio[index].addEventListener("change", (event) => {
            listeProposition = (event.target.value === "1") ? listeMots : listePhrase
            i = 0
            score = 0
            manches = 0
            btnValiderMot.disabled = false
            inputEcriture.value = ''
            afficherProposition(listeProposition[i])
            afficherResultat(score, manches)
        })
    }

    btnValiderMot.addEventListener("click", () => {
        if (inputEcriture.value === listeProposition[i]) {
            score++
        }
        manches++
        i++

        afficherResultat(score, manches)
        inputEcriture.value = ''

        if (i >= listeProposition.length) {
            afficherProposition("Le jeu est fini")
            btnValiderMot.disabled = true
        } else {
            afficherProposition(listeProposition[i])
        }
    })


    let form=document.querySelector("form")
    form.addEventListener("submit", (event) =>
        {
            event.preventDefault
            console.log("la page ne s'est pas rechargée")
            // Rexcupérage des valeurs des champs
            let baliseNom=document.getElementById("nom")
            let nom=baliseNom.value
            let baliseEmail=document.getElementById("email")
            let email=baliseEmail.value
            console.log(nom,email)
            let scoreMail=`${score}/${i}`
            afficherEmail(nom,email,scoreMail)
    })
} 