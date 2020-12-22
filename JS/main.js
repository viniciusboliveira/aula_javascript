
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://digitalinnovation.one/"); //redireciona para o endereço em outra guia
    window.location.href = "https://digitalinnovation.one/"; //redireciona para o endereço na mesma guia
}

function trocar (elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"; //altera o texto ao passar o mouse
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"; //altera o texto ao retirar o mouse do texto
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaochange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1 + n2;
}
*/
/*
function validaIdade(idade){
    var validar = true;
    if (idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/
//alert(soma(5, 10));


/*
var d = new Date();
alert(d.getMonth()+1); //soma-se +1 para dar o mês correto
alert(d.getMinutes()); //demonstra o minuto
alert(d.getDay()); //demonstra o dia
alert(d.getHours()); //desmontra as horas
*/

/*
var count;
//enquanto a variável for menor ou igual a 5, continua somando +1
for(count=0; count <=5; count++){
    alert(count);
}
*/

/*
var count = 0;
//estrutura de repetição
while (count <5){
    console.log(count);
    //count = count + 1; //indiferente usar "count = count +1" ou "count++"
    count++;
};
*/

/*
var idade = prompt("Qual sua idade"); // comando prompt exibe uma pergunta para o usuário
//se usuário tiver 18 ou mais idade, irá exibir "maior de idade", se não, "menor de idade"
//condicional
if(idade >= 18){
    alert("maior de idade");
}
else{
    alert("menor de idade");
}
*/


/*var fruta = [{nome: "maçã", cor:"vermelha"}, {nome: "uva", cor: "roxa"}]//lista de dicionários 
console.log(fruta);
alert(fruta[1].nome);
*/

/*var fruta = {nome: "maçã", cor:"vermelha"} //dicionário 
console.log(fruta.nome);
*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva"); //inserindo item na lista
//lista.pop(); //retirando item da lista

//console.log(lista[1]); //escolhendo um item da lista para exibir no console
//console.log(lista.length); //quantidade de elementos que tem na lista
//console.log(lista.reverse()); // mostra os elementos ao contrário
//console.log(lista.toString()); // transforma o elemento em string
//console.log(lista.join(" - ")); // usado para separar os elementos da lista com o caractere especial de sua preferência
//alert(lista[1]); escolhendo um item da lista para exibir no pop-up da página

//var nome = "Vinicius Borges";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + "anos"); //concatenação
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 + n2);
//console.log(frase.replace("Japão", "Brasil")); //trocar Japão por Brasil
//console.log(frase.toLowerCase()) //todas letras minúsculas
//alert(frase.replace("Japão", "Brasil")); //trocar Japão por Brasil