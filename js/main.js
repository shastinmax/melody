$(document).ready(function () {
  let currentFloor = 2; // переменная где хранится текущий этаж
  let floorPath = $(".home__image path"); //каждый отдельный этаж в svg
  let counterUp = $(".counter__up"); //кнопка увеличения этажа
  let counterDown = $(".counter__down"); //кнопка уменьшения этажа
  //функция при наведении мышкой на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current__floor"); //удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); //получаем значение текущего этажа
    $(".counter").text(currentFloor); //записываем значение этажа в счетчик
  });
  counterUp.on("click", function () {
    //отслежив клик по кнопке вверх
    if (currentFloor < 18) {
      //проверяем значение этажа,не болле 18
      currentFloor++; //прибавляем 1 этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }); //форматируем номер этажа ,чтобы было 01 ,а не 1
      $(".counter").text(usCurrentFloor); //записываем значение этажа в счетчик справа
      floorPath.removeClass("current__floor"); //удаляем класс
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current__floor"); //подсвечиваем текущий этаж
    }
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current__floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current__floor");
    }
  });
});
