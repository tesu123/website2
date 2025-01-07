
// Home part
const textElement = document.getElementById('dynamic-text');
const phrases = ["a Web Developer.", "pursuing my MCA at Jadavpur University"];
let currentPhraseIndex = 0;
let currentText = "I'm ";
let isErasing = false;
let charIndex = 0;

function typeEffect() {
  if (isErasing) {
    // Erase one character at a time
    currentText = "I am " + phrases[currentPhraseIndex].substring(0, charIndex--);
  } else {
    // Add one character at a time
    currentText = "I am " + phrases[currentPhraseIndex].substring(0, charIndex++);
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


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});