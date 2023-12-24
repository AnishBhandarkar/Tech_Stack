const menu = [
  {
    img: "Images/food.jpg",
    title: "New cream",
    category:"breakfast",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime possimus tempore quisquam at, quod totam est.",
    price: "$20",
  },
  {
    img: "Images/food.jpg",
    title: "New cream1",
    category:"lunch",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime possimus tempore quisquam at, quod totam est.",
    price: "$21",
  },
  {
    img: "Images/food.jpg",
    title: "New cream2",
    category:"shake",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime possimus tempore quisquam at, quod totam est.",
    price: "$22",
  },
  {
    img: "Images/food.jpg",
    title: "New cream3",
    category:"breakfast",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime possimus tempore quisquam at, quod totam est.",
    price: "$23",
  },
  {
    img: "Images/food.jpg",
    title: "New cream",
    category:"breakfast",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime possimus tempore quisquam at, quod totam est.",
    price: "$20",
  },
  {
    img: "Images/food.jpg",
    title: "New cream1",
    category:"lunch",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime possimus tempore quisquam at, quod totam est.",
    price: "$21",
  },
  {
    img: "Images/food.jpg",
    title: "New cream2",
    category:"shake",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime possimus tempore quisquam at, quod totam est.",
    price: "$22",
  },
  {
    img: "Images/food.jpg",
    title: "New cream3",
    category:"breakfast",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime possimus tempore quisquam at, quod totam est.",
    price: "$23",
  },
  {
    img: "Images/food.jpg",
    title: "New cream",
    category:"breakfast",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime possimus tempore quisquam at, quod totam est.",
    price: "$20",
  },
  {
    img: "Images/food.jpg",
    title: "New cream1",
    category:"lunch",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime possimus tempore quisquam at, quod totam est.",
    price: "$21",
  },
  {
    img: "Images/food.jpg",
    title: "New cream2",
    category:"shake",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime possimus tempore quisquam at, quod totam est.",
    price: "$22",
  },
  {
    img: "Images/food.jpg",
    title: "New cream3",
    category:"breakfast",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime possimus tempore quisquam at, quod totam est.",
    price: "$23",
  }
];

const cont = document.querySelector(".cont");
const btns = document.querySelectorAll('.btn');

//Load items
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
});


//Filter items
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const cur_category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem){
            if(menuItem.category === cur_category){
                return menuItem;
            }
        });
        if(cur_category === 'all'){
            displayMenuItems(menu);
        }
        else{
            displayMenuItems(menuCategory);
        }
    })
})


//Function to Populating the content
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<div class="card mb-5" style="width: 20rem;">
            <img src=${item.img} class="img card-img-top">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.text}</p>
                <p class="price">${item.price}</p>
            </div>
        </div>`;
  });
  displayMenu = displayMenu.join("");
  cont.innerHTML = displayMenu;
}
