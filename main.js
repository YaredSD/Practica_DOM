const product = [
{
    name: "Creatina Monohidrato en polvo",
    price: 6.90,
    stars: 3,
    reviews: 2782,
    solds: +3000,
    seller: "HSN",
    image: 'https://www.hsnstore.com/media/catalog/product/cache/2/small_image/220x220/9df78eab33525d08d6e5fb8d27136e95/c/r/creatine-monohydrate-hsn1_1.jpg',
},
{
    name: "EvoWhey Protein 2 kg",
    price: 37.06,
    stars: 5,
    reviews: 8755,
    solds: +10500,
    seller: "HSN",
    image: 'https://www.hsnstore.com/media/catalog/product/cache/2/thumbnail/100x/9df78eab33525d08d6e5fb8d27136e95/e/v/evowhey-2kg-white-chocolate-peanut-new-front-hsn_1.webp',
},
{
    name: "EvoVits Multivitamínico 120 caps",
    price: 6.90,
    stars: 3,
    reviews: 1342,
    solds: +3000,
    seller: "HSN",
    image: 'https://www.hsnstore.com/media/catalog/product/cache/2/thumbnail/100x/9df78eab33525d08d6e5fb8d27136e95/e/v/evovits-120-veg-cap-front-hsn_1.webp'
},
{
    name: "EvoBCAA'S 2.0 (BCAAS'S 12:1:1 + Glutamina 500 g",
    price: 14.44,
    stars: 4,
    reviews: 977,
    solds: +2000,
    seller: "HSN",
    image: 'https://www.hsnstore.com/media/catalog/product/cache/2/thumbnail/100x/9df78eab33525d08d6e5fb8d27136e95/e/v/evobcaas2-peach-ice-tea-150-g-hsn_1.webp',
},
{
    name: "L-Glutamina en polvo",
    price: 18.64,
    stars: 2,
    reviews: 677,
    solds: +1000,
    seller: "HSN",
    image: 'https://www.hsnstore.com/media/catalog/product/cache/2/thumbnail/100x/9df78eab33525d08d6e5fb8d27136e95/l/-/l-glutamine-1kg-powder-hsn_1.jpg',
},
{
    name: "EvoRDX 2.0 150 g",
    price: 6.33,
    stars: 5,
    reviews: 2980,
    solds: +4500,
    seller: "HSN",
    image: 'https://www.hsnstore.com/media/catalog/product/cache/2/thumbnail/100x/9df78eab33525d08d6e5fb8d27136e95/e/v/evordx-new-front-blood-orange-150g-hsn_1.webp',
},
{
    name: "EvoRecovery 2 kg",
    price: 43.44,
    stars: 4,
    reviews: 6839,
    solds: +9500,
    seller: "HSN",
    image: 'https://www.hsnstore.com/media/catalog/product/cache/2/thumbnail/100x/9df78eab33525d08d6e5fb8d27136e95/e/v/evorecovery-2kg-fruit-punch-new-front-hsn_1.webp',
},
{
    name: "EvoBars Protein Bars 12 uds.",
    price: 18.50,
    stars: 3,
    reviews: 3947,
    solds: +5000,
    seller: "HSN",
    image: 'https://www.hsnstore.com/media/catalog/product/cache/2/thumbnail/100x/9df78eab33525d08d6e5fb8d27136e95/b/o/box-photo-evobars-brownie-60g-front-hsn_1.webp',
},
{
    name: "EvoMass 2.0 (Ganador de Peso) 3 kg",
    price: 33.58,
    stars: 5,
    reviews: 8728,
    solds: +10000,
    seller: "HSN",
    image: 'https://www.hsnstore.com/media/catalog/product/cache/2/thumbnail/100x/9df78eab33525d08d6e5fb8d27136e95/e/v/evomass-gainer-chocolate-hazelnut-3kg-hsn_1.jpg',
},
{
    name: "EvoCarbs 1 kg",
    price: 6.33,
    stars: 2,
    reviews: 2984,
    solds: +3500,
    seller: "HSN",
    image: 'https://www.hsnstore.com/media/catalog/product/cache/2/thumbnail/100x/9df78eab33525d08d6e5fb8d27136e95/e/v/evocarbs-1-kg-no-flavour-hsn_1.jpg',
}];


