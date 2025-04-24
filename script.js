// Dados do cardápio
const menuData = {
    bebidas: [
        {
            id: 1,
            name: "Café Expresso",
            description: "Café puro e intenso, preparado com grãos selecionados",
            price: 5.50,
            image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 2,
            name: "Cappuccino",
            description: "Café com leite vaporizado e uma generosa camada de espuma",
            price: 8.90,
            image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 3,
            name: "Latte",
            description: "Café com leite vaporizado e uma suave camada de espuma",
            price: 9.50,
            image: "https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 4,
            name: "Mocha",
            description: "Café com chocolate, leite vaporizado e chantilly",
            price: 12.00,
            image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 5,
            name: "Chá Gelado",
            description: "Chá preto gelado com limão e hortelã",
            price: 7.50,
            image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 6,
            name: "Suco Natural",
            description: "Suco natural feito na hora (laranja, abacaxi ou morango)",
            price: 8.00,
            image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
    ],
    comidas: [
        {
            id: 7,
            name: "Pão de Queijo",
            description: "Tradicional pão de queijo mineiro, crocante por fora e macio por dentro",
            price: 4.50,
            image: "https://images.unsplash.com/photo-1600711725407-2ea4733a38c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 8,
            name: "Croissant",
            description: "Croissant folhado com ou sem recheio (queijo, presunto ou chocolate)",
            price: 7.00,
            image: "https://images.unsplash.com/photo-1588345921523-e58a20a2b4a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 9,
            name: "Torta Salgada",
            description: "Fatia de torta caseira (frango, palmito ou legumes)",
            price: 10.50,
            image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 10,
            name: "Sanduíche Natural",
            description: "Pão integral com peito de peru, queijo branco e vegetais",
            price: 12.50,
            image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
    ],
    sobremesas: [
        {
            id: 11,
            name: "Brigadeiro",
            description: "Tradicional brigadeiro caseiro",
            price: 3.50,
            image: "https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 12,
            name: "Brownie",
            description: "Brownie de chocolate com nozes",
            price: 8.00,
            image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 13,
            name: "Cheesecake",
            description: "Fatia de cheesecake com calda de frutas vermelhas",
            price: 12.50,
            image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
    ],
    combos: [
        {
            id: 14,
            name: "Café da Manhã",
            description: "Café + Pão de Queijo + Suco",
            price: 15.00,
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 15,
            name: "Lanche da Tarde",
            description: "Cappuccino + Croissant + Brigadeiro",
            price: 18.50,
            image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 16,
            name: "Combo Doce",
            description: "Latte + Brownie + Cheesecake",
            price: 25.00,
            image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
    ]
};

// Variáveis globais
let currentCategory = 'bebidas';
let cart = [];
let currentItem = null;

// Elementos DOM
const menuItemsContainer = document.getElementById('menu-items');
const categoryLinks = document.querySelectorAll('nav ul li a');
const currentCategoryTitle = document.getElementById('current-category');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const modal = document.getElementById('item-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const modalQuantity = document.getElementById('modal-quantity');
const addToCartBtn = document.getElementById('add-to-cart-btn');
const closeModalBtn = document.querySelector('.close-modal');
const minusBtn = document.querySelector('.quantity-btn.minus');
const plusBtn = document.querySelector('.quantity-btn.plus');

// Funções
function loadMenuItems(category, searchTerm = '') {
    menuItemsContainer.innerHTML = '';
    
    let items = menuData[category];
    
    if (searchTerm) {
        items = items.filter(item => 
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    if (items.length === 0) {
        menuItemsContainer.innerHTML = '<p class="empty-menu">Nenhum item encontrado</p>';
        return;
    }
    
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'menu-item';
        itemElement.innerHTML = `
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="item-price">
                    <span>R$ ${item.price.toFixed(2)}</span>
                    <button class="add-btn" data-id="${item.id}">Adicionar</button>
                </div>
            </div>
        `;
        
        menuItemsContainer.appendChild(itemElement);
    });
    
    // Adiciona eventos aos botões
    document.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const itemId = parseInt(btn.getAttribute('data-id'));
            const item = getAllItems().find(i => i.id === itemId);
            if (item) {
                openItemModal(item);
            }
        });
    });
    
    // Adiciona evento de clique ao item inteiro
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            const itemId = parseInt(item.querySelector('.add-btn').getAttribute('data-id'));
            const item = getAllItems().find(i => i.id === itemId);
            if (item) {
                openItemModal(item);
            }
        });
    });
}

function getAllItems() {
    return [...menuData.bebidas, ...menuData.comidas, ...menuData.sobremesas, ...menuData.combos];
}

function openItemModal(item) {
    currentItem = item;
    modalImage.src = item.image;
    modalImage.alt = item.name;
    modalTitle.textContent = item.name;
    modalDescription.textContent = item.description;
    modalPrice.textContent = `R$ ${item.price.toFixed(2)}`;
    modalQuantity.textContent = '1';
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
    currentItem = null;
}

function updateCart() {
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
        cartTotalElement.textContent = 'R$ 0.00';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>${item.quantity} x R$ ${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-price">
                <span>R$ ${itemTotal.toFixed(2)}</span>
                <button class="remove-item" data-id="${item.id}">Remover</button>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItemElement);
    });
    
    cartTotalElement.textContent = `R$ ${total.toFixed(2)}`;
    
    // Adiciona eventos aos botões de remover
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const itemId = parseInt(btn.getAttribute('data-id'));
            removeFromCart(itemId);
        });
    });
}

function addToCart(item, quantity = 1) {
    const existingItem = cart.find(i => i.id === item.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...item,
            quantity: quantity
        });
    }
    
    updateCart();
    closeModal();
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const message = `Olá, gostaria de fazer um pedido:\n\n${cart.map(item => 
        `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}`
    ).join('\n')}\n\nTotal: R$ ${total.toFixed(2)}`;
    
    // Aqui você pode implementar o envio do pedido por WhatsApp ou outra plataforma
    alert('Pedido finalizado! Em breve entraremos em contato para confirmar.');
    console.log('Pedido:', message);
    
    // Limpa o carrinho
    cart = [];
    updateCart();
}

// Event Listeners
categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Atualiza a categoria ativa
        categoryLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Carrega os itens da categoria
        currentCategory = link.getAttribute('data-category');
        currentCategoryTitle.textContent = link.textContent;
        loadMenuItems(currentCategory);
    });
});

searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    loadMenuItems(currentCategory, searchTerm);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const searchTerm = searchInput.value.trim();
        loadMenuItems(currentCategory, searchTerm);
    }
});

closeModalBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

minusBtn.addEventListener('click', () => {
    let quantity = parseInt(modalQuantity.textContent);
    if (quantity > 1) {
        quantity--;
        modalQuantity.textContent = quantity;
    }
});

plusBtn.addEventListener('click', () => {
    let quantity = parseInt(modalQuantity.textContent);
    quantity++;
    modalQuantity.textContent = quantity;
});

addToCartBtn.addEventListener('click', () => {
    if (currentItem) {
        const quantity = parseInt(modalQuantity.textContent);
        addToCart(currentItem, quantity);
    }
});

checkoutBtn.addEventListener('click', checkout);

// Inicialização
loadMenuItems(currentCategory);
updateCart();