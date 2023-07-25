$( window ).resize( function() {
  centerSplash();
});

document.addEventListener('DOMContentLoaded', function () {
  const typedElement = document.getElementById('typed');
  const words = ["I am a Frontend Developer", " Creative Coder", "Dedicated Developer", "Problem Solver"];
  let currentWordIndex = 0;
  let currentCharIndex = 0;

  function type() {
      const currentWord = words[currentWordIndex];
      const currentWordLength = currentWord.length;

      if (currentCharIndex < currentWordLength) {
          typedElement.textContent = currentWord.substr(0, currentCharIndex + 1);
          currentCharIndex++;
          setTimeout(type, 100);
      } else {
          setTimeout(backspace, 1000);
      }
  }

  function backspace() {
      const currentWord = words[currentWordIndex];
      const currentWordLength = currentWord.length;

      if (currentCharIndex >= 0) {
          typedElement.textContent = currentWord.substr(0, currentCharIndex);
          currentCharIndex--;
          setTimeout(backspace, 50);
      } else {
          currentWordIndex = (currentWordIndex + 1) % words.length;
          currentCharIndex = 0;
          setTimeout(type, 500);
      }
  }

  type();
});
