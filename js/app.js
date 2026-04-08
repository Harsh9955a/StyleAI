const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const analyzeBtn = document.getElementById("analyzeBtn");
const results = document.getElementById("results");

// Image Preview
imageInput.addEventListener("change", () => {
    const file = imageInput.files[0];
    if (file) {
        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
    }
});

// MAIN ANALYSIS
analyzeBtn.addEventListener("click", () => {
    if (!imageInput.files[0]) {
        alert("Upload image first!");
        return;
    }

    results.innerHTML = "<p>Analyzing your style...</p>";

    setTimeout(() => {
        const outfits = generateOutfits();
        displayOutfits(outfits);
    }, 1500);
});


// 🔥 Generate 6 Outfit Types
function generateOutfits() {
    return [
        {
            category: "Complete Look",
            name: "Casual Streetwear",
            items: ["Oversized T-shirt", "Jeans", "Sneakers"],
            keyword: "streetwear outfit"
        },
        {
            category: "Accessories",
            name: "Minimal Add-ons",
            items: ["Watch", "Chain", "Sunglasses"],
            keyword: "fashion accessories"
        },
        {
            category: "Footwear",
            name: "Sneaker Style",
            items: ["White Sneakers"],
            keyword: "white sneakers fashion"
        },
        {
            category: "Budget Pick",
            name: "Affordable Fit",
            items: ["Basic Tee", "Denim", "Shoes"],
            keyword: "budget outfit fashion"
        },
        {
            category: "Premium Look",
            name: "Luxury Fit",
            items: ["Blazer", "Formal Pants", "Leather Shoes"],
            keyword: "luxury fashion outfit"
        },
        {
            category: "Trendy Pick",
            name: "GenZ Trend",
            items: ["Baggy Hoodie", "Cargo Pants"],
            keyword: "trendy streetwear 2026"
        }
    ];
}


// 🎨 Display Cards
function displayOutfits(outfits) {
    results.innerHTML = "";

    outfits.forEach(outfit => {
        const card = document.createElement("div");
        card.className = "card";

        const imageURL = `https://source.unsplash.com/300x400/?${outfit.keyword},fashion`;

        card.innerHTML = `
            <h3>${outfit.category}</h3>
            <img src="${imageURL}" width="100%">
            <h4>${outfit.name}</h4>
            <p>${outfit.items.join(", ")}</p>
            <button onclick="tryOn('${outfit.name}')">Try On</button>
        `;

        results.appendChild(card);
    });
}


// 👗 Try-On
function tryOn(name) {
    alert(`✨ This ${name} will suit your style perfectly!`);
}