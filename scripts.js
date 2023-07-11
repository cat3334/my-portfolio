// Enables skill rows animations after reaching the desired height
function revealSkills() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  const elementTop = reveals[0].getBoundingClientRect().top;
  const sectionVisible = 120;

  if (elementTop < windowHeight - sectionVisible) {
    for (let i = 0; i < reveals.length; i++) {
      const timeoutLegth = i * 500;
      setTimeout(() => reveals[i].classList.add("active"), timeoutLegth);
    }
    window.removeEventListener("scroll", revealSkills);
  }
}

window.addEventListener("scroll", revealSkills);

// Submits the contact form
const handleSubmit = (event) => {
  event.preventDefault();
  const myForm = event.target;
  const formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then((modal.style.display = "block"))
    .then(myForm.reset())
    .catch((error) => alert(error));
};

document
  .getElementById("contact__form")
  .addEventListener("submit", handleSubmit);

// Modal displaying after successful form submission
const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementsByClassName("modal__close-btn")[0];

modalCloseBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Make header reappear after scrolling pass the hero section
const toggleHeader = () => {
  const header = document.getElementsByTagName("header")[0];
  if (window.scrollY > window.innerHeight) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

window.addEventListener("scroll", toggleHeader);

// Toggle between open/closed states of the mobile nav and change hamburger icon accordingly

const hamburger = document.getElementsByClassName("hamburger")[0];
const mobileNav = document.getElementsByClassName("mobile-nav__links")[0];
const [...mobileNavLinks] = document.getElementsByClassName("mobile-nav__link");

hamburger.onclick = function () {
  hamburger.classList.toggle("hamburger__change-icon");
  mobileNav.classList.toggle("hidden");
};

mobileNavLinks.forEach((link) => {
  link.onclick = () => {
    hamburger.classList.toggle("hamburger__change-icon");
    mobileNav.classList.toggle("hidden");
  };
});
