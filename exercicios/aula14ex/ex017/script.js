function tabuada() {
    var num = document.getElementById('txtn')
    var res = document.getElementById('res')
    if (num.value.length == 0) {
        window.alert(`[ERRO] Digite um número`)
    } else {
        res.innerHTML = ` `
        n = Number(num.value)
        var c = 1
        res.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option') // criei o option aqui ao inves de criar no html
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}` //Usado mais em outras linguagens para saber o item selecionado, no JS nao se utilza muito
            res.appendChild(item) // appendChild adiciona um elemento filho que e a variavel item neste caso 
            c++
        }
    }
}