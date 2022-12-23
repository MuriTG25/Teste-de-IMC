//funções de calculo do IMC
function calculaImc(peso,altura){
    return Math.round(peso/(Math.pow(altura,2)));
} 
function mostraImc (imcConta) {if(imcConta<18.5){return textosImc[0]}
else if (imcConta>=18.5 && imcConta<25) {return textosImc[1]}
else if (imcConta>=25 && imcConta<30) {return textosImc[2]}
else if (imcConta>=30 && imcConta<35) {return textosImc[3]}
else if (imcConta>35) {return textosImc[4]} };

//parâmetros
let nomes = ['Flávio','Júlio','Roberto','Vicente',prompt ('Qual é o seu nome?')];
let peso = [89,53,79,130,parseFloat(prompt ('Qual é seu peso?'))];
let altura = [1.65, 1.78,1.86,1.75,parseFloat(prompt ('Qual é a sua altura?(use . ao invés de ,)'))];
let textosImc = ['Você está abaixo do peso ideal','Você está no peso ideal','Você está com sobrepeso','Você está com obesidade grau 1','Você está com obesidade grau 2']
let colunatabela = ('<tr>');

//Tabela de IMC
let tabela = document.getElementById ('tabelaImc');
for (contador = 0; contador < altura.length; contador ++){
//lista dos nomes
    const listaNomes = nomes[contador]
    const linha = tabela.rows[contador + 1];
    const celula = linha.insertCell(0);
    celula.innerHTML = listaNomes;
//lista do IMC
    const imcConta = calculaImc(peso[contador],altura[contador]);
    const linha2 = tabela.rows[contador + 1];
    const celula2 = linha2.insertCell(1);
    celula2.innerHTML = imcConta;
//lista do texto do IMC
    const mostrandoImc = mostraImc(imcConta)
    const linha3 = tabela.rows[contador + 1];
    const celula3 = linha3.insertCell(2);
    celula3.innerHTML = mostrandoImc
}
