const btnSalvar = document.getElementById("btn-salvar");
const corConfig = document.getElementById("corConfig");
const corConteudo = document.getElementById("corConteudo");
const corTexto = document.getElementById("corTexto");
const defPreConteudo = document.getElementById("defPreConteudo");
const defPreConfig = document.getElementById("defPreConfig");
const defPreText = document.getElementById("defPreTexto");
const preConteudo = document.querySelectorAll(".preConteudo");
const preConfig = document.querySelectorAll(".preConfig");
const preTexto = document.querySelectorAll(".preText");

corConteudo.addEventListener('input', ()=>{
    defPreConteudo.style.backgroundColor = corConteudo.value;
});

corConfig.addEventListener('input', ()=>{
    defPreConfig.style.backgroundColor = corConfig.value;
});

corTexto.addEventListener('input', ()=>{
    defPreText.style.color = corTexto.value;
});

btnSalvar.addEventListener('click', ()=>{
    const indice = document.getElementById("selec-indice").value -1;

    preConteudo[indice].style.backgroundColor = corConteudo.value;
    preConfig[indice].style.backgroundColor = corConfig.value;
    preTexto[indice].style.backgroundColor = corTexto.value;
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
            defPreConteudo.style.backgroundColor = element.style.backgroundColor;
            defPreConfig.style.backgroundColor = preConfig[index].style.backgroundColor;
            defPreText.style.color = preTexto[index].style.backgroundColor;
            corConteudo.value = rgbParaHex(element.style.backgroundColor);
            corConfig.value = rgbParaHex(preConfig[index].style.backgroundColor);
            corTexto.value = rgbParaHex(preTexto[index].style.backgroundColor);
        }else{
            alert("Salve um cor antes de selecionar essa predefinição");
        }
    });
});