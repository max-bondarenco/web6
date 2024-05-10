export default (arr, comparator) => {
  let res = arr[0];
  for (let i = 1; i < arr.length; i++)
    res = comparator(res, arr[i]) > 0 ? res : arr[i];
  return res;
};
