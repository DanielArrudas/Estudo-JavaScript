function carregar(){
    const msg = document.getElementById('msg')
    const image = document.getElementById('image')
    const compliments = document.getElementById('compliments')

    const now = new Date()
    var hour = now.getHours()
    const minute = now.getMinutes().toString().padStart(2, '0')
    displayTime(msg, hour, minute)
    
    updatePageContent(image, hour, compliments)
}

function displayTime(msg, hour, minute){
    msg.innerHTML = `A hora atual é ${hour}:${minute}!`
}

function updatePageContent(image, hour, compliments){
    if(hour >= 0 && hour < 12){
        setHtmlContent(image, "Imagens/manhaRedondo.png", "#7cc8f8", "Bom dia!", compliments)
    } else if(hour >= 12 && hour < 18){
        setHtmlContent(image, "Imagens/tardeRedondo.png", "#fa6302", "Boa tarde!", compliments)
    } else{
        setHtmlContent(image, "Imagens/noiteRedondo.png", "#12223a", "Boa noite!", compliments)
    }
}

function setHtmlContent(image, img, color, compliment, compliments){
    image.src = img
    document.body.style.background = color
    compliments.innerHTML = compliment
}