// getCommentCount.test.js

import getCommentCount from '../popup/commentCounter.js';

describe('getCommentCount Test', () => {
  it('should return 0 when there are no comments', async () => {
    // Arrange
    const comments = [];

    // Act
    const count = getCommentCount(comments);

    // Assert
    expect(count).toBe(0);
  });

  it('should return the correct comment count', async () => {
    // Arrange
    const comments = [
      { id: 1, text: 'Comment 1' },
      { id: 2, text: 'Comment 2' },
      { id: 3, text: 'Comment 3' },
    ];

    // Act
    const count = getCommentCount(comments);

    // Assert
    expect(count).toBe(comments.length);
  });
});
