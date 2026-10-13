document.addEventListener("DOMContentLoaded", () => {
  const toggleSidebar = document.getElementById('toggle-sidebar');
  const sidebar = document.getElementById('sidebar');

  if (toggleSidebar && sidebar) {
    toggleSidebar.addEventListener('click', () => {
      sidebar.classList.toggle('closed');
    });
  }

  const welcomeElement = document.getElementById("user-welcome");
  const savedName = localStorage.getItem("sifinance_name");
    
  if (welcomeElement && savedName) {
    welcomeElement.textContent = savedName;
  }

  const savedCurrency = localStorage.getItem("sifinance_currency") || "real";
  const currencySymbols = {
    real: "R$",
    euro: "€",
    dolar: "$"
  };

  const currentSymbol = currencySymbols[savedCurrency] || "R$";

  const currencyMain = document.querySelector(".card-value .currency");
  if (currencyMain) {
    currencyMain.textContent = currentSymbol;
  }

  const allElements = document.querySelectorAll(".value, .card2-value, .card2-comp-item span");
    
  allElements.forEach(el => {
    if (el.textContent.includes("R$")) {
      el.textContent = el.textContent.replace("R$", currentSymbol);
    }
  });
});