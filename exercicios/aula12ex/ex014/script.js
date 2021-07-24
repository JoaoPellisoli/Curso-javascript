function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos}`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'imagens/foto-manha.png'
        document.body.style.background = '#d1844a'
    } else if (hora >= 12 && hora < 18 ) {
        //BOA TARDE
        document.body.style.background = '#b17c6a'
        img.src = 'imagens/foto-tarde.png'
    } else {
        //BOA NOITE
        img.src = 'imagens/foto-noite.png'
        document.body.style.background = '#243b4a'
    }
}