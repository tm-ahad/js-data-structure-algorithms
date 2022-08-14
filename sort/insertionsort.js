
const insertion_sort = (arr, element) => {
      let arrCopy = [...arr]
      let currentIndex = arrCopy.length - 1
      for (let i = 0; i < arrCopy.length; i++) {
         if (arrCopy[currentIndex] < element){
            arrCopy[currentIndex + 1] = element
            currentIndex++
         }
         if (arrCopy[currentIndex] > element) {
            let temp = arrCopy[currentIndex]
            delete arrCopy[currentIndex]
            arrCopy[currentIndex + 1] = temp
            arrCopy[currentIndex] = element
            currentIndex--
         }
      }
   
      return arrCopy
}
console.log(insertion_sort([7, 6, 5, 4], 1))

export default insertion_sort;