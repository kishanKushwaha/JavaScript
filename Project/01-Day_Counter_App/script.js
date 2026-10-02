let currentCount = 0;
document.getElementById("inc").addEventListener("click", function(){
    currentCount++;
    document.getElementById("result").innerHTML = currentCount;
    //document.getElementById("msg").innerHTML = "Incremented";
});
document.getElementById("dec").addEventListener("click", function(){
    if(currentCount>0){
        currentCount--;
    }
    else{
        currentCount = 0;
    }
    
    document.getElementById("result").innerHTML = currentCount;
    //document.getElementById("msg").innerHTML = "Decremented";
}); 

document.getElementById("reset").addEventListener("click", function(){
    currentCount = 0;
    document.getElementById("result").innerHTML = currentCount;
    //document.getElementById("msg").innerHTML = "Reset";
});
