const boutonJoueur = document.querySelectorAll('.play')  
//console.log(choixJoueur)
boutonJoueur.forEach(bouton =>{
    bouton.addEventListener('click',()=>{
        const choixJoueur = bouton.textContent;
        const choixRobot = choix[Math.floor(Math.random() * 3)];
    })
}
)

const choix = ['Pierre', 'Feuille', 'Ciseaux'];
