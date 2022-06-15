
class priorityQueue<type=any>{
   private _queue: type[] = []
   private _size: number = 0
   private index: number = 0

   public constructor (...value: type[]) {
      this._queue.push(...value)
      this._size += value.length
   }
   public enQueue(...value: type[]): void {
      this._queue.push(...value)
      this._size += value.length
   }
   public deQueue(): void {
      if (this._size === 0) {
         throw new Error('queue is empty')
      } else {
         delete this._queue[this._size - 1]
         this._size--
      }
   }
   public peek(): type {
      if (this._size === 0) {
         throw new Error('queue is empty')
      } else {
         return this._queue[this._size - 1]
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
   public sort(cb): type[] {
      return this._queue.sort(cb)
   }
   public reverse(): type[] {
      return this._queue.reverse()
   }
   public map(cb): type[] {
      return this._queue.map(cb)
   }
   public filter(cb): type[] {
      return this._queue.filter(cb)
   }
   public reduce(cb): type {
      return this._queue.reduce(cb)
   }
   public forEach(cb): void {
      this._queue.forEach(cb)
   }
   public some(cb): boolean {
      return this._queue.some(cb)
   }
   public every(cb): boolean {
      return this._queue.every(cb)
   }
   public get(): type {
      return this._queue[0]
   }
}
//binary search in a array