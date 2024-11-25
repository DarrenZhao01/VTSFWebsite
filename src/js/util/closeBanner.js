function closeBanner() {
    const banner = document.getElementById('spring-banner');
    if (banner) {
        banner.style.display = 'none';
    }
}

window.closeBanner = closeBanner;