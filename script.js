const products = [
    {
        imgSrc: "imgs/prods/temp.jpeg",
        prodName: "Klassisk kamera",
        brand: "Polaroid t230X",
        review: "★★★",
        specs: [
            "3x optisk zoom",
            "Analog och digital",
            "USB C Laddning"
        ],
        price: "500:-"
    },
    {
        imgSrc: "imgs/prods/temp.jpeg",
        prodName: "Smartphone",
        brand: "TechBrand S20",
        review: "★★★★",
        specs: [
            "6.5 tum OLED-skärm",
            "128GB Lagring",
            "Trådlös laddning"
        ],
        price: "7000:-"
    },
    {
        imgSrc: "imgs/prods/temp.jpeg",
        prodName: "Trådlösa hörlurar",
        brand: "SoundWave Pro",
        review: "★★★★★",
        specs: [
            "Aktiv brusreducering",
            "24 timmars batteritid",
            "Bluetooth 5.0"
        ],
        price: "1500:-"
    },
    {
        imgSrc: "imgs/prods/temp.jpeg",
        prodName: "SmartLaptop",
        brand: "FitLife X",
        review: "★★★★",
        specs: [
            "Pulsmätning",
            "GPS-spårning",
            "Vattentålig"
        ],
        price: "2500:-"
    },
    {
        imgSrc: "imgs/prods/temp.jpeg",
        prodName: "Bärbar dator",
        brand: "UltraBook 14",
        review: "★★★★",
        specs: [
            "14 tum FHD-skärm",
            "8GB RAM",
            "512GB SSD"
        ],
        price: "9000:-"
    },
    {
        imgSrc: "imgs/prods/temp.jpeg",
        prodName: "Tablet",
        brand: "ScreenTab 10",
        review: "★★★",
        specs: [
            "10.1 tum HD-skärm",
            "64GB Lagring",
            "12 timmars batteritid"
        ],
        price: "3000:-"
    },
    {
        imgSrc: "imgs/prods/temp.jpeg",
        prodName: "Spelkonsol",
        brand: "GameStation 5",
        review: "★★★★★",
        specs: [
            "4K UHD",
            "1TB Lagring",
            "VR-stöd"
        ],
        price: "5000:-"
    }
];


const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');

let currentIndex = 0;
const intervalTime = 3500; // Tid för karusell ms

// Förra bild
carousel.querySelector('.prev').addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateCarousel();
});

// Nästa bild
carousel.querySelector('.next').addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > images.length - 1){
        currentIndex = 0;
    }
    updateCarousel();
})

// Uppdatera
function updateCarousel() {
    images.forEach((image, index) => {
        if (index === currentIndex) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

// Ändra bilder
setInterval(() => {
    currentIndex++;
    if (currentIndex > images.length - 1){
        currentIndex = 0;
    }
    updateCarousel();
}, intervalTime);

// Uppdatera
updateCarousel(); 

const container = document.getElementById('product-container');

products.forEach(product => {
    const productHTML = `
        <div class="productcard">
            <img src="${product.imgSrc}">
            <span class="prodname"><b>${product.prodName}</b></span>
            <p class="brand">${product.brand}</p>
            <div class="review">${product.review}</div>
            <ul class="specs">
                ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
            </ul>
            <span class="price">${product.price}</span>
        </div>
    `;
    container.innerHTML += productHTML;
});
