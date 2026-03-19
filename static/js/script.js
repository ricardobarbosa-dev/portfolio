// timeline
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};
 
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// nav active
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// whatsapp message auto
const whatsappButton = document.getElementById("whatsappButton");
const whatsappContainer = document.getElementById("whatsappContainer");
const numero = "5511999999999";
const mensagem = "Olá! Tudo bem? Encontrei seu site e gostaria de solicitar um orçamento para desenvolvimento de um site.";
const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
whatsappButton.href = url;
setTimeout(() => {
    whatsappContainer.classList.add("show");
}, 3000);