document.addEventListener("DOMContentLoaded", () => {
  // Agregar funcionalidad para el menú hamburguesa
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  }

  initCart();
  initFilters();
  initProductViewer();
  initCheckoutForm();
});

/* =====================================================
   🛒 CARRITO
===================================================== */
function initCart() {
  const cartIcon = document.querySelector(".cart-icon");
  const cartSidebar = document.querySelector(".cart-sidebar");
  const cartOverlay = document.querySelector(".cart-overlay");
  const closeCartBtn = document.querySelector(".close-cart");
  const cartItemsContainer = document.querySelector(".cart-items");
  const cartTotalElement = document.querySelector(".cart-total strong");
  const cartCount = document.querySelector(".cart-count");
  const checkoutBtn = document.querySelector(".checkout-btn");

  let cart = JSON.parse(localStorage.getItem("codemachCart")) || [];

  updateCartUI();

  cartIcon.addEventListener("click", openCart);
  closeCartBtn.addEventListener("click", closeCart);
  cartOverlay.addEventListener("click", closeCart);
  checkoutBtn.addEventListener("click", openCheckoutModal);

  function openCart() {
    cartSidebar.classList.add("active");
    cartOverlay.classList.add("active");
  }

  function closeCart() {
    cartSidebar.classList.remove("active");
    cartOverlay.classList.remove("active");
  }

  function updateCartUI() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "<p>Tu carrito está vacío</p>";
      cartCount.style.display = "none";
      cartTotalElement.textContent = "$0";
      return;
    }

    cart.forEach((item, index) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("cart-item");
      itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-details">
          <h4>${item.name}</h4>
          <p>$${item.price}</p>
          <div class="cart-item-quantity">
            <button class="qty-btn minus">−</button>
            <span>${item.quantity}</span>
            <button class="qty-btn plus">+</button>
          </div>
        </div>
        <button class="remove-item"><i class="fas fa-trash"></i></button>
      `;

      itemElement.querySelector(".remove-item").addEventListener("click", () => {
        cart.splice(index, 1);
        saveCart();
      });

      itemElement.querySelector(".minus").addEventListener("click", () => {
        if (item.quantity > 1) item.quantity--;
        else cart.splice(index, 1);
        saveCart();
      });

      itemElement.querySelector(".plus").addEventListener("click", () => {
        item.quantity++;
        saveCart();
      });

      cartItemsContainer.appendChild(itemElement);
      total += item.price * item.quantity;
    });

    cartTotalElement.textContent = `$${total.toLocaleString()}`;
    cartCount.textContent = cart.length;
    cartCount.style.display = "flex";
    localStorage.setItem("codemachCart", JSON.stringify(cart));
  }
  // Borrar cualquier otro carrito residual
localStorage.removeItem("cart_items");
localStorage.removeItem("codemachCart");

// Actualizar también la UI del otro script si existe
if (typeof updateCartUI === "function") updateCartUI();

// Si el otro usa renderCart:
if (typeof renderCart === "function") renderCart();


  function saveCart() {
    localStorage.setItem("codemachCart", JSON.stringify(cart));
    updateCartUI();
  }

  document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const product = {
        id: btn.dataset.productId,
        name: btn.dataset.productName,
        price: parseFloat(btn.dataset.productPrice),
        image: btn.dataset.productImage,
        quantity: 1,
      };

      const existing = cart.find((p) => p.id === product.id);
      if (existing) existing.quantity++;
      else cart.push(product);

      saveCart();
      showNotification("Producto agregado al carrito 🛒");
    });
  });
}

/* =====================================================
   🎚️ FILTROS
===================================================== */
function initFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category;

      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      productCards.forEach((card) => {
        card.style.display =
          category === "all" || card.dataset.category === category
            ? "flex"
            : "none";
      });
    });
  });
}

/* =====================================================
   🔍 VISOR DE PRODUCTOS
===================================================== */
function initProductViewer() {
  const modal = document.querySelector(".product-viewer-modal");
  const overlay = document.querySelector(".product-viewer-overlay");
  const closeViewerBtn = document.querySelector(".close-viewer");
  const mainImageContainer = document.querySelector(".main-product-image");
  const mainImage = mainImageContainer.querySelector("img");
  const thumbnailsContainer = document.querySelector(".product-thumbnails");
  const title = document.querySelector(".product-viewer-title");
  const description = document.querySelector(".product-viewer-description");
  const price = document.querySelector(".product-viewer-price");
  const image = document.querySelector(".product-viewer-image");

  document.querySelectorAll(".view-product-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const images = JSON.parse(btn.dataset.productImages);
      title.textContent = btn.dataset.productName;
      description.textContent = btn.dataset.productDescription;
      price.textContent = `$${btn.dataset.productPrice}`;
      mainImage.src = images[0];

      thumbnailsContainer.innerHTML = "";
      images.forEach((src) => {
        const thumb = document.createElement("img");
        thumb.src = src;
        thumb.addEventListener("click", () => (mainImage.src = src));
        thumbnailsContainer.appendChild(thumb);
      });



      modal.classList.add("active");
      overlay.classList.add("active");
    });
  });

  closeViewerBtn.addEventListener("click", closeViewer);
  overlay.addEventListener("click", closeViewer);

  function closeViewer() {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }
}

/* =====================================================
   💬 CHECKOUT (FORMULARIO Y WHATSAPP)
===================================================== */
function initCheckoutForm() {
  const checkoutOverlay = document.querySelector(".checkout-overlay");
  const closeCheckout = document.querySelector(".close-checkout");
  const checkoutForm = document.getElementById("checkout-form");

  closeCheckout.addEventListener("click", closeCheckoutModal);
  checkoutOverlay.addEventListener("click", (e) => {
    if (e.target === checkoutOverlay) closeCheckoutModal();
  });

  // Toggle para detalles de departamento
  const homeTypeRadios = document.querySelectorAll('input[name="home-type"]');
  const departmentDetails = document.getElementById("department-details");
  homeTypeRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      departmentDetails.style.display = radio.value === "departamento" ? "block" : "none";
    });
  });
  // Estado inicial
  departmentDetails.style.display = document.querySelector('input[name="home-type"][value="departamento"]:checked') ? "block" : "none";

  // Mostrar/ocultar campos de envío a domicilio
  const deliveryTypeRadios = document.querySelectorAll('input[name="delivery-type"]');
  const homeDeliveryFields = document.getElementById('home-delivery-fields');

  // Configurar campos de envío a domicilio
  deliveryTypeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.value === 'domicilio') {
        homeDeliveryFields.style.display = 'block';
        // Hacer requeridos los campos de domicilio
        document.getElementById('customer-province').required = true;
        document.getElementById('customer-locality').required = true;
        document.getElementById('customer-street').required = true;
        document.getElementById('customer-number').required = true;
      } else {
        homeDeliveryFields.style.display = 'none';
        // Quitar requerimiento de campos de domicilio
        document.getElementById('customer-province').required = false;
        document.getElementById('customer-locality').required = false;
        document.getElementById('customer-street').required = false;
        document.getElementById('customer-number').required = false;
        document.getElementById('floor').required = false;
        document.getElementById('department-number').required = false;
      }
    });
  });

  // Cerrar thank you pop-up
  document.getElementById("close-thank-you").addEventListener("click", () => {
    document.getElementById("thank-you-overlay").style.display = "none";
  });

  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const cart = JSON.parse(localStorage.getItem("codemachCart")) || [];
    if (cart.length === 0) {
      showNotification("Tu carrito está vacío 🛒");
      return;
    }

    // Recopilar datos del formulario
    const name = document.getElementById("customer-name").value;
    const deliveryType = document.querySelector('input[name="delivery-type"]:checked')?.value || "punto-encuentro";
    
    let deliveryInfo = '';
    
    if (deliveryType === 'domicilio') {
      const province = document.getElementById("customer-province").value;
      const locality = document.getElementById("customer-locality").value;
      const street = document.getElementById("customer-street").value;
      const number = document.getElementById("customer-number").value;
      const homeType = document.querySelector('input[name="home-type"]:checked')?.value || "casa";
      const floor = document.getElementById("floor")?.value || "";
      const deptNumber = document.getElementById("department-number")?.value || "";
      
      deliveryInfo = `*📍 ENVÍO A DOMICILIO*\n` +
                    `*Provincia:* ${province}\n` +
                    `*Localidad:* ${locality}\n` +
                    `*Calle:* ${street}\n` +
                    `*Número:* ${number}\n` +
                    `*Tipo:* ${homeType === "casa" ? "🏠 Casa" : "🏢 Departamento"}\n`;
      
      if (homeType === "departamento") {
        deliveryInfo += `*Piso:* ${floor}\n`;
        deliveryInfo += `*Depto N°:* ${deptNumber}\n`;
      }
    } else {
      deliveryInfo = '*📍 PUNTO DE ENCUENTRO*\n' +
                    '*🚗 Coordinación con el vendedor*\n';
    }

    // Construir mensaje de pedido atractivo con mejor formato
    let message = `*✨ NUEVO PEDIDO ✨*\n\n`;
    message += `*👤 DATOS DEL CLIENTE:*\n`;
    message += `*Nombre:* ${name}\n\n`;
    
    message += `*📍 TIPO DE ENVÍO:*\n`;
    message += deliveryInfo + '\n';
    
    message += `*📋 DETALLE DEL PEDIDO:*\n`;
    message += `┌─────────────────────────┐\n`;
    
    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      message += `│ • *${item.name}*\n`;
      message += `│   x${item.quantity} = $${itemTotal.toLocaleString()}\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    message += `└─────────────────────────┘\n\n`;
    message += `*💰 TOTAL A PAGAR: $${total.toLocaleString()}*\n\n`;
    message += `*¡Gracias por tu compra!* 🛍️\n`;
    message += `*CODEMACH - Tecnología a tu alcance* 🚀`;

    // Enviar a WhatsApp
    const whatsappNumber = "5492616012677"; // Número proporcionado
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    // Mostrar pop-up de gracias
    document.getElementById("thank-you-overlay").style.display = "flex";

    // Reinicio completo de la página
    // 1. Limpiar carrito
    localStorage.setItem("codemachCart", JSON.stringify([]));
    cart = []; // Actualizar también la variable local
    
    // 2. Actualizar UI del carrito
    updateCartUI();
    
    // 3. Reiniciar completamente el formulario
    checkoutForm.reset();
    
    // 4. Ocultar detalles de departamento si estaban visibles
    document.getElementById("department-details").style.display = "none";
    
    // 5. Seleccionar la opción "casa" por defecto
    const casaRadio = document.querySelector('input[name="home-type"][value="casa"]');
    if (casaRadio) casaRadio.checked = true;
    
    // 6. Cerrar modal de checkout
    closeCheckoutModal();
    
    // 7. Cerrar pop-up de gracias automáticamente después de 5 segundos
    setTimeout(() => {
      document.getElementById("thank-you-overlay").style.display = "none";
      location.reload();
    }, 5000);
    
    // 8. Volver al inicio de la página
    window.scrollTo(0, 0);
  });
}

