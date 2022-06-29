
const selection_sort = arr => {
   let sorted_arr = []
   let un_sorted_arr = [...arr]
   var minValue = un_sorted_arr[0]

   for (let i of [...un_sorted_arr]) {
      minValue = Math.min(...un_sorted_arr)
      sorted_arr.push(minValue)
      un_sorted_arr = un_sorted_arr.filter(val => val !== minValue)
   }
   return sorted_arr
}
console.log(selection_sort([2, 1, 3, 5, 4, 8, 6, 7]))