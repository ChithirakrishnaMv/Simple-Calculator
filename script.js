// display number

function displayNum(num){
    result.value +=num;
}

// function displayValue(v){
//     result.value = v
// }

//clear text box

clearText =() =>{
    result.value = '';
}

// evaluate expression

evaluateExp =() =>{
    // method1
    // exp=result.value;
    // op =eval(exp);
    // result.value = op;

    // method 2
    result.value =eval(result.value)
}

// remove last item from text box
lastItem =() =>{
    // method 1
    // txt = result.value
    // newTxt = txt.slice(0, -1);
    // result.value = newTxt;

    // method 2
    result.value = result.value.slice(0,-1);
}

 
