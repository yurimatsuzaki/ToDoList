const btnAdd = document.getElementById('btnAdd')
const btnSave = document.getElementById('btnSave')
const AreaTask = document.getElementById('listaTarefas')
const DivTask = document.createElement('div')
const Check = document.createElement('input').setAttribute('type', 'checkbox')
const TextArea = document.createElement('textarea')
const cBoxs = document.querySelectorAll('input#ck')

function add(){
    AreaTask.insertAdjacentHTML("beforeend", '<div class="divTarefa"><textarea placeholder="Digite sua tarefa..." class="tarefa" id="salveTask" onfocus="SaveEdition()" oninput="SaveEdition()"></textarea><input type="checkbox" id="ck"></div>')
    
    btnAdd.style.display='none'
    btnSave.style.display='inline'
}

function save(){
    const txtArea = document.getElementById('salveTask')
    if(txtArea.value.length  == 0){
        alert('digite algo')
    }else{
        btnAdd.style.display='inline'
        btnSave.style.display='none'
        txtArea.removeAttribute("id")
    }
}

function SaveEdition(){
    btnAdd.style.display='none'
    btnSave.style.display='inline'
    
    btnSave.addEventListener('click', function(){
        btnAdd.style.display='inline'
        btnSave.style.display='none'
    })
}

function del(){
    const checkboxDEL = document.getElementById('ck')
    const container = checkboxDEL.closest('.divTarefa')
    if(checkboxDEL.checked){
        container.remove()
        btnAdd.style.display='inline'
        btnSave.style.display='none'
    }else{
        alert("selecione algo")
    }
}

cBoxs.forEach(ckBoxs => {
    const container = ckBoxs.closest('.divTarefa')
    const txtAreaMARK = container.querySelector('textarea.tarefa')
    ckBoxs.addEventListener('change', function(){
        if(ckBoxs.checked){
            txtAreaMARK.classList.add('taskMarcada')
        }else{
            txtAreaMARK.classList.remove('taskMarcada')
        }
    })
})

/*function markTask(){
    const checkboxMARK = document.getElementById('ck')
    const ck = container.querySelector('input#ck')
    
    if(ck.checked){
        txtAreaMARK.classList.add('taskMarcada')
        console.log('bbbb')
    }else{
        txtAreaMARK.classList.remove('taskMarcada')
    }

}*/