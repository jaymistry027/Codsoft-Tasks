function clearScreen() {
    document.getElementById("result").value = "";
}
 

function display(value) {
    document.getElementById("result").value += value;
    document.getElementById("result").style.textAlign="right";
    document.getElementById("result").style.fontSize="5rem";
    document.getElementById("result").style.fontFamily='VT323', monospace;
    
}
 
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    document.getElementById("result").style.textAlign="right";
    document.getElementById("result").style.fontSize="5rem";
    document.getElementById("result").style.fontFamily='VT323', monospace;
}