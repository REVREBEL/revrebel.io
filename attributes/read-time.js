// <script src="https://cdn.jsdelivr.net/gh/REVREBEL/revrebel.io/attributes/read-time.js"></script>

/**
*
* I want this Rich Text to be the wrapper of the my content
* Add this attribute to the parent div wrapping your content
* Name : ct-readtime-element  Value: target
*
* I want to thisText or Text Span to show the time to read content.
* Name: ct-readtime-element    Value: time
*
*/


// Function to calculate the read time
function calculateReadTime() {
  // Get the target rich text element
  const targetElement = document.querySelector(
    '[ct-readtime-element="target"]',
  );

  // Get the text content of the rich text element
  const textContent = targetElement.textContent.trim();

  // Calculate the word count
  const wordCount = textContent.split(/\s+/).length;

  // Average words per minute for reading
  const wordsPerMinute = 200;

  // Calculate the read time in minutes
  const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute);

  // Update the read time element
  const timeElement = document.querySelector('[ct-readtime-element="time"]');
  if (readTimeMinutes < 1) {
    timeElement.textContent = "<1 min read";
  } else {
    timeElement.textContent = readTimeMinutes + " min read";
  }
}

// Call the calculateReadTime function when the page is loaded
window.addEventListener("DOMContentLoaded", calculateReadTime);
