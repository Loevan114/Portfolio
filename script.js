const buttons = document.querySelectorAll('.product button');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('🛒 Produit ajouté au panier !');
  });
});
