document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const nomeCampanha = urlParams.get('nome');
  const qtdeCliquesMax = urlParams.get('cliques')
  const links = urlParams.get('links')
  array = links.split(',')
  const nomeCampanhaExibido = document.getElementById("nomeCampanhaExibido");
  if (nomeCampanha) {
    nomeCampanhaExibido.textContent = "Nome da campanha digitado: " + decodeURIComponent(nomeCampanha);
  } else {
    nomeCampanhaExibido.textContent = "Nenhum nome de campanha foi digitado!";
  }
  let qtdeCliques = localStorage.getItem('cliques');

      if (!qtdeCliques) {
        qtdeCliques = 0;
      } else {
        qtdeCliques = parseInt(qtdeCliques) + 1;
        
      }
      localStorage.setItem('cliques', qtdeCliques);
      const qtdeCliquesExibida = document.getElementById("qtdeCliquesExibida");
      qtdeCliquesExibida.textContent = "Quantidade de cliques: " + qtdeCliques;
      if (parseInt(qtdeCliques) > qtdeCliquesMax) {
        const ultimoIndice = array.length - 1;
        window.location.href = array[ultimoIndice];
      } else {
        const proximoIndice = parseInt(qtdeCliques) % array.length;
        window.location.href = array[proximoIndice];
      }
    });

    function getParameterByName(name) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
    }