document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }
    
    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    const observerOptions = { threshold: 0.5 };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                let current = 0;
                const increment = target / 50;
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
    
    // Navbar Scroll Effect
    const navbar = document.querySelector('nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg', 'bg-white/95');
                navbar.classList.remove('bg-white');
            } else {
                navbar.classList.remove('shadow-lg', 'bg-white/95');
                navbar.classList.add('bg-white');
            }
        });
    }
    
    // Load Services on services page
    const servicesGrid = document.getElementById('servicesGrid');
    if (servicesGrid) {
        const services = [
            {icon:"fa-file-invoice-dollar", title:"GST Registration", desc:"Seamless GST registration for businesses", link:"gst-registration.html", color:"from-purple-500 to-pink-500"},
            {icon:"fa-chart-line", title:"GST Return Filing", desc:"Timely filing of all GST returns", link:"gst-return-filing.html", color:"from-blue-500 to-cyan-500"},
            {icon:"fa-calculator", title:"Income Tax Filing", desc:"Expert ITR filing services", link:"income-tax-filing.html", color:"from-green-500 to-teal-500"},
            {icon:"fa-building", title:"Company Registration", desc:"Complete business setup", link:"company-registration.html", color:"from-orange-500 to-red-500"},
            {icon:"fa-utensils", title:"FSSAI License", desc:"Food business licenses", link:"fssai.html", color:"from-yellow-500 to-amber-500"},
            {icon:"fa-chart-simple", title:"Udyam Registration", desc:"MSME registration benefits", link:"udyam.html", color:"from-indigo-500 to-purple-500"}
        ];
        
        servicesGrid.innerHTML = services.map(s => `
            <div class="service-card">
                <div class="w-16 h-16 bg-gradient-to-br ${s.color} rounded-2xl flex items-center justify-center mb-4">
                    <i class="fas ${s.icon} text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold mb-2">${s.title}</h3>
                <p class="text-gray-600 mb-4">${s.desc}</p>
                <a href="${s.link}" class="text-cyan-600 font-semibold hover:underline">Learn More →</a>
            </div>
        `).join('');
    }
});