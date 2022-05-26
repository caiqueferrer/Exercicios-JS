function Maior()
{
    let Numero = parseInt(prompt("Digite Seu Numero"))
    let Numero2 = parseInt(prompt("Digite Seu Numero"))
    let Numero3 = parseInt(prompt("Digite Seu Numero"))
    let resultado;
    let Maior1;
    let Maior2;
    let Maior3;

    Maior1 = Numero + Numero2
    Maior2 = Numero2 + Numero3
    Maior3 = Numero3 + Numero


    if (Numero3 < Numero && Numero3 < Numero2) {
        Maior1=" Esse é resultado"
    }

    if(Numero < Numero2 && Numero < Numero3) {
        Maior2=" Esse é resultado"
    }

    if(Numero2 < Numero && Numero2 < Numero3) {
        Maior3=" Esse é resultado"
    }

    alert(Maior1);
    alert(Maior2);
    alert(Maior3);
}