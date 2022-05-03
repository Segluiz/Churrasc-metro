let inputadulto= document.querySelector('#adultos');
let inputcriancas= document.querySelector('#criancas');
let inputduracao= document.querySelector('#duracao');
let resultado = document.querySelector('#resultado')

let botao = document.querySelector('button').addEventListener('click',()=>{
    let adultos = inputadulto.value;
    let criancas = inputcriancas.value;
    let duracao = inputduracao.value;

    let rdecarne = qcpessoa(duracao) * adultos + (qcpessoa(duracao)/ 2 * criancas);
    let rdecerveja = qcepessoa(duracao)* adultos;
    let rdebebidas = qbpessoa(duracao) * adultos + (qbpessoa(duracao) / 2 * criancas);

    resultado.innerHTML =`<p>${rdecarne} g de carne</p>`;
    resultado.innerHTML +=`<p>${rdecerveja}ml de cerveja</p>`;
    resultado.innerHTML +=`<p>${rdebebidas}ml de água ou refrigerante</p>`
    resultado.style.backgroundColor="rgb(196, 224, 248)"
    resultado.style.width="46%"
    resultado.style.borderRadius="8px"
    resultado.style.color="black"
})

function qcpessoa(duracao){
    if (duracao >= 6){
        return 650;
    } else{
        return 400
    }    
}


function qcepessoa(duracao){
    if (duracao >= 6){
        return 2000;
    } else{
        return 1200
    }    
}


function qbpessoa(duracao){
    if (duracao >= 6){
        return 1500;
    } else{
        return 1000
    }    
}



