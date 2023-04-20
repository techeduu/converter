window.onload = function (){
    let x =  document.getElementById("celsius");
    let z = document.getElementById("fahre");

    x.oninput = function (){
        z.value = (x.value * 9/5) + 32;
    };

    z.oninput =  function (){
        x.value = (z.value - 32) * (9/5);
    };
};