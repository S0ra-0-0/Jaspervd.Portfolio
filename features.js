// Back to Top Button
document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("back-to-top");

  const toggleBackToTop = () => {
    if (window.scrollY > 100) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  };

  window.addEventListener("scroll", toggleBackToTop);
  toggleBackToTop(); // Check on page load

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
