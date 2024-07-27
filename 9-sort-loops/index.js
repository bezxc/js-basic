const arr = [30, 1, 40, -5, 10, 0, -100, 5, 6];

function quickSort(arr) {
  if (arr.length < 2) return arr;
  else {
    let pivot = arr[0];

    const less = [];
    const greater = [];

    for (let elem of arr) {
      if (elem === pivot) continue;
      elem < pivot ? less.push(elem) : greater.push(elem);
    }

    return [...quickSort(less), pivot, ...quickSort(greater)];
  }
}

console.log(quickSort(arr));
