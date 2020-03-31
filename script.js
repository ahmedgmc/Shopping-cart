const tot = document.getElementById('total');


function increase(id, prix, ctn, chec) {
    let inp = document.getElementById(id);
    let val = parseInt(inp.value);
    val++;
    inp.value = val;
    // inc du prix
    let price = document.getElementById(prix);
    price.innerHTML = `${ctn*val}$`;
    // on inc, tot increase
    let checkitem = document.getElementById(chec);
    console.log(checkitem);
    if (checkitem.checked) {
        tot.innerHTML = `${parseInt(tot.innerHTML)+ctn}`

    }



}

function decrease(id, prix, ctn, chec) {
    let inp = document.getElementById(id);
    let val = parseInt(inp.value);

    if (val != 0) {
        val--;


    } else inp.value = 0;
    inp.value = val;


    // dec du prix
    let price = document.getElementById(prix);
    if (val > 0) { price.innerHTML = `${ctn*val}$` }
    // on dec, tot decrease
    let checkitem = document.getElementById(chec);

    if (checkitem.checked) {
        let sum = parseInt(tot.innerHTML)
            // Mission ()
        if (val <= 1) {
            tot.innerHTML = `${sum-(2*ctn*val)}`;
        } else tot.innerHTML = `${sum-ctn}`;

    }


}
// Total
function total(chec, prix, inp) {
    let checkitem = document.getElementById(chec);
    let price = document.getElementById(prix);
    let input = document.getElementById(inp);
    if (checkitem.checked) {


        let sum = parseInt(tot.innerHTML) + parseInt(price.innerHTML);
        tot.innerHTML = `${sum}`;

    } else {
        if (input.value > 0) {

            let sum = parseInt(tot.innerHTML) - parseInt(price.innerHTML);
            tot.innerHTML = `${sum}`;
            input.value = '0'
            price.innerHTML = '0$'
        } else price.innerHTML = '0$'


    }

}

let heart = document.getElementsByClassName("heart")
console.log(heart)
for (let p of heart) {
    p.addEventListener('click', red)



    function red(event) {
        for (let i = 0; i < heart.length; i++) {
            p.classList.toggle('heart-color')
        }
    }
}