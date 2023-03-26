import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  datetimePicker: document.querySelector('#datetime-picker'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minsEl: document.querySelector('[data-minutes]'),
  secsEl: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(refs.datetimePicker, options);

refs.startBtn.addEventListener('click', () => {
  const selectedDate = refs.datetimePicker.value;
  const currentDate = new Date();
  const endDate = new Date(selectedDate);
  if (endDate < currentDate) {
    window.alert('Please choose a date in the future');
    return;
  }
  const deltaDate = endDate - currentDate;
  const timeTillDate = convertMs(deltaDate);
  refs.daysEl.textContent = addLeadingZero(timeTillDate.days);
  refs.hoursEl.textContent = addLeadingZero(timeTillDate.hours);
  refs.minsEl.textContent = addLeadingZero(timeTillDate.minutes);
  refs.secsEl.textContent = addLeadingZero(timeTillDate.seconds);
  const intervalId = setInterval(() => {
    disableBtn();
    const timeLeft = endDate - new Date();
    const updatedTimeTillDate = convertMs(timeLeft);
    refs.daysEl.textContent = addLeadingZero(updatedTimeTillDate.days);
    refs.hoursEl.textContent = addLeadingZero(updatedTimeTillDate.hours);
    refs.minsEl.textContent = addLeadingZero(updatedTimeTillDate.minutes);
    refs.secsEl.textContent = addLeadingZero(updatedTimeTillDate.seconds);
    if (timeLeft < 1) {
      clearInterval(intervalId);
    }
  }, 1000);
});

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function disableBtn() {
  refs.startBtn.disabled = true;
}

// function getTimeComponents(time) {
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//   return { hours, mins, secs };
// }
