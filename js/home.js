


        var menu = document.getElementById("nav-links");
        function show(){
            menu.style.display = "block";
            setTimeout(function(){
                menu.style.right = "0";
            },0.1000);
        }
        function hide(){
            menu.style.right = "-200px";
            setTimeout(function(){
                menu.style.display = "none";
            },1000);
        }
  
var totalg = 0;
var qntA;
function add(imag,title,price,qnt){
// qntA = qnt;
//  document.getElementById("test").innerHTML +=`<div class="prod">
 
//  <img class="imagePlat" src="${img}" alt="if there is no image [Ghayarha]">
//  <div class="detailsPlat">
//    <span class="platsName">${title}</span>
//    <div class="price_section">
//      <span class="price">${price} MAD</span>
//      <div class="priceIcons">
//      <a href="#test" onclick="counter('+', ${price})" <i class="fa-solid fa-circle-plus" style="color: #ff2828"></i> </a>
//      <span class="price">${qntA} </span>
//      <a href="#test" onclick="counter('-', ${price})"  <i class="fa-solid fa-circle-minus" style="color: #ff2828"></i> </a>
//      </div>
//    </div>
//  </div>
// </div>`;

var div = document.createElement("div");
div.setAttribute("class", "prod");
var img = document.createElement("img");
img.setAttribute("class", "imagePlat");
img.setAttribute("src", imag);
var detailsPlat = document.createElement("div");
detailsPlat.setAttribute("class", "detailsPlat");
var platName = document.createElement("span");
platName.setAttribute("class", "platsName");

var price_section = document.createElement("div");
price_section.setAttribute("class", "price_section");

var price1 = document.createElement("span");
price1.setAttribute("class", "price");

var priceIcons = document.createElement("div");
priceIcons.setAttribute("class", "priceIcons");

var icon = document.createElement("a");
icon.setAttribute("href", "#test");
icon.addEventListener("click",counter('+', price));

var quantity = document.createElement("span");
quantity.setAttribute("class", "price");
quantity.setAttribute("id", "priceQu");

var icon2 = document.createElement("a");
icon2.setAttribute("href", "#test");
icon2.addEventListener("click",counter('-', price));

totalg += price;
document.getElementById("prixT").innerText = totalg;

icon.innerHTML = '<i class="fa-solid fa-circle-plus" style="color: #ff2828"></i>';
icon2.innerHTML = '<i class="fa-solid fa-circle-minus" style="color: #ff2828"></i>';
quantity.innerHTML = qnt;
priceIcons.appendChild(icon);
priceIcons.appendChild(quantity);
priceIcons.appendChild(icon2);
price1.innerHTML = price + " MAD";
price_section.appendChild(price1);
price_section.appendChild(priceIcons);
platName.innerHTML = title;
detailsPlat.appendChild(platName);
detailsPlat.appendChild(price_section);
div.appendChild(img);
div.appendChild(detailsPlat);
document.getElementById("test").appendChild(div);


}



var select1 = document.querySelector("select");
var cols;
function test(){
    if(select1.options[select1.selectedIndex].text == "Toutes les categories"){
        cols = document.getElementsByClassName("pro");
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'flex';
        }
    }
    if(select1.options[select1.selectedIndex].text == "Salades"){
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'none';
        }
        cols = document.getElementsByClassName("salade");
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'flex';
        }
    }
    if(select1.options[select1.selectedIndex].text == "Roll"){
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'none';
        }
        cols = document.getElementsByClassName("roll");
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'flex';
        }
    }
    if(select1.options[select1.selectedIndex].text == "Juices"){
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'none';
        }
        cols = document.getElementsByClassName("juice");
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'flex';
        }
    }
    if(select1.options[select1.selectedIndex].text == "Plats"){
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'none';
        }
        cols = document.getElementsByClassName("plat");
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'flex';
        }
    }
}


//total
function counter(counter, price){
  console.log(counter);
//   var quantity = document.getElementById("priceQu");
  
if(counter =='+'){
//     qntA++;
//     quantity.innerText= qntA;
// totalg += price;
// }else if(counter == '-'){
//     qntA--;
//     quantity.innerText= qntA;
// totalg -= price;
}
}
