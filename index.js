const loginForm = document.querySelector('#login-form');
const registerForm = document.querySelector('#register-form');
const loginUsername = document.querySelector('#username');
const loginPassword = document.querySelector('#password');
const registerUsername = document.querySelector('#new-username');
const registerPassword = document.querySelector('#new-password');

// função para salvar os dados do usuário no armazenamento local
function saveUser(username, password) {
  const user = { username, password };
  localStorage.setItem(username, JSON.stringify(user));
}

// função para obter os dados do usuário do armazenamento local
function getUser(username) {
  const user = localStorage.getItem(username);
  return JSON.parse(user);
}

// evento para login
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // obter os dados do usuário
  const user = getUser(loginUsername.value);
  
  // verificar se o usuário existe e a senha está correta
  if (user && user.password === loginPassword.value) {
    alert(`Bem-vindo, ${user.username}!`);
  } else {
    alert('Usuário ou senha inválidos!');
  }
  
  // limpar os campos do formulário
  loginUsername.value = '';
  loginPassword.value = '';
});

// evento para registro
registerForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // verificar se o usuário já existe
  if (localStorage.getItem(registerUsername.value)) {
    alert('Este usuário já está registrado!');
    return;
  }
  
  // salvar os dados do novo usuário
  saveUser(registerUsername.value, registerPassword.value);
  alert('Usuário registrado com sucesso!');
  
  // limpar os campos do formulário
  registerUsername.value = '';
  registerPassword.value = '';
});
