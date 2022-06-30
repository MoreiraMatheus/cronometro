const tempo = document.getElementById('tempo')
const iniciar = document.querySelectorAll('.bt')[0]
const parar = document.querySelectorAll('.bt')[1]
const reset = document.querySelectorAll('.bt')[2]
const comprimento = document.querySelector('h1')

let min = 0
let sec = 0
let intervalo = Number()

const descobre_hora = new Date()
const hora = descobre_hora.getHours()
console.log(hora)
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

//caso aperte iniciar 2 vezes o botão de parar não funciona, descobrir o porquê
iniciar.addEventListener('click', () => {
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
        updateTempo(`${min}:${sec}`)
    }, 1000)
})

parar.addEventListener('click', () => {
    clearInterval(intervalo)
})

reset.addEventListener('click', resetTempo)

function resetTempo(){
    sec = 0
    min = 0
    updateTempo(`${min}:${sec}`)
}

function updateTempo(txt){
    tempo.innerText = txt
}