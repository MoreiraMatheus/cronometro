const tempo = document.getElementById('tempo')
const iniciar = document.querySelectorAll('.bt')[0]
const parar = document.querySelectorAll('.bt')[1]
const reset = document.querySelectorAll('.bt')[2]
const comprimento = document.querySelector('h1')
let min = 0
let sec = 0
let intervalo = Number()
let click_iniciar = false

const descobre_hora = new Date()
const hora = descobre_hora.getHours()
if(hora < 6){
    comprimento.innerText = `Agora são ${hora}H, boa madrugada`
}
else if(hora < 12){
    comprimento.innerText = `Agora são ${hora}H, bom dia`
}
else if(hora < 18){
    comprimento.innerText = `Agora são ${hora}H, boa tarde`
}
else{
    comprimento.innerText = `Agora são ${hora}H, boa noite`
}

iniciar.addEventListener('click', () => {
    if(click_iniciar == false){
        click_iniciar = true
        intervalo = setInterval(() => {
            sec++
            if(sec == 60){
                sec = 0
                min++
                if(min == 60){
                    window.alert('uau, você é muito paciente')
                    resetTempo()
                }
            }
            updateTempo()
            console.log(intervalo)
        }, 1000)
    }
})

parar.addEventListener('click', () => {
    click_iniciar = false
    clearInterval(intervalo)
})

reset.addEventListener('click', resetTempo)

function resetTempo(){
    sec = 0
    min = 0
    updateTempo()
}

function updateTempo(){
    let tempo_update = `${addZero(min)}:${addZero(sec)}`
    tempo.innerText = tempo_update
}

function addZero(num){
    if(num <= 9){
        return '0' + num
    }
    else{
        return num
    }
}