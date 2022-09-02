import Sort from "./Sort.js";

// O(n^2)
class BubbleSort extends Sort {

    constructor(canvas, data, rainbowMode=false, startTimeout=0) {
        super(canvas, data, rainbowMode, startTimeout)
        this._i = 0
        this.nSorted = 0
    }

    sort() {
        if (this._i >= (this.data.length - 1) - this.nSorted) {
            this._i = 0
            this.nSorted++
            if (this.nSorted == this.data.length - 1) this.done = true
            return
        }
        const v1 = this.data[this._i]
        const v2 = this.data[this._i + 1]
        if (v1 > v2) {
            this.data.splice(this._i, 2, ...[v2, v1])
        }
        this._i++
    }

}

export default BubbleSort