// SCROLL PROGRESS BAR
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  document.getElementById("progress").style.width = (scroll/height)*100 + "%";
});

// REVEAL ON SCROLL
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }
  });
});

reveals.forEach(el => observer.observe(el));

// FORM (no backend → demo safe)
document.getElementById("form").addEventListener("submit", e=>{
  e.preventDefault();
  alert("Messaggio inviato (demo)");
});