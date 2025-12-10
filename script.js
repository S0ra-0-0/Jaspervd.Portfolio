document.addEventListener("DOMContentLoaded", () => {
  // Text content to be typed out
  const hiText = "Hi!";
  const nameText = "My name is Jasper van Dongen";
  const descText = "I make games and pixel art.";
  const linkText = 'Check out some of my <a href="projects.html" class="nav-link link"> projects</a> !';

  function typeWriter(element, text, speed) {
    let i = 0;
    const cursor = document.createElement('span');
    cursor.classList.add('cursor');
    element.appendChild(cursor); // Add the cursor

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);  // Append text instead of replacing
        i++;
        setTimeout(type, speed);
      } else {
        cursor.style.display = 'none'; // Hide the cursor once typing is done
      }
    }

    type();
  }

  // Start the typewriter effect
  setTimeout(() => {
    typeWriter(document.getElementById('typewriter-hi'), hiText, 50); // Faster typing for "Hi!"
  }, 500); // Delay before showing "Hi!"

  setTimeout(() => {
    typeWriter(document.getElementById('typewriter-name'), nameText, 50); // Faster typing for "My name is CodeVogel."
  }, 1000); // Delay before showing the next line

  setTimeout(() => {
    typeWriter(document.getElementById('typewriter-desc'), descText, 50); // Faster typing for "I make games and build software."
  }, 3000); // Delay before showing the next line

  setTimeout(() => {
    // Handle typing the link text properly
    const linkContainer = document.getElementById('typewriter-link');
    const textBeforeLink = linkText.slice(0, linkText.indexOf('<a')); // "Check out some of my"
    const linkHTML = linkText.slice(linkText.indexOf('<a')); // "<a href=...>Projects</a>!"
    
    // First type the text before the link
    typeWriter(linkContainer, textBeforeLink, 50);

    // Once the first part finishes typing, insert the link HTML
    setTimeout(() => {
      linkContainer.innerHTML += linkHTML;
    }, textBeforeLink.length * 50); // Adjust this timeout to match typing speed
  }, 5000); // Delay before showing the last line
});
