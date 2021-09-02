const targetElements = document.querySelectorAll(".animation-target");
window.addEventListener("scroll", () => {
    for(let i = 0; i < targetElements.length; i++) {
        const getTargetDistance = targetElements[i].getBoundingClientRect().top + targetElements[i].clientHeight * .5;
        if(window.innerHeight > getTargetDistance) {
            targetElements[i].classList.add("active");
        }
    }
});

const leftTargetElements = document.querySelectorAll(".animation-target-left");
window.addEventListener("scroll", () => {
    for(let i = 0; i < leftTargetElements.length; i++) {
        const leftTargetDistance = leftTargetElements[i].getBoundingClientRect().top + leftTargetElements[i].clientHeight * .5;
        if(window.innerHeight > leftTargetDistance) {
            leftTargetElements[i].classList.add("active");
        }
    }
});

const rightTargetElements = document.querySelectorAll(".animation-target-right");
window.addEventListener("scroll", () => {
    for(let i = 0; i < rightTargetElements.length; i++) {
        const rightTargetDistance = rightTargetElements[i].getBoundingClientRect().top + rightTargetElements[i].clientHeight * .5;
        if(window.innerHeight > rightTargetDistance) {
            rightTargetElements[i].classList.add("active");
        }
    }
});

const delay = document.querySelectorAll(".animation-delay");
window.addEventListener("scroll", () => {
    for(let i = 0; i < delay.length; i++) {
        const delaytextDistance = delay[i].getBoundingClientRect().top + delay[i].clientHeight * .5;
        if(window.innerHeight > delaytextDistance) {
            delay[i].classList.add("active");
        }
    }
});

const delayElements = document.querySelectorAll(".animation-target-delay");
window.addEventListener("scroll", () => {
    for(let i = 0; i < delayElements.length; i++) {
        const delayDistance = delayElements[i].getBoundingClientRect().top + delayElements[i].clientHeight * .5;
        if(window.innerHeight > delayDistance) {
            delayElements[i].classList.add("active");
        }
    }
});