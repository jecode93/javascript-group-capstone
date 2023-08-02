export default async (api, index) => {
    const newCommentUsername = document.querySelector('.your-name');
    const newCommentMsg = document.querySelector('.msg');
    const body = {
      item_id: index,
      username: newCommentUsername.value,
      comment: newCommentMsg.value,
    };
    const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VGgsbNwMjLbF1Y3jHgOe/comments';
    const headers = {
      'Content-Type': 'application/json',
    };
    await api.fetchData(URL, 'POST', body, headers);
    newCommentUsername.value = '';
    newCommentMsg.value = '';
  };