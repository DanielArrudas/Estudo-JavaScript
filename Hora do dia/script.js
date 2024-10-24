function carregar(){
    var msg = document.getElementById('msg')
    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()
    hora = 22;
    if(minuto >= 0 && minuto < 10)
        minuto = String(`0${minuto}`)
    msg.innerHTML = `A hora atual é ${hora}:${minuto}!`
    var imagem = document.getElementById('imagem')
    var cumprimentos = document.getElementById('cumprimentos')
    if(hora >= 0 && hora < 12){
        imagem.src = "manhãRedondo.png"
        document.body.style.background = "#7cc8f8"
        cumprimentos.innerHTML = "Bom dia!"
    } else if(hora >= 12 && hora < 18){
        imagem.src = "tardeRedondo.png"
        document.body.style.background = "#fa6302"
        cumprimentos.innerHTML = "Boa tarde!"
    } else{
        imagem.src = "noiteRedondo.png"
        document.body.style.background = "#12223a"
        cumprimentos.innerHTML = "Boa noite!"
    }
}