// Attach login listeners to all login buttons
document.querySelectorAll('.login-btn').forEach(btn => {
  btn.addEventListener('click', processLogin);
});

const loginPopup = document.getElementById('login-popup');
const closeBtn = document.getElementById('close-login');

// Open login popup
function processLogin() {
  loginPopup.style.display = 'flex';
}

// Close login popup
closeBtn.addEventListener('click', () => {
  loginPopup.style.display = 'none';
});
