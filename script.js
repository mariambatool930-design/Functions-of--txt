// Get the text area element
const textArea = document.getElementById("textArea");
const themeBtn = document.getElementById("themeBtn");

// Save original state of the text (for Reset)
const originalText = textArea.innerHTML;
const defaultSize = 20;
let currentSize = defaultSize;

// 1. Change text color
function setColor(color) {
  textArea.style.color = color;
}

// 2. Change font size
function changeSize(amount) {
  currentSize += amount;
  if (currentSize < 8) currentSize = 8;
  if (currentSize > 80) currentSize = 80;
  textArea.style.fontSize = currentSize + "px";
}

// 3. Change font family
function setFont(font) {
  textArea.style.fontFamily = font;
}

// 4. Text decoration (underline, overline, line-through) - toggle each one
let decorations = [];

function toggleDecoration(type) {
  const index = decorations.indexOf(type);
  if (index === -1) {
    decorations.push(type);
  } else {
    decorations.splice(index, 1);
  }
  applyDecoration();
}

function clearDecoration() {
  decorations = [];
  applyDecoration();
}

function applyDecoration() {
  textArea.style.textDecoration = decorations.length ? decorations.join(" ") : "none";
}

// 5. Bold and Italic (toggle)
function toggleBold() {
  const isBold = textArea.style.fontWeight === "bold";
  textArea.style.fontWeight = isBold ? "normal" : "bold";
}

function toggleItalic() {
  const isItalic = textArea.style.fontStyle === "italic";
  textArea.style.fontStyle = isItalic ? "normal" : "italic";
}

// 6. Text alignment
function setAlign(align) {
  textArea.style.textAlign = align;
}

// 7. Uppercase / Lowercase
function setCase(type) {
  textArea.style.textTransform = type;
}

// 8. Background color of the text area
function setBg(color) {
  textArea.style.backgroundColor = color;
}

// 9. Dark / Light mode
function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeBtn.textContent = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
}

// 10. Reset everything to the original state
function resetAll() {
  textArea.innerHTML = originalText;
  textArea.removeAttribute("style");   // removes all inline styles
  currentSize = defaultSize;
  decorations = [];
  document.body.classList.remove("dark");
  themeBtn.textContent = "Switch to Dark Mode";
}
