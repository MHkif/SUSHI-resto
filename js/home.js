var totalg = 0;
let qntA ;
function add(img,title,price,qnt){
qntA = qnt;
if(qnt>1){
  document.getElementById("test").innerHTML +=`<div class="prod">
  <div class="qnt">
            <h4>X${qnt}</h4>
        </div>
  <img class="imagePlat" src="${img}" alt="if there is no image [Ghayarha]">
  <div class="detailsPlat">
    <span class="platsName">${title}</span>
    <div class="price_section">
      <span class="price">${price} MAD</span>
      <div class="priceIcons">
      <a href="#test" onclick="counter('+', ${price})" <i class="fa-solid fa-circle-plus" style="color: #ff2828"></i> </a>
      <span class="price">${qntA} </span>
      <a href="#test" onclick="counter('-', ${price})"  <i class="fa-solid fa-circle-minus" style="color: #ff2828"></i> </a>
      </div>
    </div>
  </div>
</div>`;
}else {
  document.getElementById("test").innerHTML +=`<div class="prod">
  <img class="imagePlat" src="${img}" alt="if there is no image [Ghayarha]">
  <div class="detailsPlat">
    <span class="platsName">${title}</span>
    <div class="price_section">
      <span class="price">${price} MAD</span>
      <div class="priceIcons">
       <a href="#test" onclick="counter('+')" <i class="fa-solid fa-circle-plus" style="color: #ff2828"></i> </a>
        <span class="price">${qnt}</span>
        <a href="#test" onclick="counter('-')"  <i class="fa-solid fa-circle-minus" style="color: #ff2828"></i> </a>
      </div>
    </div>
  </div>
</div>`;
}
totalg += price;
document.getElementById("prixT").innerText = totalg;
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
  console.log(counter)
if(counter =='+'){
qntA++;
totalg += price;
}else if(counter == '-'){
qntA--;
totalg -= price;
}
}
