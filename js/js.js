document.getElementById("login-icon").addEventListener("click", function() {
    document.getElementById("login-modal").classList.remove("hidden");
});

document.getElementById("close-login").addEventListener("click", function() {
    document.getElementById("login-modal").classList.add("hidden");
});

document.getElementById("toggle-button").addEventListener("click", function() {
    const formTitle = document.getElementById("form-title");
    const mainButton = document.getElementById("main-button");
    const toggleButton = document.getElementById("toggle-button");
    const repeatPasswordContainer = document.getElementById("repeat-password-container");

    if (formTitle.textContent === "Login") {
        formTitle.textContent = "Registre-se";
        mainButton.textContent = "Registre-se";
        toggleButton.textContent = "Login";
        repeatPasswordContainer.classList.remove("hidden");
    } else {
        formTitle.textContent = "Login";
        mainButton.textContent = "Login";
        toggleButton.textContent = "Registre-se";
        repeatPasswordContainer.classList.add("hidden");
    }
});

document.getElementById("auth-form").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("login-modal").classList.add("hidden");
});