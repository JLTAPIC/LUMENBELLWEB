/* ==========================================================================
   LUMINBELL PREMIUM MEN'S GROOMING - APPLICATION LOGIC
   ========================================================================== */

// 1. PRODUCT DATABASE
const PRODUCTS = [
    {
        id: 1,
        title: "Pomada de Arcilla de Obsidiana",
        category: "cabello",
        price: 22.00,
        oldPrice: null,
        tag: "Best Seller",
        image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
        hoverImage: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviewsCount: 142,
        description: "Fijación fuerte y acabado mate texturizado. Formulada con arcilla caolín natural y cera de abejas para dar volumen y estructura duradera a cualquier tipo de cabello sin dejar residuos ni apelmazar.",
        specs: {
            "Fijación": "Fuerte (4/5)",
            "Brillo": "Mate (0/5)",
            "Contenido": "100ml / 3.4 fl. oz.",
            "Aroma": "Sándalo Noble y Cedro"
        }
    },
    {
        id: 2,
        title: "Aceite de Barba Elixir Dorado",
        category: "barba",
        price: 24.50,
        oldPrice: 29.00,
        tag: "Recomendado",
        image: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=800&q=80",
        hoverImage: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
        rating: 4.9,
        reviewsCount: 208,
        description: "Un elixir lujoso de nutrición profunda. Mezcla exclusiva de aceites puros de argán orgánico, jojoba, almendras dulces y semilla de uva. Hidrata el vello facial áspero y elimina la descamación de la piel subyacente.",
        specs: {
            "Textura": "Sedosa, absorción rápida",
            "Contenido": "30ml / 1.0 fl. oz.",
            "Aroma": "Cítricos de Sicilia y Madera de Oud",
            "Ingrediente": "Aceite de Argán Marroquí"
        }
    },
    {
        id: 3,
        title: "Bálsamo de Barba Oud Imperial",
        category: "barba",
        price: 26.00,
        oldPrice: null,
        tag: "Nuevo",
        image: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=800&q=80",
        hoverImage: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        reviewsCount: 89,
        description: "Proporciona acondicionamiento premium y una fijación ligera para dar forma y estilizar la barba. Enriquecido con manteca de karité, cera de abejas y vitamina E para proteger las fibras contra las agresiones diarias.",
        specs: {
            "Fijación": "Ligera de Control (2/5)",
            "Contenido": "60g / 2.1 oz.",
            "Aroma": "Ámbar Cálido y Cuero",
            "Propiedad": "Acondicionador Anti-frizz"
        }
    },
    {
        id: 4,
        title: "Champú Activador Vigorizante",
        category: "shampoo",
        price: 18.00,
        oldPrice: null,
        tag: "100% Orgánico",
        image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80",
        hoverImage: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        reviewsCount: 75,
        description: "Limpia profundamente mientras estimula los folículos pilosos gracias al extracto de raíz de ginseng y mentol. Aumenta la microcirculación capilar y promueve un crecimiento capilar fuerte, espeso y saludable.",
        specs: {
            "Beneficio": "Revitalizante y Fortalecedor",
            "Contenido": "300ml / 10.1 fl. oz.",
            "Aroma": "Menta Silvestre y Eucalipto",
            "Fórmula": "Sin parabenos ni sulfatos"
        }
    },
    {
        id: 5,
        title: "Crema Hidratante Facial Antiedad",
        category: "facial",
        price: 29.90,
        oldPrice: 35.00,
        tag: "Oferta",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
        hoverImage: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviewsCount: 116,
        description: "Hidratante de absorción ultra-rápida formulada específicamente para la piel masculina. Enriquecida con ácido hialurónico, extracto de té verde y coenzima Q10. Combate las líneas de expresión y los signos visibles de fatiga.",
        specs: {
            "Beneficio": "Hidratación 24h & Antifatiga",
            "Contenido": "50ml / 1.7 fl. oz.",
            "Aroma": "Frescura Cítrica Suave",
            "Piel": "Apta para todo tipo de pieles"
        }
    },
    {
        id: 6,
        title: "Acondicionador Nutritivo Sedoso",
        category: "shampoo",
        price: 19.50,
        oldPrice: null,
        tag: "Premium",
        image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80",
        hoverImage: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=800&q=80",
        rating: 4.5,
        reviewsCount: 54,
        description: "Tratamiento hidratante intensivo que devuelve la sedosidad y el brillo natural al cabello seco o dañado. Con proteínas de trigo hidrolizadas y aceite de coco para suavizar y blindar la cutícula del cabello.",
        specs: {
            "Acción": "Suavizado e Hidratación Extrema",
            "Contenido": "300ml / 10.1 fl. oz.",
            "Aroma": "Vainilla Bourbon y Hojas de Tabaco",
            "Tipo": "Cabello Normal a Seco"
        }
    }
];

