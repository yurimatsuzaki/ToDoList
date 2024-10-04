const listaTarefas = document.getElementById('listaTarefas')
const areaBtn = document.getElementById('areaBtn')

const popUp1 = document.getElementsByTagName('dialog')[0]
const popUp2 = document.getElementsByTagName('dialog')[1]
const popUp3 = document.getElementsByTagName('dialog')[2]
const popUp4 = document.getElementsByTagName('dialog')[3]
const BtnOK1 = document.getElementsByClassName('ok')[0]
const BtnOK2 = document.getElementsByClassName('ok')[1]
const BtnOK3 = document.getElementsByClassName('ok')[2]
const BtnSIM = document.getElementById('simDel')
const BtnNAO = document.getElementById('naoDel')

function criarDivTarefa(){
    const ckBox = document.createElement('input').setAttribute('type', 'checkbox').classList.add('check')
    
    const txtArea = document.createElement('textarea').classList.add('tarefa')
    txtArea.placeholder = 'Digite sua tarefa...'
    txtArea.maxLength = 500
    
    const divTarefa = document.createElement('div').classList.add('divTarefa')

    divTarefa.appendChild(txtArea)
    divTarefa.appendChild(ckBox)
    listaTarefas.appendChild(divTarefa)
}

function criarBtnSalvar(){
    const btnSalvar = document.createElement('button').innerText = 'Salvar'
    btnSalvar.classList.add('salvar')

    return btnSalvar
}

function salvarTarefa(){
    const salvarBtn = criarBtnSalvar()

    salvarBtn.onclick = function(){
        
    }
}



/*
let controlhe = 0
let controlhe2 = 0
let armazem = []
let armazem2 = []
let divTask2
const ck2 = checkbox()
const AreaTexto1 = AreaTexto()
const divTask = div()
const ck = checkbox()
const salvarTarefa = salve()
const textArea = AreaTexto()

window.addEventListener('load', function(){
    for(let i = 0; i < localStorage.length; i++){
        let chave = localStorage.key(i)
        armazem2.push(chave)

        let tarefa = String(armazem2[i])
        
        divTask.classList.add('divTarefa')
        
        textArea.classList.add('tarefa')
        textArea.value = localStorage.getItem(tarefa)
        textArea.maxLength = 100
        
        ck.setAttribute('type', 'checkbox')
        ck.classList.add('check')
        
        divTask.appendChild(textArea)
        divTask.appendChild(ck)
        lista.appendChild(divTask)
        
        input()
        deletar()
    }
})

function salvarTask(){
    salvarTarefa.onclick = function(){
        if(textArea.value.length == 0){
            popUp2.showModal()
            
            BtOK2.onclick = function(){
            popUp2.close()
            }
        }else{
            armazem2.push(`task_${String(textArea.value)}`)
            localStorage.setItem(`task_${String(textArea.value)}`, String(textArea.value))
            salvarTarefa.remove()
            controlhe2 = 0
        }
    }
}

function input(){
    ck.addEventListener('click', function(){
    if (ck.checked == true) {
        textArea.style.textDecoration = 'line-through'
        textArea.style.color = 'white'
        textArea.style.backgroundColor = '#42008093'

        divTask.classList.add('marcado')
        ck.classList.add('checado')

        armazem.push(`task_${String(textArea.value)}`)
        
        ck2.checked = true
    }else{
        textArea.style.textDecoration = 'none'
        textArea.style.color = 'white'
        textArea.style.backgroundColor = 'rgb(66, 0, 128)'

        let indice = armazem.indexOf(`task_${String(textArea.value)}`)
        console.log(indice)
        armazem.splice(indice)
        console.log(armazem)

        divTask.classList.remove('marcado')
        ck.classList.remove('checado')
    }
})
}

    function deletar(){
    del.addEventListener('click', function(){
    let divMarcada = document.querySelectorAll('div.divTarefa.marcado')
    let ckMarcado = document.querySelectorAll('input.check.checado')
    
    if(ck.checked == true){
        popUp3.showModal()
        BtSIM.onclick = function(){
            for(let task of armazem){
                localStorage.removeItem(`${task}`)
            }
            divMarcada.forEach(divMarcada => {
                divMarcada.remove()
            })
            ckMarcado.forEach(ckMarcado => {
                ckMarcado.checked = false
            })
            salvarTarefa.remove()
            controlhe2 = 0
            popUp3.close()
            ck2.checked = false
        }
        BtNAO.onclick = function(){                 
            popUp3.close()
            ck.checked = true
        }
    }
})
}

function div(){
    const divTarefa = document.createElement('div')
    return divTarefa
}

function checkbox(){
    const check  = document.createElement('input')
    return check
}

function AreaTexto(){
    const textArea = document.createElement('textarea')
    return textArea
}

function salve(){
    const salvar = document.createElement('button')
    salvar.innerText = 'Salvar'
    
    return salvar
}

function add() {
    const divTask3 = div()
    const ck3 = checkbox()
    const salvarTarefa3 = salve()
    const textArea3 = AreaTexto()
    
    divTask3.classList.add('divTarefa')
    
    textArea3.classList.add('tarefa')
    textArea3.placeholder = 'Digite sua tarefa...'
    textArea3.maxLength = 100
    
    ck3.setAttribute('type', 'checkbox')
    ck3.classList.add('check')
    
    if(controlhe2 == 1){
        popUp4.showModal()
        
        BtOK3.onclick = function(){
            popUp4.close()
        }
    }else{
        salvarTarefa3.classList.add('salvar')
        
        divTask3.appendChild(textArea3)
        divTask3.appendChild(ck3)
        
        lista.appendChild(divTask3)
        textArea3.focus()
        
        adicionar.appendChild(salvarTarefa3)
        controlhe2 = 1
        
        salvarTask()
        
        input()
        
        deletar()
        
        divTask2 = divTask3
    }
}

del.addEventListener('click', function(){
    if(ck2.checked == false){
        popUp1.showModal()
        BtOK1.onclick = function(){
            popUp1.close()
        }
    }   
})*/