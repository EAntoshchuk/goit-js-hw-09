function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var l=r("7Y9D8");const u={createPromiseBtn:document.querySelector('button[type="submit"]'),delayEl:document.querySelector('input[name="delay"]'),stepEl:document.querySelector('input[name="step"]'),amountEl:document.querySelector('input[name="amount"]')};function a(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n(`✅ Fulfilled promise ${e} in ${t}ms`):o(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}u.createPromiseBtn.addEventListener("click",(function(t){t.preventDefault(),delay=Number(u.delayEl.value),step=Number(u.stepEl.value),amount=Number(u.amountEl.value),console.log(delay);for(let t=1;t<=amount;t+=1)a(t,delay).then((t=>e(l).Notify.success(t))).catch((t=>e(l).Notify.failure(t))),delay+=step}));
//# sourceMappingURL=03-promises.455ac617.js.map
