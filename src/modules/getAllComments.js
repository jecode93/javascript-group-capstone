import { id } from './app.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const allComments = async (mealId) => {
  try {
    const response = await fetch(`${url}/${id}/comments?item_id=${mealId}`);
    const comments = await response.json();

    if (Array.isArray(comments) && comments.length > 0) {
      return comments;
    }
    return [];
  } catch (error) {
    console.error('Error to get comments', error);
    return [];
  }
};

export default allComments;