const products = [
  { id: 1, name: "Anquilosaurio", category: "Dinosaurios", price: 200, image: "anky.jpg", featured: 1, description: "Anquilosaurio articulado impreso en 3D." },
  { id: 2, name: "Dilofosaurio", category: "Dinosaurios", price: 200, image: "dilo.jpg", featured: 2, description: "Dilofosaurio articulado impreso en 3D." },
  { id: 3, name: "Mamut", category: "Dinosaurios", price: 200, image: "mamut.jpg", featured: 3, description: "Mamut articulado impreso en 3D." },
  { id: 4, name: "Parasaurolophus", category: "Dinosaurios", price: 200, image: "parash.jpg", featured: 4, description: "Parasaurolophus articulado impreso en 3D." },
  { id: 5, name: "Plesiosaurio", category: "Dinosaurios", price: 200, image: "plesio.jpg", featured: 5, description: "Criatura marina articulada impresa en 3D." },
  { id: 6, name: "Protoceratops", category: "Dinosaurios", price: 200, image: "prote.jpg", featured: 6, description: "Protoceratops articulado impreso en 3D." },
  { id: 7, name: "Pterodáctilo", category: "Dinosaurios", price: 200, image: "ptero.jpg", featured: 7, description: "Pterodáctilo articulado impreso en 3D." },
  { id: 8, name: "Araña esqueleto", category: "Dinosaurios", price: 200, image: "spider.jpg", featured: 8, description: "Araña articulada impresa en 3D." },
  { id: 9, name: "Tiburón esqueleto", category: "Dinosaurios", price: 200, image: "tibo.jpg", featured: 9, description: "Tiburón articulado impreso en 3D." },
  { id: 10, name: "T-Rex", category: "Dinosaurios", price: 200, image: "trex.jpg", featured: 10, description: "T-Rex articulado impreso en 3D." },
  { id: 11, name: "Triceratops", category: "Dinosaurios", price: 200, image: "tricep.jpg", featured: 11, description: "Triceratops articulado impreso en 3D." },

  { id: 12, name: "Corgi", category: "Perritos", price: 200, image: "corgie.png", featured: 12, description: "Perrito Corgi articulado impreso en 3D." },
  { id: 13, name: "Chihuahua", category: "Perritos", price: 200, image: "chihuahua.png", featured: 13, description: "Perrito Chihuahua articulado impreso en 3D." },
  { id: 14, name: "Pastor Alemán", category: "Perritos", price: 200, image: "pastor aleman.png", featured: 14, description: "Perrito Pastor Alemán articulado impreso en 3D." },
  { id: 15, name: "Bull Terrier", category: "Perritos", price: 200, image: "bullterrier.jpg", featured: 15, description: "Perrito Bull Terrier articulado impreso en 3D." },
  { id: 16, name: "Yorkshire", category: "Perritos", price: 200, image: "yorki.jpg", featured: 16, description: "Perrito Yorkshire articulado impreso en 3D." },
  { id: 17, name: "Beagle", category: "Perritos", price: 200, image: "beaglle.jpg", featured: 17, description: "Perrito Beagle articulado impreso en 3D." },
  { id: 18, name: "Boxer", category: "Perritos", price: 200, image: "boxer.jpg", featured: 18, description: "Perrito Boxer articulado impreso en 3D." },
  { id: 19, name: "Pomerania", category: "Perritos", price: 200, image: "pome.jpg", featured: 19, description: "Perrito Pomerania articulado impreso en 3D." },
  { id: 20, name: "Golden Retriever / Labrador", category: "Perritos", price: 200, image: "golden and labrador.png", featured: 20, description: "Perrito Golden Retriever o Labrador articulado impreso en 3D." },
  { id: 21, name: "Husky", category: "Perritos", price: 200, image: "husky.png", featured: 21, description: "Perrito Husky articulado impreso en 3D." },
  { id: 22, name: "Cocker Spaniel", category: "Perritos", price: 200, image: "coqquer.png", featured: 22, description: "Perrito Cocker Spaniel articulado impreso en 3D." },
  { id: 23, name: "Dálmata", category: "Perritos", price: 200, image: "dalmata.png", featured: 23, description: "Perrito Dálmata articulado impreso en 3D." },
  { id: 24, name: "American Bully", category: "Perritos", price: 200, image: "bully.png", featured: 24, description: "Perrito American Bully articulado impreso en 3D." },
  { id: 25, name: "Pastor Belga", category: "Perritos", price: 200, image: "pastor belga.png", featured: 25, description: "Perrito Pastor Belga articulado impreso en 3D." },
  { id: 26, name: "Rottweiler", category: "Perritos", price: 200, image: "rotwailer.jpg", featured: 26, description: "Perrito Rottweiler articulado impreso en 3D." },
  { id: 27, name: "Bulldog Inglés", category: "Perritos", price: 200, image: "bulldog ingles.png", featured: 27, description: "Perrito Bulldog Inglés articulado impreso en 3D." },
  { id: 28, name: "Basset Hound", category: "Perritos", price: 200, image: "orejotas.png", featured: 28, description: "Perrito Basset Hound articulado impreso en 3D." },
  { id: 29, name: "Border Collie", category: "Perritos", price: 200, image: "bordercollie.png", featured: 29, description: "Perrito Border Collie articulado impreso en 3D." },
  { id: 30, name: "Gran Danés", category: "Perritos", price: 200, image: "grandanes2.png", featured: 30, description: "Perrito Gran Danés articulado impreso en 3D." }
];

