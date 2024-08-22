const index = document.getElementById("index");

for(let i = 1; i <= 14; i++){
    index.innerHTML += `<option value="${i}">${i}</option>`;
}

const preDe = document.getElementById("container-pre");

const cores = [{
    corConteudo: "#2c2c2c",
    corConfig: "#8b0000",
    corTexto: "#f5f5f5"
},{
    corConteudo: "#B87333",
    corConfig: "#4FCA50",
    corTexto: "#000000"
},{
    corConteudo: "#FF007F",
    corConfig: "#D52DFF",
    corTexto: "#FFFFFF"
},{
    corConteudo: "#C0C0C0",
    corConfig: "#2986DD",
    corTexto: "#000000"
}];

for(let i = 0; i <= index.length - 1; i++){
    preDe.innerHTML += `<div class="preConteudo"><div class="preConfig"></div><div class="preTexto-wraper"><div class="preTexto"></div></div></div>`;

    function init(conte, config, text){
        preDe.childNodes[i].style.backgroundColor = `${conte}`;
        preDe.childNodes[i].childNodes[0].style.backgroundColor = `${config}`;
        preDe.childNodes[i].childNodes[1].childNodes[0].style.backgroundColor = `${text}`;
    }

    switch(i){
        case 0:
            init(cores[i].corConteudo, cores[i].corConfig, cores[i].corTexto);
        continue;

        case 1:
            init(cores[i].corConteudo, cores[i].corConfig, cores[i].corTexto);
        continue;

        case 2:
            init(cores[i].corConteudo, cores[i].corConfig, cores[i].corTexto);
        continue;

        case 3:
            init(cores[i].corConteudo, cores[i].corConfig, cores[i].corTexto);
        break;
    }
}

const btnSalvar = document.getElementById("btnSalvar");

const preConteudo = document.querySelectorAll(".preConteudo");
const preConfig = document.querySelectorAll(".preConfig");
const preTexto = document.querySelectorAll(".preTexto");

const corConteudo = document.getElementById("corConteudo");
const corConfig = document.getElementById("corConfig");
const corTexto = document.getElementById("corTexto");

const conteudo = document.getElementById("conteudo");
const config = document.getElementById("config");
const text = document.getElementById("text-wraper");

corConteudo.addEventListener('input', ()=>{
    conteudo.style.backgroundColor = corConteudo.value;
});

corConfig.addEventListener('input', ()=>{
    config.style.backgroundColor = corConfig.value;
});

corTexto.addEventListener('input', ()=>{
    text.style.color = corTexto.value;
});

btnSalvar.addEventListener('click', ()=>{
    const indexValue = index.value - 1;
    const corConteudoValue = corConteudo.value;
    const corConfigValue = corConfig.value;
    const corTextoValue = corTexto.value;

    preConteudo[indexValue].style.backgroundColor = corConteudoValue;
    preConfig[indexValue].style.backgroundColor = corConfigValue;
    preTexto[indexValue].style.backgroundColor = corTextoValue;
});

function rgbParaHex(rgb){
    let regex = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
    let matches = rgb.match(regex);

    let r = parseInt(matches[1]);
    let g = parseInt(matches[2]);
    let b = parseInt(matches[3]);

    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

preConteudo.forEach((element, index)=>{
    element.addEventListener('click', ()=>{
        if(element.style.backgroundColor !== ""){
            conteudo.style.backgroundColor = element.style.backgroundColor;
            config.style.backgroundColor = preConfig[index].style.backgroundColor;
            text.style.color = preTexto[index].style.backgroundColor;
            corConteudo.value = rgbParaHex(element.style.backgroundColor);
            corConfig.value = rgbParaHex(preConfig[index].style.backgroundColor);
            corTexto.value = rgbParaHex(preTexto[index].style.backgroundColor);
        }else{
            alert("Defina uma cor antes!");
        }
    });
});