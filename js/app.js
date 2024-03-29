function DescARS(sb) {
    Total_Desc = 0;
    Total_Desc = sb - (sb * 0.9696);
    if (Total_Desc >= 4098.53)
    {
        Total_Desc = 4098.53;
        return Total_Desc;
    }
    return Total_Desc;
}
function DescAFP(sb) {
    Total_Desc = 0;
    Total_Desc = sb - (sb * 0.9713);
    if (Total_Desc >= 7738.67)
    {
        Total_Desc = 7738.67;
        return Total_Desc;
    }
    return Total_Desc;
}
function DescISR(sb) {
    Total_Desc = 0;
    Rest = 0;
    Rest = sb - DescAFP(sb) - DescARS(sb);
    if (Rest <= 34685.0 )
    {
        return 0;
    }
    else if (Rest > 34685.0 && Rest < 52027.42)
    {
        Total_Desc = ((Rest - 34685) * 15) / 100;
        return Total_Desc;
    }
    else if (Rest > 52027.42 && Rest < 72260.25)
    {
         Total_Desc = 2601.33 + ((Rest - 52027.42) * 0.20);
        return Total_Desc;
    }
    else
    {
        Total_Desc = 6648 + ((Rest - 72260.25) * 0.25);
        return Total_Desc;
    }
}

//This is my formatter
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
}); 

function CalcularEImprimir(Sueldo){
    Sueldo = $('#tbSb').val();   
    $('#pResultado').text('Descuento AFP es ' + formatter.format(DescAFP(Sueldo)));
    $('#pResultado').append("</br>");
    $('#pResultado').append('Descuento ARS es ' + formatter.format(DescARS(Sueldo)));
    $('#pResultado').append("</br>");
    $('#pResultado').append('Descuento ISR es ' + formatter.format(DescISR(Sueldo)));
    $('#pResultado').append("</br>");
    $('#pResultado').append('Descuento total es ' + formatter.format((DescAFP(Sueldo) + DescARS(Sueldo) + DescISR(Sueldo))));    
    $('#pResultado').append("</br>");
    $('#pResultado').append('El Sueldo NETO es: ' + formatter.format((Sueldo - (DescAFP(Sueldo) + DescARS(Sueldo) + DescISR(Sueldo)))));
}
