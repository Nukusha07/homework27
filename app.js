var x = document.getElementById("btn");
x.style.background = "blue"
x.style.color = "white"
x.style.width = "140px"
x.style.fontSize = "20px"
x.style.height = "60px"
x.style.zIndex = "4"
x.style.borderRadius = "50%"
after = document.getElementById("after_button")
function myFunction() {
    var x = document.getElementById("btn");
    x.remove();
    after.textContent = "why delete me -_- ?"
    after.style.fontSize = "25px"
    after.style.position = "absolute"
}
/////////////////////////////////1/////////////////////////////////////////
var elem = document.createElement("img");
elem.setAttribute("src", "https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_a_Front_End_Developer.jpg");
elem.setAttribute("height", "60%");
elem.setAttribute("width", "40%");
elem.setAttribute("alt", "Flower");
elem.style.position = "relative"
elem.style.left= "20%"
elem.style.borderRadius = "30%"
document.body.appendChild(elem);

/////////////////////////////////2//////////////////////////////////////////
const input = document.querySelector("input");
const log = document.getElementById("log");
const save = document.getElementById("log1")
input.addEventListener("change", updateValue);


function updateValue(e) {
  log.textContent = e.target.value;
}
//////////////////////////////////2/////////////////////////////////////////
var savedInformation = []; 

function saveInformation() {
  var inputElement = document.getElementById("myInput");
  var inputValue = inputElement.value;

  savedInformation.push(inputValue);
  inputElement.value = ""; 

  updateSavedList();
}

function updateSavedList() {
  var savedList = document.getElementById("savedList");
  savedList.innerHTML = ""; 

  savedInformation.forEach(function(item) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    savedList.appendChild(li);
  });
}
const productData = [{product_id: 1, amount: 200}, { product_id: 2, amount: 300 }, { product_id:3, amount: 500 }] 
const selectedProduct1 = productData.find(item => item.product_id === 1);
const amount1 = selectedProduct1.amount
const selectedProduct2 = productData.find(item => item.product_id === 2);
const amount2 = selectedProduct2.amount
sum = 0; 
function geatherProductSum (a , b){
    sum +=a+b

    var totalPriceElement = document.getElementById("twoProductSum");
    totalPriceElement.textContent = "total price $" + sum;   
  }
console.log(geatherProductSum(amount1 , amount2))
console.log(sum)

