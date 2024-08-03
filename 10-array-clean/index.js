const arr = [-10, -5, -30, 5, 1, 2, 6, 30, 32, 45];

function filter(arr, fn) {
  const result = [];

  for (const elem of arr) {
    if (fn(elem)) {
      result.push(elem);
    }
  }

  return result;
}

const filterArr = filter(arr, (elem) => elem >= 30);

console.log(filterArr);
