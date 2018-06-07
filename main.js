//Author: StephaneS Boyer



//declaration de varaibles de boucles
let alpha;
let nombre;

//Declaration de variables bouttons
let bouttonDemarrer = document.getElementById('btn0');
let btn = document.getElementById('selecteur');

function loop(nombre) {
    //On verifie si l'entrée utilisateur est un nombre
    if(isNaN(nombre) || nombre==="")
    {
        alert('Entrez un nombre SVP');
        location.reload();
        
    }
    //creation d'un boucle loop
    alpha = setTimeout(function () { // Creation d'un timeout de 1s(1000 millisecondes)

        document.getElementById("compteur").innerHTML = nombre; //affichage du compteur
        nombre--; //decrémentation de i qui est le compteur

        if (nombre >= 0) { // Tant que i>0 on réexecute la boucle
            loop(nombre);//on boucle sur le nombre
        }

    }, 1000);

}


//change le nom du boutton Demarrer/Reinitialiser
bouttonDemarrer.addEventListener('click', changeBouttonDemarrer);

function changeBouttonDemarrer() {
    if (bouttonDemarrer.value === 'Demarrer') {
        bouttonDemarrer.value = 'Reinitialiser';
        bouttonDemarrer.style.backgroundColor = "#4d9900" ;
        demarrer();
    } else {
    bouttonDemarrer.value = 'Demarrer';
        demarrer();
        bouttonDemarrer.style.backgroundColor = "#336600" ;

    }

}
//-------------------------------------------



//Changer le nom  du bouton pause/reprendre
btn.addEventListener('click', changeBoutton);

function changeBoutton() {
    if (btn.value === 'Pause') {
        btn.value = 'Reprendre';
        btn.style.backgroundColor = "#0066ff" ;
        stopTimer();
    } else {
    btn.value = 'Pause';
        stopTimer();
        loop(document.getElementById("compteur").innerHTML);
        btn.style.backgroundColor = "blue" ;
        
    }

}



//On recupere la valeur entrée par l'utilisateur.
function demarrer() {
    stopTimer();
    let i = document.getElementById('nbr').value;
    loop(i);
}
//Arrete le timer
function stopTimer() {
    clearTimeout(alpha);
}


//On arrete le timer et on recharge la page(Equivalent F5)
function reCharge() {
    stopTimer();
    location.reload();
}


