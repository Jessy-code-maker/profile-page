    //category filtering
// Filter dishes by category
function showCategory(category, event) {
  const dishes = document.querySelectorAll(".dish");
  const buttons = document.querySelectorAll(".category-nav button");

  dishes.forEach((dish) => {
    dish.style.display =
      category === "all" || dish.getAttribute("data-category") === category
        ? "block"
        : "none";
  });

  buttons.forEach((btn) => btn.classList.remove("active"));

  if (event && event.target) {
    event.target.classList.add("active");
  }
}

window.onload = function () {
  const saved = localStorage.getItem("cartItems");
  if (saved) {
    cart = JSON.parse(saved);
    renderCart();
  }
};

function filterDishes() {
  const selectedCategory = document.getElementById("category-select").value;
  const dishes = document.querySelectorAll(".dish");
  dishes.forEach((dish) => {
    const category = dish.getAttribute("data-category");
    dish.style.display =
      selectedCategory === "all" || category === selectedCategory
        ? "block"
        : "none";
  });
}
// Setup responsive filter for small screens
function setupResponsiveFilter() {
  const categorySelect = document.getElementById("category-select");
  if (!categorySelect) return; // Exit if no select element found

  const mediaQuery = window.matchMedia("(max-width: 768px)");

  function handleScreenChange(e) {
    if (e.matches) {
      // Small screen: attach filter on change event
      categorySelect.addEventListener("change", filterDishes);
      filterDishes(); // Run once on load for initial filtering
    } else {
      // Large screen: remove event listener and show all dishes
      categorySelect.removeEventListener("change", filterDishes);
      const dishes = document.querySelectorAll(".dish");
      dishes.forEach((dish) => (dish.style.display = "block"));
    }
  }

  // Listen for screen size changes dynamically
  handleScreenChange(mediaQuery);
  mediaQuery.addEventListener("change", handleScreenChange);
}

function setupResponsiveCategoryButtons() {
  const buttons = document.querySelectorAll(".category-nav button");
  if (buttons.length === 0) return;

  // Always attach click listeners
  buttons.forEach((button) => {
    if (!button.dataset.listenerAttached) {
      button.addEventListener("click", function (event) {
        const category =
          button.getAttribute("data-category") ||
          button.textContent();
        showCategory(category, event);
      });
      button.dataset.listenerAttached = "true"; // Prevent double-binding
    }
  });

  // Listen for screen size changes dynamically
  handleScreenChange(mediaQuery);
  mediaQuery.addEventListener("change", handleScreenChange);
}

window.addEventListener("DOMContentLoaded", () => {
  setupResponsiveFilter();
  setupResponsiveCategoryButtons();
});


  document.getElementById('insuranceForm').addEventListener('submit', function(e) {
      e.preventDefault(); // prevent actual form submission

      // Get form values
      const provider = document.getElementById('provider').value;
      const policy = document.getElementById('policy-number').value;
      const coverage = document.getElementById('coverage').value;
      const expiry = document.getElementById('expiry-date').value;
      const contact = document.getElementById('contact').value;
      const email = document.getElementById('email').value;

      // Fill submitted data section
      document.getElementById('out-provider').textContent = provider;
      document.getElementById('out-policy-number').textContent = policy;
      document.getElementById('out-coverage').textContent = coverage;
      document.getElementById('out-expiry-date').textContent = expiry;
      document.getElementById('out-contact').textContent = contact;
      document.getElementById('out-email').textContent = email;

      // Show the submitted data section
      document.getElementById('submittedData').style.display = 'block';

      //clear form
     e.target.reset();
    });
