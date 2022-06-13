//binary search in a array

const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const target = 5;

const binarySearch = (arr, target) => {
   let findingZone = arr
   let len = findingZone.length
   let mid = Math.floor(findingZone.length / 2);

   for (let ind = 0; ind < len; ind++) {
      if (arr[mid] === target) {
         return mid
      }
      if (arr[mid] > target) {
         findingZone = arr.slice(0, mid)
      }
      if (arr[mid] < target) {
         findingZone = arr.slice(mid, len)
      }
   }
   const linearSearch = (arr, target) => {
     for(let el of arr) {
         if(el === target) {
            return el
         }
     }
     return "not found"
   }
   return linearSearch(arr, target)
}
//target = 6
//{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
console.log(binarySearch(arr, 12))