var jalur_A = [[8,12] , [4,7] , [6,6]]
var jalur_B = [[7,10] , [3,9] , [8,5]]

var jarak_jalur_A = jalur_A[0][0] + jalur_A[1][0] + jalur_A[2][0]
var jarak_jalur_B = jalur_B[0][0] + jalur_B[1][0] + jalur_B[2][0]
var waktu_tempuh_jalur_A = jalur_A[0][1] + jalur_A[1][1] + jalur_A[2][1]
var waktu_tempuh_jalur_B = jalur_B[0][1] + jalur_B[1][1] + jalur_B[2][1]


if (jarak_jalur_A > jarak_jalur_B && waktu_tempuh_jalur_A > waktu_tempuh_jalur_B){
    console.log("╔===================================╗")
    console.log("|     Jarak Terpanjang : " +jarak_jalur_A+ " KM      |")
    console.log("|  Waktu Tempuh Tercepat : " +waktu_tempuh_jalur_A+ " Menit |")
    console.log("|      Jarak Terdekat : " +jarak_jalur_B+ " KM       |")
    console.log("|  Waktu Tempuh Terlama : " +waktu_tempuh_jalur_B+ " Menit  |")
    console.log("╚===================================╝")
}
else{
    console.log("╔===================================╗")
    console.log("|     Jarak Terpanjang : " +jarak_jalur_B+ " KM      |")
    console.log("|  Waktu Tempuh Tercepat : " +waktu_tempuh_jalur_B+ " Menit |")
    console.log("|      Jarak Terdekat : " +jarak_jalur_A+ " KM       |")
    console.log("|  Waktu Tempuh Terlama : " +waktu_tempuh_jalur_A+ " Menit  |")
    console.log("╚===================================╝")
}