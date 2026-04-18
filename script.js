/* =========================
   SCROLL PROGRESS BAR
========================= */
const progressBar = document.getElementById("progress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;

  progressBar.style.width = progress + "%";
});


/* =========================
   REVEAL ON SCROLL (PRO)
========================= */
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target); // performance boost
    }
  });
},{
  threshold: 0.15
});

revealElements.forEach(el => revealObserver.observe(el));


/* =========================
   NAV ACTIVE LINK
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if(window.scrollY >= sectionTop){
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if(link.getAttribute("href") === "#" + current){
      link.classList.add("active");
    }
  });
});


/* =========================
   SMOOTH SCROLL (CUSTOM)
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


/* =========================
   FORM (SAFE DEMO)
========================= */
const form = document.getElementById("form");

if(form){
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // feedback utente
    form.reset();

    alert("Messaggio inviato ✅ (demo)");
  });
}