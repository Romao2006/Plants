// Получаем все кнопки
var buttons = document
  .getElementsByClassName("service-btn")[0]
  .getElementsByTagName("button");

// Получаем все карточки
var cards = document
  .getElementsByClassName("service-cart")[0]
  .getElementsByClassName("service-cart-img");

// Добавляем обработчики событий для кнопок
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // Получаем класс кнопки
    var buttonClass = this.className.split("-")[2];

    // Проходим по всем карточкам и скрываем их
    for (var j = 0; j < cards.length; j++) {
      cards[j].style.display = "none";
    }

    // Отображаем карточки с классом, соответствующим нажатой кнопке
    var selectedCards = document.getElementsByClassName(
      "service-cart-img " + buttonClass
    );
    for (var k = 0; k < selectedCards.length; k++) {
      selectedCards[k].style.display = "block";
    }
  });
}




document.addEventListener('DOMContentLoaded', function () {
  const modalTrigger = document.querySelectorAll('[data-modal-target]');
  const closeButton = document.querySelectorAll('[data-modal-close]');
  const modal = document.querySelector('.modal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');

  modalTrigger.forEach(trigger => {
    trigger.addEventListener('click', () => {
      // Получаем данные из data-атрибутов
      const imageSrc = trigger.querySelector('img').src;
      const title = trigger.querySelector('.service-cart-text').textContent;
      const description = trigger.querySelector('p').textContent;

      // Заполняем содержимое модального окна
      modalImage.src = imageSrc;
      modalTitle.textContent = title;
      modalDescription.textContent = description;

      // Открываем модальное окно
      modal.style.display = 'flex';
    });
  });

  closeButton.forEach(button => {
    button.addEventListener('click', () => {
      // Закрываем модальное окно
      modal.style.display = 'none';
    });
  });

  modal.addEventListener('click', event => {
    if (event.target === modal) {
      // Закрываем модальное окно при клике вне его содержимого
      modal.style.display = 'none';
    }
  });
});
