console.log("")
var umur = 13;
if(umur >=0 && umur <=4){
    document.getElementById("hasil").innerText = "Kategori Balita";
}
else if(umur >=5 && umur <=12){
    document.getElementById("hasil").innerText = "Kategori Anak-anak";
}
else if(umur >=13 && umur <=17){
    document.getElementById("hasil").innerText = "Kategori Remaja";
}