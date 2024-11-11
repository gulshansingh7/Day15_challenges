
let cartCount = 0;
const cartText = document.querySelector('.cart span');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Update cart count
function updateCart() {
  cartText.textContent = `Cart (${cartCount})`;
}

// Event listener for add to cart buttons
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    updateCart();
  });
});

// Initial cart count update
updateCart();
