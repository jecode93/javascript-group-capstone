import './css/global.css';
import displayMeal from './modules/displayMeal.js';

document.addEventListener('DOMContentLoaded', displayMeal);

const postCommentToAPI = async (api, index) => {
    const newCommentUsername = document.querySelector('.your-name');
    const newCommentMsg = document.querySelector('.msg');
    const body = {
      item_id: index,
      username: newCommentUsername.value,
      comment: newCommentMsg.value,
    };
    const commentsURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VGgsbNwMjLbF1Y3jHgOe/comments';
    const headers = {
      'Content-Type': 'application/json',
    };
  
    try {
      await api.fetchData(commentsURL, 'POST', body, headers);
      newCommentUsername.value = '';
      newCommentMsg.value = '';
      console.log('Comment added successfully'); // Display success message
    } catch (error) {
      console.error(error);
      alert('Failed to add comment. Please try again.');
    }
};

// Simulate posting a comment when the DOM is loaded (for testing purposes)
document.addEventListener('DOMContentLoaded', async () => {
  const sampleIndex = 'sample_item_id'; // Replace with an actual item_id for testing
  const sampleAPI = {
    fetchData: async (url, method, body, headers) => {
      // Simulate a successful response
      return { status: 200, json: async () => ({ message: 'Comment added successfully' }) };
    },
  };

  // Call the function to simulate posting a comment
  await postCommentToAPI(sampleAPI, sampleIndex);
});
