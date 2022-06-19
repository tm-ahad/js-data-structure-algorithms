
class Node{
    constructor(data = null, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    head = null
    tail = null
    size = 0
    constructor(...data){
        data.forEach(data => this.add(data))
    }
    add(...data){
        data.forEach(data => {
            let newNode = new Node(data, this.head)
            this.head = newNode
            this.size++
        })
    }
    addByIndex(index, value){
       let absInd = Math.abs(index - 1)
       let prevInd = 0
       let preval = this.getByIndex(prevInd, "Node", true)
       console.log("🚀 ~ file: linkedList.js ~ line 27 ~ LinkedList ~ addByIndex ~ preval", preval)
       preval.data = value
    }
    getIndex(value){
        let index = 0
        let current = {...this.head}
        while (current.data !== value){
            current = current.next
            index++
        }
        return index
    }
    getByIndex(index, format, isRefference){
        let currentRef = this.head.next
        let current = {...this.head.next}
        if (isRefference){   
            while (index > 0){
                current = current.next
                index-- 
            }
            return format = "Node" ? currentRef : currentRef.data
        } else {         
            while (index > 0){
                current = current.next
                index--
            }
            return format = "Node" ? current : current.data
        }
    }
    remove(...data){
        data.forEach(data => {
            let index = this.getIndex(data)
            let prev = this.getByIndex(index - 1, "Node")
            let current = this.head
            while (current.data !== data){
                current = current.next
            } 
            if (prev.next.next){
                prev.next = current.next
            } else {
                prev.next = null
            }
        })
    }
    removeByIndex(index){
        let node = this.getByIndex(index, "Node")
        this.remove(node)
    }

}

let list = new LinkedList(1, 2, 3, 4, 5, 6)
list.addByIndex(0, 7)
console.log(list.head, 'sign')