let evenArr = [2, 4, 6, 8, 12, 18];
let oddArr = [3, 8, 11, 14, 16];

const binarySearch = (arr, size, key) => {
  console.warn(arr, size, key);
  let start = 0;
  let end = size - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == key) {
      return mid;
    }
    //! in this condition we say if key greater then mid so we go to right
    if (key > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};
console.log(binarySearch(evenArr, evenArr.length, 18));