const state = { category: "Todos", search: "", sort: "featured", selected: null, quantity: 1, cart: [] };
const $ = selector => document.querySelector(selector);
const money = value => new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(value);

function placeholderMarkup() { return '<div class="product-placeholder" aria-hidden="true"></div>'; }
function imageMarkup(product) { return product.image ? `<img src="${product.image}" alt="${product.name}" loading="lazy">` : placeholderMarkup(); }

function filteredProducts() {
  let list = products.filter(p => state.category === "Todos" || p.category === state.category);
  const term = state.search.trim().toLowerCase();
  if (term) list = list.filter(p => `${p.name} ${p.category}`.toLowerCase().includes(term));
  return [...list].sort((a, b) => {
    if (state.sort === "price-asc") return a.price - b.price;
    if (state.sort === "price-desc") return b.price - a.price;
    if (state.sort === "name") return a.name.localeCompare(b.name, "es");
    return a.featured - b.featured;
  });
}

function renderProducts() {
  const list = filteredProducts();
  $("#productGrid").innerHTML = list.map(p => `
    <article class="product-card" data-id="${p.id}" tabindex="0">
      <div class="product-image">${imageMarkup(p)}<span class="product-badge">${p.category}</span></div>
      <div class="product-info"><h3>${p.name}</h3><div class="product-meta"><span class="product-price">${money(p.price)}</span><button class="quick-add" data-add="${p.id}" type="button" aria-label="Agregar ${p.name}">+</button></div></div>
    </article>`).join("");

  $("#emptyState").hidden = list.length > 0;

  document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", e => { if (!e.target.closest("[data-add]")) openProduct(Number(card.dataset.id)); });
    card.addEventListener("keydown", e => { if (e.key === "Enter") openProduct(Number(card.dataset.id)); });
  });

  document.querySelectorAll("[data-add]").forEach(btn => btn.addEventListener("click", () => addToCart(Number(btn.dataset.add), 1)));
}

function openProduct(id) {
  state.selected = products.find(p => p.id === id);
  state.quantity = 1;
  $("#modalImage").innerHTML = imageMarkup(state.selected);
  $("#modalCategory").textContent = state.selected.category;
  $("#modalTitle").textContent = state.selected.name;
  $("#modalDescription").textContent = state.selected.description;
  $("#modalPrice").textContent = money(state.selected.price);
  $("#quantityValue").textContent = state.quantity;
  $("#productModal").hidden = false;
  document.body.style.overflow = "hidden";
}

function closeProduct() {
  $("#productModal").hidden = true;
  document.body.style.overflow = "";
}

