const REPO = 'josue-veloso/joao-barbalho';
let token = localStorage.getItem('github_token');

// Check if already logged in
if (token) {
  showAdmin();
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
  
  // Get user info
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
  list.innerHTML = content.projects.map(p => `
    <div class=\"project-card\" onclick='editProject(${JSON.stringify(p)})'>
      <img src=\"${p.image}\" alt=\"${p.role}\">
      <strong>${p.role}</strong><br>
      <small>${p.category}</small>
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
  document.getElementById('projectForm').classList.remove('hidden');
  document.getElementById('projectsList').classList.add('hidden');
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
  
  // Get current projects
  const data = await githubAPI('GET', `https://api.github.com/repos/${REPO}/contents/content/projects.json`);
  const content = JSON.parse(atob(data.content));
  
  // Add new project
  content.projects.push(project);
  
  // Update file
  await githubAPI('PUT', `https://api.github.com/repos/${REPO}/contents/content/projects.json`, {
    message: 'Add new project via admin',
    content: btoa(JSON.stringify(content, null, 2)),
    sha: data.sha
  });
  
  alert('Projeto salvo!');
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
  
  alert('Página Sobre atualizada!');
}
