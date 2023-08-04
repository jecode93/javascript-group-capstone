import { id } from './app.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const newComment = async (itemId, username, comment) => {
  try {
    await fetch(`${url}/${id}/comments`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemId,
        username,
        comment,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error to submit new comment', error);
  }
};

export default newComment;
