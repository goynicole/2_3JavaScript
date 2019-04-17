//function inputBorder() {
//  var pass = document.getElementById('password');
//var confPass = document.getElementById('confirmPassword');
//  if(pass.value == confPass.value) {
//    confPass.style.border = '3px solid green';
//    pass.style.border = '3px solid green';
//  }
//  else if(pass.value != confPass.value){
//    confPass.style.border = '3px solid red';
//    pass.style.border = '3px solid red';
//  }
//}

var motdepass1 = document.querySelector("#password");
var motdepass2 = document.querySelector("#confirmPassword");

function checkPassword(mdp1, mdp2)
{
  if (mdp1 == mdp2)
  {
    return true;
  }
  else
  {
  return false;
  }
}
function changeBorder()
{
if (checkPassword(motdepass1.value,motdepass2.value))
{
  motdepass1.style.border ="2px solid green";
  motdepass2.style.border ="2px solid green";
}
else {
  motdepass1.style.border ="2px solid red";
  motdepass2.style.border ="2px solid red";
}
}
