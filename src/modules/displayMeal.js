// script.js
import API from './api.js';
import getLikes from './getLikes.js';
import postLike from './postlikes.js';
import { openPopup, closePopup, addPopupOutsideClickListener } from './popup/popup.js';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const api = new API();

const displayMeal = async () => {
  const mealList = document.querySelector('.meals-lists');
  const mealCount = document.querySelector('.meal-count');

  try {
    const apiCall = await fetch(url);
    const response = await apiCall.json();
    const data = response.meals;
    const span = document.createElement('span');
    span.innerHTML = ` (${data.length})`;
    mealCount.appendChild(span);

    data.forEach((meal) => {
      const li = document.createElement('li');
      li.classList.add('meal-list');
      li.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <div class="meal-card-content">
          <div class="card-title">
          <h3>${meal.strMeal}</h3> <div class='icon-text'><span class="material-symbols-outlined favorite">favorite</span> <span class="icon-like"></span></div>
          </div>
          <button class="comment">Comments</button>
        </div>
      `;

      const commentBtn = li.querySelector('.comment');
      commentBtn.addEventListener('click', () => openPopup(meal));

      const updateLike = async () => {
        await postLike(meal.idMeal);
        const updated = await getLikes(meal.idMeal);
        li.querySelector('.icon-like').textContent = `${updated} likes`;
      };
      li.querySelector('.favorite').addEventListener('click', updateLike);

      getLikes(meal.idMeal).then((value) => {
        li.querySelector('.icon-like').textContent = `${value} likes`;
      });

      mealList.appendChild(li);
    });
  } catch (error) {
    console.error(`Error fetching dish: ${error}`);
  }
};

document.addEventListener('DOMContentLoaded', displayMeal);

// Close the popup when the close button is clicked
document.getElementById('close').addEventListener('click', () => {
  closePopup();
});

// Close the popup when clicking outside the popup
addPopupOutsideClickListener();
document.addEventListener('DOMContentLoaded', displayMeal);



export default displayMeal;
