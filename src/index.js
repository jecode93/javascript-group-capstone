import './css/global.css';
import displayMeal from './modules/displayMeal.js';
const uniqueId = 'Zelalem1234';
const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${uniqueId}/comments/`;

const addComment = async (commentData) => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(commentData),
  });
  const data = await response.json();
  return data;
};

const fetchData = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};

document.addEventListener('DOMContentLoaded', displayMeal);

const postBtn = document.getElementById('btn-comment');
const name = document.getElementById('name');
const message = document.getElementById('message');
const commentList = document.getElementById('commentList');

postBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  const usernameValue = name.value;
  const commentValue = message.value;
  const commentData = {
    username: usernameValue,
    comment: commentValue,
  };

  try {
   
    const response = await addComment(commentData);
    console.log('API Response:', response);
    const newCommentItem = document.createElement('li');
    newCommentItem.textContent = `${response.username}: ${response.comment}`;
    commentList.appendChild(newCommentItem);
    const comments = await fetchData();
    console.log('Updated comments:', comments);
  } catch (error) {
    console.error('Error posting the comment:', error);
  }
});
