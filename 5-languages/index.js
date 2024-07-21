const userLanguage = prompt("Введите язык из предложенных: en, ru, de, es");

switch (userLanguage) {
  case "en":
    alert("Hello");
    break;
  case "ru":
    alert("Привет");
    break;
  case "de":
    alert("Hallo");
    break;
  case "es":
    alert("Hola");
    break;
  default:
    alert("Неизвестный язык");
}