// 2. TESTIMONIALS DATABASE
const TESTIMONIALS = [
    {
        quote: "El aceite de barba de Luminbell realmente ha transformado mi ritual matutino. Mi barba se siente extremadamente suave y el aroma amaderado atrae cumplidos constantemente.",
        name: "Carlos Mendoza",
        status: "Cliente Verificado",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
        rating: 5
    },
    {
        quote: "La pomada de arcilla es increíble. Deja un acabado mate de aspecto súper natural que no se siente pegajoso y aguanta toda mi jornada laboral. Se elimina sin esfuerzo con agua.",
        name: "Javier Soler",
        status: "Cliente Verificado",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
        rating: 5
    },
    {
        quote: "Tengo piel muy sensible y la Crema Hidratante Facial me ha cambiado la vida. Se absorbe en segundos, no deja brillos y calma la irritación del afeitado inmediatamente.",
        name: "Alejandro Rubio",
        status: "Cliente Verificado",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
        rating: 5
    }
];

// 3. APPLICATION STATE
let cart = [];
let currentCategoryFilter = "todos";
let currentSearchQuery = "";
let currentTestimonialIndex = 0;
let testimonialInterval = null;

// 4. DOM ELEMENTS
document.addEventListener("DOMContentLoaded", () => {
    // Initialization
    initProductsGrid();
    initTestimonialsCarousel();
    initEventListeners();
    updateCartUI();
});

// 5. FUNCTIONS

