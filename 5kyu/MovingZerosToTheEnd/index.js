function moveZeros(arr) {
    const zeros = arr.filter((elm) => elm === 0).length;
    const result = arr.filter((elm) => elm !== 0);

    for (let i = 0; i < zeros; i++) {
        result.push(0);
    }

    return result;
}


console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))