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
            <div style="display:flex; flex-direction:column; align-items:center; padding: 80px 40px; max-width: 900px; margin: 0 auto;">
                <img src="/images/imagem_bio_joaobarbalho.jpg" alt="João Barbalho" style="width: 100%; max-width: 500px; height: auto; object-fit: cover; margin-bottom: 40px;">
                <p style="font-size: clamp(15px, 2vw, 18px); line-height: 1.9; white-space: pre-line; text-align: center; max-width: 700px;">Montador pernambucano residente em São Paulo com mais de 10 anos de experiência no audiovisual brasileiro.

Atuo na pós-produção como montador/editor, com passagem por diversos mercados e formatos: publicidade, documentários, séries de TV e longas-metragens. Ao longo da carreira, colaborei com produtoras como Paranoid, O2, Gullane, Boutique entre outras, e com plataformas e canais como Netflix, HBO, Globoplay, além de diretores independentes.

Formado em Comunicação, alio bagagem técnica e sensibilidade artística, trabalhando com diferentes fluxos de edição e me adaptando às demandas criativas de cada produção. Sigo em constante evolução profissional, sempre aberto a novos desafios e colaborações que expandem meu repertório e contribuam para novos projetos instigantes.

Montador associado a AMC - Associação de Montadores de Cinema.

Telefone: (11) 976621191
Email: joaob.pos@gmail.com</p>
            </div>
        `,
        en: `
            <div style="display:flex; flex-direction:column; align-items:center; padding: 80px 40px; max-width: 900px; margin: 0 auto;">
                <img src="/images/imagem_bio_joaobarbalho.jpg" alt="João Barbalho" style="width: 100%; max-width: 500px; height: auto; object-fit: cover; margin-bottom: 40px;">
                <p style="font-size: clamp(15px, 2vw, 18px); line-height: 1.9; white-space: pre-line; text-align: center; max-width: 700px;">Editor from Pernambuco based in São Paulo with over 10 years of experience in Brazilian audiovisual.

I work in post-production as an editor, with experience across various markets and formats: advertising, documentaries, TV series and feature films. Throughout my career, I have collaborated with production companies such as Paranoid, O2, Gullane, Boutique among others, and with platforms and channels such as Netflix, HBO, Globoplay, as well as independent directors.

Graduated in Communication, I combine technical background and artistic sensibility, working with different editing workflows and adapting to the creative demands of each production. I am in constant professional evolution, always open to new challenges and collaborations.

Editor associated with AMC - Associação de Montadores de Cinema.

Phone: (11) 976621191
Email: joaob.pos@gmail.com</p>
            </div>
        `,
        es: `
            <div style="display:flex; flex-direction:column; align-items:center; padding: 80px 40px; max-width: 900px; margin: 0 auto;">
                <img src="/images/imagem_bio_joaobarbalho.jpg" alt="João Barbalho" style="width: 100%; max-width: 500px; height: auto; object-fit: cover; margin-bottom: 40px;">
                <p style="font-size: clamp(15px, 2vw, 18px); line-height: 1.9; white-space: pre-line; text-align: center; max-width: 700px;">Montador pernambucano residente en São Paulo con más de 10 años de experiencia en el audiovisual brasileño.

Trabajo en postproducción como montador/editor, con experiencia en diversos mercados y formatos: publicidad, documentales, series de TV y largometrajes. A lo largo de mi carrera, he colaborado con productoras como Paranoid, O2, Gullane, Boutique entre otras, y con plataformas y canales como Netflix, HBO, Globoplay, además de directores independientes.

Graduado en Comunicación, combino bagaje técnico y sensibilidad artística, trabajando con diferentes flujos de edición y adaptándome a las demandas creativas de cada producción.

Montador asociado a AMC - Associação de Montadores de Cinema.

