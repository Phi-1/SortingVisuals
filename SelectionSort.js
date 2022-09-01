import Sort from "./Sort.js";

// O(n^2)
class SelectionSort extends Sort {

    constructor(canvas, data) {
        super(canvas, data)
        this._i = 0
    }

    sort() {
        if (this._i >= this.data.length - 1) {
            this.done = true
        }
        let minValue = this.data[this._i]
        let minIndex = this._i
        for (let i = this._i + 1; i < this.data.length; i++) {
            if (this.data[i] < minValue) {
                minValue = this.data[i]
                minIndex = i
            }
        }
        if (this.data[this._i] != minValue) {
            this.data[minIndex] = this.data[this._i]
            this.data[this._i] = minValue
        }
        this._i++
    }

}

export default SelectionSort