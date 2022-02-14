let displayOutput = document.getElementById('display-output');
function display(num){
    displayOutput.value += num; 
}
function clear(){
    displayOutput.value = '';
}
function calculate(){
    try{
        displayOutput.value = eval(displayOutput.value);
    }
    catch(err){
         alert('invalid')
    }
}
function del(){
    displayOutput.value = displayOutput.value.slice(0,-1);
}