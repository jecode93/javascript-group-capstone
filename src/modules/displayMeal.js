// script.js
import getLikes from './getLikes.js';
import postLike from './postlikes.js';
import { addPopupOutsideClickListener } from './popup/popup.js';
import showPopup from './popup/newPopup.js';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const displayMeal = async () => {
  const mealList = document.querySelector('.meals-lists');
  const mealCount = document.querySelector('.meal-count');

  try {
    const apiCall = await fetch(url);
    const response = await apiCall.json();
    const data = response.meals;

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

      // const commentBtn = li.querySelector('.comment');
      // commentBtn.addEventListener('click', () => openPopup(meal));

      const updateLike = async () => {
        await postLike(meal.idMeal);
        const updated = await getLikes(meal.idMeal);
        li.querySelector('.icon-like').textContent = `${updated} likes`;
      };
      li.querySelector('.favorite').addEventListener('click', updateLike);

      getLikes(meal.idMeal).then((value) => {
        li.querySelector('.icon-like').textContent = `${value} likes`;
      });

      const btnComment = li.querySelector('.comment');
      const popup = document.getElementById('popup');
      btnComment.addEventListener('click', () => {
        popup.style.display = 'block';
        showPopup(meal.idMeal);
      });

      mealList.appendChild(li);
    });
  } catch (error) {
    console.error(`Error fetching meal: ${error}`);
  }
};

// Close the popup when the close button is clicked

// Close the popup when clicking outside the popup
addPopupOutsideClickListener();

export default displayMeal;
