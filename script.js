const nameText = document.getElementById("nameText");
const cursor = document.getElementById("cursor");
const mainContent = document.querySelector(".main-content");
const typingText = document.getElementById("typing-text");
const upl = document.querySelector(".urban-pulse-logo");
const navShop = document.querySelector(".nav-shop");

// heading typing
function typeHeading() {
  const fullText = "Urban Pulse Streetwear";
  const typingSpeed = 45;
  let currentIndex = 0;

  const typeInterval = setInterval(() => {
    if (currentIndex < fullText.length) {
      nameText.textContent = fullText.substring(0, currentIndex + 1);
      currentIndex++;
    } else {
      clearInterval(typeInterval);
      cursor.style.visibility = "hidden";

      setTimeout(() => {
        mainContent.classList.add("visible");
        startSubtitleTyping();
      }, 500);
    }
  }, typingSpeed);
}

// looping subtitle typing
function startSubtitleTyping() {
  const textArray = [
    "Limited Edition Drops?",
    "Hoodies?",
    "Jewelry?",
    "Graphic Tees?",
    "Joggers?",
    "Caps?",
    "Backpacks?",
  ];

  let loopNum = (Math.random() * textArray.length) | 0;
  let isDeleting = false;
  let text = "";

  function type() {
    const current = loopNum % textArray.length;
    const fullText = textArray[current];

    if (!isDeleting) {
      text = fullText.substring(0, text.length + 1);
      typingText.textContent = text;

      if (text === fullText) {
        setTimeout(() => {
          isDeleting = true;
          type();
        }, 1000);
        return;
      }
    } else {
      text = fullText.substring(0, text.length - 1);
      typingText.textContent = text;

      if (text === "") {
        isDeleting = false;
        loopNum++;
      }
    }
    setTimeout(type, isDeleting ? 25 : 40);
  }

  type();
}

typeHeading();

// reload after clicking logo
upl.addEventListener("click", function () {
  window.location.href = "/index.html";
});

