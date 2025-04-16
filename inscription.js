document.getElementById("form-inscription").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche la page de recharger
  
    // Récupérer les valeurs des champs
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const motdepasse = document.getElementById("motdepasse").value.trim();
  
    // Vérifier que les champs obligatoires sont remplis
    if (!nom || !motdepasse) {
      alert("Merci de remplir tous les champs obligatoires.");
      return;
    }
  
    // Créer un objet utilisateur
    const utilisateur = {
      nom,
      email,
      motdepasse
    };
  
    // Enregistrer l’objet dans le localStorage
    localStorage.setItem("utilisateur", JSON.stringify(utilisateur));
  
    // Afficher une confirmation
    alert("Inscription réussie !");
    
    // Rediriger vers la suite (ex: connexion à Pronote)
    window.location.href = "connexion.html";
  });