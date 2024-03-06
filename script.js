var screen=document.getElementById("screen");
function display(value){
    screen.value+=value;
}
function findResult(){
    var result=eval(screen.value);
    screen.value=result;

}
function clearScreen(){
    screen.value="";
}