const { off } = require("process");
const { createNoSubstitutionTemplateLiteral, createObjectLiteral } = require("typescript");

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

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
        var nodeOnBack = null
        for (let item of data){
            var node = new Node(item)
            if (run === 0){
                head.data = node.data
            } 
            if (run === 1){
                head.next = node
            }
            if (run === 2){
                let newNode = node
                head.next.next = function () {
                    let obj = {...this}
                    obj.data = newNode.data
                    return obj
                }
            }
            if (run === data.length - 2){
                nodeOnBack = node
            }
            if (run === data.length - 1){
                tail.prev = nodeOnBack
                tail.data = node.data
                this.node = node
            }
            run++
            this.size++
        }
        
    }
}
let list = new LinkedList(1, 2, 3, 4)
console.log(list.head.next.next(), 'sign')