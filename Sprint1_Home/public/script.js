document.addEventListener("DOMContentLoaded", () => {
  const toggleSidebar = document.getElementById('toggle-sidebar');
  const sidebar = document.getElementById('sidebar');

  if (toggleSidebar && sidebar) {
    toggleSidebar.addEventListener('click', () => {
      sidebar.classList.toggle('closed');
    });
  }

  const selectDate = document.getElementById("select-date");
  const selectDateBtn = document.getElementById("toggle-select-date");
  if (selectDate && selectDateBtn) {
    selectDateBtn.addEventListener("click", () => {
      selectDate.classList.toggle("closed");
    });
  }
  
});