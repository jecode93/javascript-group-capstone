

import API from './api.js';
import popup from './popup/popup.js';

const api = new API();

export default async () => {
  

  // Items counting process
  

  // Like button event listener
  const likes = document.querySelectorAll('.like-btn');
  likes.forEach((like, index) => {
    like.addEventListener('click', async () => {
      await postLike(index, api);
      await displayLikes(api);
    });
  });

  // Comments button event listener
  const comments = document.querySelectorAll('.comment');
  comments.forEach((comment, index) => {
    comment.addEventListener('click', () => {
      popup(index, api);
    });
  });
};

// Close popup button
const popupSection = document.querySelector('.popup-section');
const closeIcon = document.querySelector('#close-icon');
closeIcon.addEventListener('click', () => {
  popupSection.classList.toggle('hide');
});