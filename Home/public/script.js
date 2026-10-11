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
  if (savedName) {
    welcomeElement.textContent = savedName;
  }

});