function Age() {
  var age = document.getElementById('age').value;
  if (age < 18) {
      alert("Vous êtes mineur(e)");
    }
  else if (age >= 18) {
      alert("Vous êtes majeur(e)");
    }
  else {
    alert("Vous n'existez pas lol");
  }
}
