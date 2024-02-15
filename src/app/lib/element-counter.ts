export class ElementCounter<T> {

    private internalMap: Map<T, number>;

    constructor(elements: readonly T[]) {
        this.internalMap = new Map<T, number>();
        elements.forEach(element => {
            this.internalMap.set(element, 0);
        });
    }

    increment(element: T) {
        const oldValue = this.internalMap.get(element) ?? 0;
        this.internalMap.set(element, oldValue + 1);
    }

    isCounting(element: T) {
        return this.internalMap.has(element);
    }

    max(): T | undefined {
        const keys = this.internalMap.keys();
        let maxCount = 0;
        let maxElement;
        for (const key of keys) {
            const count = this.internalMap.get(key)!;
            if (count >= maxCount) {
                maxElement = key; 
                maxCount = count;
            }
        }
        return maxElement;
    }
}