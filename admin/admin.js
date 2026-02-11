const REPO = 'josue-veloso/joao-barbalho';
let token = localStorage.getItem('github_token');
let currentEditIndex = null;

if (token) {
  showAdmin();
}

function updateImageHint() {
  const category = document.getElementById('category').value;
  const hint = document.getElementById('imageHint');
  
  if (category === 'documentary') {
    hint.textContent = 'Documentary: 1920x1080px (horizontal, 16:9)';
  } else {
    hint.textContent = 'Film Editor/Assistant Editor: 600x900px (vertical, 2:3)';
  }
}

function loginGitHub() {
  const token = prompt('Cole seu Personal Access Token do GitHub:\n\n1. Acesse: https://github.com/settings/tokens\n2. Clique em "Generate new token (classic)"\n3. Marque "repo" scope\n4. Copie o token e cole aqui');
  
  if (token) {
    localStorage.setItem('github_token', token);
    location.reload();
  }
}

function logout() {
  localStorage.removeItem('github_token');
  token = null;
  location.reload();
}

async function showAdmin() {
  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('adminScreen').classList.remove('hidden');
  
  try {
    const user = await githubAPI('GET', 'https://api.github.com/user');
    document.getElementById('userName').textContent = user.login;
    
    loadProjects();
    loadAbout();
  } catch (error) {
    alert('Token inválido. Faça login novamente.');
    logout();
  }
}

async function githubAPI(method, url, data) {
  const options = {
    method,
    headers: {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    }
  };
  
  if (data) options.body = JSON.stringify(data);
  
  const response = await fetch(url, options);
  return response.json();
}

async function loadProjects() {
  const data = await githubAPI('GET', `https://api.github.com/repos/${REPO}/contents/content/projects.json`);
  const content = JSON.parse(atob(data.content));
  
  const list = document.getElementById('projectsList');
  list.innerHTML = content.projects.map((p, index) => `
    <div class="project-card">
      <img src="${p.image}" alt="${p.role}">
      <strong>${p.role}</strong><br>
      <small>${p.category}</small><br>
      <button onclick='editProject(${index})' class="btn btn-primary" style="margin-top: 10px; padding: 5px 10px; font-size: 12px;">Editar</button>
      <button onclick='deleteProject(${index})' class="btn" style="margin-top: 10px; padding: 5px 10px; font-size: 12px; background: #dc3545;">Deletar</button>
    </div>
  `).join('');
}

async function loadAbout() {
  const data = await githubAPI('GET', `https://api.github.com/repos/${REPO}/contents/content/about.json`);
  const content = JSON.parse(atob(data.content));
  
  document.getElementById('title_pt').value = content.title_pt || '';
  document.getElementById('text_pt').value = content.text_pt || '';
  document.getElementById('title_en').value = content.title_en || '';
  document.getElementById('text_en').value = content.text_en || '';
  document.getElementById('title_es').value = content.title_es || '';
  document.getElementById('text_es').value = content.text_es || '';
}

function showTab(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  
  document.getElementById('projectsTab').classList.add('hidden');
  document.getElementById('aboutTab').classList.add('hidden');
  document.getElementById(tab + 'Tab').classList.remove('hidden');
}

function showProjectForm() {
  currentEditIndex = null;
  document.getElementById('projectForm').querySelector('h2').textContent = 'Adicionar Projeto';
  document.getElementById('category').value = 'film-editor';
  document.getElementById('image').value = '';
  document.getElementById('role').value = '';
  document.getElementById('duration').value = '';
  document.getElementById('director').value = '';
  document.getElementById('producer').value = '';
  document.getElementById('imdb').value = '';
  document.getElementById('vimeo').value = '';
  document.getElementById('order').value = '0';
  document.getElementById('projectForm').classList.remove('hidden');
  document.getElementById('projectsList').classList.add('hidden');
}

async function editProject(index) {
  const data = await githubAPI('GET', `https://api.github.com/repos/${REPO}/contents/content/projects.json`);
  const content = JSON.parse(atob(data.content));
  const project = content.projects[index];
  
  currentEditIndex = index;
  document.getElementById('projectForm').querySelector('h2').textContent = 'Editar Projeto';
  document.getElementById('category').value = project.category;
  document.getElementById('image').value = project.image;
  document.getElementById('role').value = project.role;
  document.getElementById('duration').value = project.duration;
  document.getElementById('director').value = project.director;
  document.getElementById('producer').value = project.producer;
  document.getElementById('imdb').value = project.imdb || '';
  document.getElementById('vimeo').value = project.vimeo || '';
  document.getElementById('order').value = project.order;
  document.getElementById('projectForm').classList.remove('hidden');
  document.getElementById('projectsList').classList.add('hidden');
}

async function deleteProject(index) {
  if (!confirm('Tem certeza que deseja deletar este projeto?')) return;
  
  const data = await githubAPI('GET', `https://api.github.com/repos/${REPO}/contents/content/projects.json`);
  const content = JSON.parse(atob(data.content));
  
  content.projects.splice(index, 1);
  
  await githubAPI('PUT', `https://api.github.com/repos/${REPO}/contents/content/projects.json`, {
    message: 'Delete project via admin',
    content: btoa(JSON.stringify(content, null, 2)),
    sha: data.sha
  });
  
  alert('Projeto deletado com sucesso!\n\nO site será atualizado em 1-2 minutos.');
  loadProjects();
}

function cancelProjectForm() {
  document.getElementById('projectForm').classList.add('hidden');
  document.getElementById('projectsList').classList.remove('hidden');
}

async function saveProject(e) {
  e.preventDefault();
  
  const project = {
    category: document.getElementById('category').value,
    image: document.getElementById('image').value,
    role: document.getElementById('role').value,
    duration: document.getElementById('duration').value,
    director: document.getElementById('director').value,
    producer: document.getElementById('producer').value,
    imdb: document.getElementById('imdb').value,
    vimeo: document.getElementById('vimeo').value,
    order: parseInt(document.getElementById('order').value)
  };
  
  const data = await githubAPI('GET', `https://api.github.com/repos/${REPO}/contents/content/projects.json`);
  const content = JSON.parse(atob(data.content));
  
  if (currentEditIndex !== null) {
    content.projects[currentEditIndex] = project;
  } else {
    content.projects.push(project);
  }
  
  await githubAPI('PUT', `https://api.github.com/repos/${REPO}/contents/content/projects.json`, {
    message: currentEditIndex !== null ? 'Update project via admin' : 'Add new project via admin',
    content: btoa(JSON.stringify(content, null, 2)),
    sha: data.sha
  });
  
  alert('Projeto salvo com sucesso!\n\nO site será atualizado em 1-2 minutos.');
  cancelProjectForm();
  loadProjects();
}

async function saveAbout(e) {
  e.preventDefault();
  
  const about = {
    title_pt: document.getElementById('title_pt').value,
    text_pt: document.getElementById('text_pt').value,
    title_en: document.getElementById('title_en').value,
    text_en: document.getElementById('text_en').value,
    title_es: document.getElementById('title_es').value,
    text_es: document.getElementById('text_es').value
  };
  
  const data = await githubAPI('GET', `https://api.github.com/repos/${REPO}/contents/content/about.json`);
  
  await githubAPI('PUT', `https://api.github.com/repos/${REPO}/contents/content/about.json`, {
    message: 'Update about page via admin',
    content: btoa(JSON.stringify(about, null, 2)),
    sha: data.sha
  });
  
  alert('Página Sobre atualizada com sucesso!\n\nO site será atualizado em 1-2 minutos.');
}
