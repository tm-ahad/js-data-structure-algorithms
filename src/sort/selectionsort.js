
const selection_sort = arr => {
   let sorted_arr = []
   let un_sorted_arr = [...arr]
   let min = un_sorted_arr[0]
   for (var el of un_sorted_arr) {
      if (el < min){
         min = el
         delete un_sorted_arr[un_sorted_arr.indexOf(min)]
         sorted_arr.push(min)
      }
      console.log(un_sorted_arr)
   }
   return sorted_arr 
}
console.log(selection_sort([2, 1, 3]))