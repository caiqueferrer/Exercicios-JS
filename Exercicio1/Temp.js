function ConverterTemperatura(){
    
    if (document.getElementById('Centigrados').value =="")
    {
        alert("O Preenchimento é obrigatório");
        document.getElementById('Centigrados').focus();
        return;
    }

    let c = document.getElementById('Centigrados').value;
    let f = (9 * c + 160) /5;

    console.log(c)
    console.log(f)
    
    document.getElementById('Fahrenheit').value = f;
    
    if(f <= 49){
        document.getElementById('Fahrenheit').style.backgroundColor="Blue";
        document.getElementById('Fahrenheit').style.color="#F0FFFF";
    }

    else if(f >=50 && f <= 99){
        document.getElementById('Fahrenheit').style.backgroundColor="Orange";
        document.getElementById('Fahrenheit').style.color="#FFDAB9";
    }

    else if(f > 100){
        document.getElementById('Fahrenheit').style.backgroundColor="Red";
        document.getElementById('Fahrenheit').style.color="#FF4500";
    }
}