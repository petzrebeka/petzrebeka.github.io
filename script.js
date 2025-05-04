// Navigáció megjelenítése/elrejtése
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-80px';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');

    hamburger.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
    });

    // Menü bezárása kattintásra külső területen
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.hamburger') && !event.target.closest('.mobile-nav')) {
            mobileNav.classList.remove('active');
        }
    });

    // Menü bezárása linkre kattintáskor
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
    });
});

// Sima görgetés a navigációs linkekre 
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



