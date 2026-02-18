// ================= TYPING EFFECT =================

const text = "FullStack Developer.";
const typingElement = document.getElementById("typing-text");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

window.addEventListener("load", typeEffect);


// ================= SCROLL REVEAL =================

const reveals = document.querySelectorAll(
    ".about__container, .service__card, .project__card, .footer__container"
);

reveals.forEach((el) => el.classList.add("reveal"));

function revealOnScroll() {
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);


// ================= SCROLL TO TOP =================

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});


// ================= SMOOTH SCROLL =================

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// ================= FORM VALIDATION =================

const form = document.querySelector(".footer__form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach((input) => {
        if (input.value.trim() === "") {
            input.style.border = "2px solid red";
            valid = false;
        } else {
            input.style.border = "none";
        }
    });

    if (valid) {
        alert("Message Sent Successfully 🚀");
        form.reset();
    } else {
        alert("Please fill all fields!");
    }
});


// Resume Download Animation
const resumeBtn = document.querySelectorAll(".resume-btn");

resumeBtn.forEach(btn => {
    btn.addEventListener("click", function () {
        btn.innerHTML = "Downloading...";

        setTimeout(() => {
            btn.innerHTML = "Downloaded ✓";

            setTimeout(() => {
                btn.innerHTML = "Download Resume";
            }, 2000);
        }, 1500);
    });
});
