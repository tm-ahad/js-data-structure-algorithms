
const insertion_sort = (arr, index , element) => {
   const insertion = (arr, index, element ) => {
      for (let i = arr.length; i < index; i--){
         if (i === index){
            arr[i] = element
         } else {
            arr[i+1] = arr[i]
         }
      }
      return arr
   }
   let unsorted_array = insertion(arr, index, element)
   let sorted_array = [...unsorted_array]
   for (let el of sorted_array) {
      for (var i in sorted_array) {}
      for (var el2 of sorted_array) {}
      for (var i2 in sorted_array) {}
      if (el > el2){
         arr[arr.indexOf(el)] = arr[arr.indexOf(el2)]
      }
      else if (el2 > el){
         arr[arr.indexOf(el2)] = arr[arr.indexOf(el)]
      }
   }
   return sorted_array
}
console.log(insertion_sort([1, 2, 3, 4], 2, 5))