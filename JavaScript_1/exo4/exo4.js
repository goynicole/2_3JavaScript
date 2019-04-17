function fonction(){
  // document.getElementById, pour appelé l'Id dans le html
  var nom = document.getElementById('lastname').value;
  var prenom = document.getElementById('firstname').value;
  var ville = document.getElementById('city').value;
  result = ('Nom : ' + nom + '\n' + 'Prénom : ' + prenom + '\n' + 'Ville : ' + ville);
alert(result);
}
