let res = document.getElementById("res");
let opers = document.getElementsByClassName("oper");
let nums = document.getElementsByClassName("num");
let m = "";
let n = "";
let currentOp = "";
res.innerHTML = "0";

for(let i = 0; i < nums.length; i++){
	nums[i].addEventListener("click", function(){
    if(m == ""){
    	res.innerHTML ="";
    }
    res.innerHTML += nums[i].dataset.func.toString();
    m += nums[i].dataset.func.toString();
  });
}

opers[6].addEventListener("click", function(){
	n = m;
  m = "";
  res.innerHTML = "0";
  currentOp = "+";
});

opers[5].addEventListener("click", function(){
	n = m;
  m = "";
  res.innerHTML = "0";
  currentOp = "-";
});

opers[4].addEventListener("click", function(){
	n = m;
  m = "";
  res.innerHTML = "0";
  currentOp = "x";
});

opers[3].addEventListener("click", function(){
	n = m;
  m = "";
  res.innerHTML = "0";
  currentOp = "÷";
});
opers[7].addEventListener("click", function(){
	if(currentOp == "+"){
  	  res.innerHTML = parseFloat(n) + parseFloat(m);
  }else if(currentOp == "-"){
  		res.innerHTML = parseFloat(n) - parseFloat(m);
  }else if(currentOp == "x"){
  	  res.innerHTML = parseFloat(n) * parseFloat(m);
  }else if(currentOp == "÷"){
  		res.innerHTML = parseFloat(n) / parseFloat(m)
  }
  n = "";
 	m = res.innerHTML;
});


opers[0].addEventListener("click", function(){ //C
  res.innerHTML = "0";
  m = "";
  n = "";
  currentOp = "";
});







