class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    getTotalItems() {
        return this.items.length;
    }

    addItem(product, quantity) {
        // Check if the product already exists in the cart
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            const newItem = new ShoppingCartItem(product, quantity);
            this.items.push(newItem);
        }
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    displayCartItems() {
        this.items.forEach(item => {
            console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: ${item.getTotalPrice()}`);
        });
    }

    getCartTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
}
------------------------------------------------------------------------------------------------------------------------------------------------------------
// Create products
const product1 = new Product(1, 'Apple', 1.5);
const product2 = new Product(2, 'Banana', 1.0);
const product3 = new Product(3, 'Orange', 2.0);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 3);
cart.addItem(product2, 2);
cart.addItem(product3, 1);

// Display the cart
cart.displayCartItems();
console.log(`Total Price: ${cart.getCartTotalPrice()}`);

// Remove an item from the cart
cart.removeItem(2);

// Display the cart again
cart.displayCartItems();
console.log(`Total Price: ${cart.getCartTotalPrice()}`);

