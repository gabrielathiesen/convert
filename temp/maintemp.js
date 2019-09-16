// botão de limpar os espaços

function Limpar()
{
    document.Convert.TempFa.value=" ";
    document.Convert.TempCe.value=" ";
    document.Convert.TempKe.value=" ";
}
// inserindo as funções para o calculo

function ConvertTemp(direction){
    var Fobj = document.Convert.TempFa, Cobj = document.Convert.TempCe, Kobj = document.Convert.TempKe;
   
    if (direction== "FtoC"){
        Cobj.value = Math.round((Fobj.value-32)*(5/9));
        Kobj.value = Math.round((parseInt(Cobj.value)+459.67)*(5/9));
    }
    else if (direction == "KtoF"){
        Fobj.value = Math.round((parseInt(Cobj.value) * (9/5)) - 459.67);
        Cobj.value = Math.round((Fobj.value-32)*(5/9));
    }
    else {
        Fobj.value = Math.round((parseInt(Cobj.value) * (9/5)) + 32);
        Kobj.value = Math.round((parseInt(Cobj.value) + 273));
    }
    if(Cobj.value < -273){
        alert("Impossivel possibilitar a conversão");
        Fobj.value == 0;
        Kobj.value == 0;
    }
    if(Fobj.value < -492){
        alert("Impossivel possibilitar a conversão");
        Cobj.value = math.round(0) ;
        Kobj.value == 0;
    }
    if(Kobj.value < 0){
        alert("Impossivel possibilitar a conversão");
        Fobj.value == 0;
        Cobj.value == 0;
    }
 }
 
