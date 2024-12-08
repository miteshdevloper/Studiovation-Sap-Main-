document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const formContainer = document.getElementById('form-container');

    // Toggle between Login and Register forms
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleForms);
    }

    function toggleForms() {
        formContainer.classList.toggle('slide-register');
        toggleButton.textContent = formContainer.classList.contains('slide-register') ? 'Login' : 'Register';
    }


});
function handleLogin() {
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://your-login-handler-url', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert('Login successful');
            } else {
                alert('Login failed');
            }
        }
    };
    xhr.send('username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password));
}