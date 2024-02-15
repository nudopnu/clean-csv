export class Counter<T> {

    private internalMap: Map<T, number>;

    constructor() {
        this.internalMap = new Map<T, number>();
    }

    increment(element: T) {
        const oldValue = this.internalMap.get(element) ?? 0;
        this.internalMap.set(element, oldValue + 1);
    }

    getMax(): T | undefined {
        let maxCount = 0;
        let maxElement;

        for (const key of this.internalMap.keys()) {
            const count = this.internalMap.get(key)!;
            if (count > maxCount) {
                maxCount = count;
                maxElement = key;
            }
        }
        return maxElement;
    }
}