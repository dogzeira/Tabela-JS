let tabela = document.querySelector("table");
let botao = document.querySelector(".send");
let Descricao = document.querySelector("#idDescricao");
let Autor = document.querySelector("#idAutor");
let Departamento = document.querySelector("#idDepartamento");
let Importancia = document.querySelector("#idImportancia");

botao.addEventListener("click", function () {
  tabela.innerHTML += `<tr>
      <td>${Descricao.value}</td>
      <td>${Autor.value}</td>
      <td>${Departamento.value}</td>
      <td>${Importancia.value}</td>
      <td class="center-button-delete"><button class="delete"></button></td>
      </tr>`;

  Descricao.value = "";
  Autor.value = "";
  Departamento.value = "";
  Importancia.value = "";
  tabela.value = "";
});

//função para apagar 

tabela.addEventListener("click", function(event) {
  let elementoClicado = event.target;
  if (elementoClicado.classList.contains("delete")) {
      elementoClicado.parentNode.parentNode.remove();
  }
})
