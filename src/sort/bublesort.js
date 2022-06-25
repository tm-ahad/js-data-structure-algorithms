
const bubble_sort = arr => {
   let sliced_arr = arr.slice(0, 2)
   for (let i = 0; i < arr.length - 1; i++){
      for (let j = 2; j <= arr.length; j++){
         sliced_arr = arr.slice(i, j)
      }
      if (sliced_arr[0] > sliced_arr[1]){
         let x = sliced_arr[1]
         sliced_arr[1] = sliced_arr[0]
         sliced_arr[0] = x
      }
      else if(sliced_arr[1] > sliced_arr[2]){
         let x = sliced_arr[2]
         sliced_arr[2] = sliced_arr[1]
         sliced_arr[1] = x
      }
   }

}