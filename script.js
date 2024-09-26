const lista = document.getElementById('tarefas')
const adicionar = document.getElementById('adicionar')
const del = document.getElementsByTagName('button')[0]
const popUp1 = document.getElementsByTagName('dialog')[0]
const popUp2 = document.getElementsByTagName('dialog')[1]
const popUp3 = document.getElementsByTagName('dialog')[2]
const popUp4 = document.getElementsByTagName('dialog')[3]
const BtOK1 = document.getElementsByClassName('ok')[0]
const BtOK2 = document.getElementsByClassName('ok')[1]
const BtOK3 = document.getElementsByClassName('ok')[2]
const BtSIM = document.getElementById('sim')
const BtNAO = document.getElementById('nao')
let controlhe = 0
let controlhe2 = 0
let armazem = []

function div(){
    const divTarefa = document.createElement('div')
    return divTarefa
}

function checkbox(){
    const check  = document.createElement('input')
    return check
}

function salve(){
    const salvar = document.createElement('button')
    salvar.innerText = 'Salvar'
    
    return salvar
}

function add() {
    const divTask = div()
    const ck = checkbox()
    const salvarTarefa = salve()
    const textArea = document.createElement('textarea')
    
    divTask.classList.add('divTarefa')
    
    textArea.classList.add('tarefa')
    textArea.placeholder = 'Digite sua tarefa...'
    textArea.maxLength = 100
    
    ck.setAttribute('type', 'checkbox')
    ck.classList.add('check')
    
    if(controlhe2 == 1){
        popUp4.showModal()
        BtOK3.onclick = function(){
            popUp4.close()
        }
    }else{
    salvarTarefa.classList.add('salvar')
    
    divTask.appendChild(textArea)
    divTask.appendChild(ck)

    lista.appendChild(divTask)
    textArea.focus()

    adicionar.appendChild(salvarTarefa)
    controlhe2 = 1
    
    salvarTarefa.onclick = function(){
        if(textArea.value.length == 0){
            popUp2.showModal()
            
            BtOK2.onclick = function(){
                popUp2.close()
            }
        }
        else{
            armazem.push(String(textArea.value))
            console.log(armazem[controlhe])
            controlhe++
            localStorage.setItem(`tarefa${controlhe}`, armazem[controlhe-1])
            salvarTarefa.remove()
            controlhe2 = 0
        }
    }
    
    ck.addEventListener('click', function(){
        if (ck.checked == true) {
            textArea.style.textDecoration = 'line-through'
            textArea.style.color = 'white'
            textArea.style.backgroundColor = '#42008093'

            divTask.classList.add('marcado')
            ck.classList.add('checado')
            
            ck2.checked = true
        }else{
            textArea.style.textDecoration = 'none'
            textArea.style.color = 'white'
            textArea.style.backgroundColor = 'rgb(66, 0, 128)'

            divTask.classList.remove('marcado')
            ck.classList.remove('checado')
        }
    })

    del.addEventListener('click', function(){
        let divMarcada = document.querySelectorAll('div.divTarefa.marcado')
        let ckMarcado = document.querySelectorAll('input.check.checado')
        
        if(ck.checked == true){
            popUp3.showModal()
            BtSIM.onclick = function(){
                divMarcada.forEach(divMarcada => {
                    divMarcada.remove()
                })
                ckMarcado.forEach(ckMarcado => {
                    ckMarcado.checked = false
                })
                ck2.checked = false
                salvarTarefa.remove()
                controlhe2 = 0
                popUp3.close()

                localStorage.removeItem(`tarefa${controlhe}`)
            }
            BtNAO.onclick = function(){                 
                popUp3.close()
                ck.checked = true
            }
        }
    })
    divTask2 = divTask
}
}

var divTask2
const ck2 = checkbox()

del.addEventListener('click', function(){
    if(ck2.checked == false){
        popUp1.showModal()
        BtOK1.onclick = function(){
            popUp1.close()
        }
    }   
})