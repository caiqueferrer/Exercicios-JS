function Litros()
{
    if (document.getElementById('Tempo').value =="")
    {
        alert("O Preenchimento é obrigatório");
        document.getElementById('Tempo').focus();
        return;
    }

    if (document.getElementById('Velocidade').value =="")
    {
        alert("O Preenchimento é obrigatório");
        document.getElementById('Velocidade').focus();
        return;
    }

    let t = document.getElementById('Tempo').value;
    let v = document.getElementById('Velocidade').value;
    let d = t * v
    let l = d / 12

    document.getElementById('Distancia').value = d;
    document.getElementById('Litros').value = l;
}