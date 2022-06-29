
const bubble_sort = arr => {
   var shallow_arr = [...arr]
   for (var i = 1; i < shallow_arr.length - 1; i++) {
      for (var j = 0; j < shallow_arr.length; j++) {
         if (shallow_arr[j] > shallow_arr[j+1]){
           let temp = shallow_arr[j]
           shallow_arr[j] = shallow_arr[j+1]
           shallow_arr[j+1] = temp
         }
      }
   }
   return shallow_arr
}
console.log(bubble_sort([2, 1, 3, 6, 4, 5]))