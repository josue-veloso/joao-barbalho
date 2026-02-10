// Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const closeMenu = document.getElementById('closeMenu');
const body = document.body;
const portfolioGrid = document.getElementById('portfolioGrid');

menuToggle.addEventListener('click', () => {
    sideMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    sideMenu.classList.remove('active');
});

// Close menu when clicking outside
sideMenu.addEventListener('click', (e) => {
    if (e.target === sideMenu) {
        sideMenu.classList.remove('active');
    }
});

// Portfolio Content
const portfolioContent = {
    'about': {
        pt: `
            <div style="padding: 60px; max-width: 800px; margin: 0 auto; text-align: center;">
                <h2 style="font-size: 48px; margin-bottom: 30px;">SOBRE</h2>
                <p style="font-size: 18px; line-height: 1.8; margin-bottom: 20px;">Editor de vídeo com mais de 10 anos de experiência em cinema, documentários e publicidade.</p>
                <p style="font-size: 18px; line-height: 1.8;">Especializado em narrativa visual e montagem criativa.</p>
            </div>
        `,
        en: `
            <div style="padding: 60px; max-width: 800px; margin: 0 auto; text-align: center;">
                <h2 style="font-size: 48px; margin-bottom: 30px;">ABOUT</h2>
                <p style="font-size: 18px; line-height: 1.8; margin-bottom: 20px;">Video editor with over 10 years of experience in film, documentaries and advertising.</p>
                <p style="font-size: 18px; line-height: 1.8;">Specialized in visual storytelling and creative editing.</p>
            </div>
        `,
        es: `
            <div style="padding: 60px; max-width: 800px; margin: 0 auto; text-align: center;">
                <h2 style="font-size: 48px; margin-bottom: 30px;">ACERCA DE</h2>
                <p style="font-size: 18px; line-height: 1.8; margin-bottom: 20px;">Editor de video con más de 10 años de experiencia en cine, documentales y publicidad.</p>
                <p style="font-size: 18px; line-height: 1.8;">Especializado en narrativa visual y montaje creativo.</p>
            </div>
        `
    },
    'film-editor': `
        <div class="grid-item">
            <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=900&fit=crop" alt="Projeto 1">
            <div class="project-info">
                <p>EDITOR</p>
                <p>CURTA METRAGEM, 15MIN</p>
                <p>DIR MARIA SANTOS</p>
                <p>PRODUTORA INDEPENDENTE</p>
                <a href="https://www.imdb.com/title/tt0111161/" target="_blank" class="imdb-btn">IMDb</a>
            </div>
        </div>
        <div class="grid-item">
            <img src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=900&fit=crop" alt="Projeto 2">
            <div class="project-info">
                <p>MONTADOR</p>
                <p>LONGA METRAGEM, 90MIN</p>
                <p>DIR FELIPE BLIDER</p>
                <p>BOUTIQUE FILMES | PARIS FILMES</p>
                <a href="https://www.imdb.com/title/tt0468569/" target="_blank" class="imdb-btn">IMDb</a>
            </div>
        </div>
        <div class="grid-item">
            <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=900&fit=crop" alt="Projeto 3">
            <div class="project-info">
                <p>MONTADOR</p>
                <p>SÉRIE, 8 EPISÓDIOS</p>
                <p>DIR CARLOS MENDES</p>
                <p>NETFLIX | O2 FILMES</p>
                <a href="https://www.imdb.com/title/tt0944947/" target="_blank" class="imdb-btn">IMDb</a>
            </div>
        </div>
        <div class="grid-item">
            <img src="https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=600&h=900&fit=crop" alt="Projeto 4">
            <div class="project-info">
                <p>EDITOR</p>
                <p>LONGA METRAGEM, 105MIN</p>
                <p>DIR ANA PAULA COSTA</p>
                <p>HBO | CONSPIRAÇÃO FILMES</p>
                <a href="https://www.imdb.com/title/tt1375666/" target="_blank" class="imdb-btn">IMDb</a>
            </div>
        </div>
        <div class="grid-item">
            <img src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=900&fit=crop" alt="Projeto 5">
            <div class="project-info">
                <p>MONTADOR</p>
                <p>CURTA METRAGEM, 20MIN</p>
                <p>DIR PEDRO OLIVEIRA</p>
                <p>SONY PICTURES</p>
                <a href="https://www.imdb.com/title/tt0816692/" target="_blank" class="imdb-btn">IMDb</a>
            </div>
        </div>
        <div class="grid-item">
            <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=900&fit=crop" alt="Projeto 6">
            <div class="project-info">
                <p>EDITOR</p>
                <p>LONGA METRAGEM, 95MIN</p>
                <p>DIR LUCAS FERREIRA</p>
                <p>SENTIMENTAL FILMES</p>
                <a href="https://www.imdb.com/title/tt0109830/" target="_blank" class="imdb-btn">IMDb</a>
            </div>
        </div>
    `,
    'assistant-editor': `
        <div class="grid-item">
            <img src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&h=900&fit=crop" alt="Projeto 1">
            <div class="project-info">
                <p>ASSISTENTE DE MONTAGEM</p>
                <p>LONGA METRAGEM, 120MIN</p>
                <p>DIR JOÃO SILVA</p>
                <p>WARNER BROS</p>
                <a href="https://www.imdb.com/title/tt0133093/" target="_blank" class="imdb-btn">IMDb</a>
            </div>
        </div>
        <div class="grid-item">
            <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=900&fit=crop" alt="Projeto 2">
            <div class="project-info">
                <p>ASSISTENTE DE MONTAGEM</p>
                <p>SÉRIE, 10 EPISÓDIOS</p>
                <p>DIR MARIA COSTA</p>
                <p>AMAZON PRIME</p>
                <a href="https://www.imdb.com/title/tt1190634/" target="_blank" class="imdb-btn">IMDb</a>
            </div>
        </div>
        <div class="grid-item">
            <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=900&fit=crop" alt="Projeto 3">
            <div class="project-info">
                <p>ASSISTENTE DE MONTAGEM</p>
                <p>LONGA METRAGEM, 98MIN</p>
                <p>DIR CARLOS MENDES</p>
                <p>UNIVERSAL PICTURES</p>
                <a href="https://www.imdb.com/title/tt0137523/" target="_blank" class="imdb-btn">IMDb</a>
            </div>
        </div>
        <div class="grid-item">
            <img src="https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=600&h=900&fit=crop" alt="Projeto 4">
            <div class="project-info">
                <p>ASSISTENTE DE MONTAGEM</p>
                <p>SÉRIE, 8 EPISÓDIOS</p>
                <p>DIR ANA PAULA</p>
                <p>HBO MAX</p>
                <a href="https://www.imdb.com/title/tt2861424/" target="_blank" class="imdb-btn">IMDb</a>
            </div>
        </div>
    `,
    'documentary': `
        <div class="grid-item doc-item">
            <img src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&h=1080&fit=crop" alt="Documentário 1">
            <div class="project-info">
                <p>MONTADOR</p>
                <p>DOCUMENTÁRIO, 85MIN</p>
                <p>DIR FELIPE BLIDER</p>
                <p>NETFLIX ORIGINAL</p>
                <a href="https://www.imdb.com/title/tt1877514/" target="_blank" class="imdb-btn">IMDb</a>
            </div>
        </div>
        <div class="grid-item doc-item">
            <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1920&h=1080&fit=crop" alt="Documentário 2">
            <div class="project-info">
                <p>EDITOR</p>
                <p>DOCUMENTÁRIO, 72MIN</p>
                <p>DIR MARIA SANTOS</p>
                <p>HBO DOCUMENTARY FILMS</p>
                <a href="https://www.imdb.com/title/tt2380247/" target="_blank" class="imdb-btn">IMDb</a>
            </div>
        </div>
        <div class="grid-item doc-item">
            <img src="https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=1920&h=1080&fit=crop" alt="Documentário 3">
            <div class="project-info">
                <p>MONTADOR</p>
                <p>SÉRIE DOCUMENTAL, 6 EPISÓDIOS</p>
                <p>DIR CARLOS MENDES</p>
                <p>AMAZON PRIME VIDEO</p>
                <a href="https://www.imdb.com/title/tt5491994/" target="_blank" class="imdb-btn">IMDb</a>
            </div>
        </div>
        <div class="grid-item doc-item">
            <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1920&h=1080&fit=crop" alt="Documentário 4">
            <div class="project-info">
                <p>EDITOR</p>
                <p>DOCUMENTÁRIO, 90MIN</p>
                <p>DIR PEDRO OLIVEIRA</p>
                <p>GLOBOPLAY ORIGINALS</p>
                <a href="https://www.imdb.com/title/tt1778338/" target="_blank" class="imdb-btn">IMDb</a>
            </div>
        </div>
    `,
    'advertising': `
        <div class="grid-item video-item">
            <iframe src="https://player.vimeo.com/video/148751763?title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            <div class="project-info">
                <p>EDITOR</p>
                <p>COMERCIAL COCA-COLA, 30SEG</p>
                <p>AGÊNCIA: OGILVY</p>
            </div>
        </div>
        <div class="grid-item video-item">
            <iframe src="https://player.vimeo.com/video/179635463?title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            <div class="project-info">
                <p>MONTADOR</p>
                <p>COMERCIAL NIKE, 60SEG</p>
                <p>AGÊNCIA: WIEDEN+KENNEDY</p>
            </div>
        </div>
        <div class="grid-item video-item">
            <iframe src="https://player.vimeo.com/video/336812660?title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            <div class="project-info">
                <p>EDITOR</p>
                <p>COMERCIAL APPLE, 45SEG</p>
                <p>AGÊNCIA: TBWA\MEDIA ARTS LAB</p>
            </div>
        </div>
        <div class="grid-item video-item">
            <iframe src="https://player.vimeo.com/video/268896653?title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            <div class="project-info">
                <p>MONTADOR</p>
                <p>COMERCIAL SAMSUNG, 30SEG</p>
                <p>AGÊNCIA: LEO BURNETT</p>
            </div>
        </div>
    `
};

