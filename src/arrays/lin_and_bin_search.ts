//binary search in a array

const arr = [1, 2, 3, 4];
const target = 2;

const binarySearch = function <type = string | number>(arr: type[], target: type): any {
   let findingZone = arr
   let len = findingZone.length
   let mid = Math.floor(len / 2)
   
   for (let i of arr.map(x => true)) {
      if (findingZone[mid] === target) {
         return findingZone[mid]
      }
      if (findingZone[mid] > target) {
         findingZone = arr.slice(0, mid)
         mid = Math.floor(findingZone.length / 2)
         len = findingZone.length
      }
      if (findingZone[mid] < target) {
         findingZone = arr.slice(mid, len)
         mid = Math.floor(findingZone.length / 2)
         len = findingZone.length
      }
   }
   return 'not found'
}

console.log(binarySearch(arr, target))

const linearSearch = function <type = string | number>(arr: type[], target: type): any {
   for (let i of arr) {
      if (i === target) {
         return i
      }
   }
   return 'not found'
}
console.log(linearSearch(arr, target))