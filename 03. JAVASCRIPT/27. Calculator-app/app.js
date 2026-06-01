var inputValue = document.getElementById("displayValue")
// console.log(inputValue.value);


function number (val){
    // console.log(val);
     inputValue.value += val 
    
    
}

function clearAll(){
     inputValue.value = ""
}

function delBtn(){
     inputValue.value =  inputValue.value.slice(0, -1)
}

function operator (value){
    // console.log(value);
    inputValue.value += value
    
}