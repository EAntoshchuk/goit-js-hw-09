function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    resolve('promise successfully commited');
  } else {
    // Reject
    reject('promise failed to commit');
  }
}

const refs = {
  startBtn: document.querySelector('.js-startBtn'),
  winnerField: document.querySelector('js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-results-table > tbody'),
};

refs.startBtn.addEventListener('click', onStart);

let raceCounter = 0;

function onStart() {
  raceCounter += 1;
  const promises = horses.map(run);

  updateWinnerField('');
  updateProgressField('заїзд почався');
  determineWinner(promises);
  waitForAll(promises);
}

function determineWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {
    updateWinnerField(`Переміг ${horse}, прийшовши за ${time}`);
    updateTableResults({ horse, time, raceCounter });
  });
}

function waitForAll(horsesP) {
  Promise.all(horsesP).then(() => {
    updateProgressField(`заїзд завершено`);
  });
}

function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}

function updateProgressField(message) {
  refs.progressField.textContent = message;
}

// function updateTableResults({ horse, time, raceCounter }) {
//   const tr = (
//     <tr>
//       <td>8</td>
//     </tr>
//   );
//   refs.tableBody.insertAdjacentHTML('beforeend', tr);
// }

function run(horse) {
  return new Promise((resolve, reject) => {
    const time = getRandomTime(2000, 3500);
    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

Promise.all(promises).then(() => {
  console.log('promises');
});

run('Mango').then(x => console.log(x));

const makeOrder = dish => {
  const DELAY = 1000;

  return new createPromise((resolve, reject) => {
    const passed = Math.random() > 0.5;

    setTimeout(() => {
      if (passed) {
        resolve('ват ваш заказ:${dish}');
      }
      reject('нет продуктов');
    }, DELAY);
  });
};
//   }
//     .then(onFulfilled)
//     .then(x => {
//       console.log(x);
//     })
//     .then(y => {
//       console.log(y);
//     })
//     .catch(error => console.log(error))
//     .finally(() => console.log('committed anyway'));

//  }
