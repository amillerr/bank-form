// Скрипт для удаления данных в блоке "Куда"

function reset() {
      var a = document.getElementsByClassName('whom');
      // a = HTMLCollection
      console.log(a);
      // You can iterate over HTMLCollection.
      for (var i = 0; i < a.length; i++) {
        // You can set the value in every item in the HTMLCollection.
        a[i].value = "";
      }
    }




// Скрипт ограничения количества символов в поле "Серия паспорта"

document.getElementById('series').oninput = function () {
  if (this.value.length > 4) this.value = this.value.substr(0, 4);
}

// Скрипт ограничения количества символов в поле "Номер паспорта"

document.getElementById('number').oninput = function () {
  if (this.value.length > 6) this.value = this.value.substr(0, 6);
}

// Скрипт ограничения количества символов в поле "Код подразделения"

document.getElementById('passport-code').oninput = function () {
  if (this.value.length > 6) this.value = this.value.substr(0, 6);
}
