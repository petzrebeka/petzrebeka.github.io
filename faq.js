// FAQ működés
(function () {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.closest('.faq-item');
            item.classList.toggle('active');

            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) otherItem.classList.remove('active');
            });
        });
    });
})();

// Modal kezelés
(function () {
    const modal = document.getElementById("contactModal");
    const btn = document.querySelector(".cta-btn");
    const span = document.querySelector(".close");

    if (btn && modal && span) {
        // Megnyitás
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            modal.style.display = "block";
        });

        // Bezárás
        span.addEventListener("click", () => modal.style.display = "none");
        window.addEventListener("click", (e) => {
            if (e.target === modal) modal.style.display = "none";
        });

        // Űrlap kezelés
        document.getElementById("contactForm").addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Köszönjük üzenetét! Hamarosan válaszolunk.");
            this.reset();
            modal.style.display = "none";
        });
    }
})();

// Aktív menüpont
(function () {
    const currentPage = window.location.pathname.split('/').pop();
    const faqLink = document.querySelector('a[href*="faq"]');
    if (faqLink && (currentPage === 'faq.html' || currentPage === '')) {
        faqLink.style.fontWeight = 'bold';
    }
})();
