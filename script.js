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

sideMenu.addEventListener('click', (e) => {
    if (e.target === sideMenu) {
        sideMenu.classList.remove('active');
    }
});

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
    }
};

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
        about: 'CONTATO'
    },
    en: {
        filmEditor: 'CINEMA & SERIES',
        documentary: 'DOCUMENTARY',
        advertising: 'ADVERTISING',
        assistantEditor: 'ASSISTANT EDITOR',
        about: 'CONTACT'
    },
    es: {
        filmEditor: 'CINEMA & SERIES',
        documentary: 'DOCUMENTAL',
        advertising: 'PUBLICIDAD',
        assistantEditor: 'ASISTENTE DE EDICIÓN',
        about: 'CONTACTO'
    }
};

async function loadContent(category) {
    let content = '';

    if (category === 'about') {
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
            content = portfolioContent['about'][currentLang];
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
                content = portfolioContent['about'][currentLang];
            }
        } catch (error) {
            content = portfolioContent['about'][currentLang];
        }
    }

    portfolioGrid.innerHTML = content;

    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('click', function() {
            gridItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

async function loadProjects(category) {
    try {
        const response = await fetch('/content/projects.json');
        if (!response.ok) return [];
        const data = await response.json();
        const allProjects = Array.isArray(data) ? data : (data.projects || []);
        return allProjects
            .filter(p => p.category === category)
            .sort((a, b) => (a.order || 0) - (b.order || 0));
    } catch (error) {
        return [];
    }
}

const categoryLinks = document.querySelectorAll('.side-menu a[data-category]');
const categoryLabel = document.querySelector('.category-label');
const headerLink = document.querySelector('.imdb-link');

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

function navigateTo(category) {
    categoryLinks.forEach(l => l.classList.remove('active'));
    const active = document.querySelector(`[data-category="${category}"]`);
    if (active) active.classList.add('active');
    body.setAttribute('data-category', category);
    categoryLabel.textContent = 'MONTADOR AUDIOVISUAL';
    if (category === 'advertising') {
        headerLink.innerHTML = '<i class="fi fi-brands-vimeo"></i>';
        headerLink.href = 'https://vimeo.com/joaobarbalho';
    } else {
        headerLink.innerHTML = '<i class="fi fi-brands-imdb"></i>';
        headerLink.href = 'https://www.imdb.com/name/nm11060144/';
    }
    loadContent(category);
}

categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(link.getAttribute('data-category'));
        setTimeout(() => sideMenu.classList.remove('active'), 100);
    });
});

document.getElementById('logoHome').addEventListener('click', () => {
    navigateTo('film-editor');
});

document.documentElement.lang = currentLang;
categoryLabel.textContent = 'MONTADOR AUDIOVISUAL';
updateMenuItems();
loadContent('film-editor');
