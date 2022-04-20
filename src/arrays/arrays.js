// returns the length of the given array
function getLength(theArray) {
    return theArray.length;
}

// returns a copy of the given array
function copyArray(arrayToCopy) {
    
    return arrayToCopy;
}

// adds one element to the array
function addElementToArray(theArray, theElement) {
    return theArray.push(theElement);
}

// adds the elements to the array
function addElementsToArray(theArray, elements) {
    
    let array=copyArray(theArray);
    for (let i = 0; i < getLength(elements); i++){
        addElementToArray(array, elements[i]); 
    }
    
    return array;
    
}

module.exports = {
    getLength,
    copyArray,
    addElementToArray,
    addElementsToArray,
};