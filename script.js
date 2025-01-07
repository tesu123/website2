// home part
const textElement = document.getElementById('dynamic-text');
      const phrases = ["Welcome to my portfolio.", "I'm a Web Developer.", "I'm pursuing my MCA at Jadavpur University"];
      let currentPhraseIndex = 0;
      let currentText = "";
      let isErasing = false;
      let charIndex = 0;
    
      function typeEffect() {
        if (isErasing) {
          // Erase one character at a time
          currentText = phrases[currentPhraseIndex].substring(0, charIndex--);
        } else {
          // Add one character at a time
          currentText = phrases[currentPhraseIndex].substring(0, charIndex++);
        }
    
        // Update the displayed text
        textElement.textContent = currentText;
    
        if (!isErasing && charIndex === phrases[currentPhraseIndex].length) {
          // Pause after typing the whole phrase
          setTimeout(() => (isErasing = true), 1000);
        } else if (isErasing && charIndex === 0) {
          // Move to the next phrase after erasing
          isErasing = false;
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        }
    
        // Adjust typing speed
        const speed = isErasing ? 30 : 100; // Erasing is faster than typing
        setTimeout(typeEffect, speed);
      }
    
      // Start the typing effect
      typeEffect();


