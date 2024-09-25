const lista = document.getElementById('tarefas')
const del = document.getElementsByTagName('button')[0]
const popUp1 = document.getElementsByTagName('dialog')[0]
const popUp2 = document.getElementsByTagName('dialog')[1]
const popUp3 = document.getElementsByTagName('dialog')[2]
const BtOK1 = document.getElementsByClassName('ok')[0]
const BtOK2 = document.getElementsByClassName('ok')[1]
const BtSIM = document.getElementById('sim')
const BtNAO = document.getElementById('nao')

function div(){
    const divTarefa = document.createElement('div')
    return divTarefa
}

function checkbox(){
    const check  = document.createElement('input')
    return check
}

function add() {
    const divTask = div()
    const ck = checkbox()
    
    divTask.classList.add('divTarefa')
    
    const textArea = document.createElement('textarea')
    textArea.classList.add('tarefa')
    textArea.placeholder = 'Digite sua tarefa...'
    textArea.maxLength = 100
    
    ck.setAttribute('type', 'checkbox')
    ck.classList.add('check')
    
    divTask.appendChild(textArea)
    divTask.appendChild(ck)

    
    lista.appendChild(divTask)
    textArea.focus()
    
    ck.addEventListener('click', function(){
        if (ck.checked == true) {
            textArea.style.textDecoration = 'line-through'
            textArea.style.color = 'white'
            textArea.style.backgroundColor = '#42008093'
            
            ck2.checked = true
        }else{
            textArea.style.textDecoration = 'none'
            textArea.style.color = 'white'
            textArea.style.backgroundColor = 'rgb(66, 0, 128)'
            
            ck2.checked = false
        }
    })
    divTask2 = divTask
}

var divTask2
const ck2 = checkbox()

del.addEventListener('click', function(){

    if(ck2.checked == true){
        popUp3.showModal()
        BtSIM.onclick = function(){
            divTask2.remove()
            popUp3.close()
            ck2.checked = false
        }
        
        BtNAO.onclick = function(){                 
            popUp3.close()
            ck2.checked = true
        }

    }
    if(ck2.checked == false){
        popUp1.showModal()
        BtOK1.onclick = function(){
            popUp1.close()
        }
    }   
})