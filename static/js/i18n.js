async function initTranslation() {
    const response = await fetch('static/js/languages/translations.json');
    const translations = await response.json();

    const buttons = document.querySelectorAll('.lang-btn');
 
    function applyTranslation(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        buttons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        localStorage.setItem('selectedLang', lang);
    }

    const savedLang = localStorage.getItem('selectedLang');
    const browserLang = navigator.language.split('-')[0];
    const defaultLang = savedLang || (translations[browserLang] ? browserLang : 'en');

    applyTranslation(defaultLang);

    buttons.forEach(btn => {
        btn.addEventListener('click', () => applyTranslation(btn.dataset.lang));
    });
}

document.addEventListener('DOMContentLoaded', initTranslation);