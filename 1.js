function merge(array1, array2) {
  let final = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      final.push(array1[i]);
      i++;
    } else {
      final.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    final.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    final.push(array2[j]);
    j++;
  }
}

function mergeSort(array) {
  if (array.length === 1) return array;

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  merge(mergeSort(left), mergeSort(right));
}
