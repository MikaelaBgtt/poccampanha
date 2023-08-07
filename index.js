let num = 0
function gerarLink() {
  num=num+1
  const nomeCampanha = document.getElementById("nomeCampanha").value;
  const qtdeCliquesMax = document.getElementById("qtdeCliquesMax").value;
  const linksCad = document.getElementById("links").value;
  const arrayLinks = linksCad.split(',');
  if(qtdeCliquesMax == '' || linksCad == ''){
   alert('Preencha os campos obrigatórios!')

  
}else{
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
  const container = document.querySelector('#num2')
  const row = document.querySelector('.col')
  const hyper = document.createElement('a')
  const br = document.createElement('br')  
  hyper.href = linkComParametros
  container.append(hyper)
  hyper.setAttribute('style','color: white;')
  hyper.innerHTML = 'Link gerado '+num
  row.append(container)
  body.append(br)
}
}
