
// contains rendering code and interface for sorting steps
class Sort {
    
    // margins in proportions
    static MARGIN_LR = 0.1
    static MARGIN_T = 0.15
    static MARGIN_B = 0.1
    static MARGIN_ITEM = 0.1

    constructor(canvas, data, rainbowMode=false, startTimeout=0) {
        this.canvas = canvas
        this.canvas.width = canvas.clientWidth
        this.canvas.height = canvas.clientHeight
        this.ctx = canvas.getContext("2d")
        this.data = data
        this.done = false
        this.rainbowMode = rainbowMode
        this.startTimeout = startTimeout
    }

    start() {
        this.render()
        setTimeout(this.loop.bind(this), this.startTimeout)
    }

    loop() {
        window.requestAnimationFrame(this.loop.bind(this))
        if (!this.done) this.sort()
        this.render()
    }

    sort() {
        // sorting steps go here
    }

    render() {
        // get size of canvas
        const cW = this.canvas.width
        const cH = this.canvas.height
        this.ctx.clearRect(0, 0, cW, cH)
        // subtract margins
        const mLR = cW * Sort.MARGIN_LR
        const mT = cH * Sort.MARGIN_T
        const mB = cH * Sort.MARGIN_B
        const graphWidth = cW - (mLR * 2)
        const graphHeight = (cH - mB) - mT 
        // divide length by number of items
        const itemWidth = graphWidth / this.data.length
        // get biggest value, draw items as proportions
        const maxValue = this.getMaxValue(this.data)
        // set fill color when not in rainbow mode
        if (!this.rainbowMode) this.ctx.fillStyle = this.done ? "#AFA" : "#FFF"
        for (let i = 0; i < this.data.length; i++) {
            // set fill color when in rainbow mode
            if (this.rainbowMode) this.ctx.fillStyle = `hsl(${(this.data[i] / maxValue) * 360}, 90%, 50%)`
            const barHeight = graphHeight * (this.data[i] / maxValue)
            this.ctx.fillRect(mLR + (itemWidth * i) + (Sort.MARGIN_ITEM * itemWidth), mT + (graphHeight - barHeight), itemWidth - ((Sort.MARGIN_ITEM * itemWidth) * 2), barHeight)
        }
        // draw underline
        this.ctx.strokeStyle = "#FFF"
        this.ctx.lineWidth = 3
        this.ctx.moveTo(mLR, graphHeight + mT)
        this.ctx.lineTo(mLR + graphWidth, graphHeight + mT)
        this.ctx.stroke()
    }

    getMaxValue(list) {
        let currentMax = 0
        for (let i = 0; i < list.length; i++) {
            if (list[i] > currentMax) currentMax = list[i]
        }
        return currentMax
    }

}

export default Sort