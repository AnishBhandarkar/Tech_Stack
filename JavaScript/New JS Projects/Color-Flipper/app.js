const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById("butn");
const colText = document.getElementById("colName");

btn.addEventListener("click", function () {
//   
    let hexColor = '#';
    for(let i = 0;i<6;i++){
        hexColor += colors[getRandom()];
    }
  document.body.style.backgroundColor = hexColor;
  colText.textContent = hexColor;
});

function getRandom(){
    return Math.floor(Math.random() * colors.length);
}
