const input = document.querySelector("#input");

const plusBtn = document.querySelector("#plus");

const minusBtn = document.querySelector("#minus");

const output = document.querySelector("#output");

input.addEventListener("input" , click);

function click(e){

    output.textContent = e.target.value;

}


plusBtn.addEventListener("click" , increase);
function increase(){

  output.textContent.style.fontsize() = "25px" ;

}

minusBtn.addEventListener("click" , decrease(10));

function decrease(size){

    output.textContent.style.fontsize =  size;

}
