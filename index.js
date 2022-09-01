import BubbleSort from "./BubbleSort.js";
import Sort from "./Sort.js";


function randomizeArray(length, maxValue) {
    const output = []
    for (let i = 0; i < length; i++) {
        output[i] = Math.floor(Math.random() * maxValue)
    }
    return output
}

const randomArray = randomizeArray(50, 100)
const bubblesort = new BubbleSort(document.getElementById("sort-graph"), randomArray)
bubblesort.start()