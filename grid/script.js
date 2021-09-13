function drpdwn() {
    var x = document.getElementById("dd");

    if(x.style.display=="none"){
    (x.style.display="block");
    }

    else{
        (x.style.display="none")
    }
}

function addition() {
    let add1 = parseInt(document.getElementById("num1").value);
    let add2 = parseInt(document.getElementById("num2").value);

   add = add1 + add2;

   document.getElementById("result").innerHTML = "Result is." + add ;
}

function subtraction() {
    let sub1 = parseInt(document.getElementById("num1").value);
    let sub2 = parseInt(document.getElementById("num2").value);

    sub = sub1 - sub2;

    document.getElementById("result").innerHTML= "Result is ." + sub ;
}

function multiplication() {
    let mult1 = document.getElementById("num1").value;
    let mult2 = document.getElementById("num2").value;

    mult = mult1 * mult2 ;

    document.getElementById("result").innerHTML = "Result is ." + mult;
}

function division() {
    let div1 = document.getElementById("num1").value;
    let div2 = document.getElementById("num2").value;

    div = div1 % div2 ;
    document.getElementById("result").innerHTML = "Result is ." + div ;
}
 

function allClear() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    document.getElementById("result").innerHTML = "";
}


