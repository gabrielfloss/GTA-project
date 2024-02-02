alert("Follow Me on https://github.com/gabrielfloss")

const botao = document.querySelector(".btn-plataforma");

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

const botaoEstaAberto = elementoPlataformas.classList.contains("ativo")



botao.addEventListener("click", () => {

  if(elementoPlataformas.classList.contains("ativo")){

      elementoPlataformas.classList.remove("ativo")
  }
  else {
      elementoPlataformas.classList.add("ativo")
     
  }


})