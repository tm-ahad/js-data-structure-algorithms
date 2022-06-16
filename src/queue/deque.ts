
class deQue <type=any>{
   private _queue: type[] = [];
   private _size: number = 0

   public constructor (...value: type[]) {
      this._queue = value
   }
   public addRear(...value: type[]): void {
      this._queue.push(...value)
      this._size += value.length
   }
   public addFront(...value: type[]): void {
      this._queue.unshift(...value)
      this._size += value.length
   }
   public removeRear(): void {
      delete this._queue[this._size - 1]
      this._size--
   }
   public removeFront(): void {
      delete this._queue[0]
      this._size--
   }
   public peek(): type {
      return this._queue[0]
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

const deQue1 = new deQue(1, 2, 3, 4, 5, 5)
console.log(deQue1.view())
deQue1.addFront(6, 7, 8, 9, 10)
console.log(deQue1.view())
deQue1.removeFront()
console.log(deQue1.view())
deQue1.removeRear()
console.log(deQue1.view())