// Initialize and render products grid
function initProductsGrid() {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;

    // Filter products
    const filtered = PRODUCTS.filter(prod => {
        const matchesCategory = currentCategoryFilter === "todos" || prod.category === currentCategoryFilter;
        const matchesSearch = prod.title.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                              prod.description.toLowerCase().includes(currentSearchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Handle empty state
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-products-state" style="grid-column: 1/-1; text-align: center; padding: 60px 0;">
                <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; color: var(--bg-tertiary); margin-bottom: 15px;"></i>
                <p style="color: var(--text-secondary);">No hemos encontrado ningún producto que coincida con tu búsqueda.</p>
            </div>
        `;
        return;
    }

    // Render cards
    grid.innerHTML = filtered.map(prod => {
        const hasDiscount = prod.oldPrice !== null;
        const priceHTML = hasDiscount 
            ? `<div class="product-price has-discount">
                   <span class="old-price">${prod.oldPrice.toFixed(2)}€</span>
                   <span class="current-price">${prod.price.toFixed(2)}€</span>
               </div>`
            : `<div class="product-price">${prod.price.toFixed(2)}€</div>`;

        const badgeHTML = prod.tag ? `<span class="product-badge">${prod.tag}</span>` : '';

        // Generate stars
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(prod.rating)) {
                starsHTML += '<i class="fa-solid fa-star"></i>';
            } else {
                starsHTML += '<i class="fa-regular fa-star"></i>';
            }
        }

        return `
            <article class="product-card" data-id="${prod.id}">
                ${badgeHTML}
                <div class="product-img-wrapper" onclick="openProductQuickView(${prod.id})">
                    <img src="${prod.image}" class="product-card-img img-main" alt="${prod.title}">
                    <img src="${prod.hoverImage}" class="product-card-img img-hover" alt="${prod.title} detalle">
                    <div class="product-quick-add">
                        <button class="quick-add-btn" onclick="event.stopPropagation(); addToCart(${prod.id})">Añadir al Carrito</button>
                    </div>
                </div>
                <div class="product-info">
                    <span class="product-category">${prod.category}</span>
                    <h3 class="product-title" onclick="openProductQuickView(${prod.id})">${prod.title}</h3>
                    <div class="product-rating">
                        ${starsHTML}
                        <span>(${prod.reviewsCount})</span>
                    </div>
                    <div class="product-bottom">
                        ${priceHTML}
                        <button class="view-details-btn" onclick="openProductQuickView(${prod.id})">
                            <span>Ver detalles</span>
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

// Initialize Testimonials Slider
function initTestimonialsCarousel() {
    const carousel = document.getElementById("testimonialsCarousel");
    const dotsContainer = document.getElementById("carouselDots");
    if (!carousel || !dotsContainer) return;

    // Render testimonial slides
    carousel.innerHTML = TESTIMONIALS.map((t, idx) => {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            stars += '<i class="fa-solid fa-star"></i>';
        }
        return `
            <div class="testimonial-slide">
                <div class="testimonial-stars">${stars}</div>
                <blockquote class="testimonial-text">"${t.quote}"</blockquote>
                <div class="testimonial-user">
                    <img src="${t.avatar}" class="testimonial-avatar" alt="${t.name}">
                    <div class="testimonial-meta">
                        <div class="testimonial-name">${t.name}</div>
                        <div class="testimonial-status"><i class="fa-solid fa-circle-check"></i> ${t.status}</div>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    // Render dot indicators
    dotsContainer.innerHTML = TESTIMONIALS.map((_, idx) => `
        <div class="carousel-dot ${idx === 0 ? 'active' : ''}" onclick="goToTestimonial(${idx})"></div>
    `).join("");

    startTestimonialAutoSlide();
}

function startTestimonialAutoSlide() {
    stopTestimonialAutoSlide();
    testimonialInterval = setInterval(() => {
        const nextIdx = (currentTestimonialIndex + 1) % TESTIMONIALS.length;
        goToTestimonial(nextIdx);
    }, 6000);
}

function stopTestimonialAutoSlide() {
    if (testimonialInterval) clearInterval(testimonialInterval);
}

function goToTestimonial(idx) {
    const carousel = document.getElementById("testimonialsCarousel");
    const dots = document.querySelectorAll(".carousel-dot");
    if (!carousel || !dots) return;

    currentTestimonialIndex = idx;
    carousel.style.transform = `translateX(-${idx * 100}%)`;

    dots.forEach((dot, index) => {
        if (index === idx) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

// 6. EVENT LISTENERS
function initEventListeners() {
    // Search input handler
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentSearchQuery = e.target.value;
            initProductsGrid();
        });
    }

    // Category Tabs Filtering
    const tabs = document.querySelectorAll(".filter-tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            currentCategoryFilter = tab.getAttribute("data-filter");
            
            // Sync with nav link active state
            syncNavLinkActiveState(currentCategoryFilter);
            
            initProductsGrid();
        });
    });

    // Header nav links click handling
    const navLinks = document.querySelectorAll(".nav-links .nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const filter = link.getAttribute("data-filter");
            if (filter) {
                e.preventDefault();
                currentCategoryFilter = filter;
                
                // Sync UI filters
                tabs.forEach(t => {
                    if (t.getAttribute("data-filter") === filter) {
                        t.classList.add("active");
                    } else {
                        t.classList.remove("active");
                    }
                });

                syncNavLinkActiveState(filter);
                initProductsGrid();

                // Close mobile menu if open
                const navBar = document.getElementById("navBar");
                if (navBar) navBar.classList.remove("active");

                // Smooth scroll to product grid
                const prodSection = document.getElementById("productos");
                if (prodSection) {
                    prodSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Category Showcase cards filtering
    const catCards = document.querySelectorAll(".category-card, .category-link, .footer-filter-link");
    catCards.forEach(card => {
        card.addEventListener("click", (e) => {
            const filter = card.getAttribute("data-filter") || card.closest(".category-card")?.getAttribute("data-category");
            if (filter) {
                // Prevent routing for SPA filter behavior
                if (e.target.tagName === 'A' || card.classList.contains("footer-filter-link")) {
                    e.preventDefault();
                }
                currentCategoryFilter = filter;

                // Sync top nav and tabs
                tabs.forEach(t => {
                    t.classList.toggle("active", t.getAttribute("data-filter") === filter);
                });
                syncNavLinkActiveState(filter);
                initProductsGrid();

                // Smooth scroll to product grid
                const prodSection = document.getElementById("productos");
                if (prodSection) {
                    prodSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Mobile menu actions
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenuCloseBtn = document.getElementById("mobileMenuCloseBtn");
    const navBar = document.getElementById("navBar");

    if (mobileMenuBtn && navBar) {
        mobileMenuBtn.addEventListener("click", () => {
            navBar.classList.add("active");
        });
    }

    if (mobileMenuCloseBtn && navBar) {
        mobileMenuCloseBtn.addEventListener("click", () => {
            navBar.classList.remove("active");
        });
    }

    // Cart Drawer sliding events
    const cartToggleBtn = document.getElementById("cartToggleBtn");
    const cartCloseBtn = document.getElementById("cartCloseBtn");
    const cartOverlay = document.getElementById("cartOverlay");
    const cartDrawer = document.getElementById("cartDrawer");

    if (cartToggleBtn && cartDrawer && cartOverlay) {
        cartToggleBtn.addEventListener("click", () => {
            cartDrawer.classList.add("active");
            cartOverlay.classList.add("active");
        });
    }

    const closeCart = () => {
        if (cartDrawer && cartOverlay) {
            cartDrawer.classList.remove("active");
            cartOverlay.classList.remove("active");
        }
    };

    if (cartCloseBtn) cartCloseBtn.addEventListener("click", closeCart);
    if (cartOverlay) cartOverlay.addEventListener("click", closeCart);

    // Testimonials controls
    const prevBtn = document.getElementById("prevTestimonial");
    const nextBtn = document.getElementById("nextTestimonial");

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            stopTestimonialAutoSlide();
            const prevIdx = (currentTestimonialIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
            goToTestimonial(prevIdx);
            startTestimonialAutoSlide();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            stopTestimonialAutoSlide();
            const nextIdx = (currentTestimonialIndex + 1) % TESTIMONIALS.length;
            goToTestimonial(nextIdx);
            startTestimonialAutoSlide();
        });
    }

    // Modal Close buttons
    const closeProductModal = document.getElementById("closeProductModal");
    const productModal = document.getElementById("productModal");
    if (closeProductModal && productModal) {
        closeProductModal.addEventListener("click", () => {
            productModal.classList.remove("active");
        });
        productModal.addEventListener("click", (e) => {
            if (e.target === productModal) {
                productModal.classList.remove("active");
            }
        });
    }

    const openHistoryBtn = document.getElementById("openHistoryBtn");
    const closeHistoryModal = document.getElementById("closeHistoryModal");
    const historyModal = document.getElementById("historyModal");
    if (openHistoryBtn && historyModal) {
        openHistoryBtn.addEventListener("click", (e) => {
            e.preventDefault();
            historyModal.classList.add("active");
            
            // Close mobile menu if active
            if (navBar) navBar.classList.remove("active");
        });
    }
    if (closeHistoryModal && historyModal) {
        closeHistoryModal.addEventListener("click", () => {
            historyModal.classList.remove("active");
        });
        historyModal.addEventListener("click", (e) => {
            if (e.target === historyModal) {
                historyModal.classList.remove("active");
            }
        });
    }

    // Newsletter Submission
    const newsletterForm = document.getElementById("newsletterForm");
    const newsletterMsg = document.getElementById("newsletterMsg");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailInput = document.getElementById("newsletterEmail");
            if (emailInput && emailInput.value) {
                showToast("¡Te has registrado con éxito! Tu cupón del 10% ha sido enviado a tu correo.", "success");
                newsletterForm.reset();
                if (newsletterMsg) {
                    newsletterMsg.innerHTML = "¡Gracias por unirte! Revisa tu bandeja de entrada.";
                    newsletterMsg.className = "newsletter-msg success";
                    setTimeout(() => {
                        newsletterMsg.innerHTML = "";
                    }, 5000);
                }
            }
        });
    }

    // Profile Click Mock
    const profileBtn = document.getElementById("profileBtn");
    if (profileBtn) {
        profileBtn.addEventListener("click", () => {
            showToast("Acceso al Club Privado. Esta función estará disponible próximamente.", "info");
        });
    }

    // Checkout Modal buttons
    const cartCheckoutBtn = document.getElementById("cartCheckoutBtn");
    const checkoutModal = document.getElementById("checkoutModal");
    const closeCheckoutModal = document.getElementById("closeCheckoutModal");

    if (cartCheckoutBtn && checkoutModal) {
        cartCheckoutBtn.addEventListener("click", () => {
            if (cart.length === 0) {
                showToast("Tu carrito de compras está vacío.", "info");
                return;
            }
            closeCart();
            initCheckoutUI();
            checkoutModal.classList.add("active");
        });
    }

    if (closeCheckoutModal && checkoutModal) {
        closeCheckoutModal.addEventListener("click", () => {
            checkoutModal.classList.remove("active");
        });
        checkoutModal.addEventListener("click", (e) => {
            if (e.target === checkoutModal) {
                checkoutModal.classList.remove("active");
            }
        });
    }

    // Payment Option selector Cards
    const paymentOptions = document.querySelectorAll(".payment-option-card");
    paymentOptions.forEach(opt => {
        opt.addEventListener("click", () => {
            paymentOptions.forEach(o => o.classList.remove("active"));
            opt.classList.add("active");
            const radio = opt.querySelector("input[type='radio']");
            if (radio) radio.checked = true;
        });
    });

    // Checkout Form Submission
    const checkoutForm = document.getElementById("checkoutForm");
    if (checkoutForm && checkoutModal) {
        checkoutForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Simulation logic
            const nombre = document.getElementById("checkoutNombre").value;
            const email = document.getElementById("checkoutEmail").value;
            
            showToast(`¡Muchas gracias, ${nombre}! Tu orden ha sido procesada con éxito. Enviaremos los detalles a ${email}.`, "success");
            
            // Reset everything
            cart = [];
            updateCartUI();
            checkoutForm.reset();
            checkoutModal.classList.remove("active");
        });
    }
}

// Helper to keep navbar active states in sync
function syncNavLinkActiveState(filter) {
    const navLinks = document.querySelectorAll(".nav-links .nav-link");
    navLinks.forEach(link => {
        if (link.getAttribute("data-filter") === filter) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// 7. CART STATE MANAGEMENT

// Add item to cart
function addToCart(productId, quantity = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.product.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            product: product,
            quantity: quantity
        });
    }

    updateCartUI();
    showToast(`¡${product.title} añadido al carrito!`, "success");
    
    // Animate badge
    const badge = document.getElementById("cartBadge");
    if (badge) {
        badge.classList.remove("pop");
        void badge.offsetWidth; // trigger reflow
        badge.classList.add("pop");
    }
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    updateCartUI();
    showToast("Producto removido del carrito.", "info");
}

// Change item quantity in cart
function changeQuantity(productId, amount) {
    const item = cart.find(item => item.product.id === productId);
    if (!item) return;

    item.quantity += amount;
    
    if (item.quantity <= 0) {
        cart = cart.filter(item => item.product.id !== productId);
        showToast("Producto removido del carrito.", "info");
    }

    updateCartUI();
}

// Update Cart side drawer view
function updateCartUI() {
    const cartItemsContainer = document.getElementById("cartItemsContainer");
    const cartBadge = document.getElementById("cartBadge");
    const cartCountHeader = document.getElementById("cartCountHeader");
    const cartSubtotal = document.getElementById("cartSubtotal");

    if (!cartItemsContainer) return;

    // Totals calculation
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotalVal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

    // Update badges and titles
    if (cartBadge) cartBadge.innerText = totalItems;
    if (cartCountHeader) cartCountHeader.innerText = `${totalItems} ${totalItems === 1 ? 'producto' : 'productos'}`;
    if (cartSubtotal) cartSubtotal.innerText = `${subtotalVal.toFixed(2)}€`;

    // Render item rows
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="cart-empty-state">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Tu ritual de compra está vacío.</p>
                <a href="#productos" class="cta-btn primary-cta" onclick="document.getElementById('cartCloseBtn').click();" style="padding: 12px 24px; font-size: 11px;">
                    Comenzar a Comprar
                </a>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.product.image}" class="cart-item-img" alt="${item.product.title}">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.product.title}</h4>
                    <div class="cart-item-category">${item.product.category}</div>
                    <div class="cart-item-actions">
                        <div class="quantity-control">
                            <button class="quantity-btn" onclick="changeQuantity(${item.product.id}, -1)">-</button>
                            <span class="quantity-val">${item.quantity}</span>
                            <button class="quantity-btn" onclick="changeQuantity(${item.product.id}, 1)">+</button>
                        </div>
                        <button class="remove-item-btn" onclick="removeFromCart(${item.product.id})">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                </div>
                <div class="cart-item-price">
                    ${(item.product.price * item.quantity).toFixed(2)}€
                </div>
            </div>
        `).join("");
    }
}

// 8. PRODUCT MODAL DETAIL (QUICK VIEW)
function openProductQuickView(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById("productModal");
    const container = document.getElementById("productModalDetails");
    if (!modal || !container) return;

    // Generate stars rating
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        starsHTML += (i <= Math.floor(product.rating)) 
            ? '<i class="fa-solid fa-star"></i>' 
            : '<i class="fa-regular fa-star"></i>';
    }

    // Specs specifications table
    const specsHTML = Object.entries(product.specs).map(([key, val]) => `
        <span><strong>${key}:</strong> ${val}</span>
    `).join("");

    // Render detailed modal view
    container.innerHTML = `
        <div class="modal-product-media">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="modal-product-info">
            <span class="modal-product-tag">${product.tag || 'Luminbell Premium'}</span>
            <h2 class="modal-product-title">${product.title}</h2>
            <div class="modal-product-rating">
                ${starsHTML}
                <span>(${product.reviewsCount} opiniones verificadas)</span>
            </div>
            <div class="modal-product-price">${product.price.toFixed(2)}€</div>
            <p class="modal-product-desc">${product.description}</p>
            <div class="modal-product-meta-specs">
                ${specsHTML}
            </div>
            <div class="modal-product-actions">
                <div class="modal-qty-select">
                    <button class="modal-qty-btn" id="modalQtyMinus">-</button>
                    <span class="modal-qty-val" id="modalQtyVal">1</span>
                    <button class="modal-qty-btn" id="modalQtyPlus">+</button>
                </div>
                <button class="modal-add-to-cart-btn" id="modalAddToCartBtn">Agregar al Carrito</button>
            </div>
        </div>
    `;

    // Active actions elements inside modal
    let selectedQty = 1;
    const qtyValEl = document.getElementById("modalQtyVal");
    const minusBtn = document.getElementById("modalQtyMinus");
    const plusBtn = document.getElementById("modalQtyPlus");
    const addToCartBtn = document.getElementById("modalAddToCartBtn");

    minusBtn.addEventListener("click", () => {
        if (selectedQty > 1) {
            selectedQty--;
            qtyValEl.innerText = selectedQty;
        }
    });

    plusBtn.addEventListener("click", () => {
        selectedQty++;
        qtyValEl.innerText = selectedQty;
    });

    addToCartBtn.addEventListener("click", () => {
        addToCart(product.id, selectedQty);
        modal.classList.remove("active");
    });

    // Show modal
    modal.classList.add("active");
}

// 9. CHECKOUT UI & COMPUTATION
function initCheckoutUI() {
    const summaryContainer = document.getElementById("checkoutSummaryItems");
    const subtotalEl = document.getElementById("checkoutSubtotal");
    const shippingEl = document.getElementById("checkoutShipping");
    const totalEl = document.getElementById("checkoutTotal");

    if (!summaryContainer) return;

    // Summary rendering
    summaryContainer.innerHTML = cart.map(item => `
        <div class="checkout-summary-item">
            <img src="${item.product.image}" class="checkout-item-img" alt="${item.product.title}">
            <div class="checkout-item-details">
                <h4 class="checkout-item-title">${item.product.title}</h4>
                <div class="checkout-item-qty">Cantidad: ${item.quantity}</div>
            </div>
            <div class="checkout-item-price">
                ${(item.product.price * item.quantity).toFixed(2)}€
            </div>
        </div>
    `).join("");

    // Financial formulas
    const subtotalVal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const shippingCost = subtotalVal >= 50 ? 0 : 4.90;
    const totalVal = subtotalVal + shippingCost;

    if (subtotalEl) subtotalEl.innerText = `${subtotalVal.toFixed(2)}€`;
    if (shippingEl) shippingEl.innerText = shippingCost === 0 ? "Gratis" : `${shippingCost.toFixed(2)}€`;
    if (totalEl) totalEl.innerText = `${totalVal.toFixed(2)}€`;
}

// 10. TOAST NOTIFICATION SYSTEM
function showToast(message, type = "success") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    
    // Choose icon
    let icon = '<i class="fa-solid fa-circle-check"></i>';
    if (type === "info") {
        icon = '<i class="fa-solid fa-circle-info"></i>';
    } else if (type === "warning") {
        icon = '<i class="fa-solid fa-triangle-exclamation"></i>';
    }

    toast.innerHTML = `
        ${icon}
        <span>${message}</span>
    `;

    container.appendChild(toast);

    // Fade in
    setTimeout(() => {
        toast.classList.add("show");
    }, 10);

    // Fade out and remove
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 4000);
}
