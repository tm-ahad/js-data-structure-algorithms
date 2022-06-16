
class priorityQueue <type=any>{
   private _queue: type[] = [];
   private _size: number = 0

   public constructor (...value: type[]) {
      this._queue = value
   }

   public sort(): void {
      const RIP = (arr: any[], a: any): number => {
         let { length: result } = arr.filter(val => val === a)
         return result
      }
      
      this._queue = this._queue.sort((a: any, b: any) => RIP(this._queue, b) - RIP(this._queue, a))
   }
   public enQueue(...value: type[]): void {
      this._queue.push(...value)
      this._size += value.length
      this.sort();
   }
   public deQueue(): void {
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
      return Array.from(new Set(this._queue))
   }
   
}

let priorityQueue1 = new priorityQueue(1, 2, 3, 4, 5, 5)
console.log(priorityQueue1.view())