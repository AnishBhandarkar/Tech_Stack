let px = document.getElementById("p");
px.addEventListener('focus', function(){
    px.setAttribute('style', 'background:red');
})
px.addEventListener('blur', function(){
    px.setAttribute('style', 'background:white');
})