function solution(roman){
    const Numerals = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    }

    let array = roman.split('');
    let sum = 0;

    for (let i=0; i<array.length; i++){                      //loop through roman numeral array
        if(Numerals[array[i]] < Numerals[array[i+1]]){         //special condition when number in front is less valuable than the next numeral
            sum += (Numerals[array[i+1]] - Numerals[array[i]]);  //subtract first element from second in these cases (IV, IX, XC, etc)
            i++;
        }else{
            sum += Numerals[array[i]];                           //add all the rest that don't meet above condition
        }
    }
    return sum;
}