let quizz = [
    {
        question: "quelle est la couleur du ciel",
        a: "rouge",
        b: "vert",
        c: "bleu",
        d: "rose",
        vraiReponse: "c"
    },
    {
        question: " quel est la couleur de la lune",
        a: "rouge",
        b: "vert",
        c: "bleu",
        d: "jaune",
        vraiReponse: "b"
    },
]




//"j'affiche la premiere question"
quizz.forEach(objet => {
    //l'utilisateur choisit une réponse (prompt)

    //On passe à la question suivante
    let reponse = prompt(`
        ${objet.question}
        reponse A : ${objet.a}
        reponse B : ${objet.b}
        reponse C : ${objet.c}
        reponse D : ${objet.d}
        
        `).toLowerCase()
    //Comparer la réponse de l'utilisateur avec la réponse que l'on attends
//si egale "bravo"


if (reponse === objet.vraiReponse) {
    alert("bravo!")
}
//si différente "perdu"
else
    alert("perdu!")


});

