/* Función para crear todos los elementos de cada tarjeta de la tienda */
function createShopCards(productsArray) {
    const shop = document.querySelector("#shop");
    for (const product of productsArray) {
      /* creamos un div */
      let div = document.createElement("div");
      div.className = "item_shop";
  
      /*=== ICON === */
      let icon = document.createElement("img");
      icon.className = "icon-item_shop";
      icon.src = product.classImg;
      icon.alt = "Class Icon";
      div.appendChild(icon);
  
      /*=== CLASS === */
      let rol = document.createElement("div");
      let rolText = document.createTextNode(product.class);
      rol.className = "class-item_shop";
      rol.appendChild(rolText);
      div.appendChild(rol);
  
      /*=== IMAGE === */
      let img = document.createElement("img");
      img.className = "image-item_shop";
      img.src = product.image;
      img.alt = "Product Image";
      div.appendChild(img);
  
      /*=== NAME === */
      let name = document.createElement("h3");
      let nameText = document.createTextNode(product.name);
      name.className = "name-item_shop";
      name.appendChild(nameText);
      div.appendChild(name);
  
      /*=== SELLER === */
      let seller = document.createElement("h4");
      let sellerText = document.createTextNode(product.seller);
      seller.className = "seller-item_shop";
      seller.appendChild(sellerText);
      div.appendChild(seller);
  
      /*=== RATING === */
      let divRating = document.createElement("div");
      divRating.className = "rating-item_shop";
      div.appendChild(divRating);
  
      /*=== PRICE === */
      let price = document.createElement("p");
      let priceValue = document.createTextNode(product.price + " €");
      price.className = "price-item_shop";
      price.appendChild(priceValue);
      div.appendChild(price);
  
      /*=== BUY BUTTON === */
      let buyButton = document.createElement("button");
      let buyButtonText = document.createTextNode("Add to chard");
      buyButton.className = "button-item_shop";
      buyButton.appendChild(buyButtonText);
      div.appendChild(buyButton);
  
      shop.appendChild(div);
    }
  }
  
  createShopCards(products);
  
  /* Función para añadir estrellas según el valor de stars de cada objeto */
  function addStarsToProducts(productsArray) {
    productsArray.forEach((product, index) => {
      const ratingDiv = document.querySelectorAll(".rating-item_shop")[index];
  
      for (let i = 0; i < product.stars; i++) {
        const starImg = document.createElement("img");
        starImg.className = "star-item_shop";
        starImg.src = "assets/img/cards_icon/star_full.png";
        starImg.alt = "Star";
        ratingDiv.appendChild(starImg);
      }
    });
  }
  
  addStarsToProducts(products); /* FUNCIONA :,) */
  
  /* Función para filtrar el array principal de productos y añadirlos
  al main según el botón que se pulse. */
  
  /*ALL*/
  function filteredAll() {
    const shop = document.querySelector("#shop");
    shop.innerHTML = "";
    products.sort((a, b) => a.name.localeCompare(b.name));
    createShopCards(products);
    addStarsToProducts(products);
    styleByClass();
  }
  
  document.querySelector(".filter_all").addEventListener("click", filteredAll);
  
  /*WARRIOR*/
  const filterByWarrior = [];
  for (const product of products) {
    if (
      product.class === "Heavy Armor" ||
      product.class === "Shield" ||
      product.class === "Two handed" ||
      product.class === "Mace" ||
      product.class === "War Axe" ||
      product.class === "Health"
    ) {
      filterByWarrior.push(product);
    }
  }
  
  function filteredWarrior() {
    const shop = document.querySelector("#shop");
    shop.innerHTML = "";
    createShopCards(filterByWarrior);
    addStarsToProducts(filterByWarrior);
    styleByClass();
  }
  
  document
    .querySelector(".filter_warrior")
    .addEventListener("click", filteredWarrior);
  
  /*THIEF*/
  const filterByThief = [];
  for (const product of products) {
    if (
      product.class === "Light Armor" ||
      product.class === "Bow" ||
      product.class === "One handed" ||
      product.class === "Dagger" ||
      product.class === "Stamina"
    ) {
      filterByThief.push(product);
    }
  }
  
  function filteredThief() {
    const shop = document.querySelector("#shop");
    shop.innerHTML = "";
    createShopCards(filterByThief);
    addStarsToProducts(filterByThief);
    styleByClass();
  }
  
  document
    .querySelector(".filter_thief")
    .addEventListener("click", filteredThief);
  
  /*MAGE*/
  const filterByMage = [];
  for (const product of products) {
    if (
      product.class === "Staff" ||
      product.class === "Spell" ||
      product.class === "Robe" ||
      product.class === "Magicka"
    ) {
      filterByMage.push(product);
    }
  }
  
  function filteredMage() {
    const shop = document.querySelector("#shop");
    shop.innerHTML = "";
    createShopCards(filterByMage);
    addStarsToProducts(filterByMage);
    styleByClass();
  }
  
  document.querySelector(".filter_mage").addEventListener("click", filteredMage);
  
  /*RATING*/
  function filteredRating() {
    const shop = document.querySelector("#shop");
    shop.innerHTML = "";
    products.sort((a, b) => b.stars - a.stars);
    createShopCards(products);
    addStarsToProducts(products);
    styleByClass();
  }
  
  document
    .querySelector(".filter_rating")
    .addEventListener("click", filteredRating);
  
  /*PRICE*/
  function filteredPrice() {
    const shop = document.querySelector("#shop");
    shop.innerHTML = "";
    products.sort((a, b) => b.price - a.price);
    createShopCards(products);
    addStarsToProducts(products);
    styleByClass();
  }
  
  document
    .querySelector(".filter_price")
    .addEventListener("click", filteredPrice);