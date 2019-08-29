function ConvertTemp(direction){
    var Fobj = document.convert.TempFa;
    var Cobj = document.convert.TempCe;
    var Kobj = document.convert.TempKa;

    if (direction== "FtoC"){
        Cobj.value = Math.round((Fobj.value-32)*(5/9));
        Kobj.value = Math.round((parseInt(Cobj.value)+459.67)*(5/9));
    }d

}