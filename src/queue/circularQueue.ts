
class CircularQueue<type=any>{
   private _top: type ;
   private _queue: type[] = [];
   private _size: number = 0;
   private _limit: number = Number.MAX_VALUE

   public constructor (limit: number, ...value: type[]) {
      if (limit < 1) {
         throw new Error('limit must be greater than 0')
      }
      this._limit = limit
      this._queue.push(...value)
      this._size += value.length
      this._top = this._queue[this._size - 1]
   }
   public enQueue(...value: type[]): void {
      console.log(this._size, this._limit)
      if (this._size === this._limit) {
         throw new Error('queue is full')
      } else {
         this._queue.push(...value)
         this._size += value.length
         this._top = this._queue[this._size - 1]
      }
   }
   public deQueue(): void {
      if (this._size === 0) {
         throw new Error('queue is empty')
      } else {
         delete this._queue[this._size - 1]
         this._size--
         this._top = this._queue[this._size - 1]
      }
   }
   public peek(): type {
      if (this._size === 0) {
         throw new Error('queue is empty')
      } else {
         return this._top
      }
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

let queue = new CircularQueue<number>(5, 1, 2, 3, 4, 5)

console.log(queue.view())

queue.deQueue()
console.log(queue.view())