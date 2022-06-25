
const deletion_sort = (arr, index)=> {
   const deletion = (arr, index) => {
      for (let i = 0; i < index; i--){
         if(i === index){
            delete arr[i]
         }
      }
      return arr
   }
   let unsorted_array = deletion(arr, index)
   let sorted_array = [...unsorted_array]
   for (let el of sorted_array) {
      for (var i in sorted_array)
      for (var el2 of sorted_array)
      for (var i2 in sorted_array)
      if (el > el2){
         el[i2] = el[i]
      }
      else if (el2 > el){
         el[i] = el[i2]
      }
   }
   return sorted_array
}