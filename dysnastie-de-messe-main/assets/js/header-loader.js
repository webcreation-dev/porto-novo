$(function () {
    // Charger le Header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                headerPlaceholder.innerHTML = data;
                
                // Ré-initialiser les menus mobiles
                if ($.fn.meanmenu) {
                    $('.main-menu-ex').meanmenu({
                        meanMenuContainer: '.mobile-nav',
                        meanScreenWidth: "991"
                    });
                }
                console.log("Header loaded");
            }
        })
        .catch(error => console.error('Error loading header:', error));

    // Charger le Footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = data;
                console.log("Footer loaded");
            }
        })
        .catch(error => console.error('Error loading footer:', error));
});
