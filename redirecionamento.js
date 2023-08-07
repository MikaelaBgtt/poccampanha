function navigateToNextURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const nomeCampanha = urlParams.get('nome');
  const qtdeCliquesMax = parseInt(urlParams.get('cliques'));
  const links = urlParams.get('links');
  const array = links.split(',');

  let qtdeCliques = parseInt(localStorage.getItem('cliques'));
  if (isNaN(qtdeCliques) || qtdeCliques < 0) {
    qtdeCliques = 0;
  }

  const nomeCampanhaExibido = document.getElementById("nomeCampanhaExibido");
  if (nomeCampanha) {
    nomeCampanhaExibido.textContent = "Nome da campanha digitado: " + decodeURIComponent(nomeCampanha);
  } else {
    nomeCampanhaExibido.textContent = "Nenhum nome de campanha foi digitado!";
  }

  const qtdeCliquesExibida = document.getElementById("qtdeCliquesExibida");
  qtdeCliquesExibida.textContent = "Quantidade de cliques: " + qtdeCliques;

  if (qtdeCliques >= qtdeCliquesMax + 1) {
    localStorage.setItem('cliques', 0);
    window.location.href = array[0] + `?nome=${encodeURIComponent(nomeCampanha)}&cliques=${qtdeCliquesMax}&links=${links}`;
  } else {
    const proximoIndice = qtdeCliques % array.length;
    window.location.href = array[proximoIndice] + `?nome=${encodeURIComponent(nomeCampanha)}&cliques=${qtdeCliques + 1}&links=${links}`;
    localStorage.setItem('cliques', qtdeCliques + 1);
  }
}

document.addEventListener("DOMContentLoaded", navigateToNextURL);

    function getParameterByName(name) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
    }