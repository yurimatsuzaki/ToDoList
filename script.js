const listaTarefas = document.getElementById('listaTarefas')
const areaBtn = document.getElementById('areaBtn')
let armazenarTarefas = []
let deletarTarefas = []
const popUp1 = document.getElementsByTagName('dialog')[0]
const popUp2 = document.getElementsByTagName('dialog')[1]
const popUp3 = document.getElementsByTagName('dialog')[2]
const popUp4 = document.getElementsByTagName('dialog')[3]
const BtnOK1 = document.getElementsByClassName('ok')[0]
const BtnOK2 = document.getElementsByClassName('ok')[1]
const BtnOK3 = document.getElementsByClassName('ok')[2]
const BtnSIM = document.getElementById('simDel')
const BtnNAO = document.getElementById('naoDel')

function criarTxtArea(){
    const txtArea = document.createElement('textarea')
    return txtArea
}

function criarCkBox(){
    const ckBox = document.createElement('input')
    return ckBox
}

function criarDivTarefa(){
    const divTarefa = document.createElement('div')
    return divTarefa
}

function criarBtnSalvar(){
    const btnSalvar = document.createElement('button')
    btnSalvar.innerText = 'Salvar'
    btnSalvar.classList.add('salvar')
    return btnSalvar
}

function salvarAlteracao(){
   
}

function add(){
    const TXTareaAdd = criarTxtArea()
    const CKboxAdd = criarCkBox()
    const DIVtarefaAdd = criarDivTarefa()
    const BTNsalvarADD = criarBtnSalvar()

    TXTareaAdd.classList.add('tarefa')
    TXTareaAdd.placeholder = 'Digite sua tarefa...'
    TXTareaAdd.maxLength = 500
    TXTareaAdd.addEventListener('input', function(){
        this.style.height = 'auto'
        this.style.height = this.scrollHeight + 'px'
    })

    CKboxAdd.setAttribute('type', 'checkbox')
    CKboxAdd.classList.add('check')

    DIVtarefaAdd.classList.add('divTarefa')
    DIVtarefaAdd.appendChild(TXTareaAdd)
    DIVtarefaAdd.appendChild(CKboxAdd)
    listaTarefas.appendChild(DIVtarefaAdd)
    TXTareaAdd.focus()
    areaBtn.appendChild(BTNsalvarADD)

    BTNsalvarADD.addEventListener('click', function(){
        if(TXTareaAdd.textLength == 0 || TXTareaAdd.value == ' ' || TXTareaAdd.value == '  '){
            alert('h')
        }else{
            BTNsalvarADD.style.display='none'
            armazenarTarefas.push(`task_${String(TXTareaAdd.value)}`)
            console.log(armazenarTarefas)
        }
    })
}