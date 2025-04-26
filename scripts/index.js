document.addEventListener("DOMContentLoaded", function () {
    const switcheroo = document.getElementsByClassName("section-1")[0];

    const backgrounds = [
        'url(https://pentaionic.github.io/educational-fieldtrip-feedback-/assets/images/screensaver1.webp) no-repeat center center fixed',
        'url(https://pentaionic.github.io/educational-fieldtrip-feedback-/assets/images/screensaver2.webp) no-repeat center center fixed',
        'url(https://pentaionic.github.io/educational-fieldtrip-feedback-/assets/images/screensaver3.webp) no-repeat center center fixed',
        'url(https://pentaionic.github.io/educational-fieldtrip-feedback-/assets/images/screensaver4.webp) no-repeat center center fixed'
    ];

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
 
    async function rotateElements() {
        while (true) {
            for (let i = 0; i < backgrounds.length; i++) {
                switcheroo.style.background = backgrounds[i];
                await delay(60000);
            }
        }
    }

    rotateElements();
});
