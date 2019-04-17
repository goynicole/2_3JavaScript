function SuperCalcul(pointure, date) {
  //var pointure = document.getElementById('shoeSize').value;
  //var date = document.getElementById('yearOfBirth').value;
  result = ((parseInt(pointure) * 2 + 5) * 50 - parseInt(date) + 1766);
  return(result);
}
var bouton = document.querySelector("#submit");
 bouton.onclick = function(){
  var pointure = document.querySelector("#shoeSize").value;
  var date = document.querySelector("#yearOfBirth").value;
alert(SuperCalcul(pointure, date));

}
