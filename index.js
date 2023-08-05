function gerarLink() {
  let num = 0
  const nomeCampanha = document.getElementById("nomeCampanha").value;
  const qtdeCliquesMax = document.getElementById("qtdeCliquesMax").value;
  const linksCad = document.getElementById("links").value;
  const arrayLinks = linksCad.split(',');

  console.log("Nome da campanha digitado: " + nomeCampanha);
  console.log('Qtde cliques máxima requerida: ' + qtdeCliquesMax);
  console.log(arrayLinks);

  const linkRedirecionamento = window.location.origin + "/redirecionamento.html";
  const params = new URLSearchParams();
  params.append("nome", nomeCampanha);
  params.append("cliques", qtdeCliquesMax);
  params.append("links", linksCad);
  const linkComParametros = linkRedirecionamento + "?" + params.toString();
  console.log(linkComParametros)
  const body = document.querySelector('body')
  const hyper = document.createElement('a')
  const br = document.createElement('br')  
  hyper.href = linkComParametros
  body.append('Link gerado: '+hyper)
  body.append(br)

  
}
