# Managed By THE HYPE HOUSE
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Hype House | Premium 3D Menus</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Playfair+Display:ital,wght@0,600;1,400&display=swap" rel="stylesheet">
    
    <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
    
    <style>
        /* --- RESET & VARIABLES --- */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --bg-color: #050505;
            --text-main: #ffffff;
            --text-muted: #888888;
            --accent-gold: #d4af37;
            --accent-glow: rgba(212, 175, 55, 0.4);
            --glass-bg: rgba(255, 255, 255, 0.03);
            --glass-border: rgba(255, 255, 255, 0.08);
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-main);
            font-family: 'Montserrat', sans-serif;
            overflow-x: hidden;
            line-height: 1.6;
        }

        h1, h2, h3 {
            font-family: 'Playfair Display', serif;
            font-weight: 600;
        }

        /* --- NAVIGATION --- */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 2rem 5%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 100;
            background: linear-gradient(to bottom, rgba(5,5,5,0.9), transparent);
        }

        .logo {
            font-size: 1.5rem;
            letter-spacing: 3px;
            text-transform: uppercase;
            font-weight: 700;
            color: var(--text-main);
        }

        .btn-premium {
            padding: 0.8rem 2rem;
            background: transparent;
            color: var(--accent-gold);
            border: 1px solid var(--accent-gold);
            border-radius: 30px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            cursor: pointer;
            transition: all 0.4s ease;
        }

        .btn-premium:hover {
            background: var(--accent-gold);
            color: var(--bg-color);
            box-shadow: 0 0 20px var(--accent-glow);
        }

        /* --- MODAL (POPUP) STYLING --- */
        .modal-overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(8px);
            z-index: 999;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.4s ease;
        }

        .modal-overlay.active {
            opacity: 1;
            pointer-events: auto;
        }

        .modal-content {
            background: var(--glass-bg);
            border: 1px solid var(--accent-gold);
            padding: 3rem;
            border-radius: 20px;
            text-align: center;
            transform: translateY(50px);
            transition: transform 0.4s ease;
            box-shadow: 0 0 40px var(--accent-glow);
            position: relative;
            max-width: 600px;
            width: 90%;
        }

        .modal-overlay.active .modal-content {
            transform: translateY(0);
        }

        .close-btn {
            position: absolute;
            top: 15px; right: 20px;
            font-size: 1.5rem;
            color: var(--text-muted);
            cursor: pointer;
            transition: color 0.3s;
        }

        .close-btn:hover {
            color: var(--accent-gold);
        }

        /* The flexbox row for the two contacts */
        .contacts-row {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap; 
            gap: 1.5rem;
            margin-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 2rem;
        }

        /* Making the whole card a clickable dialer link */
        .contact-card {
            flex: 1;
            min-width: 200px;
            text-decoration: none;
            display: block;
            padding: 1.5rem;
            border: 1px solid var(--glass-border);
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.02);
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .contact-card:hover {
            background: rgba(212, 175, 55, 0.1);
            border-color: var(--accent-gold);
            box-shadow: 0 0 20px var(--accent-glow);
            transform: translateY(-5px);
        }

        .contact-role {
            font-size: 0.9rem;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 0.3rem;
        }

        .contact-name {
            color: var(--accent-gold);
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            margin-bottom: 0.5rem;
        }

        .contact-number {
            color: var(--text-main);
            font-size: 1.1rem;
            font-weight: 600;
            transition: color 0.3s;
        }

        .contact-card:hover .contact-number {
            color: var(--accent-gold);
        }

        /* --- HERO SECTION --- */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            position: relative;
            padding: 8rem 5% 4rem 5%;
        }

        .ambient-light {
            position: absolute;
            width: 60vw;
            height: 60vw;
            background: radial-gradient(circle, var(--accent-glow) 0%, transparent 60%);
            top: 30%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: -1;
            filter: blur(80px);
            animation: pulseGlow 6s infinite alternate;
        }

        @keyframes pulseGlow {
            0% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.1); }
        }

        .hero h1 {
            font-size: clamp(2.5rem, 5vw, 5rem);
            margin-bottom: 1rem;
            background: linear-gradient(to right, #fff, var(--accent-gold));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero p {
            font-size: 1.1rem;
            color: var(--text-muted);
            max-width: 600px;
            margin-bottom: 3rem;
        }

        /* --- AR CARD STYLING --- */
        .ar-card {
            width: 100%;
            max-width: 350px;
            height: 450px;
            background: var(--glass-bg);
            border: 1px solid var(--glass-border);
            border-radius: 20px;
            backdrop-filter: blur(10px);
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            box-shadow: 0 15px 35px rgba(0,0,0,0.5);
            padding: 2rem;
            transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
            position: relative;
        }

        .menu-grid .ar-card {
            cursor: pointer;
        }

        .menu-grid .ar-card:hover {
            transform: translateY(-10px);
            border-color: var(--accent-gold);
            box-shadow: 0 20px 40px rgba(212, 175, 55, 0.15);
        }

        .ar-card h3 {
            font-size: 1.5rem;
            letter-spacing: 2px;
            margin-top: 1rem;
            z-index: 2;
        }

        .ar-card p.hint {
            color: var(--accent-gold);
            font-size: 0.8rem;
            margin-top: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            z-index: 2;
        }

        model-viewer {
            width: 100%;
            height: 300px;
            position: absolute;
            top: 10px;
            background-color: transparent;
            --poster-color: transparent;
            pointer-events: none; 
        }

        .hero model-viewer {
            pointer-events: auto;
        }

        /* --- FULL MENU GRID SECTION --- */
        .menu-section {
            padding: 5rem 5%;
            position: relative;
            z-index: 10;
        }

        .section-title {
            text-align: center;
            font-size: 2.5rem;
            color: #fff;
            margin-bottom: 4rem;
        }

        .section-title span {
            color: var(--accent-gold);
        }

        .menu-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 3rem;
            max-width: 1200px;
            margin: 0 auto;
            justify-items: center;
        }

    </style>
