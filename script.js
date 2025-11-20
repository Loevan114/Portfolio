// JavaScript simple pour la gestion des interactions

document.addEventListener('DOMContentLoaded', function() {
    // Ajouter une fonctionnalité de clic sur les boutons "Choisir"
    const buttons = document.querySelectorAll('.choisir');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Composant ajouté à votre configuration!');
        });
    });
});
