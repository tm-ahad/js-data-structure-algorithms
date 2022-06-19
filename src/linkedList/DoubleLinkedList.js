const {Node} = require("./linkedList")

class LinkedList{
   head = {
       data: null,
       next: null
   }
   tail = {
       data: null,
       prev: null
   }
   size = 0
   node = new Node(null)

   constructor (...data){
       this.add(...data)
   }
   add(...data){
       
       let head = this.head
       let tail = this.tail
       let run = 0
       var i
       for (i in data){
         run++
      }
       let bools = run === Number(i) + 1
       let bool = []
       
       for (let i in data){ 
        bool.push(bools)
       }
      
       bool.push(false)
       
       for (let item of data){
         var node = new Node(item)
       }
       
       const reCall = (num, cb) => {
              if (num === 0){
                return cb()
              }
              reCall(num - 1, cb)
       }
       const cb = (bools) => {
            console.log(bools)
            while (bools){
                let newNode = node
                head.next = function () {
                    let obj = {...this}
                    obj.data = newNode.data
                    return obj
                }
            }
        }
        bool.forEach(cb)
   }
}
let list = new LinkedList(1, 2, 3, 4)
console.log(list.head.next(), 'sign0')