Teléfono: (11) 976621191
Email: joaob.pos@gmail.com</p>
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
    let content = '';
    
    if (category === 'about') {
        // Carregar dados do CMS
        try {
            const response = await fetch('/content/about.json');
            const data = await response.json();
            const langKey = currentLang;
            content = `
                <div style="display:flex; flex-direction:column; align-items:center; padding: 80px 40px; max-width: 900px; margin: 0 auto;">
                    <img src="/images/imagem_bio_joaobarbalho.jpg" alt="João Barbalho" style="width: 100%; max-width: 500px; height: auto; object-fit: cover; margin-bottom: 40px;">
                    <p style="font-size: clamp(15px, 2vw, 18px); line-height: 1.9; white-space: pre-line; text-align: center; max-width: 700px;">${data['text_' + langKey]}</p>
                </div>
            `;
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
            content = portfolioContent[category][currentLang];
        }
    } else {
        try {
            const projects = await loadProjects(category);
            if (projects.length > 0) {
                content = projects.map(project => `
                    <div class="grid-item">
                        <img src="${project.image}" alt="${project.title || project.role}" style="${project.imagePosition ? 'object-position:' + project.imagePosition : ''}">
                        <div class="project-info">
                            <p>${project.title || ''}</p>
                            <p>${project.role}</p>
                            <p>${project.year ? project.year + (project.format ? ' · ' + project.format : '') : (project.format || '')}</p>
                            <p>${project.director}</p>
                            <p>${project.producer}</p>
                            ${project.video ? `<a href="${project.video}" target="_blank" class="imdb-btn">ASSISTIR</a>` : ''}
                            ${project.imdb ? `<a href="${project.imdb}" target="_blank" class="imdb-btn">IMDb</a>` : ''}
                        </div>
                    </div>
                `).join('');
            } else {
                content = portfolioContent[category];
            }
        } catch (error) {
            console.error('Erro ao carregar projetos:', error);
            content = portfolioContent[category];
        }
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

// Função para carregar projetos do CMS
async function loadProjects(category) {
    try {
        // Carregar índice de projetos
        const response = await fetch('/content/projects.json');
        if (!response.ok) {
            console.error('Erro ao carregar projetos');
            return [];
        }
        
        const data = await response.json();
        const allProjects = Array.isArray(data) ? data : (data.projects || []);
        
        console.log('Projetos carregados:', allProjects);
        
        // Filtrar por categoria e ordenar
        const filtered = allProjects
            .filter(p => p.category === category)
            .sort((a, b) => (a.order || 0) - (b.order || 0));
        
        console.log(`Projetos para categoria ${category}:`, filtered);
        return filtered;
    } catch (error) {
        console.error('Erro ao buscar projetos:', error);
        return [];
    }
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
        categoryLabel.textContent = 'MONTADOR AUDIOVISUAL';
        
        // Update header link based on category
        if (category === 'advertising') {
            headerLink.innerHTML = '<i class="fi fi-brands-vimeo"></i>';
            headerLink.href = 'https://vimeo.com/joaobarbalho';
        } else {
            headerLink.innerHTML = '<i class="fi fi-brands-imdb"></i>';
            headerLink.href = 'https://www.imdb.com/name/nm11060144/';
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
        filmEditor: 'CINEMA & SÉRIES',
        documentary: 'DOCUMENTÁRIO',
        advertising: 'PUBLICIDADE',
        assistantEditor: 'ASSISTENTE DE EDIÇÃO',
        about: 'CONTATO',
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
        filmEditor: 'CINEMA & SERIES',
        documentary: 'DOCUMENTARY',
        advertising: 'ADVERTISING',
        assistantEditor: 'ASSISTANT EDITOR',
        about: 'CONTACT',
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
        filmEditor: 'CINEMA & SERIES',
        documentary: 'DOCUMENTAL',
        advertising: 'PUBLICIDAD',
        assistantEditor: 'ASISTENTE DE EDICIÓN',
        about: 'CONTACTO',
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
categoryLabel.textContent = 'MONTADOR AUDIOVISUAL';
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