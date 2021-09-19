function tabuada() {
    var num = document.getElementById("txtn")
    var res = document.getElementById("res")

    if (num.value.length == 0) {
        window.alert(`[ERRO] Digite um número`)
    } else {
        res.innerHTML = ` `
        var n = Number(num.value)
        for (var c = 1 ; c <= 10; c++) {
            var m = n * c
            res.innerHTML+=`${n} X ${c} = ${m} <br>`
        }
    }
}