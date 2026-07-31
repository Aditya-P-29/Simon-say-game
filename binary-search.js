
function binarySearch(arr, key) { 
    let start = 0, end = arr.length - 1; 
    while(start <= end) { 
        let mid = Math.floor(start + (end - start) / 2); 
        if(arr[mid] === key) return mid; 
        if(arr[mid] < key) { 
            start = mid + 1; 
        } else { 
            end = mid - 1; 
        } 
    } 
    return -1; 
} 

let arr = [1,2,3,4,5,6,7,8,9];
let key = 8; 
let index = binarySearch(arr, key); 

// Fix: Check if the element was found (any index that is not -1)
if(index !== -1) { 
    console.log("Key found at index: ", index); // Output: Key found at index: 7
} else { 
    console.log("Key not found"); 
}

export default binarySearch;