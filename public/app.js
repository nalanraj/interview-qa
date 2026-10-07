let cart = 0;

const currentPath = window.location.pathname;
document.querySelector(".login").hidden = currentPath !== "/login";
document.querySelector(".shop").hidden = currentPath !== "/shop";
document.querySelector(".checkout").hidden = currentPath !== "/checkout";

document.querySelectorAll(".product button").forEach((button) => {
  button.addEventListener("click", () => {
    cart += 1;
    document.querySelector("#cart-count").textContent = cart;
  });
});

document.querySelector("#login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector(".message").textContent = "Invalid credentials";
});

document.querySelector("#checkout-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#confirmation").textContent = "Thank you for your order";
});
