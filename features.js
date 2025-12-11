// Back to Top Button
document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("back-to-top");
  
  const toggleBackToTop = () => {
    if (window.scrollY > 100) {
      backToTopBtn.style.display = "flex";
    } else {
      backToTopBtn.style.display = "none";
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

  // Button Ripple Effect
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn") || e.target.classList.contains("back-to-top")) {
      const btn = e.target.closest(".btn") || e.target.closest(".back-to-top");
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");
      ripple.style.width = ripple.style.height = "20px";
      ripple.style.left = (e.clientX - rect.left - 10) + "px";
      ripple.style.top = (e.clientY - rect.top - 10) + "px";
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    }
  });

  // Animated Counters on Scroll
  const counters = document.querySelectorAll(".counter");
  const speed = 200; // milliseconds to count

  const countUp = (counter) => {
    const target = parseInt(counter.getAttribute("data-target"));
    const increment = target / speed;
    let current = 0;

    const updateCount = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current) + "+";
        setTimeout(updateCount, 10);
      } else {
        counter.textContent = target + "+";
      }
    };

    updateCount();
  };

  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        if (!counter.hasAttribute("data-counted")) {
          countUp(counter);
          counter.setAttribute("data-counted", "true");
        }
        observer.unobserve(counter);
      }
    });
  }, observerOptions);

  counters.forEach((counter) => observer.observe(counter));
});
