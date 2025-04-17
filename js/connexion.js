window.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("form-connexion")
      .addEventListener("submit", function (event) {
        event.preventDefault();
  
        const email = document.getElementById("email").value.trim();
        const motdepasse = document.getElementById("motdepasse").value.trim();
  
        const utilisateurEnregistre = JSON.parse(localStorage.getItem("utilisateur"));
  
        if (!utilisateurEnregistre) {
          alert("Aucun utilisateur enregistré. Va t'inscrire d'abord !");
          return;
        }
  
        if (
          email === utilisateurEnregistre.email &&
          motdepasse === utilisateurEnregistre.motdepasse
        ) {
          alert("Connexion réussie !");
          window.location.href = "dashboard.html";
        } else {
          alert("Email ou mot de passe incorrect.");
        }
      });
  });
