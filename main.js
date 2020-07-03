function Calc() {
    var x,y,z,oper;
    x=prompt("Введите первое число");
    y=prompt("Введите второе число");
    oper=prompt("Введите операцию (/, *, +, -");
    
    if(oper=="+"){
      z=Number(x)+Number(y);
    }
    else if(oper=="/"){
      z=Number(x)/Number(y);
    }
    else if(oper=="*"){
      z=Number(x)*Number(y);
    }
    else if(oper=="-"){
      z=Number(x)-Number(y);
    }
    return z;
      }
      document.getElementById("answer").innerHTML =Calc();
  
  
  