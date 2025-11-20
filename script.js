/* ---------------------------------------------------------
   ANIMATIONS D’APPARITION DES SECTIONS
--------------------------------------------------------- */
const sections = document.querySelectorAll('.section, .hero');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

sections.forEach(sec => observer.observe(sec));


/* ---------------------------------------------------------
   POPUP DE SÉLECTION DES COMPOSANTS
--------------------------------------------------------- */
const composants = {
    "Processeur (CPU)": ["Intel i5", "Intel i7", "AMD Ryzen 5", "AMD Ryzen 7"],
    "Mémoire RAM": ["16 Go DDR4", "32 Go DDR4", "32 Go DDR5", "64 Go DDR5"],
    "Carte Graphique (GPU)": ["RTX 4060", "RTX 4070", "RTX 4080", "RX 7800XT"],
    "Carte Mère": ["B760 DDR4", "Z790 DDR5", "X670E", "B650"],
    "Boîtier PC": ["NZXT H510", "Corsair 4000D", "Lian Li Lancool", "BeQuiet 500DX"],
    "Alimentation (PSU)": ["650W Gold", "750W Gold", "850W Platinum", "1000W Titanium"],
    "Stockage": ["SSD 1To NVMe", "SSD 2To NVMe", "SSD 4To SATA", "HDD 4To"]
};

// Création dynamique d’un popup
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
        </div>
    `;

    document.body.appendChild(popup);

    // Option sélectionnée
    popup.querySelectorAll(".option").forEach(option => {
        option.addEventListener("click", () => {
            addToCart(titre, option.textContent);
            popup.remove();
        });
    });

    // Fermeture
    popup.querySelector(".close-popup").addEventListener("click", () => {
        popup.remove();
    });
}


/* ---------------------------------------------------------
   GESTION DU PANIER (localStorage)
--------------------------------------------------------- */
let panier = JSON.parse(localStorage.getItem("panier")) || {};

function addToCart(categorie, item) {
    panier[categorie] = item;
    localStorage.setItem("panier", JSON.stringify(panier));

    alert(`${item} ajouté à votre configuration`);
}


/* ---------------------------------------------------------
   OUVERTURE DES POPUPS SUR CLICK
--------------------------------------------------------- */
document.querySelectorAll(".composant").forEach(comp => {
    const title = comp.querySelector("h3").textContent;
    const btn = comp.querySelector(".choisir");

    btn.addEventListener("click", () => {
        createPopup(title, composants[title]);
    });
});


/* ---------------------------------------------------------
   ANIMATION GLOW SUR LES BOUTONS
--------------------------------------------------------- */
document.querySelectorAll(".choisir, .cta-button").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.boxShadow = "0 0 15px #ff1b1b";
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.boxShadow = "none";
    });
});

/* ============================
   ANIMATION D’APPARITION
============================ */
.section, .hero {
    opacity: 0;
    transform: translateY(30px);
    transition: 0.8s ease;
}

.section.visible, .hero.visible {
    opacity: 1;
    transform: translateY(0);
}

/* ============================
   POPUP DE SÉLECTION
============================ */
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000bb;
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.4s ease;
}

.popup-content {
    background: #121214;
    padding: 25px;
    border-radius: 12px;
    width: 350px;
    text-align: center;
    border: 2px solid #ff1b1b;
    box-shadow: 0 0 25px #ff1b1b;
}

.popup-content h2 {
    margin-bottom: 15px;
}

.popup-content ul {
    list-style: none;
    margin: 15px 0;
    padding: 0;
}

.popup-content .option {
    padding: 10px;
    background: #1d1d20;
    margin: 8px 0;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s;
}

.popup-content .option:hover {
    background: #ff1b1b;
    color: white;
    transform: scale(1.05);
}

.close-popup {
    background: #ff1b1b;
    border: none;
    color: white;
    padding: 10px 20px;
    margin-top: 15px;
    cursor: pointer;
    border-radius: 6px;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
