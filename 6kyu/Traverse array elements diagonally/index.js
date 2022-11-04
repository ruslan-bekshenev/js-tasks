function diagonal(arr) {
    let n = arr.length - 1;
    let result = [];

    while (arr[0].length) {
        arr.forEach((innerArr, index) => {
            if (!innerArr.length) {
                return;
            }
            if (index >= n) {
                result.push( innerArr.pop() );
            }
        });

        n--;
    }

    return result;
}