import allComments from '../getAllComments.js';
import newComment from '../newComment.js';
import { closePopup } from './popup.js';
import commentCounter from './commentCounter.js';

const updateCommentsSection = (comments, commentsDiv) => {
  commentsDiv.innerHTML = ''; // Clear the container before adding updated comments
  if (comments.length > 0) {
    comments.forEach((comment) => {
      const commentItem = document.createElement('div');
      commentItem.classList.add('comment-item');
      commentItem.innerHTML = `
        <div class='commentaire'>
          <p class="username">
            <span class="date">${comment.creation_date}</span>
            ${comment.username}: <span class="comment-text">${comment.comment}</span>
          </p>
        </div>
      `;
      commentsDiv.appendChild(commentItem);
    });
  } else {
    const noCommentsMessage = document.createElement('p');
    noCommentsMessage.textContent = 'No comments yet.';
    commentsDiv.appendChild(noCommentsMessage);
  }
};

const showPopup = async (mealId) => {
  const blurr = document.querySelector('#overlay');
  blurr.classList.add('overlay');
  const popupUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  try {
    const response = await fetch(popupUrl);
    const data = await response.json();
    const comments = await allComments(mealId);
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
            <li><strong>Category:</strong> ${meal.strCategory} Pizza</li>
          </ul>
          <hr>
          <h3 id ="cmt"> Comments <span id="comments-count">(${commentCounter(comments)})</span> </h3>
          <div class='list-comments'></div>
          <div class='add-comment'>
            <h2>Add a comment</h2>
            <form id="form" action="">
              <label for="name">Name:</label>
              <input type="text" id="name" placeholder="Enter your name" required/>
              <label for="message">Comment:</label>
              <textarea id="message" name="message" rows="4" placeholder='Enter your comment' required></textarea>
              <button type='button' id="btn-comment">Comment</button>
            </form>
          </div>
        </div>
      `;

      const popupSection = document.querySelector('.popup-sec');
      popupSection.innerHTML = '';
      popupSection.appendChild(commentPopup);

      const commentsDiv = commentPopup.querySelector('.list-comments');
      commentsDiv.innerHTML = ''; // Clear the container before adding updated comments

      // Display initial comments
      updateCommentsSection(comments, commentsDiv);

      // Function to update comment count
      const updateCommentCount = async (count) => {
        const commentsCountElement = commentPopup.querySelector('#comments-count');
        commentsCountElement.textContent = count;
      };

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

          // Update comment count after a new comment is posted
          const updatedCommentsCount = await allComments(mealId);
          updateCommentCount(updatedCommentsCount.length);

          // Update comments section with the new comment
          const updatedComments = await allComments(mealId);
          updateCommentsSection(updatedComments, commentsDiv);
        }
      });

      const closer = commentPopup.querySelector('.close');
      closer.addEventListener('click', () => {
        const blurr = document.querySelector('#overlay');
        blurr.classList.remove('overlay');
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
