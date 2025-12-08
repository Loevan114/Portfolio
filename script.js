/* ANIMATION SECTIONS */
const sections = document.querySelectorAll('.section, .hero');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.3 });
sections.forEach(sec => observer.observe(sec));

/* COMPOSANTS */
const composants = {
    "Processeur (CPU)": ["Intel i5", "Intel i7", "AMD Ryzen 5", "AMD Ryzen 7"],
    "Mémoire RAM": ["16 Go DDR4", "32 Go DDR4", "32 Go DDR5", "64 Go DDR5"],
    "Carte Graphique (GPU)": ["RTX 4060", "RTX 4070", "RTX 4080", "RX 7800XT"],
    "Carte Mère": ["B760 DDR4", "Z790 DDR5", "X670E", "B650"],
    "Boîtier PC": ["NZXT H510", "Corsair 4000D", "Lian Li Lancool", "BeQuiet 500DX"],
    "Alimentation (PSU)": ["650W Gold", "750W Gold", "850W Platinum", "1000W Titanium"],
    "Stockage": ["SSD 1To NVMe", "SSD 2To NVMe", "SSD 4To SATA", "HDD 4To"]
};

/* POPUP */
function createPopup(titre, options) {
    const popup = document.createElement("div");
    popup.classList.add("popup");

    popup.innerHTML = `
    <div class="popup-content">
        <h2>Sélectionner : ${titre}</h2>
        <ul>
            ${options.map(opt => `<li class="option">${opt}</li>`).join("")}
        </ul>
        <button class="close-popup">Fermer</button>
    </div>`;

    document.body.appendChild(popup);

    popup.querySelectorAll(".option").forEach(option => {
        option.addEventListener("click", () => {
            addToCart(titre, option.textContent);
            popup.remove();
        });
    });

    popup.querySelector(".close-popup").addEventListener("click", () => popup.remove());
}

/* PANIER */
let panier = JSON.parse(localStorage.getItem("panier")) || {};

function addToCart(categorie, item) {
    panier[categorie] = item;
    localStorage.setItem("panier", JSON.stringify(panier));
    updateCartUI();
}

function updateCartUI() {
    const container = document.getElementById("panier-content");
    container.innerHTML = Object.keys(panier).length
        ? Object.entries(panier).map(([cat, item]) => `<p><strong>${cat}</strong> : ${item}</p>`).join("")
        : "<p>Aucun article pour le moment.</p>";
}

updateCartUI();

document.getElementById("vider-panier").addEventListener("click", () => {
    panier = {};
    localStorage.setItem("panier", JSON.stringify(panier));
    updateCartUI();
});

/* BOUTONS */
document.querySelectorAll(".choisir").forEach(btn => {
    const title = btn.parentElement.querySelector("h3").textContent;
    btn.addEventListener("click", () => createPopup(title, composants[title]));
});
```