// Load content based on category
async function loadContent(category) {
    let content;
    
    if (category === 'about') {
        // Carregar dados do CMS
        try {
            const response = await fetch('/content/about.json');
            const data = await response.json();
            const langKey = currentLang;
            content = `
                <div style="padding: 60px; max-width: 800px; margin: 0 auto; text-align: center;">
                    <h2 style="font-size: 48px; margin-bottom: 30px;">${data['title_' + langKey]}</h2>
                    <p style="font-size: 18px; line-height: 1.8; white-space: pre-line;">${data['text_' + langKey]}</p>
                </div>
            `;
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
            content = portfolioContent[category][currentLang];
        }
    } else {
        content = portfolioContent[category];
    }
    
    portfolioGrid.innerHTML = content || portfolioContent['film-editor'];
    
    // Add click handlers for mobile
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Remove active from all items
            gridItems.forEach(i => i.classList.remove('active'));
            // Add active to clicked item
            this.classList.add('active');
        });
    });
}

// Category Navigation
const categoryLinks = document.querySelectorAll('.side-menu a[data-category]');
const categoryLabel = document.querySelector('.category-label');
const headerLink = document.querySelector('.imdb-link');

categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const category = link.getAttribute('data-category');
        
        // Update active state
        categoryLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Update body data-category
        body.setAttribute('data-category', category);
        
        // Always keep "MONTADOR" label
        categoryLabel.textContent = 'MONTADOR';
        
        // Update header link based on category
        if (category === 'advertising') {
            headerLink.innerHTML = '<i class="fi fi-brands-vimeo"></i>';
            headerLink.href = 'https://vimeo.com';
        } else {
            headerLink.innerHTML = '<i class="fi fi-brands-imdb"></i>';
            headerLink.href = 'https://www.imdb.com';
        }
        
        // Load content
        loadContent(category);
        
        // Close menu with delay
        setTimeout(() => {
            sideMenu.classList.remove('active');
        }, 100);
    });
});

