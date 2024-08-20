let corConfig = document.getElementById("corSelectConfig");
let corConteudo = document.getElementById("corSelectConteudo");
let corTexto = document.getElementById("corSelectTexto");

let defPreConfig = document.getElementById("defPreConfig");
let defPreConteudo = document.getElementById("defPreConteudo");
let texto = document.getElementById("texto");

corConfig.addEventListener("input", function(){
    defPreConfig.style.backgroundColor = this.value;
});

corConteudo.addEventListener("input", function(){
    defPreConteudo.style.backgroundColor = this.value;
});

corTexto.addEventListener("input", function(){
    texto.style.color = this.value;
});

let corPre_conteudo = document.getElementsByClassName("container-pre");
let corPre_config = document.getElementsByClassName("pre");
let corPre_text = document.getElementsByClassName("pre-text");

let button = document.getElementById("button");

function verificarIndice(){
    let i = document.getElementById("select-indice").value - 1;
    i = parseInt(i);
    corPre_conteudo[i].style.backgroundColor = corConteudo.value;
    corPre_config[i].style.backgroundColor = corConfig.value;
    corPre_text[i].style.backgroundColor = corTexto.value;
}

function rgbParaHex(rgb){
    let regex = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
    let matches = rgb.match(regex);

    let r = parseInt(matches[1]);
    let g = parseInt(matches[2]);
    let b = parseInt(matches[3]);

    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

button.addEventListener('click',()=>{
    verificarIndice();
});

corPre_conteudo[0].addEventListener('click',()=>{
    if(corPre_conteudo[0].style.backgroundColor != ""){
        defPreConteudo.style.backgroundColor = corPre_conteudo[0].style.backgroundColor;
        defPreConfig.style.backgroundColor = corPre_config[0].style.backgroundColor;
        texto.style.color = corPre_text[0].style.backgroundColor;
        corConteudo.value = rgbParaHex(corPre_conteudo[0].style.backgroundColor);
        corConfig.value = rgbParaHex(corPre_config[0].style.backgroundColor);
        corTexto.value = rgbParaHex(corPre_text[0].style.backgroundColor);
    }else{
        alert("Defina uma cor antes.");
    }
});

corPre_conteudo[1].addEventListener('click',()=>{
    if(corPre_conteudo[1].style.backgroundColor != ""){
        defPreConteudo.style.backgroundColor = corPre_conteudo[1].style.backgroundColor;
        defPreConfig.style.backgroundColor = corPre_config[1].style.backgroundColor;
        texto.style.color = corPre_text[1].style.backgroundColor;
        corConteudo.value = rgbParaHex(corPre_conteudo[1].style.backgroundColor);
        corConfig.value = rgbParaHex(corPre_config[1].style.backgroundColor);
        corTexto.value = rgbParaHex(corPre_text[1].style.backgroundColor);
    }else{
        alert("Defina uma cor antes.");
    }
});

corPre_conteudo[2].addEventListener('click',()=>{
    if(corPre_conteudo[2].style.backgroundColor != ""){
        defPreConteudo.style.backgroundColor = corPre_conteudo[2].style.backgroundColor;
        defPreConfig.style.backgroundColor = corPre_config[2].style.backgroundColor;
        texto.style.color = corPre_text[2].style.backgroundColor;
        corConteudo.value = rgbParaHex(corPre_conteudo[2].style.backgroundColor);
        corConfig.value = rgbParaHex(corPre_config[2].style.backgroundColor);
        corTexto.value = rgbParaHex(corPre_text[2].style.backgroundColor);
    }else{
        alert("Defina uma cor antes.");
    }
});

corPre_conteudo[3].addEventListener('click',()=>{
    if(corPre_conteudo[3].style.backgroundColor != ""){
        defPreConteudo.style.backgroundColor = corPre_conteudo[3].style.backgroundColor;
        defPreConfig.style.backgroundColor = corPre_config[3].style.backgroundColor;
        texto.style.color = corPre_text[3].style.backgroundColor;
        corConteudo.value = rgbParaHex(corPre_conteudo[3].style.backgroundColor);
        corConfig.value = rgbParaHex(corPre_config[3].style.backgroundColor);
        corTexto.value = rgbParaHex(corPre_text[3].style.backgroundColor);
    }else{
        alert("Defina uma cor antes.");
    }
});

corPre_conteudo[4].addEventListener('click',()=>{
    if(corPre_conteudo[4].style.backgroundColor != ""){
        defPreConteudo.style.backgroundColor = corPre_conteudo[4].style.backgroundColor;
        defPreConfig.style.backgroundColor = corPre_config[4].style.backgroundColor;
        texto.style.color = corPre_text[4].style.backgroundColor;
        corConteudo.value = rgbParaHex(corPre_conteudo[4].style.backgroundColor);
        corConfig.value = rgbParaHex(corPre_config[4].style.backgroundColor);
        corTexto.value = rgbParaHex(corPre_text[4].style.backgroundColor);
    }else{
        alert("Defina uma cor antes.");
    }
});

corPre_conteudo[5].addEventListener('click',()=>{
    if(corPre_conteudo[5].style.backgroundColor != ""){
        defPreConteudo.style.backgroundColor = corPre_conteudo[5].style.backgroundColor;
        defPreConfig.style.backgroundColor = corPre_config[5].style.backgroundColor;
        texto.style.color = corPre_text[5].style.backgroundColor;
        corConteudo.value = rgbParaHex(corPre_conteudo[5].style.backgroundColor);
        corConfig.value = rgbParaHex(corPre_config[5].style.backgroundColor);
        corTexto.value = rgbParaHex(corPre_text[5].style.backgroundColor);
    }else{
        alert("Defina uma cor antes.");
    }
});

corPre_conteudo[6].addEventListener('click',()=>{
    if(corPre_conteudo[6].style.backgroundColor != ""){
        defPreConteudo.style.backgroundColor = corPre_conteudo[6].style.backgroundColor;
        defPreConfig.style.backgroundColor = corPre_config[6].style.backgroundColor;
        texto.style.color = corPre_text[6].style.backgroundColor;
        corConteudo.value = rgbParaHex(corPre_conteudo[6].style.backgroundColor);
        corConfig.value = rgbParaHex(corPre_config[6].style.backgroundColor);
        corTexto.value = rgbParaHex(corPre_text[6].style.backgroundColor);
    }else{
        alert("Defina uma cor antes.");
    }
});

corPre_conteudo[7].addEventListener('click',()=>{
    if(corPre_conteudo[7].style.backgroundColor != ""){
        defPreConteudo.style.backgroundColor = corPre_conteudo[7].style.backgroundColor;
        defPreConfig.style.backgroundColor = corPre_config[7].style.backgroundColor;
        texto.style.color = corPre_text[7].style.backgroundColor;
        corConteudo.value = rgbParaHex(corPre_conteudo[7].style.backgroundColor);
        corConfig.value = rgbParaHex(corPre_config[7].style.backgroundColor);
        corTexto.value = rgbParaHex(corPre_text[7].style.backgroundColor);
    }else{
        alert("Defina uma cor antes.");
    }
});

corPre_conteudo[8].addEventListener('click',()=>{
    if(corPre_conteudo[8].style.backgroundColor != ""){
        defPreConteudo.style.backgroundColor = corPre_conteudo[8].style.backgroundColor;
        defPreConfig.style.backgroundColor = corPre_config[8].style.backgroundColor;
        texto.style.color = corPre_text[8].style.backgroundColor;
        corConteudo.value = rgbParaHex(corPre_conteudo[8].style.backgroundColor);
        corConfig.value = rgbParaHex(corPre_config[8].style.backgroundColor);
        corTexto.value = rgbParaHex(corPre_text[8].style.backgroundColor);
    }else{
        alert("Defina uma cor antes.");
    }
});

corPre_conteudo[9].addEventListener('click',()=>{
    if(corPre_conteudo[9].style.backgroundColor != ""){
        defPreConteudo.style.backgroundColor = corPre_conteudo[9].style.backgroundColor;
        defPreConfig.style.backgroundColor = corPre_config[9].style.backgroundColor;
        texto.style.color = corPre_text[9].style.backgroundColor;
        corConteudo.value = rgbParaHex(corPre_conteudo[9].style.backgroundColor);
        corConfig.value = rgbParaHex(corPre_config[9].style.backgroundColor);
        corTexto.value = rgbParaHex(corPre_text[9].style.backgroundColor);
    }else{
        alert("Defina uma cor antes.");
    }
});

corPre_conteudo[10].addEventListener('click',()=>{
    if(corPre_conteudo[10].style.backgroundColor != ""){
        defPreConteudo.style.backgroundColor = corPre_conteudo[10].style.backgroundColor;
        defPreConfig.style.backgroundColor = corPre_config[10].style.backgroundColor;
        texto.style.color = corPre_text[10].style.backgroundColor;
        corConteudo.value = rgbParaHex(corPre_conteudo[10].style.backgroundColor);
        corConfig.value = rgbParaHex(corPre_config[10].style.backgroundColor);
        corTexto.value = rgbParaHex(corPre_text[10].style.backgroundColor);
    }else{
        alert("Defina uma cor antes.");
    }
});

corPre_conteudo[11].addEventListener('click',()=>{
    if(corPre_conteudo[11].style.backgroundColor != ""){
        defPreConteudo.style.backgroundColor = corPre_conteudo[11].style.backgroundColor;
        defPreConfig.style.backgroundColor = corPre_config[11].style.backgroundColor;
        texto.style.color = corPre_text[11].style.backgroundColor;
        corConteudo.value = rgbParaHex(corPre_conteudo[11].style.backgroundColor);
        corConfig.value = rgbParaHex(corPre_config[11].style.backgroundColor);
        corTexto.value = rgbParaHex(corPre_text[11].style.backgroundColor);
    }else{
        alert("Defina uma cor antes.");
    }
});

corPre_conteudo[12].addEventListener('click',()=>{
    if(corPre_conteudo[12].style.backgroundColor != ""){
        defPreConteudo.style.backgroundColor = corPre_conteudo[12].style.backgroundColor;
        defPreConfig.style.backgroundColor = corPre_config[12].style.backgroundColor;
        texto.style.color = corPre_text[12].style.backgroundColor;
        corConteudo.value = rgbParaHex(corPre_conteudo[12].style.backgroundColor);
        corConfig.value = rgbParaHex(corPre_config[12].style.backgroundColor);
        corTexto.value = rgbParaHex(corPre_text[12].style.backgroundColor);
    }else{
        alert("Defina uma cor antes.");
    }
});

corPre_conteudo[13].addEventListener('click',()=>{
    if(corPre_conteudo[13].style.backgroundColor != ""){
        defPreConteudo.style.backgroundColor = corPre_conteudo[13].style.backgroundColor;
        defPreConfig.style.backgroundColor = corPre_config[13].style.backgroundColor;
        texto.style.color = corPre_text[13].style.backgroundColor;
    }else{
        alert("Defina uma cor antes.");
    }
});