const boutonJoueur = document.querySelectorAll('.play');  
const resultatgagne = document.getElementById('gagne');
const resultatperd = document.getElementById('perd');
const resultategal = document.getElementById('egal');
const resultatPartie = document.getElementById('resultat-partie');
const renitialiserbouton = document.getElementById('renitialiser');
//console.log(choixJoueur)
const choix = ['Pierre', 'Feuille', 'Ciseaux'];
console.log("test index : ", choix[2])
const score = { gagne: 0, perd: 0, egal: 0};

boutonJoueur.forEach(bouton =>{
    bouton.addEventListener('click',()=>{
        const choixJoueur = bouton.textContent;
        const choixRobot = choix[Math.floor(Math.random() * 3)];
        let resultat;
        console.log(choixJoueur)
            console.log(choixRobot)
        if(choixJoueur == choixRobot){
            resultat = "egal"
            
        }
        else if(
            (choixJoueur === 'Pierre' && choixRobot === 'Feuille')||
            (choixJoueur === 'Feuille' && choixRobot === 'Ciseaux')||
            (choixJoueur === 'Ciseaux' && choixRobot === 'Pierre')
        ){
            resultat = "perd"
        }
        else{
        resultat = "gagne"
        }
        score[resultat]++;
        updateScore();
        resultatPartie.innerHTML = `J'ai joué : ${choixJoueur}<br>Le robot a joué : ${choixRobot}<br>C'est une <strong>${resultat === 'egal' ? 'égalité' : resultat === 'gagne' ? 'victoire' : 'défaite'}</strong>`;

       //resultatPartie.innerHTML = 'J ai joué :' + ${choixJoueur} <br> Le robot a joué :  ${choixRobot}</br>;
       // resultatPartie.innerHTML = `J'ai joué : ${choixJoueur}<br>Le robot a joué : ${choixRobot}<br>C'est une <strong>${outcome === 'egal' ? 'egal' : outcome === 'gagne' ? 'victoire' : 'perd'}</strong>`;
    });
});

function updateScore(){
    resultatgagne.textContent = score.gagne + " Gagné" ;
    resultatperd.textContent = score.perd + " Perdu";
    resultategal.textContent = score.egal + " Égalité";
}

renitialiser.addEventListener('click', ()=>{
    score.gagne = 0;
    score.perd = 0;
    score.egal = 0;
    updateScore();
    resultatPartie.textContent = '';

});

