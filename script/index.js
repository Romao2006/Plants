const gardensBtn = document.querySelector('.service-btm-Gardens');
const lawnBtn = document.querySelector('.service-btm-Lawn');
const plantingBtn = document.querySelector('.service-btm-Planting');
const gardensCard = document.querySelectorAll('.service-cart-img:nth-child(-n+2)');
const lawnCard = document.querySelectorAll('.service-cart-img:nth-child(n+3):nth-child(-n+4)');
const plantingCard = document.querySelectorAll('.service-cart-img:nth-child(n+5)');

gardensBtn.addEventListener('click', function() {
  gardensCard.forEach(card => card.style.display = 'block');
  lawnCard.forEach(card => card.style.display = 'none');
  plantingCard.forEach(card => card.style.display = 'none');
});

lawnBtn.addEventListener('click', function() {
  gardensCard.forEach(card => card.style.display = 'none');
  lawnCard.forEach(card => card.style.display = 'block');
  plantingCard.forEach(card => card.style.display = 'none');
});

plantingBtn.addEventListener('click', function() {
  gardensCard.forEach(card => card.style.display = 'none');
  lawnCard.forEach(card => card.style.display = 'none');
  plantingCard.forEach(card => card.style.display = 'block');
});
