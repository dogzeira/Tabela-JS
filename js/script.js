let listaTarefa = []
let lista = document.querySelector('table')
let botao = document.querySelector('button')
let tarefa = document.querySelector('#idTarefa') 

console.log(document.querySelector('.teste'))

botao.addEventListener('click', function(){
    listaTarefa.push(tarefa.value)
    lista.innerHTML = `<tr>
    <th>Descrição</th>
    <th>Autor</th>
    <th>Departamento</th>
    <th>Importância</th>
  </tr>`
  console.log(document.querySelector('#idTarefa') )
    listaTarefa.forEach((item, i)=>{
        lista.innerHTML += `<tr>
        <td>${item}</td>
        <td>João Silva</td>
        <td>Departamento de Vendas</td>
        <td>Alta</td>
    </tr>`
    })
    tarefa.value = ''
})

function apagar(i){
    listaTarefa.splice(i,1)
    lista.innerHTML = ''
    listaTarefa.forEach((item, i)=>{
        lista.innerHTML += `<li>${item} <button onclick="apagar('${i}')"> X </button> </li>`
    })
}

{/* <tr>
    <td>Relatório de Vendas</td>
    <td>João Silva</td>
    <td>Departamento de Vendas</td>
    <td>Alta</td>
</tr> */}