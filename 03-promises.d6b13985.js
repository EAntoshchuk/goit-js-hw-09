const e={startBtn:document.querySelector(".js-startBtn"),winnerField:document.querySelector("js-winner"),progressField:document.querySelector(".js-progress"),tableBody:document.querySelector(".js-results-table > tbody")};e.startBtn.addEventListener("click",(function(){t+=1;const e=horses.map(r);n(""),o("заїзд почався"),s=e,Promise.race(s).then((({horse:e,time:o})=>{n(`Переміг ${e}, прийшовши за ${o}`),updateTableResults({horse:e,time:o,raceCounter:t})})),function(e){Promise.all(e).then((()=>{o("заїзд завершено")}))}(e);var s}));let t=0;function n(t){e.winnerField.textContent=t}function o(t){e.progressField.textContent=t}function r(e){return new Promise(((t,n)=>{const o=getRandomTime(2e3,3500);setTimeout((()=>{t({horse:e,time:o})}),o)}))}Promise.all(promises).then((()=>{console.log("promises")})),r("Mango").then((e=>console.log(e)));
//# sourceMappingURL=03-promises.d6b13985.js.map
