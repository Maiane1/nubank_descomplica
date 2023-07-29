function pegarProduto1(){
    var produto = document.getElementById("nomeProduto1").innerText;
    var valorProduto = document.getElementById("valorProduto1").innerText;
    
    adicionarProduto(produto, valorProduto.substring(2, valorProduto.length));
}

function pegarProduto2(){
    var produto = document.getElementById("nomeProduto2").innerText;
    var valorProduto = document.getElementById("valorProduto2").innerText;
    
    adicionarProduto(produto, valorProduto.substring(2, valorProduto.length));
}

function pegarProduto3(){
    var produto = document.getElementById("nomeProduto3").innerText;
    var valorProduto = document.getElementById("valorProduto3").innerText;
    
    adicionarProduto(produto, valorProduto.substring(2, valorProduto.length));
}

function pegarProduto4(){
    var produto = document.getElementById("nomeProduto4").innerText;
    var valorProduto = document.getElementById("valorProduto4").innerText;
    
    adicionarProduto(produto, valorProduto.substring(2, valorProduto.length));
}

function pegarProduto5(){
    var produto = document.getElementById("nomeProduto5").innerText;
    var valorProduto = document.getElementById("valorProduto5").innerText;
    
    adicionarProduto(produto, valorProduto.substring(2, valorProduto.length));
}

function pegarProduto6(){
    var produto = document.getElementById("nomeProduto6").innerText;
    var valorProduto = document.getElementById("valorProduto6").innerText;
    
    adicionarProduto(produto, valorProduto.substring(2, valorProduto.length));
}

function pegarProduto7(){
    var produto = document.getElementById("nomeProduto7").innerText;
    var valorProduto = document.getElementById("valorProduto7").innerText;
    
    adicionarProduto(produto, valorProduto.substring(2, valorProduto.length));
}

function pegarProduto8(){
    var produto = document.getElementById("nomeProduto8").innerText;
    var valorProduto = document.getElementById("valorProduto8").innerText;
    
    adicionarProduto(produto, valorProduto.substring(2, valorProduto.length));
}




function pegarProduto10(){
    var produto = document.getElementById("nomeProduto10").innerText;
    var valorProduto = document.getElementById("valorProduto10").innerText;
    
    adicionarProduto(produto, valorProduto.substring(2, valorProduto.length));
}

function pegarProduto11(){
    var produto = document.getElementById("nomeProduto11").innerText;
    var valorProduto = document.getElementById("valorProduto11").innerText;
    
    adicionarProduto(produto, valorProduto.substring(2, valorProduto.length));
}
function pegarProduto12(){
    var produto = document.getElementById("nomeProduto12").innerText;
    var valorProduto = document.getElementById("valorProduto12").innerText;
    
    adicionarProduto(produto, valorProduto.substring(2, valorProduto.length));
}
function pegarProduto13(){
    var produto = document.getElementById("nomeProduto13").innerText;
    var valorProduto = document.getElementById("valorProduto13").innerText;
    
    adicionarProduto(produto, valorProduto.substring(2, valorProduto.length));
}
function pegarProduto14(){
    var produto = document.getElementById("nomeProduto14").innerText;
    var valorProduto = document.getElementById("valorProduto14").innerText;
    
    adicionarProduto(produto, valorProduto.substring(2, valorProduto.length));
}
function pegarProduto15(){
    var produto = document.getElementById("nomeProduto15").innerText;
    var valorProduto = document.getElementById("valorProduto15").innerText;
    
    adicionarProduto(produto, valorProduto.substring(2, valorProduto.length));
}
function pegarProduto16(){
    var produto = document.getElementById("nomeProduto16").innerText;
    var valorProduto = document.getElementById("valorProduto16").innerText;
    
    adicionarProduto(produto, valorProduto.substring(2, valorProduto.length));
}
function pegarProduto17(){
    var produto = document.getElementById("nomeProduto17").innerText;
    var valorProduto = document.getElementById("valorProduto17").innerText;
    
    adicionarProduto(produto, valorProduto.substring(2, valorProduto.length));
}
function pegarProduto18(){
    var produto = document.getElementById("nomeProduto18").innerText;
    var valorProduto = document.getElementById("valorProduto18").innerText;
    
    adicionarProduto(produto, valorProduto.substring(2, valorProduto.length));
}
function pegarProduto19(){
    var produto = document.getElementById("nomeProduto19").innerText;
    var valorProduto = document.getElementById("valorProduto19").innerText;
    
    adicionarProduto(produto, valorProduto.substring(2, valorProduto.length));
}
function pegarProduto20(){
    var produto = document.getElementById("nomeProduto20").innerText;
    var valorProduto = document.getElementById("valorProduto20").innerText;
    
    adicionarProduto(produto, valorProduto.substring(2, valorProduto.length));
}
function pegarProduto21(){
    var produto = document.getElementById("nomeProduto21").innerText;
    var valorProduto = document.getElementById("valorProduto21").innerText;
    
    adicionarProduto(produto, valorProduto.substring(2, valorProduto.length));
}
function pegarProduto22(){
    var produto = document.getElementById("nomeProduto22").innerText;
    var valorProduto = document.getElementById("valorProduto22").innerText;
    
    adicionarProduto(produto, valorProduto.substring(2, valorProduto.length));
}
function pegarProduto23(){
    var produto = document.getElementById("nomeProduto23").innerText;
    var valorProduto = document.getElementById("valorProduto23").innerText;
    
    adicionarProduto(produto, valorProduto.substring(2, valorProduto.length));
}
function pegarProduto24(){
    var produto = document.getElementById("nomeProduto24").innerText;
    var valorProduto = document.getElementById("valorProduto24").innerText;
    
    adicionarProduto(produto, valorProduto.substring(2, valorProduto.length));
}
function pegarProduto25(){
    var produto = document.getElementById("nomeProduto25").innerText;
    var valorProduto = document.getElementById("valorProduto25").innerText;
    
    adicionarProduto(produto, valorProduto.substring(2, valorProduto.length));
}


function adicionarProduto(produto, valor){

    var dadosProduto = sessionStorage.getItem(produto);
    
    if(dadosProduto!= null){
        var soma = parseFloat(valor) + parseFloat(dadosProduto);
        sessionStorage.removeItem(produto);
        sessionStorage.setItem(produto, soma);
    }else
        sessionStorage.setItem(produto, valor);
}



