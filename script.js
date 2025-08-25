function addToCalucator(value){
    document.getElementById("displayResuly").value+=value;
}
function finilize(){
     document.getElementById("displayResuly").value = eval( document.getElementById("displayResuly").value);
}
function reset(){
     document.getElementById("displayResuly").value = " ";
}
function mathCalculator(mathFunc){
    
var val = document.getElementById("displayResuly").value;
 document.getElementById("displayResuly").value = Math[mathFunc](val);
}