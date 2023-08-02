// script.js

import { openPopup, closePopup, addPopupOutsideClickListener } from './popup/popup.js';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

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
            <h3>${meal.strMeal}</h3> <span class="icon-like"><span class="material-symbols-outlined favorite">favorite </span>6 like</span>
          </div>
          <button class="comment">Comments</button>
        </div>
      `;

      const commentBtn = li.querySelector('.comment');
      commentBtn.addEventListener('click', () => openPopup(meal));

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
