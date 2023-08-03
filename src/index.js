import './css/global.css';
import displayMeal from './modules/displayMeal.js';

document.addEventListener('DOMContentLoaded', displayMeal);

const apiBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VGgsbNwMjLbF1Y3jHgOe';

const postCommentToAPI = async (index, username, comment) => {
  const body = {
    item_id: index,
    username: username,
    comment: comment,
  };
  const commentsURL = `${apiBaseURL}/comments`;
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(commentsURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Failed to post comment.');
    }

    console.log('Comment added successfully');
    return true; // Indicate success
  } catch (error) {
    console.error(error);
    alert('Failed to add comment. Please try again.');
    return false; // Indicate failure
  }
};

const getCommentsFromAPI = async (api, commentsURL) => {
  try {
    const commentsResponse = await api(commentsURL);

    if (!commentsResponse.ok) {
      throw new Error('Failed to retrieve comments.');
    }

    const comments = await commentsResponse.json(); // Extract JSON data
    console.log('Comments:', comments);
    return comments;
  } catch (error) {
    console.error(error);
    alert('Failed to retrieve comments. Please try again.');
    return [];
  }
};

// Function to add comments to the "updated" ul element
const displayComments = (comments) => {
  const updatedUl = document.getElementById('updated');

  // Clear previous comments
  updatedUl.innerHTML = '';

  // Add the retrieved comments to the ul element
  comments.forEach(comment => {
    const listItem = document.createElement('li');
    const date = new Date(comment.creation_date).toLocaleDateString();
    listItem.textContent =  `${date} : ${comment.username}:${comment.comment}`;
    updatedUl.prepend(listItem); // Add new comments at the top for live update
  });
};

// Handle click event on the "Post Comment" button
const postCommentBtn = document.getElementById('pp-comment-btn');
postCommentBtn.addEventListener('click', async (event) => {
  event.preventDefault();

  const usernameInput = document.querySelector('.your-name');
  const commentInput = document.querySelector('.msg');

  const username = usernameInput.value;
  const comment = commentInput.value;

  const sampleIndex = 'sample_item_id';

  // Call the function to post the comment
  const success = await postCommentToAPI(sampleIndex, username, comment);

  // Clear input fields after posting
  usernameInput.value = '';
  commentInput.value = '';

  // Display success message if the comment was successfully posted
  if (success) {
    const successMsg = document.createElement('div');
    successMsg.textContent = 'Comment posted successfully!';
    successMsg.style.color = 'green';
    document.body.appendChild(successMsg);
    setTimeout(() => {
      successMsg.remove();
    }, 3000);

    // Update comments on the page after posting a new comment
    const comments = await getCommentsFromAPI(fetch, `${apiBaseURL}/comments?item_id=${encodeURIComponent(sampleIndex)}`);
    displayComments(comments);
  }
});

// Handle retrieval of comments for an item when the DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
  const sampleItemID = 'sample_item_id'; // Replace with an actual item_id for testing
  const commentsURL = `${apiBaseURL}/comments?item_id=${encodeURIComponent(sampleItemID)}`;

  try {
    // Call the function to get comments for an item
    const comments = await getCommentsFromAPI(fetch, commentsURL);

    // Display comments on the page
    displayComments(comments);
  } catch (error) {
    console.error(error);
    alert('Failed to retrieve comments. Please try again.');
  }
});
