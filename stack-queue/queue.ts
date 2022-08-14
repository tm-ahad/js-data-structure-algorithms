
class Queue<type=any>{
      private _top: type;
      private _queue: type[];
      private _size: number = 0;

      public constructor(...value: type[]) {
         this._queue = value
         this._size = value.length
         this._top = this._queue[this._size - 1]
      }
      public enQueue(...value: type[]): void {
         value.forEach(value => this._queue.push(value)) 
         this._size++
      }
      public deQueue(): void {
         delete this._queue[this._size - 1]
         this._size--
      }
      public peek(): type {
         return this._queue[this._size - 1]
      }
      public isEmpty(): boolean {
         return this._size === 0
      }
      public get size(): number {
         return this._size
      }
      public view(): type[] {
         return this._queue
      }
}
let myQueue: Queue<number> = new Queue<number>(9, 8, 7, 6, 5, 4, 3, 2, 1)

console.log(myQueue.view())
myQueue.deQueue()
console.log(myQueue.view())

console.log(myQueue.size)