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
    if(m == "0"){
      m = ""
      res.innerHTML = "";
    }
    if(nums[i].dataset.func.toString() == "."){
      m = "0";
      res.innerHTML = "0"
    }
    res.innerHTML += nums[i].dataset.func.toString();
    m += nums[i].dataset.func.toString();
    nums[i].style.animation = "flash 0.2s linear 1";
    nums[i].addEventListener("animationend",function(){
      nums[i].style.animation = "none";
    });
  });
}

opers[6].addEventListener("click", function(){
	n = m;
  m = "";
  res.innerHTML = "0";
  currentOp = "+";
  opers[6].style.background = "white"
  opers[6].style.color = "#ff911c";
});

opers[5].addEventListener("click", function(){
	n = m;
  m = "";
  res.innerHTML = "0";
  currentOp = "-";
  opers[5].style.background = "white"
  opers[5].style.color = "#ff911c";
});

opers[4].addEventListener("click", function(){
	n = m;
  m = "";
  res.innerHTML = "0";
  currentOp = "x";
  opers[4].style.background = "white"
  opers[4].style.color = "#ff911c";
});

opers[3].addEventListener("click", function(){
	n = m;
  m = "";
  res.innerHTML = "0";
  currentOp = "÷";
  opers[3].style.background = "white"
  opers[3].style.color = "#ff911c";
});
opers[7].addEventListener("click", function(){
	if(currentOp == "+"){
  	  res.innerHTML = parseFloat(n) + parseFloat(m);
      opers[6].style.background = "#ff911c"
      opers[6].style.color = "white";
  }else if(currentOp == "-"){
  		res.innerHTML = parseFloat(n) - parseFloat(m);
      opers[5].style.background = "#ff911c"
      opers[5].style.color = "white";
  }else if(currentOp == "x"){
  	  res.innerHTML = parseFloat(n) * parseFloat(m);
      opers[4].style.background = "#ff911c"
      opers[4].style.color = "white";
  }else if(currentOp == "÷"){
  		res.innerHTML = parseFloat(n) / parseFloat(m);
      opers[3].style.background = "#ff911c"
      opers[3].style.color = "white";
  }
  n = "";
 	m = res.innerHTML;
});


opers[0].addEventListener("click", function(){ //C
  res.innerHTML = "0";
  m = "";
  n = "";
  currentOp = "";
  opers[3].style.background = "#ff911c"
  opers[3].style.color = "white";
  opers[4].style.background = "#ff911c"
  opers[4].style.color = "white";
  opers[5].style.background = "#ff911c"
  opers[5].style.color = "white";
  opers[6].style.background = "#ff911c"
  opers[6].style.color = "white";
  currentOp = "";
});

opers[1].addEventListener("click", function(){
  if(res.innerHTML[0] != "-" && res.innerHTML[0] != "0"){
    res.innerHTML = "-" + res.innerHTML;
    m = "-" + m;
  }else{
      m =  m.slice(1,res.innerHTML.length);
      res.innerHTML = res.innerHTML.slice(1,res.innerHTML.length);
  }
});






