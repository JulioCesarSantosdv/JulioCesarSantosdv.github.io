/*!
    * Start Bootstrap - Resume v6.0.0 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict


function toggleLanguage() {
    const elementsEn = document.querySelectorAll('[data-lang="en"]');
    const elementsPt = document.querySelectorAll('[data-lang="pt"]');
    const currentLang = document.documentElement.lang;

    if (currentLang === "en") {
        // Switch to Portuguese
        document.documentElement.lang = "pt";
        elementsEn.forEach(element => element.style.display = "none");
        elementsPt.forEach(element => element.style.display = "block");
        document.getElementById('toggleLang').innerText = "Switch to English";
    } else {
        // Switch to English
        document.documentElement.lang = "en";
        elementsEn.forEach(element => element.style.display = "block");
        elementsPt.forEach(element => element.style.display = "none");
        document.getElementById('toggleLang').innerText = "Switch to Portuguese";
    }
}

// Initialize the page with English content
document.addEventListener('DOMContentLoaded', () => {
    const elementsPt = document.querySelectorAll('[data-lang="pt"]');
    elementsPt.forEach(element => element.style.display = "none");
});

