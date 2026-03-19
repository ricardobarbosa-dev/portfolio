const sr = ScrollReveal({
    distance: '50px',
    duration: 900,
    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    reset: false,
    mobile: true
});

// animacoes de cima
sr.reveal('#home', { origin: 'top' });

// animacoes que vem da esquerda
sr.reveal('#about, .work-txt, #timeline, #projects, #knowledge, #contact, #footer', {
    origin: 'left',
    interval: 100
});

// animacoes que vem de baixo
sr.reveal('.about-txt', {
    origin: 'bottom',
    delay: 200
});

// animacoes que vem da direita
sr.reveal('.learn-txt', {
    origin: 'right'
});

// animacoes do botão do whatsapp
sr.reveal('#whatsapp', {
    origin: 'bottom',
    distance: '20px',
    delay: 700,
    scale: 0.8
});