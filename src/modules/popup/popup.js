// popup.js

export const closePopup = () => {
  const popup = document.querySelector('.popup-sec');
  popup.style.display = 'none';
};

// Close the popup when clicking outside the popup
export const addPopupOutsideClickListener = () => {
  window.addEventListener('click', (event) => {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
      closePopup();
    }
  });
};
