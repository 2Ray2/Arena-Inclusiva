// Lógica da Aplicação Arena Inclusiva
document.addEventListener('DOMContentLoaded', () => {
    console.log('Arena Inclusiva iniciada.');
    renderApp();
});

let currentUser = JSON.parse(localStorage.getItem('arena_user')) || null;
let currentTheme = localStorage.getItem('arena_theme') || 'light';
let contrastMode = localStorage.getItem('arena_contrast') || 'normal';

function renderApp() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    document.documentElement.setAttribute('data-contrast', contrastMode);
    
    const app = document.getElementById('app');
    app.innerHTML = `
        <header>
            <div class="container nav-content">
                <a href="#" class="logo">
                    <span>Arena Inclusiva</span>
                </a>
                <div class="accessibility-toolbar">
                    <button class="btn-acc" onclick="toggleContrast()">Alto Contraste</button>
                    <button class="btn-acc" onclick="toggleTheme()">Tema</button>
                </div>
            </div>
        </header>
        <main class="container" style="padding-top: 2rem;">
            <h1>Bem-vindo ao Arena Inclusiva</h1>
            <p>Plataforma para incentivo e recomendação de esportes adaptados e inclusivos.</p>
            <div class="grid-cards" id="sports-grid"></div>
        </main>
    `;
    renderSports();
}

function renderSports() {
    const grid = document.getElementById('sports-grid');
    if (!grid) return;
    grid.innerHTML = SPORTS_DATA.map(sport => `
        <div class="card">
            <div class="card-body">
                <span class="badge">${sport.category}</span>
                <h3 style="margin-top: 0.5rem;">${sport.name}</h3>
                <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">${sport.description}</p>
                <button class="btn-primary" style="margin-top: 1rem; width: 100%;">Saiba Mais</button>
            </div>
        </div>
    `).join('');
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('arena_theme', currentTheme);
    renderApp();
}

function toggleContrast() {
    contrastMode = contrastMode === 'normal' ? 'high' : 'normal';
    localStorage.setItem('arena_contrast', contrastMode);
    renderApp();
}
