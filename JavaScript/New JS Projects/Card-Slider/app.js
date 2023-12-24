const reviews = [
  {
    name: "Anish Bhandarkar",
    roll: "Full Stack Developer",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi facere fugiat repellat eligendi eosquidem, quo ut, modi laboriosam eveniet vel excepturi voluptas hic ab omnis, aut vitae! Eius, unde?",
    img: "Images/anish.jpeg",
  },
  {
    name: "Viraj Patil",
    roll: "Frontend Developer",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi facere fugiat repellat eligendi eosquidem, quo ut, modi laboriosam eveniet vel excepturi voluptas hic ab omnis, aut vitae! Eius, unde?",
    img: "Images/virajp.jpeg",
  },
  {
    name: "Gajanan Jadhav",
    roll: "Backend Developer",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi facere fugiat repellat eligendi eosquidem, quo ut, modi laboriosam eveniet vel excepturi voluptas hic ab omnis, aut vitae! Eius, unde?",
    img: "Images/gaju.jpeg",
  },
  {
    name: "Ashitosh",
    roll: "Database Designer",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi facere fugiat repellat eligendi eosquidem, quo ut, modi laboriosam eveniet vel excepturi voluptas hic ab omnis, aut vitae! Eius, unde?",
    img: "Images/asitosh.jpg",
  },
  {
    name: "Pradeep Hindi",
    roll: "Software Tester",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi facere fugiat repellat eligendi eosquidem, quo ut, modi laboriosam eveniet vel excepturi voluptas hic ab omnis, aut vitae! Eius, unde?",
    img: "Images/pradeep.jpeg",
  },
];

const img = document.querySelector(".img");
const Name = document.getElementById("Name");
const roll = document.getElementById("roll");
const info = document.getElementById("info");

const prev = document.querySelector(".left");
const next = document.querySelector(".right");
const rand = document.querySelector(".random");

let index = 0;

// window.addEventListener('DOMContentLoaded', showPerson(0));

prev.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = reviews.length - 1;
  }
  showPerson(index);
});
next.addEventListener("click", function () {
  index++;
  if (index > reviews.length - 1) {
    index = 0;
  }
  showPerson(index);
});

function showPerson(index) {
  const item = reviews[index];
  img.src = item.img;
  Name.innerHTML = item.name;
  roll.textContent = item.roll;
  info.textContent = item.info;
}

function changebg(color) {
  document.body.style.backgroundColor = color;

  let cont = document.querySelector(".container");
  if (color == "black") {
    cont.style.color = "white";
  } else {
    cont.style.color = "black";
  }
}
