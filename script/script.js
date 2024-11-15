let count=0;
let counterInterval;
function startCount(){
    if(!counterInterval){
        counterInterval = setInterval(()=>{
            count++;
            document.getElementById('count').textContent=count;
        },1000);
    }
}

function stopCount(){
     if(counterInterval){
        clearInterval(counterInterval);
        counterInterval=null;
     }
}
function resetCount(){
    stopCount();
    count = 0;
    document.getElementById('count').textContent= count;

}