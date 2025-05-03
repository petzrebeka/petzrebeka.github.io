// Navigáció megjelenítése/elrejtése
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-80px';
    }
});

// Mobilmenü kezelése
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const desktopNav = document.querySelector('.desktop-nav');
    const overlay = document.querySelector('.mobile-nav-overlay');
    const body = document.body;

    if (mobileMenuBtn && desktopNav && overlay) {
        const toggleMenu = (e) => {
            e.stopPropagation();
            desktopNav.classList.toggle('active');
            overlay.classList.toggle('active');
            body.classList.toggle('menu-open');
        };

        // Menü nyitása
        mobileMenuBtn.addEventListener('click', toggleMenu);

        // Menü bezárása overlay-rel
        overlay.addEventListener('click', toggleMenu);

        // Menü bezárása kattintáskor kívülre
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.desktop-nav') &&
                !e.target.matches('.mobile-menu-btn') &&
                desktopNav.classList.contains('active')) {
                toggleMenu(e);
            }
        });

        // Resize kezelés
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                desktopNav.classList.remove('active');
                overlay.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    }
});

// Sima görgetés a navigációs linkekre (marad változatlan)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});
// Állatkártyák animációja
document.querySelectorAll('.animal-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.03)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Űrlap ellenőrzése
document.getElementById('adoption-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const animal = document.getElementById('animal').value;

    if (name && email && animal) {
        alert(`Köszönjük, ${name}! Hamarosan felvesszük Önnel a kapcsolatot a(z) ${animal} örökbefogadásával kapcsolatban.`);
        this.reset();
    }
});


// Számlaszám másolás
document.getElementById('copyBtn').addEventListener('click', function () {
    const accountNumber = "11737038-21451315";

    navigator.clipboard.writeText(accountNumber).then(() => {
        // Sikeres másolás visszajelzés
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="far fa-check-circle"></i> Sikeresen másolva!';
        this.classList.add('copied');

        // Visszaállítás 2 másodperc után
        setTimeout(() => {
            this.innerHTML = originalText;
            this.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Sikertelen másolás:', err);
        alert('Hiba történt a másolás közben. Kézzel másold ki a számlaszámot.');
    });
});



