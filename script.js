const imageFiles = [
    "1-3-819x1024.png", "1-5.png", "1-6.png", "1-9-1024x576.png", "1.png", "10-607x1024.jpg", "10.png", "11.png", "12.png", "13-607x1024.jpg", "14-1.png", "14-607x1024.jpg", "14.png", "16.png", "17.png", "18.png", "2-1.png", "2-4.png", "2-5.png", "20.png", "21.png", "22.png", "3-4.png", "3-8-819x1024.png", "3.png", "4-1.png", "4-4-819x1024.png", "4-5-1.png", "4.png", "5-1.png", "5-4.png", "5-5-819x1024.png", "5-607x1024.jpg", "5.png", "6-607x1024.jpg", "6.png", "8-1.png", "8-2-819x1024.png", "8.png", "9-607x1024.jpg", "9.png", 
    "Anextvid-and-theboldest-fashion-for-tajnaclub-001.png", "Anextvid-and-theboldest-fashion-for-tajnaclub-004-1.png", "Anextvid-and-theboldest-fashion-for-tajnaclub-005.png", 
    "Anextvid-and-theboldest-pizza-brand-002-607x1024.jpg", "Anextvid-and-theboldest-pizza-brand-003-607x1024.jpg", "Anextvid-and-theboldest-pizza-brand-004-607x1024.jpg", "Anextvid-and-theboldest-pizza-brand-005-607x1024.jpg", 
    "Anextvid-and-theboldest-pizza-brand_mockups003.png", "Anextvid-and-theboldest-pizza-brand_mockups004.png", "Anextvid-and-theboldest-pizza-brand_mockups005.png", "Anextvid-and-theboldest-pizza-brand_mockups006.png", 
    "Brand-idenity-guidelines-819x1024.jpg", "Brand-identiy-guidence-sheet.jpg", "Choco-monanas-1024x1024.jpg", "DD27759E-FC66-483D-94F5-A9EB65F0292F-1024x1024.jpg", 
    "Drink_anextvid_theboldest_design_studio_advertising_003.jpg", "Drink_anextvid_theboldest_design_studio_advertising_004.jpg", "Edited_joidjfso-topaz-denoise-sharpen-text-upscale-2.9x.png", 
    "IMG_1501-819x1024.png", "IMG_9510-1024x576.png", "IMG_9512-1024x576.png", "IMG_9513-1024x576.png", 
    "Light-Blue-And-Black-Simple-New-Collection-Facebook-Ad.png", "Pink-Simpjijsile-Modern-Girly-Brand-Board-Kit-607x1024.jpg", 
    "Salad_Brand_anextvid_theboldest001.png", "Salad_Brand_anextvid_theboldest002.png", "Salad_Brand_anextvid_theboldest005.png", 
    "Thegrill_anextvid_theboldest_001-1-1024x1024.jpg", "Thegrill_anextvid_theboldest_002-1024x1024.jpg", "Thegrill_anextvid_theboldest_004-1024x683.jpg", 
    "anextvid-banner.png", "burgabliss_anextvid_theboldest.png", "chocomoanas_anextvid_theboldest_001-819x1024.jpg", 
    "circular-sign-mockup-hanging-from-a-wall-a11356.png", "circular-sign-mockup-placed-outside-a-store-2224-el1-1024x683.png", 
    "edited_1730790381946-1-topaz-face-denoise-text-sharpen-upscale-2.9x.jpeg", "emblem_logo_1-edited.png", "fruito-anextvid-theboldest.png", 
    "incollage_save-13.jpg", "incollage_save-6.jpg", "incollage_save-9.jpg", "incollage_save-copy-819x1024.jpg", "incollage_save.jpg", 
    "jiosdfjsoi-819x1024.png", "koala-design-by-theboldest-and-anextvid_1-607x1024.jpg", "koala-design-by-theboldest-and-anextvid_2-607x1024.jpg", 
    "logo_anextvid_theboldest_2-1024x1024.jpg", "logo_anextvid_theboldest_4-1024x1024.jpg", "milk-brand-id-607x1024.jpg", "milk-page_2-607x1024.jpg", 
    "osidjfsiodfjsio.png", "pizza-strip.png", "salad-brand-anextvid-the-boldest.png", "samson-wood-anextvid-theboldest-607x1024.jpg", "samson-wood-anextvid-theboldest2-607x1024.jpg", 
    "soidfjsofij.png", "the-boldest-brand-id-607x1024.jpg"
];

// Shuffle images
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Populate Hero visual with some floating images
    const heroGallery = document.getElementById('hero-gallery');
    const shuffledForHero = shuffleArray([...imageFiles]).slice(0, 10);
    
    shuffledForHero.forEach((imgSrc, i) => {
        const img = document.createElement('img');
        img.src = "images/" + imgSrc;
        img.className = 'hero-gallery-img';
        
        // Random positioning
        const top = Math.random() * 80;
        const left = 20 + Math.random() * 80;
        const width = 150 + Math.random() * 200;
        const zIndex = Math.floor(Math.random() * 10);
        
        img.style.top = `${top}%`;
        img.style.left = `${left}%`;
        img.style.width = `${width}px`;
        img.style.zIndex = zIndex;
        
        // Parallax / subtle floating animation setup
        // Let's add simple floating animation delay
        img.style.animation = `float ${5 + Math.random()*5}s ease-in-out infinite alternate`;
        img.style.animationDelay = `${Math.random()*2}s`;

        heroGallery.appendChild(img);
    });

    // Add keyframes dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes float {
            0% { transform: translateY(0) rotate(0deg); }
            100% { transform: translateY(-30px) rotate(3deg); }
        }
    `;
    document.head.appendChild(style);

    // 2. Populate Masonry Grid
    const masonryContainer = document.getElementById('masonry-container');
    const shuffledForGrid = shuffleArray([...imageFiles]);
    
    shuffledForGrid.forEach(imgSrc => {
        const item = document.createElement('div');
        item.className = 'masonry-item';
        
        const img = document.createElement('img');
        img.src = "images/" + imgSrc;
        img.loading = "lazy";
        
        const overlay = document.createElement('div');
        overlay.className = 'masonry-overlay';
        overlay.innerHTML = `<h4>THE BOLDEST</h4>`;
        
        item.appendChild(img);
        item.appendChild(overlay);
        masonryContainer.appendChild(item);
    });

    // Smooth Scrolling
    document.querySelectorAll('.nav-link, .nav-btn, .cta-button').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
