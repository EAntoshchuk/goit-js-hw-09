import Notiflix from 'notiflix';

const refs = {
  createPromiseBtn: document.querySelector('button[type="submit"]'),
  delayEl: document.querySelector('input[name="delay"]'),
  stepEl: document.querySelector('input[name="step"]'),
  amountEl: document.querySelector('input[name="amount"]'),
};

refs.createPromiseBtn.addEventListener('click', onClick);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        // Reject
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

function onClick(e) {
  e.preventDefault();
  let delay = Number(refs.delayEl.value);
  let step = Number(refs.stepEl.value);
  let amount = Number(refs.amountEl.value);
  console.log(delay);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(resolve => Notiflix.Notify.success(resolve))
      .catch(reject => Notiflix.Notify.failure(reject));
    delay += step;
  }
}
