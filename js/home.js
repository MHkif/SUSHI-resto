let cart = document.querySelector("#test");

var menu = document.getElementById("nav-links");
function show() {
  menu.style.display = "block";
  setTimeout(function () {
    menu.style.right = "0";
  }, 0.1);
}
function hide() {
  menu.style.right = "-200px";
  setTimeout(function () {
    menu.style.display = "none";
  }, 1000);
}

var totalg = 0;
function updateTotal() {
    document.getElementById("prixT").innerText = totalg;
}
function add(image, title, price, id) {
  let exist = cart.querySelector("#" + id + "C");

  if (exist) {
    let qtty =exist.querySelector(".qtty")

    qtty.innerText = eval(qtty.innerText +"+1")



  } else {
    let prod = document.createElement("div");
    prod.classList.add("prod");
    prod.id = id + "C";
    prod.innerHTML = `<img class="imagePlat" src="${image}" alt="if there is no image [Ghayarha]">
 <div class="detailsPlat">
   <span class="platsName">${title}</span>
   <div class="price_section">
     <span class="price">${price} </span>
     <div class="priceIcons">
     <a  onclick="counter('+', ${price},this)" <i class="fa-solid fa-circle-plus" style="color: #ff2828"></i> </a>
     <span class="qtty">1</span>
     <a   onclick="counter('-', ${price},this)"  <i class="fa-solid fa-circle-minus" style="color: #ff2828"></i> </a>
     </div>
   </div>
 </div>`;
    cart.appendChild(prod);
  }

  totalg += price;
  updateTotal()
  


}

const valider = document.getElementById("valider");

function alertTotal(e) {
  alert("Total :" + totalg);
}

valider.addEventListener("click", alertTotal);

var select1 = document.querySelector("select");
var cols;
function test() {
  if (select1.options[select1.selectedIndex].text == "Toutes les categories") {
    cols = document.getElementsByClassName("pro");
    for (let i = 0; i < cols.length; i++) {
      cols[i].style.display = "flex";
    }
  }
  if (select1.options[select1.selectedIndex].text == "Salades") {
    for (let i = 0; i < cols.length; i++) {
      cols[i].style.display = "none";
    }
    cols = document.getElementsByClassName("salade");
    for (let i = 0; i < cols.length; i++) {
      cols[i].style.display = "flex";
    }
  }
  if (select1.options[select1.selectedIndex].text == "Roll") {
    for (let i = 0; i < cols.length; i++) {
      cols[i].style.display = "none";
    }
    cols = document.getElementsByClassName("roll");
    for (let i = 0; i < cols.length; i++) {
      cols[i].style.display = "flex";
    }
  }
  if (select1.options[select1.selectedIndex].text == "Juices") {
    for (let i = 0; i < cols.length; i++) {
      cols[i].style.display = "none";
    }
    cols = document.getElementsByClassName("juice");
    for (let i = 0; i < cols.length; i++) {
      cols[i].style.display = "flex";
    }
  }
  if (select1.options[select1.selectedIndex].text == "Plats") {
    for (let i = 0; i < cols.length; i++) {
      cols[i].style.display = "none";
    }
    cols = document.getElementsByClassName("plat");
    for (let i = 0; i < cols.length; i++) {
      cols[i].style.display = "flex";
    }
  }
}

//total
function counter(counter, price,e) {

  let qtty = e.parentElement.querySelector(".qtty")


  if (counter == "+") {
    qtty.innerText = eval(qtty.innerText + "+1")
    totalg += price;
} else if (counter == "-" && qtty.innerText > "1" ) {
      qtty.innerText = eval(qtty.innerText + "-1")
       totalg -= price;
  }
  updateTotal()
}
