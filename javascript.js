const toggles=document.querySelectorAll('.toggle');
const good=document.querySelector('#good');
const cheap=document.querySelector('#cheap');
const fast=document.querySelector('#fast');

toggles.forEach(toggle=>toggle.addEventListener('change',(e)=>doTheTrick(e.currentTarget)));

function doTheTrick(checkbox){

    if(good.checked && cheap.checked && fast.checked){
        
        if(good==checkbox){

            fast.checked=false;
        }
        if(cheap==checkbox){

            fast.checked=false;
        }
        if(fast==checkbox){

            cheap.checked=false;
        }
    }
}