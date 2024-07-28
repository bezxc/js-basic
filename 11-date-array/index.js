const dateArr = [
  "10-02-2022",
  "stroka",
  "11/12/2023",
  "00/13/2022",
  "41/12/2023",
  "29/02/2023",
  "29/02/2024",
];

function splitDate(date) {
  if (date.includes("/")) {
    return date.split("/");
  }
  if (date.includes("-")) {
    return date.split("-");
  }
}

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function checkDate(arr) {
  if (arr === null || arr === undefined) {
    return false;
  }

  const [day, month, year] = arr.map(Number);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return false;
  }

  if (month === 2 && day === 29 && !isLeapYear(year)) {
    return false;
  }

  if (year <= 0) {
    return false;
  }

  if (day < 1 || day > 31) {
    return false;
  }

  if (month < 1 || month > 12) {
    return false;
  }

  return true;
}

/*
 * Можно было бы объеденить эти преобразования
 * в отдельную функцию высшего порядка, чтоб совсем красиво было,
 * но рещил оставить так, вроде тоже норм
 */

const splitedDates = dateArr.map(splitDate);
const validDates = splitedDates.filter((date) => checkDate(date));

const result = validDates.map((date) => date.join("-"));

console.log(result);
