import './css/global.css';
import itemCounter from './modules/counter.js';
import displayMeal from './modules/displayMeal.js';

const counter = async () => {
  const mealList = document.querySelectorAll('.meal-list');
  const mealCount = document.querySelector('.meal-count');
  const span = document.createElement('span');
  span.innerHTML = ` (${itemCounter(mealList)})`;
  mealCount.appendChild(span);
};

document.addEventListener('DOMContentLoaded', async () => {
  await displayMeal();
  await counter();
});