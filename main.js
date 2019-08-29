function ConvertTemp(direction){
    var Fobj = document.Convert.TempFa, Cobj = document.Convert.TempCe, Kobj = document.Convert.TempKe;

    if (direction== "FtoC"){
        Cobj.value = Math.round((Fobj.value-32)*(5/9));
        Kobj.value = Math.round((parseInt(Cobj.value)+459.67)*(5/9));
    }
    else if (direction == "KtoF"){
        Cobj.value = Math.round((Fobj.value-32)*(5/9));
        Fobj.value = Math.round((parseInt(Cobj.value)*(9/5))-459.67);
    }
    else {
        Fobj.value = Math.round((parseInt(Cobj.value)*(9/5))+32);
        Kobj.value = Math.round((parseInt(Cobj.value)+273));
    }
    
}

function Limpar()
{
    document.Convert.TempFa.value=" ";
    document.Convert.TempCe.value=" ";
    document.Convert.TempKe.value=" ";
}