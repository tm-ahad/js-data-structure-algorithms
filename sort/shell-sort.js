import insertion_sort from "./insertion-sort.js";

const shellSort = arr => {
   let sorted_arr = arr.splice(0, arr.length/2),
   un_sorted_arr = arr.splice(arr.length/2 - 1, arr.length);
   for (var val of un_sorted_arr){
      sorted_arr = insertion_sort(sorted_arr, val)
   }
   return sorted_arr;
}
console.log(shellSort([2, 3, 4, 1, 8, 2]));