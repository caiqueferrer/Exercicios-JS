function ParOuImpar()
{

    let numero = parseInt (prompt("Digite Seu Numero"))
    let resto = numero % 2;
    
    resto = numero % 2

    if (resto == 0){
        console.log(numero + "par")
        alert(numero + " é Par");
    }

    else {
        console.log(numero + "impar")
        alert(numero + " é Impar")
    }
    
}
