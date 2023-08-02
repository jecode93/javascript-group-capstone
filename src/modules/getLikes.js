import url from './url_like.js';
import { id } from './app.js';

const getLikes = async (itemId) => {
  try {
    const response = await fetch(`${url}/${id}/likes`);
    const data = await response.json();
    const likeData = data.find((item) => item.item_id === itemId);
    return likeData ? likeData.likes : 0;
  } catch (error) {
    console.error('Error to get the like:', error);
    return 0;
  }
};

export default getLikes;