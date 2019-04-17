function fonction(){
  var nombrepremier = document.getElementById('firstNumber').value;
  var nombresecond = document.getElementById('secondNumber').value;
  //parseInt renvoie un entier; parseFloat permet de convertir une variable en nombre décimal
  result = parseInt(nombrepremier) * parseFloat(nombresecond);
alert(result);
}
