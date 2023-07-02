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
