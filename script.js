// Composants disponibles
const composants = {
    "Processeur (CPU)": ["Intel i5", "Intel i7", "Ryzen 5", "Ryzen 7"],
    "Mémoire RAM": ["16 Go DDR4", "32 Go DDR4", "32 Go DDR5"],
    "Carte Graphique (GPU)": ["RTX 4060", "RTX 4070", "RTX 4080"],
    "Carte Mère": ["B760", "Z790", "X670E"],
    "Boîtier PC": ["NZXT H510", "Corsair 4000D"],
    "Alimentation (PSU)": ["650W Gold", "750W Gold"],
    "Stockage": ["SSD 1To", "SSD 2To"]
};

let panier = JSON.parse(localStorage.getItem("panier")) || {};

function updateCartDisplay() {
    const ul = document.getElementById("panier-liste");
    ul.innerHTML = "";

    Object.entries(panier).forEach(([cat, item]) => {
        const li = document.createElement("li");
        li.textContent = `${cat} : ${item}`;
        ul.appendChild(li);
    });
}

function addToCart(categorie, item) {
    panier[categorie] = item;
    localStorage.setItem("panier", JSON.stringify(panier));
    updateCartDisplay();
}

function createPopup(titre, options) {
    const popup = document.createElement("div");
    popup.classList.add("popup");

    popup.innerHTML = `
        <div class="popup-content">
            <h2>Sélectionner : ${titre}</h2>
            <ul>
                ${options.map(o => `<li class="option">${o}</li>`).join("")}
            </ul>
            <button class="close-popup">Fermer</button>
        </div>`;

    document.body.appendChild(popup);

    popup.querySelectorAll(".option").forEach(opt => {
        opt.addEventListener("click", () => {
            addToCart(titre, opt.textContent);
            popup.remove();
        });
    });

    popup.querySelector(".close-popup").addEventListener("click", () => popup.remove());
}

// Activation des boutons Choisir
```
