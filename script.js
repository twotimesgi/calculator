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

for(let i = 3; i < 7; i++){
  opers[i].addEventListener("click", function(){
    if(currentOp == "+"){
        opers[6].style.background = "#ff911c"
        opers[6].style.color = "white";
        console.log(currentOp);
    }else if(currentOp == "-"){
      opers[5].style.background = "#ff911c"
      opers[5].style.color = "white";
      console.log(currentOp);

    }else if(currentOp == "x"){
      opers[4].style.background = "#ff911c"
      opers[4].style.color = "white";
      console.log(currentOp);
    }else if(currentOp == "÷"){
      opers[3].style.background = "#ff911c"
      opers[3].style.color = "white";
      console.log(currentOp);
    }
    n = m;
    m = "";
    res.innerHTML = "0";
    currentOp = opers[i].dataset.func.toString();
    opers[i].style.background = "white"
    opers[i].style.color = "#ff911c";
  });
}

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
  opers[0].style.animation = "flash 0.2s linear 1";
  opers[0].addEventListener("animationend",function(){
    opers[0].style.animation = "none";
  });
});

opers[1].addEventListener("click", function(){ //+/-
  if(res.innerHTML[0] != "-" && res.innerHTML[0] != "0"){
    res.innerHTML = "-" + res.innerHTML;
    m = "-" + m;
  }else if(res.innerHTML.length > 1){
      m =  m.slice(1,res.innerHTML.length);
      res.innerHTML = res.innerHTML.slice(1,res.innerHTML.length);
  }
  opers[1].style.animation = "flash 0.2s linear 1";
  opers[1].addEventListener("animationend",function(){
    opers[1].style.animation = "none";
  });
});

opers[2].addEventListener("click", function(){ //%
  m = m / 100;
  res.innerHTML = res.innerHTML/100;
  opers[2].style.animation = "flash 0.2s linear 1";
  opers[2].addEventListener("animationend",function(){
    opers[2].style.animation = "none";
  });
});