// Load initial content
loadContent('film-editor');

// Detect browser language
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('pt')) return 'pt';
    if (browserLang.startsWith('es')) return 'es';
    return 'en';
}

let currentLang = detectBrowserLanguage();

const translations = {
    pt: {
        filmEditor: 'EDITOR DE CINEMA',
        documentary: 'DOCUMENTÁRIO',
        advertising: 'PUBLICIDADE',
        assistantEditor: 'ASSISTENTE DE EDIÇÃO',
        about: 'SOBRE',
        editor: 'EDITOR',
        montador: 'MONTADOR',
        assistente: 'ASSISTENTE DE MONTAGEM',
        curta: 'CURTA METRAGEM',
        longa: 'LONGA METRAGEM',
        serie: 'SÉRIE',
        doc: 'DOCUMENTÁRIO',
        comercial: 'COMERCIAL',
        agencia: 'AGÊNCIA'
    },
    en: {
        filmEditor: 'FILM EDITOR',
        documentary: 'DOCUMENTARY',
        advertising: 'ADVERTISING',
        assistantEditor: 'ASSISTANT EDITOR',
        about: 'ABOUT',
        editor: 'EDITOR',
        montador: 'EDITOR',
        assistente: 'ASSISTANT EDITOR',
        curta: 'SHORT FILM',
        longa: 'FEATURE FILM',
        serie: 'SERIES',
        doc: 'DOCUMENTARY',
        comercial: 'COMMERCIAL',
        agencia: 'AGENCY'
    },
    es: {
        filmEditor: 'EDITOR DE CINE',
        documentary: 'DOCUMENTAL',
        advertising: 'PUBLICIDAD',
        assistantEditor: 'ASISTENTE DE EDICIÓN',
        about: 'ACERCA DE',
        editor: 'EDITOR',
        montador: 'MONTADOR',
        assistente: 'ASISTENTE DE MONTAJE',
        curta: 'CORTOMETRAJE',
        longa: 'LARGOMETRAJE',
        serie: 'SERIE',
        doc: 'DOCUMENTAL',
        comercial: 'COMERCIAL',
        agencia: 'AGENCIA'
    }
};

// Initialize language on page load
document.documentElement.lang = currentLang;
categoryLabel.textContent = 'MONTADOR';
updateMenuItems();

function updateMenuItems() {
    const menuItems = document.querySelectorAll('.side-menu a[data-category]');
    menuItems.forEach(item => {
        const category = item.getAttribute('data-category');
        const labels = {
            'about': translations[currentLang].about,
            'film-editor': translations[currentLang].filmEditor,
            'documentary': translations[currentLang].documentary,
            'advertising': translations[currentLang].advertising,
            'assistant-editor': translations[currentLang].assistantEditor
        };
        item.textContent = labels[category];
    });
}