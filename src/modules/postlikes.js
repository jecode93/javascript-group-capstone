import url from './url_like.js';
import { id } from './app.js';

const postLike = async (itemId) => {
  try {
    await fetch(`${url}/${id}/likes`, {
      method: 'post',
      body: JSON.stringify({ item_id: itemId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error to post the likes', error);
  }
};

export default postLike;