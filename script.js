const lista = document.getElementById('tarefas')
const del = document.getElementsByTagName('button')[0]
const popUp1 = document.getElementsByTagName('dialog')[0]
const popUp2 = document.getElementsByTagName('dialog')[1]
const popUp3 = document.getElementsByTagName('dialog')[2]

let verificador = 0

function apagar(){
    verificador = 1
    console.log('ooo')
}
function naoApagar(){
    verificador = 2
}

function add() {
    verificador = 3

    const divTarefa = document.createElement('div')
    divTarefa.classList.add('divTarefa')
    
    const textArea = document.createElement('textarea')
    textArea.classList.add('tarefa')
    textArea.placeholder = 'Digite sua tarefa...'
    textArea.maxLength = 100
    textArea.style.height = 'auto'
    
    const check = document.createElement('input')
    check.setAttribute('type', 'checkbox')
    check.classList.add('check')
    
    divTarefa.appendChild(textArea)
    divTarefa.appendChild(check)
    
    lista.appendChild(divTarefa)
    textArea.focus()
    
    check.addEventListener('click', function(){
        if (check.checked) {
            textArea.style.textDecoration = 'line-through'
            textArea.style.color = 'rgb(77, 77, 77)'
            textArea.style.backgroundColor = 'rgb(26, 0, 51)'
        }else{
            textArea.style.textDecoration = 'none'
            textArea.style.color = 'white'
            textArea.style.backgroundColor = 'rgb(66, 0, 128)'
        }
    })

        if(check.checked){
            if(verificador == 1){
                divTarefa.remove()
                popUp3.close()
            }
            else if(verificador == 2){
                 popUp3.close()
            }
        }
}