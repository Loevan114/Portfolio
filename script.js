/* =====================
   Animations IntersectionObserver
===================== */

const sections = document.querySelectorAll('.section, .hero');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

sections.forEach(sec => observer.observe(sec));


/* =====================
   Liste des composants
===================== */

const composants = {
    "Processeur (CPU)": ["Intel i5", "Intel i7", "Ryzen 5", "Ryzen 7"],
    "Mémoire RAM": ["16 Go DDR4", "32 Go DDR4", "32 Go DDR5", "64 Go DDR5"],
    "Carte Graphique (GPU)": ["RTX 4060", "RTX 4070", "RTX 4080", "RX 7800XT"],
    "Carte Mère": ["B760 DDR4", "Z790 DDR5", "X670E", "B650"],
    "Boîtier PC": ["NZXT H510", "Corsair 4000D", "Lian Li Lancool", "BeQuiet 500DX"],
    "Alimentation (PSU)": ["650W Gold", "750W Gold", "850W Platinum", "1000W Titanium"],
    "Stockage": ["SSD 1To NVMe", "SSD 2To NVMe", "SSD 4To SATA", "HDD 4To"]
};


/* =====================
   Gestion Panier
===================== */

let panier = JSON.parse(localStorage.getItem("panier")) || {};

function addToCart(categorie) {

    // Ajout automatique : on sélectionne le premier élément de la liste
    const choixAuto = composants[categorie][0];

    panier[categorie] = choixAuto;

    localStorage.setItem("panier", JSON.stringify(panier));
    updatePanier();
}

function updatePanier() {
    const div = document.getElementById("panier-content");
    div.innerHTML = "";

    if (Object.keys(panier).length === 0) {
        div.innerHTML = "<p>Aucun composant sélectionné.</p>";
        return;
    }

    Object.entries(panier).forEach(([cat, item]) => {
        const line = document.createElement("p");
        line.textContent = `${cat} : ${item}`;
        div.appendChild(line);
    });
}

document.getElementById("viderPanier").addEventListener("click", () => {
    panier = {};
    localStorage.removeItem("panier");
    updatePanier();
});

updatePanier();


/* =====================
   Ajout direct au clic
===================== */

document.querySelectorAll(".composant").forEach(comp => {
    const title = comp.querySelector("h3").textContent;
    comp.querySelector(".choisir").addEventListener("click", () => {
        addToCart(title);
    });
});