// scroll to top
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.className = "scroll-to-top";
scrollToTopBtn.innerHTML = "↑";
scrollToTopBtn.setAttribute("aria-label", "Scroll to top");
scrollToTopBtn.style.position = "fixed";
document.body.appendChild(scrollToTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("visible");
  } else {
    scrollToTopBtn.classList.remove("visible");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// products
const products = [
  {
    id: 1,
    name: "Metro Vibes Hoodie",
    price: 89.99,
    description:
      "Premium heavyweight hoodie with vibrant neon embroidery. Perfect for night sessions.",
    imageFront: "img/metro-vibes-front.png",
    imageBack: "img/metro-vibes-back.png",
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "hoodie",
    limited: false,
    hasBackImage: true,
  },
  {
    id: 2,
    name: "Street Legend Hoodie",
    price: 94.99,
    description:
      "Heavy-weight fleece with custom graphics. Electric design with glow-in-dark elements.",
    imageFront: "img/street-legend-hoodie-front.png",
    imageBack: "img/street-legend-hoodie-back.png",
    sizes: ["S", "M", "L", "XL"],
    category: "hoodie",
    limited: true,
    hasBackImage: true,
  },
  {
    id: 3,
    name: "Neon Moon Hoodie",
    price: 94.99,
    description:
      "Limited collab with underground artists. Electric design with glow-in-dark elements.",
    imageFront: "img/neon-moon-hoodie-front.png",
    imageBack: "img/neon-moon-hoodie-back.png",
    sizes: ["S", "M", "L", "XL"],
    category: "hoodie",
    limited: true,
    hasBackImage: true,
  },
  {
    id: 4,
    name: "Urban Chaos Tee",
    price: 39.99,
    description:
      "100% cotton graphic tee featuring exclusive graffiti artwork by local artists.",
    imageFront: "img/urban-chaos-tee-front.png",
    imageBack: "img/urban-chaos-tee-back.png",
    sizes: ["S", "M", "L", "XL"],
    category: "tee",
    limited: false,
    hasBackImage: true,
  },
  {
    id: 5,
    name: "Graffiti Blast Tee",
    price: 44.99,
    description:
      "Oversized fit tee with reflective print. Street style essential.",
    imageFront: "img/retro-wave-tee-front.png",
    imageBack: "img/retro-wave-tee-back.png",
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "tee",
    limited: false,
    hasBackImage: true,
  },
  {
    id: 6,
    name: "Midnight Run Tee",
    price: 42.99,
    description:
      "Hand-screened graphics by local street artists. Each print is unique.",
    imageFront: "img/midnight-run-tee-front.png",
    imageBack: "img/midnight-run-tee-back.png",
    sizes: ["S", "M", "L", "XL"],
    category: "tee",
    limited: true,
    hasBackImage: true,
  },
  {
    id: 7,
    name: "Street Runner Joggers",
    price: 69.99,
    description:
      "Tapered fit joggers with reflective details. Comfort meets street style.",
    imageFront: "img/street-runner-joggers-front.png",
    imageBack: "img/street-runner-joggers-back.png",
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "jogger",
    limited: false,
    hasBackImage: true,
  },
  {
    id: 8,
    name: "Night Rider Joggers",
    price: 74.99,
    description:
      "Premium fleece joggers with neon side stripes. Ultimate comfort.",
    imageFront: "img/night-runner-joggers-front.png",
    imageBack: "img/night-runner-joggers-back.png",
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "jogger",
    limited: false,
    hasBackImage: true,
  },
  {
    id: 9,
    name: "Crystal Joggers",
    price: 79.99,
    description:
      "Luxury joggers with crystal details. Where comfort meets elegance.",
    imageFront: "img/crystal-joggers-front.png",
    imageBack: "img/crystal-joggers-back.png",
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "jogger",
    limited: false,
    hasBackImage: true,
  },
  {
    id: 10,
    name: "Pulse Snapback",
    price: 34.99,
    description:
      "Embroidered logo cap with adjustable strap. Rep the brand in style.",
    imageFront: "img/pulse-snapback.png",
    imageBack: "",
    sizes: ["One Size"],
    category: "cap",
    limited: false,
    hasBackImage: false,
  },
  {
    id: 11,
    name: "Neon Nights Hat",
    price: 39.99,
    description:
      "Limited edition cap with reflective embroidery. Stand out in the dark.",
    imageFront: "img/neon-nights-hat.png",
    imageBack: "",
    sizes: ["One Size"],
    category: "cap",
    limited: true,
    hasBackImage: false,
  },
  {
    id: 12,
    name: "White Urban Pulse Cap",
    price: 34.99,
    description:
      "Clean white cap with embroidered logo. Timeless street style.",
    imageFront: "img/white-cap.png",
    imageBack: "",
    sizes: ["One Size"],
    category: "cap",
    limited: false,
    hasBackImage: false,
  },
  {
    id: 13,
    name: "Urban Explorer Backpack",
    price: 79.99,
    description:
      "Durable street backpack with multiple compartments and water-resistant coating.",
    imageFront: "img/urban-explorer-backpack.png",
    imageBack: "",
    sizes: ["One Size"],
    category: "backpack",
    limited: true,
    hasBackImage: false,
  },
  {
    id: 14,
    name: "Street Commuter Backpack",
    price: 69.99,
    description:
      "Sleek design with laptop compartment. Built for the urban grind.",
    imageFront: "img/streetCommuter(1).jpg",
    imageBack: "",
    sizes: ["One Size"],
    category: "backpack",
    limited: false,
    hasBackImage: false,
  },
  {
    id: 16,
    name: "Urban Ring Set",
    price: 34.99,
    description: "Set of 4 stainless steel rings with street-inspired designs.",
    imageFront: "img/urban-ring-set.png",
    imageBack: "",
    sizes: ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
    category: "jewelry",
    limited: false,
    hasBackImage: false,
  },
  {
    id: 17,
    name: "Urban Gold Bracelet Set",
    price: 54.99,
    description: "Premium gold-plated bracelet set. Elevate your street style.",
    imageFront: "img/urban-gold-bracelet.png",
    imageBack: "",
    sizes: ["S", "M", "L"],
    category: "jewelry",
    limited: false,
    hasBackImage: false,
  },
  // LIMITED EDITION ITEMS
  {
    id: 18,
    name: "Golden Era Collection",
    price: 149.99,
    description:
      "Limited to 100 numbered pieces worldwide. Premium heavyweight cotton with hand-embroidered details.",
    imageFront: "img/golden-era-model.png",
    imageBack: "",
    sizes: ["We Will E-Mail You!"],
    category: "limited",
    limited: true,
    hasBackImage: false,
  },
  {
    id: 19,
    name: "Nike x Urban Pulse VLT",
    price: 199.99,
    description:
      "Exclusive holographic design. Nike's material technology meets Urban Pulse street aesthetic.",
    imageFront: "img/nike-vlt-model.png",
    imageBack: "",
    sizes: ["S", "M", "L", "XL"],
    category: "limited",
    limited: true,
    hasBackImage: false,
  },
  {
    id: 20,
    name: "Y2K Rewind Pack",
    price: 174.99,
    description:
      "Three core pieces with custom vintage wash. Only 50 complete packs available.",
    imageFront: "img/y2k-rewind-model.png",
    imageBack: "",
    sizes: ["S", "M", "L", "XL"],
    category: "limited",
    limited: true,
    hasBackImage: false,
  },
];

// Cart array
let cart = [];

// Current filter state
let currentFilter = "all";

// Render products based on filter
function renderProducts(filter = "all") {
  const container = document.getElementById("productsContainer");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  container.innerHTML = filteredProducts
    .map(
      (product) => `
    <div class="product-card" data-category="${product.category}">
      ${product.limited ? '<span class="limited-edition">Limited</span>' : ""}
      <div class="product-image" ${
        product.hasBackImage
          ? `onmouseenter="showBackImage(${product.id})" onmouseleave="showFrontImage(${product.id})"`
          : ""
      }>
        ${
          product.imageFront
            ? `
          <img 
            src="${product.imageFront}" 
            alt="${product.name} - Front" 
            id="img-front-${product.id}"
            class="product-img product-img-front"
            style="transition: opacity 0.3s ease;">
          ${
            product.hasBackImage && product.imageBack
              ? `<img 
            src="${product.imageBack}" 
            alt="${product.name} - Back" 
            id="img-back-${product.id}"
            class="product-img product-img-back"
            style="transition: opacity 0.3s ease;">`
              : ""
          }
        `
            : '<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #666;">No Image</div>'
        }
      </div>
      <h3 class="product-name">${product.name}</h3>
      <p class="product-price">$${product.price.toFixed(2)}</p>
      <p class="product-description">${product.description}</p>
      <div class="size-selector">
        <label class="size-label">Select Size:</label>
        <select class="size-select" id="size-${product.id}">
          ${product.sizes
            .map((size) => `<option value="${size}">${size}</option>`)
            .join("")}
        </select>
      </div>
      <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
        Add to Cart
      </button>
    </div>
  `
    )
    .join("");
}

// Show back image on hover
function showBackImage(productId) {
  const frontImg = document.getElementById(`img-front-${productId}`);
  const backImg = document.getElementById(`img-back-${productId}`);

  if (frontImg && backImg) {
    frontImg.style.opacity = "0";
    backImg.style.opacity = "1";
  }
}

// Show front image when not hovering
function showFrontImage(productId) {
  const frontImg = document.getElementById(`img-front-${productId}`);
  const backImg = document.getElementById(`img-back-${productId}`);

  if (frontImg && backImg) {
    frontImg.style.opacity = "1";
    backImg.style.opacity = "0";
  }
}

// Add product to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const sizeSelect = document.getElementById(`size-${productId}`);
  const selectedSize = sizeSelect.value;

  cart.push({
    ...product,
    size: selectedSize,
    cartId: Date.now(),
  });

  updateCartCount();
}

// Update cart count display
function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  cartCount.textContent = cart.length;
  cartCount.classList.add("pulse");

  setTimeout(() => {
    cartCount.classList.remove("pulse");
  }, 500);
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  // Filter button functionality
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get category and render products
      const category = button.dataset.category;
      currentFilter = category;
      renderProducts(category);
    });
  });

  // Cart float click handler
  document.getElementById("cartFloat").addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Add some fresh items.");
    } else {
      const cartSummary = cart
        .map(
          (item, index) =>
            `${index + 1}. ${item.name} (${item.size}) - $${item.price.toFixed(
              2
            )}`
        )
        .join("\n");
      const total = cart.reduce((sum, item) => sum + item.price, 0);
      alert(`Your Cart:\n\n${cartSummary}\n\nTotal: $${total.toFixed(2)}`);
    }
  });

  // Initial render
  renderProducts();
});