</head>
<body>

    <div class="modal-overlay" id="demo-modal">
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2 style="color: var(--accent-gold);">Let's Connect</h2>
            <p style="color: var(--text-muted); margin-top: 10px;">Tap a card below to call us instantly.</p>
            
            <div class="contacts-row">
                
                <a href="tel:+7016797196" class="contact-card">
                    
                    <div class="contact-name">Dudakiya Abhi</div>
                    <div class="contact-number">+91 7016797196</div>
                </a>

                <a href="tel:+91 7878631111" class="contact-card">
                 
                    <div class="contact-name">Boricha Brijesh</div>
                    <div class="contact-number">+91 7878631111</div>
                </a>

            </div>

        </div>
    </div>

    <nav>
        <div class="logo">The Hype House</div>
        <button class="btn-premium" id="btn-book-demo">Book a Demo</button>
    </nav>

    <header class="hero">
        <div class="ambient-light"></div>
        <h1>Create Your Menu With 3D AR Menu</h1>
        <p>Experience our culinary masterpieces before you order. Drag to view every detail, or tap the icon on your phone to see it on your table.</p>
        
        <div class="ar-card" id="main-card">
            <model-viewer 
                id="main-model"
                src="https://raw.githubusercontent.com/abhidudakiya-glitch/Tea_Post/main/Pizza/Models/Pizza.glb" 
                alt="A 3D model of a dish" 
                auto-rotate 
                camera-controls 
                ar 
                shadow-intensity="1">
            </model-viewer>
            <h3 id="main-title">Woodfire Pizza</h3>
           
        </div>
    </header>

    <section class="menu-section">
        <h2 class="section-title">Our <span>AR Menu</span> Collection</h2>
        
        <div class="menu-grid">
            
            <div class="ar-card menu-item">
                <model-viewer 
                    src="https://raw.githubusercontent.com/abhidudakiya-glitch/Tea_Post/main/Sandwich/Models/Sandwich.glb" 
                    alt="A 3D model of a Sandwich" 
                    auto-rotate shadow-intensity="1">
                </model-viewer>
                <h3>Gourmet Sandwich</h3>
                
            </div>

            <div class="ar-card menu-item">
                <model-viewer 
                    src="https://raw.githubusercontent.com/abhidudakiya-glitch/Tea_Post/main/Shake/Models/Shake.glb" 
                    alt="3D Dish" 
                    auto-rotate shadow-intensity="1">
                </model-viewer>
                <h3>Signature Shake</h3>
             
            </div>

            <div class="ar-card menu-item">
                <model-viewer 
                    src="https://raw.githubusercontent.com/abhidudakiya-glitch/Tea_Post/main/Sizzler/Models/Sizzler.glb" 
                    alt="3D Dish" 
                    auto-rotate shadow-intensity="1">
                </model-viewer>
                <h3>Hot Sizzler</h3>
               
            </div>

            <div class="ar-card menu-item">
                <model-viewer 
                    src="https://raw.githubusercontent.com/abhidudakiya-glitch/Tea_Post/main/Pizza/Models/Pizza.glb" 
                    alt="3D Dish" 
                    auto-rotate shadow-intensity="1">
                </model-viewer>
                <h3>Woodfire Pizza</h3>
                
            </div>

            <div class="ar-card menu-item">
                <model-viewer 
                    src="https://raw.githubusercontent.com/abhidudakiya-glitch/Tea_Post/main/Burger/Models/Burger.glb" 
                    alt="3D Dish" 
                    auto-rotate shadow-intensity="1">
                </model-viewer>
                <h3>Classic Burger</h3>
               
            </div>
            
            <div class="ar-card menu-item">
                <model-viewer 
                src="https://raw.githubusercontent.com/abhidudakiya-glitch/Tea_Post/main/Garlic_Bread/Models/Garlic_Bread.glb" 
                alt="A 3D model of Garlic Bread" 
                auto-rotate shadow-intensity="1">
                </model-viewer>
                <h3>Garlic Bread</h3>
               
            </div>

        </div>
    </section>

    <script>
        // --- 1. MODAL (POPUP) LOGIC ---
        const modal = document.getElementById('demo-modal');
        const btnDemo = document.getElementById('btn-book-demo');
        const closeBtn = document.querySelector('.close-btn');

        // Open modal when button is clicked
        btnDemo.addEventListener('click', () => {
            modal.classList.add('active');
        });

        // Close modal when 'X' is clicked
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        // Close modal when clicking anywhere outside the box
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });

        // --- 2. 3D MENU SWAP LOGIC ---
        const mainModel = document.getElementById('main-model');
        const mainTitle = document.getElementById('main-title');
        const menuItems = document.querySelectorAll('.menu-item');

        menuItems.forEach(card => {
            card.addEventListener('click', () => {
                const clickedModelSrc = card.querySelector('model-viewer').src;
                const clickedTitleText = card.querySelector('h3').innerText;

                mainModel.src = clickedModelSrc;
                mainTitle.innerText = clickedTitleText;

                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });
    </script>

</body>
</html>
