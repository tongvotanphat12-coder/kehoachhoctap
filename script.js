// Sample Products Data
const products = [
    {
        id: 1,
        name: 'Laptop Gaming Pro',
        price: 25000000,
        description: 'Laptop mạnh mẽ cho chơi game và thiết kế đồ họa',
        icon: '💻'
    },
    {
        id: 2,
        name: 'Tai nghe Bluetooth',
        price: 2500000,
        description: 'Tai nghe không dây với âm thanh siêu hay',
        icon: '🎧'
    },
    {
        id: 3,
        name: 'Điện thoại Smartphone',
        price: 15000000,
        description: 'Điện thoại thông minh với màn hình AMOLED 120Hz',
        icon: '📱'
    },
    {
        id: 4,
        name: 'Chuột gaming RGB',
        price: 1200000,
        description: 'Chuột có độ chính xác cao với LED RGB 16 triệu màu',
        icon: '🖱️'
    },
    {
        id: 5,
        name: 'Bàn phím cơ',
        price: 3500000,
        description: 'Bàn phím cơ chuyên game với switch cherry MX',
        icon: '⌨️'
    },
    {
        id: 6,
        name: 'Webcam 4K',
        price: 2000000,
        description: 'Webcam độ phân giải 4K cho live stream và gọi video',
        icon: '📹'
    }
];

// Cart array to store cart items
let cart = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    renderProducts();
    updateCartUI();
});

// Render products on the home page
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image product-${index}">
                ${product.icon}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${formatPrice(product.price)}</div>
                <button class="btn btn-primary" onclick="addToCart(${product.id})">
                    🛒 Mua ngay
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showNotification(`✅ Đã thêm "${product.name}" vào giỏ hàng!`);
}

// Remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showNotification('✅ Đã xóa sản phẩm khỏi giỏ hàng!');
}

// Update quantity
function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }

    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        updateCartUI();
    }
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    const emptyCart = document.getElementById('emptyCart');
    const cartContent = document.getElementById('cartContent');

    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        cartContent.style.display = 'none';
    } else {
        emptyCart.style.display = 'none';
        cartContent.style.display = 'block';
        renderCartItems();
        updateCartSummary();
    }
}

// Render cart items in the table
function renderCartItems() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const totalPrice = item.price * item.quantity;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${formatPrice(item.price)}</td>
            <td>
                <div class="quantity-control">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" readonly>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </td>
            <td>${formatPrice(totalPrice)}</td>
            <td>
                <button class="btn btn-danger btn-small" onclick="removeFromCart(${item.id})">Xóa</button>
            </td>
        `;
        cartItems.appendChild(row);
    });
}

// Update cart summary (subtotal, shipping, total)
function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 50000 : 0; // Fixed shipping fee
    const total = subtotal + shipping;

    document.getElementById('subtotal').textContent = formatPrice(subtotal);
    document.getElementById('shipping').textContent = formatPrice(shipping);
    document.getElementById('total').textContent = formatPrice(total);
}

// Show home page
function showHome(event) {
    event.preventDefault();
    
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById('home').classList.add('active');

    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.closest('.nav-link').classList.add('active');
}

// Show cart page
function showCart(event) {
    event.preventDefault();
    
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById('cart').classList.add('active');

    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.closest('.nav-link').classList.add('active');
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        showNotification('❌ Giỏ hàng trống!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 50000;
    const itemList = cart.map(item => `- ${item.name} (x${item.quantity}): ${formatPrice(item.price * item.quantity)}`).join('\n');

    const message = `Đơn hàng của bạn:\n\n${itemList}\n\nTổng cộng: ${formatPrice(total)}\n\nCảm ơn bạn đã mua sắm tại ShopHub!`;
    
    alert(message);
    
    // Clear cart after checkout
    cart = [];
    saveCart();
    updateCartUI();
    showNotification('🎉 Thanh toán thành công! Cảm ơn bạn đã mua sắm.');
    
    // Redirect to home
    setTimeout(() => {
        showHome(event);
    }, 1000);
}

// Format price to Vietnamese Dong
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

// Show notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Fixed event listener for home nav link
document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.querySelector('a[href="#home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }
});
