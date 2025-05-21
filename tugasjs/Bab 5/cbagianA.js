var total_belanja = 1500000
let discount;
if(total_belanja >1000000) {
    discount = 0.10;
}
var hasil = total_belanja-(total_belanja*discount)
console.log()
document.getElementById('hasil').innerText = hasil