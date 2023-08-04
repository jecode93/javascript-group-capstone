/* eslint-disable import/prefer-default-export */
import url from './url_like.js';

const app = async () => {
  try {
    const data = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (data.ok) {
      const appId = await data.text();
      console.log(`App created: ${appId}`);
    } else {
      throw new Error(data.statusText);
    }
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

const id = 'VGgsbNwMjLbF1Y3jHgOe';

export { id };

// App created: VGgsbNwMjLbF1Y3jHgOe