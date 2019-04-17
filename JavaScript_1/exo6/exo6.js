function fonctionRest(){
  var nombrepremier = document.getElementById('firstNumber').value;
  var nombresecond = document.getElementById('secondNumber').value;
  result = parseFloat(nombrepremier) % parseFloat(nombresecond); //% pour avoir le reste d'une division
alert(result);
}
//querySelector nous permet de selectionné la première occurrence d'un selecteur css
var bouton = document.querySelector('input[type="submit"]');
//on utilise la fonction sans les parenthèses car c'est l'évenement qui déclenche l'exécution de la fonction 
bouton.onclick = rest;
