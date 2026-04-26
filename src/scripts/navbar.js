class NavbarManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupActiveLinks();
    }
    
    setupActiveLinks() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const links = document.querySelectorAll('.nav-link');
        
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage) {
                link.classList.add('text-cyan-700', 'font-bold');
                link.classList.remove('text-gray-600');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new NavbarManager();
});