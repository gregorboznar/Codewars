// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
function removeEveryOther(arr) {
  let x = arr.filter((element, index) => {
    return index % 2 === 0;
  });

  return x;
}
