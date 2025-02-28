let cart = {};  // Object to store cart items
let foodItems = [
  { name: "Pizza Margherita", restaurant: "Pizza Palace", price: 299, element: null },
  { name: "Burger", restaurant: "Burger King", price: 150, element: null },
  { name: "Pasta", restaurant: "Pasta House", price: 250, element: null },
  { name: "Sushi", restaurant: "Sushi World", price: 500, element: null },
];

// Function to add items to the cart
function addToCart(itemName, itemPrice) {
    if (cart[itemName]) {
        cart[itemName].quantity += 1;  // If item exists, increase quantity
    } else {
        cart[itemName] = { price: itemPrice, quantity: 1 };  // Add new item to cart
    }

    updateCartCount();  // Update the cart count after adding an item
}

// Function to update the cart count displayed on the cart icon
function updateCartCount() {
    let totalItems = 0;
    for (let item in cart) {
        totalItems += cart[item].quantity;  // Add the quantity of each item
    }

    // Update the cart count in the DOM
    document.getElementById("cart-count").textContent = totalItems;
}

// Function to handle search functionality
function searchFood() {
    const searchQuery = document.getElementById("search").value.toLowerCase();  // Get the search input
    let filteredItems = foodItems.filter(item => {
        return item.name.toLowerCase().includes(searchQuery) || item.restaurant.toLowerCase().includes(searchQuery);
    });

    displayFoodItems(filteredItems);  // Display only filtered items
}

// Function to display food items dynamically
function displayFoodItems(items) {
    const foodMenu = document.getElementById("food-menu");
    foodMenu.innerHTML = '';  // Clear current food menu

    items.forEach(item => {
        const foodItemElement = createFoodItemElement(item);
        foodMenu.appendChild(foodItemElement);  // Append each food item to the menu
    });
}

// Function to create a food item element
function createFoodItemElement(item) {
    const div = document.createElement('div');
    div.classList.add('food-item');
    div.setAttribute('data-name', item.name);
    div.setAttribute('data-restaurant', item.restaurant);

    div.innerHTML = `
        <img src="food1.jpg" alt="${item.name}">
        <h3>${item.name}</h3>
        <p class="restaurant-name">${item.restaurant}</p>
        <p>₹ ${item.price}</p>
        <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
    `;

    item.element = div;  // Store the element for future reference (if needed)

    return div;
}

// Initial display of all food items
document.addEventListener("DOMContentLoaded", function() {
    displayFoodItems(foodItems);  // Initially display all food items when the page loads
});
