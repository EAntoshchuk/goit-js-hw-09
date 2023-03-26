import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockFace: document.querySelector('.js-clockface'),
};
const timer = {
  intervalId: null,
  isAcvtive: false,
  start() {
    if (this.isAcvtive) {
      return;
    }

    const startTime = Date.now();

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const timeComponents = getTimeComponents(deltaTime);
      updateClockFace(timeComponents);
      //   console.log(currentTime - startTime);
      console.log(`${hours}:${mins}:${secs}`);
      console.log(
        `${pad(new Date(deltaTime).getUTCHours())}:${pad(
          new Date(deltaTime).getMinutes()
        )}:${pad(new Date(deltaTime).getSeconds())}`
      );
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.isAcvtive = false;
  },
};

refs.startBtn.addEventListener('click', () => {
  timer.start();
});

refs.stopBtn.addEventListener('click', () => {
  timer.stop();
});

function updateClockFace({ hours, mins, secs }) {
  refs.clockFace.textContent = `${hours}:${mins}:${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return { hours, mins, secs };
}
