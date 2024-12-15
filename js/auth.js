document.addEventListener("DOMContentLoaded", () => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const authLinks = document.getElementById("authLinks");
    const agendaLink = document.getElementById("agendaLink");
    const adminLink = document.getElementById("adminLink");
    const perfilLink = document.getElementById("perfilLink");

    if (usuario) {
        const logoutBtn = document.createElement("a");
        logoutBtn.href = "#";
        logoutBtn.textContent = "Cerrar Sesión";
        logoutBtn.classList.add("btn-login");
        logoutBtn.onclick = () => {
            localStorage.removeItem("usuario");
            window.location.href = "login.html";
        };

        authLinks.innerHTML = "";
        authLinks.appendChild(logoutBtn);

        if (usuario.rol === "estilista" && agendaLink) {
            agendaLink.style.display = "inline-block";
        }

        if (usuario.rol === "admin" && adminLink) {
            adminLink.style.display = "inline-block";
        }

        if (usuario.usuario === "cliente1" && perfilLink) {
            perfilLink.style.display = "inline-block";
        }
    } else {
        const loginBtn = document.createElement("a");
        loginBtn.href = "login.html";
        loginBtn.textContent = "Iniciar Sesión";
        loginBtn.classList.add("btn-login");
        authLinks.innerHTML = "";
        authLinks.appendChild(loginBtn);
    }
});
