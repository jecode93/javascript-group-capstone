import allComments from '../getAllComments.js';

const getCommentCount = async (mealId) => {
  const comments = await allComments(mealId);
  return comments.length;
};

export default getCommentCount;
