let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector(".body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  document.body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  document.body.classList.remove("active");
});
let products = [

  {
    id: 9,
    name: "Jean Flare Pant",
    image: "j4.jpg",
    price: 32000,
  },
  {
    id: 10,
    name: "Gray long Dress with Slit",
    image: "e4.jpg",
    price: 12000,
  },
  {
    id: 11,
    name: "Black Mermaid",
    image: 'e13.jpg',
    price: 28000,
  },
  {
    id: 13,
    name: "Fancy Glass",
    image: "p27.jpg",
    price: 7000,
  },
  {
    id: 14,
    name: "Pullover Shirt",
    image: "p23.jpg",
    price: 14000,
  },
  {
    id: 15,
    name: "Fancy Glass",
    image: "p28.jpg",
    price: 7000,
  },
];
let addProductLists = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
        <img src="img/newproduct/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add To Cart</button>`;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCard(key) {
  if (addProductLists[key] == null) {
    addProductLists[key] = products[key];
    addProductLists[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  addProductLists.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;

    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `<div><img src="img/newproduct/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>
            <button onclick="changeQuantity(${key},${
        value.quantity - 1
      })">-</button>
            <div class="count">${value.quantity}</div>
            <button onclick="changeQuantity(${key},${
        value.quantity + 1
      })">+</button>
            </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete addProductLists[key];
  } else {
    addProductLists[key].quantity = quantity;
    addProductLists[key].price = quantity * products[key].price;
  }
  reloadCard();
}