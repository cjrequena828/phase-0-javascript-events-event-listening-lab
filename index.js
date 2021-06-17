
//const input = document.getElementById('input');

function clickAlert() {
  alert('I was clicked!');
}

function addingEventListener(){
    const input = document.getElementById('input');
    input.addEventListener('click', clickAlert)
}
input.addEventListener('click', clickAlert); 

    
    
    
    