function addToCart(id, quantity) {
  const existing = state.cart.find(item => item.id === id);
  if (existing) existing.quantity += quantity;
  else state.cart.push({ id, quantity });
  renderCart();
}

function renderCart() {
  $("#cartCount").textContent = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const empty = state.cart.length === 0;
  $("#cartEmpty").style.display = empty ? "grid" : "none";
  $("#cartItems").style.display = empty ? "none" : "block";

  $("#cartItems").innerHTML = state.cart.map(item => {
    const p = products.find(product => product.id === item.id);
    return `<article class="cart-item"><img src="${p.image}" alt="${p.name}"><div><h4>${p.name}</h4><small>${item.quantity} × ${money(p.price)}</small></div><button class="remove-item" data-remove="${p.id}" type="button">Quitar</button></article>`;
  }).join("");

  const total = state.cart.reduce((sum, item) => sum + products.find(p => p.id === item.id).price * item.quantity, 0);
  $("#cartTotal").textContent = money(total);

  document.querySelectorAll("[data-remove]").forEach(btn => btn.addEventListener("click", () => {
    state.cart = state.cart.filter(i => i.id !== Number(btn.dataset.remove));
    renderCart();
  }));
}

function openCart() {
  $("#cartDrawer").classList.add("open");
  $("#cartDrawer").setAttribute("aria-hidden", "false");
  $("#drawerBackdrop").hidden = false;
  document.body.style.overflow = "hidden";
}

function closeCart() {
  $("#cartDrawer").classList.remove("open");
  $("#cartDrawer").setAttribute("aria-hidden", "true");
  $("#drawerBackdrop").hidden = true;
  document.body.style.overflow = "";
}

function checkout() {
  if (!state.cart.length) return;
  const lines = state.cart.map(item => {
    const p = products.find(product => product.id === item.id);
    return `• ${item.quantity} x ${p.name} (${money(p.price * item.quantity)})`;
  });
  const total = state.cart.reduce((sum, item) => sum + products.find(p => p.id === item.id).price * item.quantity, 0);
  const text = `Hola DREAMER3D, quiero hacer este pedido:\n\n${lines.join("\n")}\n\nTotal estimado: ${money(total)}\n\n¿Me ayudan a confirmar disponibilidad?`;
  window.open(`https://wa.me/522221110397?text=${encodeURIComponent(text)}`, "_blank", "noopener");
}

document.querySelectorAll("[data-category]").forEach(btn => btn.addEventListener("click", () => {
  document.querySelector("[data-category].active").classList.remove("active");
  btn.classList.add("active");
  state.category = btn.dataset.category;
  renderProducts();
}));

$("#sortSelect").addEventListener("change", e => { state.sort = e.target.value; renderProducts(); });
$("#searchInput").addEventListener("input", e => { state.search = e.target.value; renderProducts(); });
$("#searchToggle").addEventListener("click", () => { $("#searchPanel").classList.toggle("open"); if ($("#searchPanel").classList.contains("open")) $("#searchInput").focus(); });
$("#clearSearch").addEventListener("click", () => { $("#searchInput").value = ""; state.search = ""; renderProducts(); });
$("#modalClose").addEventListener("click", closeProduct);
$("#productModal").addEventListener("click", e => { if (e.target === $("#productModal")) closeProduct(); });
$("#quantityDown").addEventListener("click", () => { state.quantity = Math.max(1, state.quantity - 1); $("#quantityValue").textContent = state.quantity; });
$("#quantityUp").addEventListener("click", () => { state.quantity++; $("#quantityValue").textContent = state.quantity; });
$("#addToCart").addEventListener("click", () => { addToCart(state.selected.id, state.quantity); closeProduct(); openCart(); });
$("#cartButton").addEventListener("click", openCart);
$("#cartClose").addEventListener("click", closeCart);
$("#drawerBackdrop").addEventListener("click", closeCart);
$("#checkoutButton").addEventListener("click", checkout);
document.addEventListener("keydown", e => { if (e.key === "Escape") { closeProduct(); closeCart(); } });
$("#year").textContent = new Date().getFullYear();
renderProducts();
renderCart();
