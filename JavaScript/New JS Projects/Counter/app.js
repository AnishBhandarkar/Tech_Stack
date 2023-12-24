let val = 0;

const counter = document.querySelector(".counter");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const classes= e.currentTarget.classList;
        if (classes.contains('increase')){
            val++;
        }
        else if (classes.contains('decrease')){
            val--;
        }
        else{
            val = 0;
        }
        if(val > 0){
            counter.style.color = 'green';
        }
        else if(val < 0){
            counter.style.color = 'blue';
        }
        else{
            counter.style.color = 'red';
        }
        counter.textContent = val;

    })

})

