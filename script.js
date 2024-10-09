document.addEventListener('DOMContentLoaded', function() {
    const words = document.querySelectorAll('.word');
    
    words.forEach(word => {
      let x = Math.random() * window.innerWidth;
      let y = Math.random() * window.innerHeight;
      let dx = (Math.random() - 0.5) * 4; // Random speed in x direction
      let dy = (Math.random() - 0.5) * 4; // Random speed in y direction
  
      word.style.left = `${x}px`;
      word.style.top = `${y}px`;
  
      function moveWord() {
        x += dx;
        y += dy;
  
        // Bounce when reaching edges
        if (x + word.offsetWidth >= window.innerWidth || x <= 0) {
          dx = -dx;
        }
        if (y + word.offsetHeight >= window.innerHeight || y <= 0) {
          dy = -dy;
        }
  
        word.style.left = `${x}px`;
        word.style.top = `${y}px`;
  
        requestAnimationFrame(moveWord);
      }
  
      moveWord();
    });
  });
  