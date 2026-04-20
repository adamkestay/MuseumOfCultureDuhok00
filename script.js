window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Start fade out animation
        preloader.classList.add('fade-out');
        document.body.classList.remove('loading');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // --- VERIFICATION SYSTEM ---
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('verify')) {
        const vName = urlParams.get('vname');
        const vDate = urlParams.get('vdate');
        const vId = urlParams.get('verify');

        // Create a verification overlay for staff
        const overlay = document.createElement('div');
        overlay.className = 'verification-overlay';
        overlay.style = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); z-index:10000; display:flex; align-items:center; justify-content:center; color:white; text-align:center; font-family:'Roboto',sans-serif;";
        overlay.innerHTML = `
            <div style="background:#fff; color:#333; padding:40px; border-radius:15px; max-width:90%; width:400px; box-shadow:0 10px 30px rgba(0,0,0,0.5);">
                <i class="fas fa-check-circle" style="font-size:4rem; color:#28a745; margin-bottom:20px;"></i>
                <h2 style="font-family:'Playfair Display',serif; margin-bottom:15px; color:#5d4e37;">Visit Verified</h2>
                <p style="margin-bottom:10px;"><strong>Visitor:</strong> ${decodeURIComponent(vName)}</p>
                <p style="margin-bottom:10px;"><strong>Date:</strong> ${vDate}</p>
                <p style="font-size:0.8rem; color:#888;">ID: ${vId}</p>
                <button id="close-verify" class="btn" style="margin-top:20px;">Done</button>
            </div>
        `;
        document.body.appendChild(overlay);
        document.getElementById('close-verify').addEventListener('click', () => {
            overlay.remove();
            // Clean URL
            window.history.replaceState({}, document.title, window.location.pathname);
        });
    }

    // --- GALLERY CONFIGURATION ---
    const galleryItems = [
        { src: 'pics/pics (1).jpg', alt: '' },
        { src: 'pics/pics (2).jpg', alt: '' },
        { src: 'pics/pics (4).jpg', alt: '' },
        { src: 'pics/pics (1).jpeg', alt: '' },
        { src: 'pics/pics (2).jpeg', alt: '' },
        { src: 'pics/pics (3).jpeg', alt: '' },
        { src: 'pics/pics (4).jpeg', alt: '' },
        { src: 'pics/pics (5).jpeg', alt: '' },
        { src: 'pics/pics (6).jpeg', alt: '' },
        { src: 'pics/pics (7).jpeg', alt: '' },
        { src: 'pics/pics (8).jpeg', alt: '' },
        { src: 'pics/pics (9).jpeg', alt: '' },
        { src: 'pics/pics (10).jpeg', alt: '' },
        { src: 'pics/pics (11).jpeg', alt: '' },
        { src: 'pics/pics (12).jpeg', alt: '' },
        { src: 'pics/pics (13).jpeg', alt: '' },
        { src: 'pics/pics (14).jpeg', alt: '' },
        { src: 'pics/pics (15).jpeg', alt: '' },
        { src: 'pics/pics (16).jpeg', alt: '' },
        { src: 'pics/pics (17).jpeg', alt: '' },
        { src: 'pics/pics (18).jpeg', alt: '' },
        { src: 'pics/pics (19).jpeg', alt: '' },
        { src: 'pics/pics (20).jpeg', alt: '' },
        { src: 'pics/pics (21).jpeg', alt: '' },
        { src: 'pics/pics (22).jpeg', alt: '' },
        { src: 'pics/pics (23).jpeg', alt: '' },
        { src: 'pics/pics (24).jpeg', alt: '' },
        { src: 'pics/pics (25).jpeg', alt: '' },
        { src: 'pics/pics (26).jpeg', alt: '' },
        { src: 'pics/pics (27).jpeg', alt: '' },
        { src: 'pics/pics (28).jpeg', alt: '' },
        { src: 'pics/pics (29).jpeg', alt: '' },
        { src: 'pics/pics (30).jpeg', alt: '' },
        { src: 'pics/pics (31).jpeg', alt: '' },
        { src: 'pics/pics (32).jpeg', alt: '' },
        { src: 'pics/pics (33).jpeg', alt: '' },
        { src: 'pics/pics (34).jpeg', alt: '' },
        { src: 'pics/pics (35).jpeg', alt: '' },
        { src: 'pics/pics (36).jpeg', alt: '' },
        { src: 'pics/pics (37).jpeg', alt: '' },
        { src: 'pics/pics (38).jpeg', alt: '' },
        { src: 'pics/pics (39).jpeg', alt: '' },
        { src: 'pics/pics (40).jpeg', alt: '' },
        { src: 'pics/pics (41).jpeg', alt: '' },
        { src: 'pics/pics (42).jpeg', alt: '' },
        { src: 'pics/pics (43).jpeg', alt: '' },
        { src: 'pics/pics (44).jpeg', alt: '' },
        { src: 'pics/pics (45).jpeg', alt: '' },
        { src: 'pics/pics (46).jpeg', alt: '' },
        { src: 'pics/pics (47).jpeg', alt: '' },
        { src: 'pics/pics (48).jpeg', alt: '' },
        { src: 'pics/pics (49).jpeg', alt: '' },
        { src: 'pics/pics (50).jpeg', alt: '' },
        { src: 'pics/pics (51).jpeg', alt: '' },
        { src: 'pics/pics (52).jpeg', alt: '' },
        { src: 'pics/pics (53).jpeg', alt: '' },
        { src: 'pics/pics (54).jpeg', alt: '' },
        { src: 'pics/pics (55).jpeg', alt: '' },
        { src: 'pics/pics (56).jpeg', alt: '' },
        { src: 'pics/pics (57).jpeg', alt: '' },
        { src: 'pics/pics (58).jpeg', alt: '' },
        { src: 'pics/pics (59).jpeg', alt: '' },
        { src: 'pics/pics (60).jpeg', alt: '' },
        { src: 'pics/pics (61).jpeg', alt: '' },
        { src: 'pics/pics (62).jpeg', alt: '' },
        { src: 'pics/pics (63).jpeg', alt: '' },
        { src: 'pics/pics (64).jpeg', alt: '' },
        { src: 'pics/pics (65).jpeg', alt: '' },
        { src: 'pics/pics (66).jpeg', alt: '' },
        { src: 'pics/pics (67).jpeg', alt: '' },
        { src: 'pics/pics (68).jpeg', alt: '' },
        { src: 'pics/pics (69).jpeg', alt: '' },
        { src: 'pics/pics (70).jpeg', alt: '' },
        { src: 'pics/pics (71).jpeg', alt: '' },
        { src: 'pics/pics (72).jpeg', alt: '' },
        { src: 'pics/pics (73).jpeg', alt: '' },
        { src: 'pics/pics (74).jpeg', alt: '' },
        { src: 'pics/pics (75).jpeg', alt: '' },
        { src: 'pics/pics (76).jpeg', alt: '' },
        { src: 'pics/pics (77).jpeg', alt: '' },
        { src: 'pics/pics (78).jpeg', alt: '' },
        { src: 'pics/pics (79).jpeg', alt: '' },
        { src: 'pics/pics (80).jpeg', alt: '' },
        { src: 'pics/pics (81).jpeg', alt: '' },
        { src: 'pics/pics (82).jpeg', alt: '' },
        { src: 'pics/pics (83).jpeg', alt: '' },
        { src: 'pics/pics (84).jpeg', alt: '' },
        { src: 'pics/pics (85).jpeg', alt: '' },
        { src: 'pics/pics (86).jpeg', alt: '' },
        { src: 'pics/pics (87).jpeg', alt: '' },
        { src: 'pics/pics (88).jpeg', alt: '' },
        { src: 'pics/pics (90).jpeg', alt: '' }
    ];

    // Dynamic Gallery Injection & Lightbox Integration
    const galleryGrid = document.querySelector('.gallery-grid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    let currentIndex = 0;
    let activeImages = [];

    if (galleryGrid) {
        const isMainPage = !!document.querySelector('[data-i18n="btn-view-more"]');
        activeImages = isMainPage ? galleryItems.slice(0, 9) : galleryItems;

        galleryGrid.innerHTML = '';
        activeImages.forEach((item, index) => {
            const itemContainer = document.createElement('div');
            itemContainer.className = 'gallery-item reveal';

            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.alt;

            const caption = document.createElement('div');
            caption.className = 'gallery-caption';
            caption.textContent = item.alt;
            
            itemContainer.appendChild(img);
            itemContainer.appendChild(caption);

            // Open lightbox on click
            itemContainer.addEventListener('click', () => {
                currentIndex = index;
                updateLightboxImage();
                lightbox.style.display = 'block';
            });

            galleryGrid.appendChild(itemContainer);
        });
    }

    function updateLightboxImage() {
        if (activeImages[currentIndex]) {
            lightboxImg.src = activeImages[currentIndex].src;
        }
    }

    // 1. Hero Background Slideshow
    const heroImages = [
        'pics/pics (2).jpg',
    ];
    let currentHeroIndex = 0;
    const heroSection = document.querySelector('.hero');

    if (heroSection && heroImages.length > 1) {
        // Preload images for smooth transition
        heroImages.forEach(src => new Image().src = src);

        setInterval(() => {
            currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
            // Update CSS variable to change background
            document.documentElement.style.setProperty('--hero-bg', `url('${heroImages[currentHeroIndex]}')`);
        }, 5000); // Change every 5 seconds
    }

    // --------------------------------

    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Only prevent default and smooth scroll for internal page anchors
            if (href && href.startsWith('#')) {
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

    // Hamburger Menu
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));
    }

    // Nav scroll behavior
    const nav = document.querySelector('nav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (!nav) return;

        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        // Hide nav on scroll down, show on scroll up
        if (window.scrollY > lastScrollY && window.scrollY > 100 && (!navMenu || !navMenu.classList.contains('active'))) {
            nav.classList.add('nav-hidden');
        } else {
            nav.classList.remove('nav-hidden');
        }
        lastScrollY = window.scrollY;
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Back to Top Button
    const backToTopButton = document.getElementById("back-to-top");

    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Language toggle
    const languageToggle = document.getElementById('language-toggle');
    let currentLanguage = localStorage.getItem('language') || 'en';
    
    const translations = {
        en: {
            "about": "About",
            "exhibits": "Exhibits",
            "gallery": "Gallery",
            "events": "Events",
            "location": "Location",
            "contact": "Contact",
            "langButton": "کوردی",
            "header-title": "Museum of Culture Duhok",
            "header-subtitle": "Preserving Heritage, Inspiring Future",
            "hero-title": "Welcome to the Museum of Culture Duhok",
            "hero-subtitle": "Discover the history, traditions, and identity of our people.",
            "btn-explore": "Explore Now",
            "btn-view-more": "View More",
            "about-title": "About the Museum",
            "about-text": "The Museum of Culture is dedicated to preserving cultural heritage, showcasing traditional artifacts, and educating future generations about history and identity.",
            "about-mission-title": "Our Mission",
            "about-mission-text": "To preserve, celebrate, and share the rich cultural heritage of our people with the world, ensuring that traditions and stories are never forgotten.",
            "about-vision-title": "Our Vision",
            "about-vision-text": "To be a beacon of cultural preservation and education, fostering understanding and appreciation for diverse traditions and histories.",
            "about-values-title": "Our Values",
            "about-values-text": "Authenticity, respect, education, and community engagement guide everything we do in preserving our cultural legacy.",
            "exhibits-title": "Exhibits",
            "exhibit1-title": "Traditional Clothing",
            "exhibit1-desc": "Explore authentic Kurdish garments and textiles.",
            "exhibit2-title": "Ancient Tools & Artifacts",
            "exhibit2-desc": "Discover tools from our ancestors' daily lives.",
            "exhibit3-title": "Music and Instruments",
            "exhibit3-desc": "Hear the melodies of traditional Kurdish music.",
            "exhibit4-title": "Historical Documents",
            "exhibit4-desc": "Read stories from our rich history.",
            "gallery-title": "Gallery",
            "events-title": "Upcoming Events",
            "event1-title": "Workshop on Traditional Crafts",
            "event1-desc": "Join us for hands-on crafting sessions.",
            "event2-title": "Lecture on Kurdish History",
            "event2-desc": "Learn from renowned historians.",
            "event3-title": "Cultural Festival",
            "event3-desc": "Celebrate with music, dance, and food.",
            "location-title": "Location",
            "location-text": "Visit us at our museum located in Duhok, Etite, Kurdistan. We're easily accessible and welcome visitors from around the world.",
            "location-address-title": "Address",
            "location-address-text": "Kurdistan Duhok Etite",
            "location-parking-title": "Parking",
            "location-parking-text": "Free parking is available for all visitors in the lot adjacent to the museum.",
            "location-directions-button": "Get Directions",
            "contact-title": "Contact Us",
            "contact-email-label": "Email:",
            "contact-phone-label": "Phone:",
            "contact-location-label": "Location:",
            "contact-follow-label": "Follow us:",
            "connect-title": "Plan Your Visit",
            "visit-notification-title": "Notify Your Visit",
            "visit-notification-desc": "Let us know when you plan to visit and we'll prepare for your arrival!",
            "visit-name-label": "Name *",
            "visit-email-label": "Email *",
            "visit-phone-label": "Phone Number *",
            "visit-date-label": "Visit Date *",
            "visit-message-label": "Additional Message",
            "visit-message-placeholder": "Any special requests or questions?",
            "visit-submit": "Submit Notification",
            "visit-cancel-note": "*For cancelation contact us via email or phone number",
            "faq-title": "Frequently Asked Questions",
            "faq-q1": "What are the museum's opening hours?",
            "faq-a1": "We are open Monday to Friday from 9 AM to 5 PM, and Saturday from 10 AM to 4 PM. We are closed on Sundays.",
            "faq-q2": "Is there an admission fee?",
            "faq-a2": "No, admission to the Museum of Culture is completely free for all visitors.",
            "faq-q3": "Is the museum wheelchair accessible?",
            "faq-a3": "Yes, our facility is fully wheelchair accessible with ramps and elevators to all floors.",
            "faq-q4": "Can I take photos inside?",
            "faq-a4": "Photography is allowed for personal use, but please refrain from using flash to preserve the artifacts."
        },
        ku: {
            "about": "ل دۆر",
            "exhibits": "پێشانگەهـ",
            "gallery": "گالەری",
            "events": "چالاکی",
            "location": "جهـ",
            "contact": "پەیوەندی",
            "langButton": "English",
            "header-title": "مۆزەخانەیا کەلتووری ل دهۆکێ",
            "header-subtitle": "پاراستنا کەلەپۆری، ئیلهام بەخشین بۆ پاشەڕۆژێ",
            "hero-title": "ب خێرهاتی بۆ مۆزەخانەیا کەلتووری ل دهۆکێ",
            "hero-subtitle": "مێژوو، داب و نەریت و ناسنامەیا مە ببینه.",
            "btn-explore": "دەستپێبکە",
            "btn-view-more": "پتر ببینە",
            "about-title": "ل دۆر مۆزەخانەیێ",
            "about-text": "مۆزەخانەیا کەلتووری تەرخانکرییە بۆ پاراستنا کەلەپۆرێ کەلتووری، نیشاندانا پارچەێن کەڤنار، و فێرکرنا نەوەیێن پاشەڕۆژێ دەربارەی مێژوو و ناسنامەیێ.",
            "about-mission-title": "ئەرکێ مە",
            "about-mission-text": "پاراستن و ساخکرنەڤە و بەلاڤکرنا کەلەپۆرێ کەلتووری یێ دەوڵەمەند یێ گەلێ مە بۆ جیهانێ، داکو داب و نەریت و چیرۆک چ جاران نەهێنە ژبیرکرن.",
            "about-vision-title": "دیتنا مە",
            "about-vision-text": "ببیتە منارەیەک بۆ پاراستنا کەلتووری و پەروەردەیێ، و گەشەپێدانا تێگەهشتنێ بۆ داب و نەریتێن جودا و مێژوویێ.",
            "about-values-title": "بهایێن مە",
            "about-values-text": "راستی، رێزگرتن، پەروەردە، و پشکداریا جڤاکی رێبەرێن مە نە د پاراستنا میراتێ مە یێ کەلتووریدا.",
            "exhibits-title": "پێشانگەهـ",
            "exhibit1-title": "جلوبەرگێن کوردی",
            "exhibit1-desc": "سەیرا جلوبەرگ و چنینێن رەسەن یێن کوردی بکە.",
            "exhibit2-title": "ئامرازێن کەڤنار",
            "exhibit2-desc": "ئەو ئامرازێن کو باپیرێن مە د ژیانا خۆ یا رۆژانەدا بکارئیناین ببینە.",
            "exhibit3-title": "مۆزیک و ئامرازێن مۆزیکێ",
            "exhibit3-desc": "گۆهێ خۆ بدە مۆزیکا رەسەن یا کوردی.",
            "exhibit4-title": "بەلگەنامەیێن مێژوویی",
            "exhibit4-desc": "چیرۆکێن مێژوویا مە یا دەوڵەمەند بخوینە.",
            "gallery-title": "گالەری",
            "events-title": "چالاکیێن بهێت",
            "event1-title": "وۆرکشۆپ ل دۆر کارێن دەستی",
            "event1-desc": "پشکدار بە د خۆلێن دروستکرنا کارێن دەستیدا.",
            "event2-title": "سمینار ل دۆر مێژوویا کوردی",
            "event2-desc": "ژ مێژووناسێن ناڤدار فێر ببە.",
            "event3-title": "فێستیڤاڵی جێگیر",
            "event3-desc": "ب مۆزیک و سەما و خوارنێن رەسەن ڤە بگەڕە.",
            "location-title": "جهـ",
            "location-text": "سەردانا مە بکە ل مۆزەخانەیێ کو دکەڤیتە دهۆکێ، ئێتیتێ، کوردستان. گەهشتن بۆ مە یا ب ساناهییە و ئەم بخێرهاتنا هەمی گەشتیاران دکەین ژ هەمی جیهانێ.",
            "location-address-title": "ناونیشان",
            "location-address-text": "کوردستان دهۆک ئێتیتێ",
            "location-parking-title": "پارکینگ",
            "location-parking-text": "پارکینگا بێبەرامبەر بۆ هەمی سەردانکەران یا بەردەستە ل تەنیشت مۆزەخانەیێ.",
            "location-directions-button": "رێ نیشاندان",
            "contact-title": "پەیوەندیێ ب مە بکە",
            "contact-email-label": "ئیمەیل:",
            "contact-phone-label": "تەلەفۆن:",
            "contact-location-label": "جهـ:",
            "contact-follow-label": "مە فۆلۆ بکە:",
            "connect-title": "پلانا سەردانا خۆ دابنێ",
            "visit-notification-title": "ئەگاداری بۆ سەردانێ",
            "visit-notification-desc": "مە ئاگەهدار بکە کا کینگی دێ هێی دا کو ئەم خۆ بۆ هاتنا تە ئامادە بکەین!",
            "visit-name-label": "ناو *",
            "visit-email-label": "ئیمەیڵ *",
            "visit-phone-label": "ژمارەی تەلەفۆن *",
            "visit-date-label": "رێکەوتا سەردانێ *",
            "visit-message-label": "نامەیا زێدەتر",
            "visit-message-placeholder": "هەر داواکاریەکا تایبەت یان پرسیارەکا تە هەبیت؟",
            "visit-submit": "ناردنا ئاگاداریێ",
            "visit-cancel-note": "*بۆ هەڵوەشاندنەوە پەیوەندی ب مە بکە ب رێیا ئیمەیلی یان تەلەفۆنێ",
            "faq-title": "پرسیارێن بەردەوام",
            "faq-q1": "دەمژمێرێن کارکرنا مۆزەخانەیێ کینگینە؟",
            "faq-a1": "ئەم یێ ڤەککرینە ژ دووشەمبی تا ئەینی ژ دەمژمێر ٩ بەیانی تا ٥ ئێڤاری، و شەمبیێ ژ ١٠ بەیانی تا ٤ ئێڤاری. یەکشەمبیێ گرتتییە.",
            "faq-q2": "ئایا پارێ هاتنەژوورێ هەیە؟",
            "faq-a2": "نەخێر، هاتنەژوور بۆ مۆزەخانەیا کەلتووری بۆ هەمی سەردانکەران بێبەرامبەرە.",
            "faq-q3": "ئایا مۆزەخانە بۆ خودان پێدویستیێن تایبەت گونجایە؟",
            "faq-a3": "بەڵێ، جهێ مە ب تەمامی بۆ کورسیێن لڤۆک یێ گونجایە و رامپ و مەسعەد بۆ هەمی نهۆمان یێن هەی.",
            "faq-q4": "دکارم وێنەیان د ناڤ مۆزەخانەیێدا بگرم؟",
            "faq-a4": "وێنەگرتن بۆ بکارئینانا کەسی یا رێپێدایە، بەس هیڤییە فلاش بکارنەئینن بۆ پاراستنا کەلوپەلان."
        }
    };

    function setLanguageUI(lang) {
        const langTranslations = translations[lang];
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (langTranslations[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = langTranslations[key];
                } else {
                    element.textContent = langTranslations[key];
                }
            }
        });

        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);
    }

    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            currentLanguage = currentLanguage === 'en' ? 'ku' : 'en';
            setLanguageUI(currentLanguage);
        });
    }

    // Initialize language
    setLanguageUI(currentLanguage);

    // Initialize Leaflet satellite map
    if (document.getElementById('map')) {
        const map = L.map('map').setView([36.84408408884799, 43.073027706009796], 16); // Updated zoom
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles © Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }).addTo(map);
        L.marker([36.84408408884799, 43.073027706009796]).addTo(map)
            .bindPopup('Museum of Culture, Duhok')
            .openPopup();

        // Scroll reveal for map
        window.addEventListener('scroll', function() {
            const mapContainer = document.getElementById('map-container');
            const rect = mapContainer.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                map.invalidateSize();
            }
        });
    }

    // Lightbox functionality
    const closeLightbox = document.querySelector('.close-lightbox');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + activeImages.length) % activeImages.length;
            updateLightboxImage();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % activeImages.length;
            updateLightboxImage();
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox && lightbox.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + activeImages.length) % activeImages.length;
                updateLightboxImage();
            } else if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % activeImages.length;
                updateLightboxImage();
            } else if (e.key === 'Escape') {
                lightbox.style.display = 'none';
            }
        }

        // Secret Key Combination: Ctrl + Shift + B to toggle Admin Tools
        if (e.ctrlKey && e.shiftKey && (e.key === 'B' || e.key === 'b')) {
            const adminTools = document.getElementById('admin-tools-container');
            if (adminTools) {
                const isHidden = adminTools.style.display === 'none';
                if (isHidden) {
                    const password = prompt("Admin access required. Please enter password:");
                    if (password === "admin123") {
                        adminTools.style.display = 'block';
                    } else if (password !== null) {
                        alert("Incorrect password.");
                    }
                } else {
                    adminTools.style.display = 'none';
                }
            }
        }
    });

    if(closeLightbox) {
        closeLightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target == lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Form Protocol Check
    const notificationForm = document.querySelector('.notification-form');
    if (notificationForm) {
        // Dynamic Redirect URL for FormSubmit
        const nextInput = notificationForm.querySelector('input[name="_next"]');
        if (nextInput) {
            const baseUrl = window.location.href.substring(0, window.location.href.lastIndexOf('/'));
            nextInput.value = `${baseUrl}/thank-you.html`;
        }

        notificationForm.addEventListener('submit', function(e) {
            // Capture data for local backup
            const formData = new FormData(this);
            const submissionId = Date.now().toString();
            const visitorEntry = {
                id: submissionId,
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                date: formData.get('visit_date'),
                message: formData.get('message'),
                submittedAt: new Date().toLocaleString()
            };

            // Save to Local Storage "Database"
            const existingLogs = JSON.parse(localStorage.getItem('visitor_logs') || '[]');
            existingLogs.push(visitorEntry);
            localStorage.setItem('visitor_logs', JSON.stringify(existingLogs));
            
            // Save for QR generation on next page
            localStorage.setItem('last_visitor_entry', JSON.stringify(visitorEntry));

            if (window.location.protocol === 'file:') {
                e.preventDefault();
                alert("⚠️ Cannot submit form from local file!\n\nFor security reasons, email services like FormSubmit do not work when opening the HTML file directly.\n\nPlease use a local web server (like the 'Live Server' extension in VS Code) to test this feature.");
            }
        });
    }

    // Reusable QR rendering function
    async function renderQRCode(entry, containerId, placeholderId, downloadBtnId) {
        const container = document.getElementById(containerId);
        const placeholder = document.getElementById(placeholderId);
        const downloadBtn = document.getElementById(downloadBtnId);

        if (!container || !placeholder || !entry) return;

        container.style.display = 'block';
        const baseUrl = window.location.href.substring(0, window.location.href.lastIndexOf('/'));
        const verifyUrl = `${baseUrl}/index.html?verify=${entry.id}&vname=${encodeURIComponent(entry.name)}&vdate=${encodeURIComponent(entry.date)}`;
        const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(verifyUrl)}`;

        placeholder.innerHTML = `<img src="${qrImageUrl}" id="qr-img" alt="Visit QR Code" style="border: 5px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.1); border-radius: 10px; max-width: 200px;">`;

        if (downloadBtn) {
            // Refresh listener to prevent duplicate events
            const newBtn = downloadBtn.cloneNode(true);
            downloadBtn.parentNode.replaceChild(newBtn, downloadBtn);
            
            newBtn.addEventListener('click', async () => {
                try {
                    const response = await fetch(qrImageUrl);
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `Museum_Visit_QR_${entry.name.replace(/\s+/g, '_')}.png`;
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                    document.body.removeChild(a);
                } catch (err) {
                    alert("Failed to download. Please right-click the QR image and choose 'Save Image As'.");
                }
            });
        }
        container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // --- THANK YOU PAGE QR LOGIC ---
    const qrContainer = document.getElementById('qr-container');
    const generateBtn = document.getElementById('generate-qr-btn');
    
    if (generateBtn && qrContainer) {
        generateBtn.addEventListener('click', () => {
            const lastEntry = JSON.parse(localStorage.getItem('last_visitor_entry') || 'null');
            if (lastEntry) {
                renderQRCode(lastEntry, 'qr-container', 'qr-code', 'download-qr');
                generateBtn.style.display = 'none'; // Hide button after generating
            } else {
                alert("No recent visit details found. Please submit the form first.");
            }
        });
    }

    // Backup Download Functionality
    const downloadBtn = document.getElementById('download-logs');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            const logs = localStorage.getItem('visitor_logs'); 
            if (!logs || logs === '[]') {
                alert("No visitor notifications found in the database yet.");
                return;
            }
            const blob = new Blob([logs], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `visitor_backups_${new Date().toISOString().split('T')[0]}.txt`;
            a.click();
            URL.revokeObjectURL(url);
        });
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const answer = question.nextElementSibling;
            const icon = question.querySelector('.icon');
            
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                if (icon) {
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                }
            } else {
                answer.style.maxHeight = null;
                if (icon) {
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                }
            }
        });
    });
});