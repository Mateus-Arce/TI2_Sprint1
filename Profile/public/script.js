document.addEventListener("DOMContentLoaded", () => {
  const toggleSidebar = document.getElementById('toggle-sidebar');
  const sidebar = document.getElementById('sidebar');

  if (toggleSidebar && sidebar) {
    toggleSidebar.addEventListener('click', () => {
      sidebar.classList.toggle('closed');
    });
  }

    const nameInput = document.getElementById("input-name");
    const ageInput = document.getElementById("input-age");
    const phoneInput = document.getElementById("input-phone");
    const usernameInput = document.getElementById("input-username");
    const emailInput = document.getElementById("input-email");

    const fields = [
        { el: nameInput, key: "sifinance_name" },
        { el: ageInput, key: "sifinance_age" },
        { el: phoneInput, key: "sifinance_phone" },
        { el: usernameInput, key: "sifinance_username" },
        { el: emailInput, key: "sifinance_email" }
    ];

    fields.forEach(field => {
        if (field.el && localStorage.getItem(field.key)) {
            field.el.value = localStorage.getItem(field.key);
        }
    });

    fields.forEach(field => {
        if (field.el) {
            field.el.addEventListener("input", (e) => {
                localStorage.setItem(field.key, e.target.value);
            });
        }
    });
    
});