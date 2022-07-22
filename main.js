let qtes = document.querySelectorAll(".qte");
let btnsPlus = document.querySelectorAll(".plus");
let btnsMinus = document.querySelectorAll(".minus");
const like = document.querySelectorAll(".far");
let trashIcon = document.querySelectorAll(".trash");

for (let i = 0; i < btnsPlus.length; i++) {
    btnsPlus[i].addEventListener("click", function () {
      qtes[i].innerHTML++;
      total();
    });
  }
  for (let i = 0; i < btnsPlus.length; i++) {
    btnsMinus[i].addEventListener("click", function () {
      if (qtes[i].innerHTML > 0) {
        qtes[i].innerHTML--;
        total();
      }
    });
  }
  for (let i = 0; i < like.length; i++) {
    like[i].addEventListener("click", function () {
      if (like[i].style.color == "red") {
        like[i].style.color = "black";
        
      } else {
        like[i].style.color = "red";
      }
    });
  }
  for (let i = 0; i < trashIcon.length; i++) {
    trashIcon[i].addEventListener("click", function () {
      trashIcon[i].parentElement.remove();
      total();
    });
  }
  function total() {
    let prix = document.querySelectorAll(".prix");
    let qtes = document.querySelectorAll(".qte");
    let totalprice = 0;
    for (let i = 0; i < prix.length; i++) {
      totalprice = totalprice + qtes[i].innerHTML * prix[i].innerHTML;
    }
    document.getElementById("total").innerHTML = totalprice;
  }
  // Buy button work
  document
    .getElementsByClassName("btn btn-success")[0]
    .addEventListener("click", buyButtonClicked);
    function buyButtonClicked(){
        alert('Your order is placed');
        
    }
document
    .getElementsByClassName("btn btn-danger")[0]
    .addEventListener("click", deletButtonClicked);
    function deletButtonClicked(){
        document.getElementById("total").innerHTML = null;
    }
    let heart=document.querySelector("fa-solid fa-cart-plus cart");
    heart.addEventListener('click',()=>heart.style.backgroundcolor="red")