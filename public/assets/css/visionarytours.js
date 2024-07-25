const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
    slides[currentSlide].style.opacity = 1;
}

function hideSlide() {
    slides[currentSlide].style.opacity = 0;
}

function nextSlide() {
    hideSlide();
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
}

// Start slideshow
showSlide();
setInterval(nextSlide, 3000); // Change slide every 3 seconds


     const sentences = [
              "Welcome to Visionary tours and travels website!",
              "Looking for abroad jobs?",
              "we've got you covered contact us today",
              "Conctact us on:0768957475",
              "Explore amazing destinations.",
              "Book your dream vacation now.",
              "Click The whatsApp button below to chat with us"
          ];
  
          let currentSentenceIndex = 0;
          let currentCharIndex = 0;
          const speed = 50; // Typing speed in milliseconds
  
          function typeWriter() {
              const sentence = sentences[currentSentenceIndex];
              if (currentCharIndex < sentence.length) {
                  document.getElementById("text").innerHTML += sentence.charAt(currentCharIndex);
                  currentCharIndex++;
                  setTimeout(typeWriter, speed);
              } else {
                  setTimeout(deleteText, 1000); // Wait for 1 second before deleting
              }
          }
  
          function deleteText() {
              if (currentCharIndex > 0) {
                  const sentence = sentences[currentSentenceIndex];
                  document.getElementById("text").innerHTML = sentence.substring(0, currentCharIndex - 1);
                  currentCharIndex--;
                  setTimeout(deleteText, speed);
              } else {
                  currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
                  setTimeout(typeWriter, speed);
              }
          }
  
          // Start the typing effect
          typeWriter();

          

          