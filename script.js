document.addEventListener('DOMContentLoaded', function() {
    // Safe AOS init (runs only if AOS is available)
    if (window.AOS && typeof window.AOS.init === 'function') {
        window.AOS.init();
    }

    // Mobile menu controls
    var navLinks = document.getElementById('navLinks');
    window.showMenu = function() {
        if (!navLinks) return;
        navLinks.style.right = '0';
        document.body.classList.add('no-scroll');
    };
    window.hideMenu = function() {
        if (!navLinks) return;
        navLinks.style.right = '-200px';
        document.body.classList.remove('no-scroll');
    };

    // Dropdown toggle (class-based; CSS controls visibility)
    var dropdownToggle = document.getElementById('dropdown-toggle');
    var dropdown = document.querySelector('.dropdown');
    if (dropdownToggle && dropdown) {
        dropdownToggle.addEventListener('click', function(event) {
            event.preventDefault();
            dropdown.classList.toggle('active');
        });
    }
});
