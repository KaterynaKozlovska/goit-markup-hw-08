filterSelection('all'); // це кнопка, яка вибрана за замовчуванням. В нашому випадку - "Усі"
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName('grid__item'); //Тут має бути написаний ваш клас для лішек, у які завернуті картки
  if (c == 'all') c = '';
  // Додати класс "show" (display:block)  елементам, які є відфільтрованими та видалити клас "show" у елементів, які не обрані
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], 'show');
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], 'show');
  }
}

// Показати відфільтровані елементи
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += ' ' + arr2[i];
    }
  }
}

// Сховати елементи, які не є обраними
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(' ');
}

// Додати активний клас поточній кнопці керування
var btnContainer = document.getElementById('filtersBtnList'); //тут має бути id, який ви додали списку кнопок
var btns = btnContainer.getElementsByClassName('portfolio__button'); //тут має бути клас кнопок
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active'); //це додатковий клас активної кнопки. Якщо ви маєте його - впишіть його сюди та змініть нижче, де вказано "active"
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}
