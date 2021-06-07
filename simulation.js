function cek(){
    var wil1 = (document.getElementById("wil1").value);
    var wil2 = (document.getElementById("wil2").value);
    var varpro = (document.getElementById("varpro").value);
    var discal = 0;
    var diskon;
    var awil1 = "Bali";
    var bwil1 = "Lampung";
    var aawil1 = "bali";
    var bbwil1 = "lampung";
    var awil2 = "Tabanan";
    var bwil2 = "Denpasar";
    var cwil2 = "Badung";
    var dwil2 = "Singaraja";
    var ewil2 = "Metro";
    var fwil2 = "Mesuji";
    var aawil2 = "tabanan";
    var abwil2 = "denpasar";
    var acwil2 = "badung";
    var adwil2 = "singaraja";
    var aewil2 = "metro";
    var afwil2 = "mesuji";
    if(varpro==1||varpro==2||varpro==3||varpro==4){
        if(wil1==awil1||wil1==bwil1||wil1==aawil1||wil1==bbwil1){
            discal = discal + 1;
        } else{
            discal = discal;
        }
        if(wil2==awil2||wil2==bwil2||wil2==cwil2||wil2==dwil2||wil2==ewil2||wil2==fwil2||wil2==aawil2||wil2==abwil2||wil2==acwil2||wil2==adwil2||wil2==aewil2||wil2==afwil2){
            discal = discal + 1;
        } else{
            discal = discal;
        }
    } else{
        discal = discal;
    }
    if(discal == 2){
        diskon = "30%";
    } else{
        diskon = "Tidak Tersedia";
    }
    document.getElementById("get").innerHTML = diskon;
}