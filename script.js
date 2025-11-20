/* ---------------------------------------------------------
   RESET & BASE
--------------------------------------------------------- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Orbitron", Arial, sans-serif;
}

body {
    background: #0a0a0b;
    color: #e6e6e6;
    line-height: 1.6;
}

/* Couleurs globales */
:root {
    --red: #ff1b1b;
    --red-glow: 0 0 10px #ff1b1b, 0 0 25px #ff1b1b;
    --box-dark: #141416;
}

/* Titres */
h1, h2, h3 {
    color: var(--red);
    text-shadow: var(--red-glow);
    letter-spacing: 1px;
}

a {
    color: var(--red);
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}

/* ---------------------------------------------------------
   HEADER
--------------------------------------------------------- */
header {
    background: #0b0b0c;
    border-bottom: 2px solid var(--red);
    box-shadow: 0 0 15px #ff1b1b55;
    padding: 20px 0;
    position: sticky;
    top: 0;
    z-index: 999;
}

nav {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav .logo h1 {
    font-size: 28px;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 25px;
}

nav ul li a {
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    transition: 0.3s;
    position: relative;
}

nav ul li a::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    height: 2px;
    background: var(--red);
    transition: 0.3s;
}

nav ul li a:hover::after {
    width: 100%;
}

/* ---------------------------------------------------------
   HERO
--------------------------------------------------------- */
.hero {
    padding: 100px 20px;
    text-align: center;
    background: linear-gradient(180deg, #0a0a0b, #121214);
}

.hero h2 {
    font-size: 3.2rem;
}

.hero p {
    font-size: 1.2rem;
    margin: 20px 0;
    color: #cccccc;
}

.cta-button {
    background: var(--red);
    color: white;
    padding: 12px 35px;
    font-size: 1.3rem;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    text-transform: uppercase;
    transition: 0.3s;
    box-shadow: var(--red-glow);
}
.cta-button:hover {
    transform: scale(1.08);
    background: #e00000;
}

/* ---------------------------------------------------------
   SECTIONS
--------------------------------------------------------- */
.section {
    padding: 60px 30px;
    text-align: center;
}

.section h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.section p {
    color: #bbbbbb;
}

/* ---------------------------------------------------------
   COMPOSANTS
--------------------------------------------------------- */
.composants {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    margin-top: 30px;
}

.composant {
    background: var(--box-dark);
    width: 260px;
    padding: 25px 20px;
    border-radius: 12px;
    border: 1px solid #2a2a2d;
    transition: 0.3s ease;
    cursor: pointer;
    box-shadow: 0 0 10px #000;
}

.composant:hover {
    transform: translateY(-8px);
    border-color: var(--red);
    box-shadow: var(--red-glow);
}

.composant button {
    background: var(--red);
    border: none;
    padding: 10px 18px;
    color: white;
    margin-top: 15px;
    border-radius: 6px;
    transition: 0.3s;
    cursor: pointer;
    width: 100%;
}

.composant button:hover {
    background: #d10000;
    transform: scale(1.05);
}

/* ---------------------------------------------------------
   ÉQUIPE
--------------------------------------------------------- */
.equipe {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 35px;
    margin-top: 30px;
}

.membre {
    background: var(--box-dark);
    padding: 20px;
    width: 230px;
    border-radius: 12px;
    box-shadow: 0 0 8px #000;
    transition: 0.3s;
    text-align: center;
}

.membre:hover {
    transform: translateY(-8px);
    border: 1px solid var(--red);
    box-shadow: var(--red-glow);
}

.membre img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: 2px solid var(--red);
    object-fit: cover;
    margin-bottom: 12px;
}

.role {
    color: var(--red);
    margin-bottom: 8px;
    font-weight: bold;
}

/* ---------------------------------------------------------
   ANIMATION D’APPARITION
--------------------------------------------------------- */
.section, .hero {
    opacity: 0;
    transform: translateY(30px);
    transition: 0.8s ease;
}

.section.visible, .hero.visible {
    opacity: 1;
    transform: translateY(0);
}

/* ---------------------------------------------------------
   POPUP DE SÉLECTION COMPOSANT
--------------------------------------------------------- */
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
    border: 2px solid var(--red);
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
    background: var(--red);
    color: white;
    transform: scale(1.05);
}

.close-popup {
    background: var(--red);
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

/* ---------------------------------------------------------
   FOOTER
--------------------------------------------------------- */
footer {
    text-align: center;
    background-color: #111;
    padding: 20px;
    color: #888;
    font-size: 0.9rem;
    margin-top: 60px;
}
