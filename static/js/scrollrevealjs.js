// scroll
const sr = ScrollReveal({
    distance: '60px',
    duration: 900,
    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    reset: false
});

sr.reveal('#home', {
    origin: 'top',
    delay: 100
});

sr.reveal('#about', {
    origin: 'left',
    delay: 100
});
sr.reveal('.about-txt', {
    origin: 'bottom',
    delay: 200
});
sr.reveal('.work-txt', {
    origin: 'left',
    delay: 200
});

sr.reveal('.learn-txt', {
    origin: 'right',
    delay: 200
});

sr.reveal('#timeline', {
    origin: 'left',
    delay: 250
});

sr.reveal('#projects', {
    origin: 'left',
    delay: 300
});

sr.reveal('#knowledge', {
    origin: 'left',
    delay: 400
});

sr.reveal('#contact', {
    origin: 'left',
    delay: 500
});

sr.reveal('#footer', {
    origin: 'left',
    delay: 600
});

// sr.reveal("#whatsapp", {
//     origin: 'left',
//     delay: 700
// })