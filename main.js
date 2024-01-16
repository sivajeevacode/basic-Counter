alert('Welcome')
var h1=document.querySelector(".count")
var count=0;

function plus()
{
    count++;
    h1.textContent=count;
}

function minus()
{
    if(count!==0)
    {
        count--;
        h1.textContent=count;
    }
    
}

function reset()
{
    count=0;
    h1.textContent=count;
}