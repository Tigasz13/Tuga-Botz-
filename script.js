// Tuga Botz

// Atualiza automaticamente o ano no footer (quando o criarmos)
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// Animação suave dos botões
document.querySelectorAll(".btn-primary, .btn-secondary").forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-3px) scale(1.03)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0) scale(1)";
    });

});
