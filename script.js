//your JS code here. If required.
const circles = document.querySelectorAll(".circle");
const lines = document.querySelectorAll(".line");

const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");
let currActive = 1;

function nextClick() {
  currActive++;
  if (currActive > circles.length) {
    currActive = circles.length;
  }
  updateUI();
}
function prevClick() {
  currActive--;
  if (currActive < 1) {
    currActive = 1;
  }
  updateUI();
}

function updateUI() {
  circles.forEach((circle, idx) => {
    if (idx < currActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  lines.forEach((line, idx) => {
    if (idx < currActive - 1) {
      line.classList.add("active");
    } else {
      line.classList.remove("active");
    }
  });
  prevButton.disabled = currActive === 1;
  nextButton.disabled = currActive == circles.length;
}
updateUI();
