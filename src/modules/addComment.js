const uniqueId = 'Zelalem1234';
const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${uniqueId}/comments/`;

const addComment = async (itemId) => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(itemId),
  });
  const data = await response.json();
  return data.result;
};

const fetchData = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.result;
};

export { addComment, fetchData };