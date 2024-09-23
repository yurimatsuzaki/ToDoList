const lista = document.getElementById('tarefas')
/*
let TarefaDiv = document.querySelectorAll('div.divTarefa')
let chacar = document.querySelectorAll('input.check')
*/
const del = document.getElementsByTagName('button')[0]
const popUp1 = document.getElementsByTagName('dialog')[0]
const popUp2 = document.getElementsByTagName('dialog')[1]
const popUp3 = document.getElementsByTagName('dialog')[2]
const BtOK1 = document.getElementsByClassName('ok')[0]
const BtOK2 = document.getElementsByClassName('ok')[1]
const BtSIM = document.getElementById('sim')
const BtNAO = document.getElementById('nao')

function add() {
    const divTarefa = document.createElement('div')
    divTarefa.classList.add('divTarefa')
    
    const textArea = document.createElement('textarea')
    textArea.classList.add('tarefa')
    textArea.placeholder = 'Digite sua tarefa...'
    textArea.maxLength = 100
    
    const check  = document.createElement('input')
    check.setAttribute('type', 'checkbox')
    check.classList.add('check')
    
    divTarefa.appendChild(textArea)
    divTarefa.appendChild(check)
    
    lista.appendChild(divTarefa)
    textArea.focus()

    check.addEventListener('click', function(){
        if (check.checked) {
            textArea.style.textDecoration = 'line-through'
            textArea.style.color = 'white'
            textArea.style.backgroundColor = '#42008093'
        }else{
            textArea.style.textDecoration = 'none'
            textArea.style.color = 'white'
            textArea.style.backgroundColor = 'rgb(66, 0, 128)'
        }
    })
}


del.addEventListener('click', function(){
    if(check.checked == false){
        popUp1.showModal()

        BtOK1.onclick = function(){
            popUp1.close()
        }
    }   
    if(check.checked == true){
        popUp3.showModal()
        
        BtSIM.onclick = function(){
            divTarefa.remove()
            popUp3.close()
        }
        
        BtNAO.onclick = function(){                 
            popUp3.close()
        }
        chacar.checked = false
    }
})