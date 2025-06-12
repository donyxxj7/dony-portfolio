<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.getElementById('nav-links');
    const menuBtn = document.getElementById('menu-btn');
    const typeEffectElement = document.getElementById('typing-effect');
    const animatedElements = document.querySelectorAll('.animated-card');

    // 1. Lógica do Menu Mobile (Hambúrguer)
    function initMobileMenu() {
        if (!menuBtn || !navLinks) return;

        menuBtn.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('active');
            menuBtn.setAttribute('aria-expanded', isActive);
            menuBtn.setAttribute('aria-label', isActive ? 'Fechar menu' : 'Abrir menu');
        });

        // Fecha o menu ao clicar em um link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuBtn.setAttribute('aria-expanded', 'false');
                    menuBtn.setAttribute('aria-label', 'Abrir menu');
                }
            });
        });
    }

    // 2. Lógica de Rolagem Suave
    function initSmoothScroll() {
        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // 3. Efeito de Digitação
    function initTypeEffect() {
        if (!typeEffectElement) return;

        const text = "Dony";
        let i = 0;
        typeEffectElement.innerHTML = ""; // Limpa o texto original

        const interval = setInterval(() => {
            if (i < text.length) {
                typeEffectElement.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 150); // Velocidade da digitação em ms
    }

    // 4. Animação de Surgimento ao Rolar (Intersection Observer)
    function initScrollReveal() {
        if (animatedElements.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Para a animação acontecer só uma vez
                }
            });
        }, {
            threshold: 0.1 // A animação começa quando 10% do elemento estiver visível
        });

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }
// ... (dentro do 'DOMContentLoaded')

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    async function handleSubmit(event) {
        event.preventDefault(); // Impede o recarregamento da página
        const status = document.createElement('p');
        const data = new FormData(event.target);
        
        try {
            const response = await fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                status.textContent = "Obrigado! Sua mensagem foi enviada.";
                status.style.color = "green";
                form.reset(); // Limpa o formulário
            } else {
                const responseData = await response.json();
                if (Object.hasOwn(responseData, 'errors')) {
                    status.textContent = responseData["errors"].map(error => error["message"]).join(", ");
                } else {
                    status.textContent = "Oops! Ocorreu um problema ao enviar seu formulário.";
                }
                status.style.color = "red";
            }
        } catch (error) {
            status.textContent = "Oops! Ocorreu um problema ao enviar seu formulário.";
            status.style.color = "red";
        } finally {
            form.appendChild(status);
            setTimeout(() => {
                status.remove();
            }, 5000);
        }
    }

    form.addEventListener("submit", handleSubmit);
}

// Chame a nova função junto com as outras
initContactForm();

    // Inicializa todas as funcionalidades
    initMobileMenu();
    initSmoothScroll();
    initTypeEffect();
    initScrollReveal();
=======
document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.getElementById('nav-links');
    const menuBtn = document.getElementById('menu-btn');
    const typeEffectElement = document.getElementById('typing-effect');
    const animatedElements = document.querySelectorAll('.animated-card');

    // 1. Lógica do Menu Mobile (Hambúrguer)
    function initMobileMenu() {
        if (!menuBtn || !navLinks) return;

        menuBtn.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('active');
            menuBtn.setAttribute('aria-expanded', isActive);
            menuBtn.setAttribute('aria-label', isActive ? 'Fechar menu' : 'Abrir menu');
        });

        // Fecha o menu ao clicar em um link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuBtn.setAttribute('aria-expanded', 'false');
                    menuBtn.setAttribute('aria-label', 'Abrir menu');
                }
            });
        });
    }

    // 2. Lógica de Rolagem Suave
    function initSmoothScroll() {
        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // 3. Efeito de Digitação
    function initTypeEffect() {
        if (!typeEffectElement) return;

        const text = "Dony";
        let i = 0;
        typeEffectElement.innerHTML = ""; // Limpa o texto original

        const interval = setInterval(() => {
            if (i < text.length) {
                typeEffectElement.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 150); // Velocidade da digitação em ms
    }

    // 4. Animação de Surgimento ao Rolar (Intersection Observer)
    function initScrollReveal() {
        if (animatedElements.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Para a animação acontecer só uma vez
                }
            });
        }, {
            threshold: 0.1 // A animação começa quando 10% do elemento estiver visível
        });

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }
// ... (dentro do 'DOMContentLoaded')

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    async function handleSubmit(event) {
        event.preventDefault(); // Impede o recarregamento da página
        const status = document.createElement('p');
        const data = new FormData(event.target);
        
        try {
            const response = await fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                status.textContent = "Obrigado! Sua mensagem foi enviada.";
                status.style.color = "green";
                form.reset(); // Limpa o formulário
            } else {
                const responseData = await response.json();
                if (Object.hasOwn(responseData, 'errors')) {
                    status.textContent = responseData["errors"].map(error => error["message"]).join(", ");
                } else {
                    status.textContent = "Oops! Ocorreu um problema ao enviar seu formulário.";
                }
                status.style.color = "red";
            }
        } catch (error) {
            status.textContent = "Oops! Ocorreu um problema ao enviar seu formulário.";
            status.style.color = "red";
        } finally {
            form.appendChild(status);
            setTimeout(() => {
                status.remove();
            }, 5000);
        }
    }

    form.addEventListener("submit", handleSubmit);
}

// Chame a nova função junto com as outras
initContactForm();

    // Inicializa todas as funcionalidades
    initMobileMenu();
    initSmoothScroll();
    initTypeEffect();
    initScrollReveal();
>>>>>>> 495232feb72d026b0e490162b053127c73a310d0
});