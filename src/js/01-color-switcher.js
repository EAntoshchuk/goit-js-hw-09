const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

let intervalId = null;

refs.startBtn.addEventListener('click', () => {
  if (intervalId) return;
  hideBtn();
  intervalId = setInterval(changeBodyColor, 1000);
});

refs.stopBtn.addEventListener('click', () => {
  if (intervalId) {
    showBtn();
    intervalId = clearInterval(intervalId);
  }
});

function changeBodyColor() {
  refs.body.style.background = getRandomHexColor();
}

function hideBtn() {
  refs.startBtn.disabled = true;
}

function showBtn() {
  refs.startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
