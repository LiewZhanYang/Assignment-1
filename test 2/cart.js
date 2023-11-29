document.addEventListener('DOMContentLoaded', function () {
    const cartButton = document.getElementById('cart');
    const cartModalOverlay = document.querySelector('.cart-modal-overlay');
    const closeBtn = document.getElementById('close-btn');
  
    // Function to open the cart modal
    function openCartModal() {
      cartModalOverlay.classList.add('active');
    }
  
    // Function to close the cart modal
    function closeCartModal() {
      cartModalOverlay.classList.remove('active');
    }
  
    // Event listener for opening the cart modal
    cartButton.addEventListener('click', openCartModal);
  
    // Event listener for closing the cart modal
    closeBtn.addEventListener('click', closeCartModal);
  });