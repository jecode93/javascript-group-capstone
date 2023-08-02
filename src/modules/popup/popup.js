// popup.js

export const openPopup = (meal) => {
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    const popupTitle = document.getElementById('popup-title');
  
    popupImage.src = meal.strMealThumb;
    popupImage.alt = meal.strMeal;
    popupTitle.textContent = meal.strMeal;
  
    popup.style.display = 'block';
  };
  
  export const closePopup = () => {
    const popup = document.getElementById('popup');
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
  