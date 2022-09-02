import BubbleSort from "./BubbleSort.js";
import SelectionSort from "./SelectionSort.js";
import Sort from "./Sort.js";


function randomizeArray(length, maxValue) {
    const output = []
    for (let i = 0; i < length; i++) {
        output[i] = Math.floor(Math.random() * maxValue)
    }
    return output
}

const randomArray = randomizeArray(100, 100)
const selectionsort = new SelectionSort(document.getElementById("sort-graph"), randomArray, true, 3000)
selectionsort.start()