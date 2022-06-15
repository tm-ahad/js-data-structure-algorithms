import { threadId } from "worker_threads";

class Stack <type=any>{
      private _stack: type[] = [];
      private _size: number = 0;
   
      public push(...value: type[]): void {
         value.forEach(value => this._stack.push(value)) 
         this._size++
      }
      public pop(): void {
         delete this._stack[0]
         this._size--
      }
      public peek(): type {
         return this._stack[this._size - 1]
      }
      public isEmpty(): boolean {
         return this._size === 0
      }
      public get size(): number {
         return this._size
      }
      public view(): type[] {
         return this._stack
      }
} 
let myStack = new Stack<number>()

myStack.push(9, 8, 7, 6, 5, 4, 3, 2, 1)

console.log(myStack.view())

myStack.pop()

console.log(myStack.view())