function Aposentadoria() {
    let nome = prompt('Digite seu nome');
    let idade = parseFloat(prompt ('Digite sua idade'));
    let temp = parseFloat(prompt ('Digite seu tempo de trabalho'));
    let resultado;

    if(idade >= 65)
    {
        resultado="Você pode se aposentar"
    }

    if(idade >=60 && temp >= 30)
    {
        resultado="Você pode se aposentar"
    }

    if(temp >= 40)
    {
        resultado="Você pode se aposentar"
    }

    alert(resultado);

}