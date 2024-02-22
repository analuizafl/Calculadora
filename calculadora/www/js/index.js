//Chamando a função Colocando
function Colocando(num) {
    //Quando o botão dos números e operadores matemáticos forem clicados, o número aparecerá na parte do resultado.
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    //Nesse caso, será mostrado o primeiro número clicado (num), mais o operador matemático e depois o segundo número.
}

//Chamando a função delet
function delet() {
    document.getElementById('resultado').innerHTML = "";
    //Nesse comando, o innerHTML está vario "".
}

//Chamando a função
function deletUm() {
    var deletUm = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = deletUm.substring(0, deletUm.length - 1);
    //Nesse comando ele verá todos os caracteres que foram digitados no <p>resultado, e vai diminuir um.
}

//Chamando a função
function Calcular() {
    //Criando uma variável, para saber quais caracteres foram digitados na parte do "resultado".
    var NumerosOperadores = document.getElementById('resultado').innerHTML;

    //SE tiver coisa digitada no "<P>resultado"
    if (NumerosOperadores) {
        document.getElementById('resultado').innerHTML = eval(NumerosOperadores);
        //Nesse caso o comando eval já vai resolver todas as operações matemáticas.
    }
    else { //SENÃO
        document.getElementById('resultado').innerHTML = "Erro";
    }
}