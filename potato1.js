// Load cart data from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || {};
let totalPrice = 0;
let discount = parseFloat(localStorage.getItem('discount')) || 0;
let freeDelivery = localStorage.getItem('freeDelivery') === 'true' || false;
let isCouponApplied = localStorage.getItem('isCouponApplied') === 'true' || false; // Track if coupon is already applied

// Function to initialize cart page
function initializeCart() {
  updateCartCount();
  displayCartItems();
}

// Function to update the cart count
function updateCartCount() {
  let totalItems = 0;
  for (const itemName in cart) {
    totalItems += cart[itemName].quantity;
  }
  document.getElementById('cart-count').textContent = totalItems;
}

// Display Cart Items
function displayCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';
  totalPrice = 0;

  for (const itemName in cart) {
    const item = cart[itemName];
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    cartItem.innerHTML = `
      <img src="${item.image}" alt="${itemName}">
      <div class="cart-item-details">
        <h3>${itemName}</h3>
        <p>Restaurant: ${item.restaurant}</p>
        <p>₹ ${item.price} x ${item.quantity}</p>
        <p>₹ ${item.price * item.quantity}</p>
      </div>
      <div class="quantity-controls">
        <button onclick="decreaseQuantity('${itemName}')">-</button>
        <span>${item.quantity}</span>
        <button onclick="increaseQuantity('${itemName}')">+</button>
      </div>
      <button class="remove-item" onclick="removeItem('${itemName}')">Remove</button>
    `;

    cartItemsContainer.appendChild(cartItem);
    totalPrice += item.price * item.quantity;
  }

  updateTotalPrice();
}

// Increase Quantity
function increaseQuantity(itemName) {
  cart[itemName].quantity++;
  saveCartToLocalStorage();
  updateCartCount();
  displayCartItems();
}

// Decrease Quantity
function decreaseQuantity(itemName) {
  if (cart[itemName].quantity > 1) {
    cart[itemName].quantity--;
  } else {
    delete cart[itemName];
  }
  saveCartToLocalStorage();
  updateCartCount();
  displayCartItems();
}

// Remove Item
function removeItem(itemName) {
  delete cart[itemName];
  saveCartToLocalStorage();
  updateCartCount();
  displayCartItems();

  // Reset coupon state if cart is empty
  if (Object.keys(cart).length === 0) {
    resetCouponState();
  }
}

// Apply Coupon
function applyCoupon() {
  if (isCouponApplied) {
    alert('Coupon has already been applied.');
    return;
  }

  const couponCode = document.getElementById('coupon-code').value;
  const couponMessage = document.getElementById('coupon-message');

  if (couponCode === 'DISCOUNT10') {
    discount = totalPrice * 0.1; // 10% discount
    couponMessage.textContent = 'Coupon applied! 10% discount added.';
    couponMessage.style.color = 'green';
    isCouponApplied = true;
  } else if (couponCode === 'FREEDELIVERY') {
    freeDelivery = true;
    couponMessage.textContent = 'Coupon applied! Free delivery added.';
    couponMessage.style.color = 'green';
    isCouponApplied = true;
  } else {
    discount = 0;
    freeDelivery = false;
    couponMessage.textContent = 'Invalid coupon code.';
    couponMessage.style.color = 'red';
  }

  // Save coupon state to localStorage
  localStorage.setItem('discount', discount);
  localStorage.setItem('freeDelivery', freeDelivery);
  localStorage.setItem('isCouponApplied', isCouponApplied);

  updateTotalPrice();
}

// Reset Coupon State
function resetCouponState() {
  discount = 0;
  freeDelivery = false;
  isCouponApplied = false;

  // Clear coupon state from localStorage
  localStorage.removeItem('discount');
  localStorage.removeItem('freeDelivery');
  localStorage.removeItem('isCouponApplied');

  // Update the coupon message
  const couponMessage = document.getElementById('coupon-message');
  couponMessage.textContent = '';
}

// Update Total Price
function updateTotalPrice() {
  const deliveryCharge = 20; // Delivery charge is ₹20
  let finalPrice = totalPrice - discount;

  // If cart is empty, reset total price to 0
  if (Object.keys(cart).length === 0) {
    finalPrice = 0;
    discount = 0;
    freeDelivery = false;
  }

  // Display subtotal
  document.getElementById('subtotal-price').textContent = totalPrice.toFixed(2);

  // Display delivery fee
  const deliveryFeeElement = document.getElementById('delivery-fee');
  if (freeDelivery) {
    deliveryFeeElement.textContent = '0 (Free Delivery)';
    finalPrice += 0; // Free delivery
  } else {
    deliveryFeeElement.textContent = deliveryCharge;
    finalPrice += deliveryCharge; // Add delivery charge
  }

  // Display total price
  document.getElementById('total-price').textContent = finalPrice.toFixed(2);
}

// Save Cart to LocalStorage
function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Proceed to Checkout
function proceedToCheckout() {
  // Redirect to the checkout page
  window.location.href = 'potatocheckout.html';
}

// Initialize Cart Page
initializeCart();