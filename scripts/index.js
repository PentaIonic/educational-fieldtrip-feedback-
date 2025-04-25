document.addEventListener("DOMContentLoaded", function () {
    const switcheroo = document.getElementsByClassName("section-1")[0]; // assuming only one element
    const captionDisplay = document.getElementsByClassName("caption")[0];

    const backgrounds = [
        "url(../../../assets/images/screensaver1.webp) no-repeat center center",
        "url(../../../assets/images/screensaver2.webp) no-repeat center center",
        "url(../../../assets/images/screensaver3.webp) no-repeat center center",
        "url(../../../assets/images/screensaver4.webp) no-repeat center center"
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
