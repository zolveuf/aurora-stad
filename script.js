let lastScrollTop = 0; // Variable to store the last scroll position

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Check if the user is scrolling down
    if (currentScroll > lastScrollTop) {
        // Trigger AOS animations when scrolling down
        AOS.init({
            disable: false // Ensures AOS is enabled when scrolling down
        });
    } else {
        AOS.init({
            disable: true
        });
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});