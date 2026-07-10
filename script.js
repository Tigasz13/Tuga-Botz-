// Atualiza automaticamente o ano no footer
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
