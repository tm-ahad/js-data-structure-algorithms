class Node {
    constructor(data, next, prev) {
        this.data = data
        this.next = next
        this.prev = prev
    }
}

class LinkedList{
    head = {
        data: null,
        next: null,
        prev: null
    }
    tail = {
        data: null,
        next: null,
        prev: null
    }
    size = 0
    constructor(...data){
        data.forEach(data => this.add(data))
    }
    add(...data){
        
        let newNode = null
        let run = 0
        let prevNode = null
        //newNode = nul
        data.forEach(data => {
            prevNode = this.getByIndex(this.getIndex(data) - 1, "Node", true) || null
            newNode = new Node(data, this.head, prevNode)
            this.head = newNode
            this.size++
            run++
        })
    }
    addByIndex(index, value){
        index === 0 && (() => {
            this.addByIndex(value)
        })()
        let prev = this.getByIndex(index - 1, "Node", true)
        prev.next = new Node(value, prev.next)
    }
    getIndex(value){
        let index = 0
        let current = {...this.head}
        while (current.data !== value){
            current = current.next ? current.next : null
            index++
        }
        return index
    }
    getByIndex(index, format, isRefference){
        let currentRef = this.head
        let current = {...this.head}
        index && (() => {
            if (isRefference){   
                while (index > 0){
                    current = current.next ? current.next : null
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
        })()
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
// list.addByIndex(1, 7)
console.log(list)