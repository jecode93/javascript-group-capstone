import allComments from '../getAllComments.js';
import newComment from '../newComment.js';
import { closePopup } from './popup.js';

const showPopup = async (mealId) => {
  const popupUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  try {
    const response = await fetch(popupUrl);
    const data = await response.json();

    // Check if data.meals is not null and contains at least one meal
    if (data.meals && data.meals.length > 0) {
      const meal = data.meals[0];

      // Create the popup content
      const commentPopup = document.createElement('div');
      commentPopup.innerHTML = `
      <div class='popup'>
        <span class="close" id="close">&times;</span>
          <div class='image'>
          <img id="popup-image" src="${meal.strMealThumb}" alt="${meal.strMeal}">
          </div>
          <h3 id="popup-title">${meal.strMeal}</h3>
          <ul id="foodDetail" class="food-detail">
            <li><strong>Area:</strong> ${meal.strArea} </li>
            <li><strong>Category:</strong> ${meal.strCategory} Pizaaa</li>
          </ul>
          <hr>
          <h3> Comments </h3>
          <div class='list-comments'> </div>
          <div class='add-comment'>
            <h2>Add a comment</h2>
              <div class="list-comments"></div>
              <form id="form" action="">
                <label for="name"></label>
                <input type="text" id="name" placeholder="Enter your name" required/>
                <label for="message"></label>
                <textarea id="message" name="message" rows="4" placeholder='Enter your comment' required></textarea>
                <button id="btn-comment">Comment</button>
              </form>
          </div>
      </div>
      `;
      const popupSection = document.querySelector('.popup-sec');
      popupSection.innerHTML = '';
      popupSection.appendChild(commentPopup);
      // Append the popup content to the body

      const comments = await allComments(mealId);

      const commentsDiv = commentPopup.querySelector('.list-comments');
      if (comments.length > 0) {
        comments.forEach((comment) => {
          const commentItem = document.createElement('div');
          commentItem.classList.add('comment-item');
          commentItem.innerHTML = `
          <div class='commentaire'>
            <p class="username"> <span class="date">${comment.creation_date} </span> ${comment.username}: <span class="comment-text"> ${comment.comment}</span></p>            
          </div>
          `;
          commentsDiv.appendChild(commentItem);
        });
      } else {
        const noCommentsMessage = document.createElement('p');
        noCommentsMessage.textContent = 'No comments yet.';
        commentsDiv.appendChild(noCommentsMessage);
      }

      // Add event listener to the "Comment" button
      const commentButton = commentPopup.querySelector('#btn-comment');
      commentButton.addEventListener('click', async () => {
        const usernameInput = commentPopup.querySelector('#name');
        const commentInput = commentPopup.querySelector('#message');
        const username = usernameInput.value;
        const comment = commentInput.value;

        if (username && comment) {
          await newComment(mealId, username, comment);
          // Clear the input fields after posting the comment
          usernameInput.value = '';
          commentInput.value = '';
        }
      });

      const closer = commentPopup.querySelector('.close');
      closer.addEventListener('click', () => {
        closePopup();
      });
    } else {
      console.error('No meal found for the given mealId');
    }
  } catch (error) {
    console.error('Error fetching meal details for popup', error);
  }
};

export default showPopup;