/* =====================================================
   🧾 MODALES CHECKOUT
===================================================== */
function openCheckoutModal() {
  const overlay = document.querySelector(".checkout-overlay");
  overlay.classList.add("active");

  const cart = JSON.parse(localStorage.getItem("codemachCart")) || [];
  const itemsContainer = document.querySelector(".checkout-items");
  const totalElement = document.querySelector(".checkout-total strong");
  let total = 0;

  itemsContainer.innerHTML = "";

  cart.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("checkout-item");
    div.innerHTML = `
      <span>${item.name} x${item.quantity}</span>
      <strong>$${(item.price * item.quantity).toLocaleString()}</strong>
    `;
    itemsContainer.appendChild(div);
    total += item.price * item.quantity;
  });

  totalElement.textContent = `$${total.toLocaleString()}`;
}

function closeCheckoutModal() {
  document.querySelector(".checkout-overlay").classList.remove("active");
}

/* =====================================================
   🔔 NOTIFICACIONES
===================================================== */
function showNotification(message) {
  const notif = document.createElement("div");
  notif.className = "notification";
  notif.textContent = message;
  document.body.appendChild(notif);
  setTimeout(() => notif.classList.add("show"), 50);
  setTimeout(() => {
    notif.classList.remove("show");
    setTimeout(() => notif.remove(), 300);
  }, 3000);
}
// catalogo-fixes.js - parche NO invasivo
document.addEventListener('DOMContentLoaded', ()=>{

  /* helpers */
  const $ = sel => document.querySelector(sel);
  const $$ = sel => Array.from(document.querySelectorAll(sel));

  /* MENU MOBILE */
  const menuToggle = $('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if(menuToggle && navLinks){
    menuToggle.addEventListener('click', ()=>{
      navLinks.classList.toggle('show');
      menuToggle.classList.toggle('open');
    });
    // cerrar al click en link (mobile)
    navLinks.addEventListener('click', e=>{
      if(e.target.tagName === 'A') navLinks.classList.remove('show');
    });
  }

  /* CARRITO: abrir / cerrar */
  const cartIcon = document.querySelector('.cart-icon');
  const cartSidebar = document.querySelector('.cart-sidebar');
  const cartOverlay = document.querySelector('.cart-overlay');
  const closeCartBtn = cartSidebar ? cartSidebar.querySelector('.close-cart') : null;

  function openCart(){ if(cartSidebar){ cartSidebar.classList.add('open'); cartOverlay.classList.add('active'); } }
  function closeCart(){ if(cartSidebar){ cartSidebar.classList.remove('open'); cartOverlay.classList.remove('active'); } }

  if(cartIcon) cartIcon.addEventListener('click', openCart);
  if(closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if(cartOverlay) cartOverlay.addEventListener('click', closeCart);

  /* CARRITO: lógica simple (localStorage) */
  let cart = JSON.parse(localStorage.getItem('cart_items')||'[]');
  const cartCountEl = document.querySelector('.cart-count');
  const cartItemsEl = document.querySelector('.cart-items');

  function updateCartCount(){
    const totalQty = cart.reduce((s,i)=>s+i.qty,0);
    if(cartCountEl) cartCountEl.textContent = totalQty;
  }

  function renderCart(){
    if(!cartItemsEl) return;
    cartItemsEl.innerHTML = '';
    if(cart.length === 0){
      cartItemsEl.innerHTML = '<p style="padding:12px">El carrito está vacío.</p>';
      return;
    }
    cart.forEach(item=>{
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <img src="${item.image||''}" alt="${item.name||''}">
        <div style="flex:1">
          <div style="font-weight:600">${item.name}</div>
          <div style="font-size:.95rem;color:#555">$${item.price} x ${item.qty}</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:6px">
          <button class="btn small increase" data-id="${item.id}">+</button>
          <button class="btn small decrease" data-id="${item.id}">-</button>
          <button class="btn small remove" data-id="${item.id}">×</button>
        </div>
      `;
      cartItemsEl.appendChild(div);
    });
    // event delegation
    cartItemsEl.querySelectorAll('.increase').forEach(btn => {
      btn.addEventListener('click', e=>{
        const id = e.currentTarget.dataset.id;
        const it = cart.find(x=>x.id===id); if(it){ it.qty++; syncCart(); renderCart(); }
      });
    });
    cartItemsEl.querySelectorAll('.decrease').forEach(btn => {
      btn.addEventListener('click', e=>{
        const id = e.currentTarget.dataset.id;
        const it = cart.find(x=>x.id===id); if(it){ it.qty = Math.max(1, it.qty-1); syncCart(); renderCart(); }
      });
    });
    cartItemsEl.querySelectorAll('.remove').forEach(btn => {
      btn.addEventListener('click', e=>{
        const id = e.currentTarget.dataset.id;
        cart = cart.filter(x=>x.id!==id); syncCart(); renderCart();
      });
    });
  }

  function syncCart(){
    localStorage.setItem('cart_items', JSON.stringify(cart));
    updateCartCount();
    // actualizar total en footer
    const totalEl = document.querySelector('.cart-total strong');
    if(totalEl){
      const total = cart.reduce((s,i)=>s + (Number(i.price)||0)*i.qty,0);
      totalEl.textContent = `$${total}`;
    }
  }

  // inicial
  updateCartCount();
  renderCart();
  syncCart();

  /* Añadir al carrito (desde botones .add-to-cart-btn) */
  $$('.add-to-cart-btn').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const id = btn.dataset.productId || btn.getAttribute('data-product-id') || btn.dataset.id;
      const name = btn.dataset.productName || btn.getAttribute('data-product-name') || btn.dataset.name;
      const price = Number(btn.dataset.productPrice || btn.getAttribute('data-product-price') || btn.dataset.price || 0);
      const image = btn.dataset.productImage || btn.getAttribute('data-product-image') || btn.dataset.image || '';
      if(!id){ console.warn('producto sin id'); return; }
      const found = cart.find(x=>x.id===id);
      if(found) found.qty++;
      else cart.push({id,name,price,image,qty:1});
      syncCart();
      renderCart();
    });
  });

  /* VIEW PRODUCT (modal) - permite múltiples imágenes desde data-product-images */
  const viewer = document.querySelector('.product-viewer');
  const viewerOverlay = document.querySelector('.product-viewer-overlay');
  const viewerTitle = document.querySelector('.product-viewer-title');
  const viewerDesc = document.querySelector('.product-viewer-description');
  const viewerPrice = document.querySelector('.product-viewer-price');
  // Se eliminó el botón "Agregar al Carrito" del visor

  function parseImages(attr){
    if(!attr) return [];
    try{
      const parsed = JSON.parse(attr);
      if(Array.isArray(parsed)) return parsed;
    }catch(e){}
    // fallback: treat as single path or comma-separated
    return attr.split(',').map(s=>s.trim()).filter(Boolean);
  }

  $$('.view-product-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const name = btn.dataset.productName || btn.getAttribute('data-product-name');
      const desc = btn.dataset.productDescription || btn.getAttribute('data-product-description') || '';
      const price = btn.dataset.productPrice || btn.getAttribute('data-product-price') || '';
      const images = parseImages(btn.dataset.productImages || btn.getAttribute('data-product-images') || btn.getAttribute('data-product-image') || '[]');

      if(viewerTitle) viewerTitle.textContent = name || '';
      if(viewerDesc) viewerDesc.textContent = desc || '';
      if(viewerPrice) viewerPrice.textContent = price ? `$${price}` : '';

      // thumbnails container
      const thumbs = viewer ? viewer.querySelector('.thumbs') : null;
      const mainImgWrap = viewer ? viewer.querySelector('.product-viewer-main') : null;
      if(thumbs) { thumbs.innerHTML = ''; images.forEach((src,i)=>{
        const im = document.createElement('img');
        im.src = src;
        im.alt = `${name} ${i+1}`;
        im.dataset.src = src;
        thumbs.appendChild(im);
        im.addEventListener('click', ()=> {
          if(mainImgWrap) mainImgWrap.innerHTML = `<img src="${src}" style="width:100%;height:auto;object-fit:contain">`;
        });
      }); }

      // set first image
      if(mainImgWrap) mainImgWrap.innerHTML = images[0] ? `<img src="${images[0]}" style="width:100%;height:auto;object-fit:contain">` : '';

      // set add to cart action (uses dataset from the button)
      if(viewerAddBtn){
        viewerAddBtn.onclick = ()=>{
          const id = btn.dataset.productId || btn.getAttribute('data-product-id') || (name && name.replace(/\s+/g,'_'));
          const image = images[0] || '';
          const priceNum = Number(price) || 0;
          const found = cart.find(x=>x.id===id);
          if(found) found.qty++;
          else cart.push({id,name,price:priceNum,image,qty:1});
          syncCart(); renderCart();
          closeViewer();
        };
      }

      openViewer();
    });
  });

  function openViewer(){ if(viewer) viewer.style.display = 'flex'; }
  function closeViewer(){ if(viewer) viewer.style.display = 'none'; }
  if(viewerOverlay) viewerOverlay.addEventListener('click', closeViewer);
  // close button si existe
  const closeViewerBtn = document.querySelector('.product-viewer .close-viewer');
  if(closeViewerBtn) closeViewerBtn.addEventListener('click', closeViewer);

});
