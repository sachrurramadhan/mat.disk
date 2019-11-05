console.log("╔===================================╗")
console.log("|           Program Matriks         |")
console.log("╚===================================╝")
console.log("╔===================================╗")
console.log("|          Matriks Ordo 3x3         |")
console.log("|     Matriks A"+"       "+"Matriks B     |")
console.log("|     [1 3 5]"+"         "+"[2 4 6]       |")
console.log("|     [7 9 7]"+"         "+"[8 10 8]      |")
console.log("|     [5 3 1]"+"         "+"[6 4 2]       |")
console.log("╠===================================╣")
console.log("|           c.Perkalian             |")
console.log("╠===================================╣")


var a=[[1,3,5],[7,9,7],[5,3,1]]
var b=[[2,4,6],[8,10,8],[6,4,2]]

var kali_1=a[0][0]*b[0][0]+a[0][1]*b[1][0]+a[0][2]*b[2][0]
var kali_2=a[0][0]*b[0][1]+a[0][1]*b[1][1]+a[0][2]*b[2][1]
var kali_3=a[0][0]*b[0][2]+a[0][1]*b[1][2]+a[0][2]*b[2][2]
var kali_4=a[1][0]*b[0][0]+a[1][1]*b[1][0]+a[1][2]*b[2][0]
var kali_5=a[1][0]*b[0][1]+a[1][1]*b[1][1]+a[1][2]*b[2][1]
var kali_6=a[1][0]*b[0][2]+a[1][1]*b[1][2]+a[1][2]*b[2][2]
var kali_7=a[2][0]*b[0][0]+a[2][1]*b[1][0]+a[2][2]*b[2][0]
var kali_8=a[2][0]*b[0][1]+a[2][1]*b[1][1]+a[2][2]*b[2][1]
var kali_9=a[2][0]*b[0][2]+a[2][1]*b[1][2]+a[2][2]*b[2][2]

console.log("|           c.Perkalian             |")
console.log("|           ["+kali_1+" "+kali_2+" "+kali_3+"]              |")
console.log("|           ["+kali_4+" "+kali_5+" "+kali_6+"]           |")
console.log("|           ["+kali_7+" "+kali_8+" "+kali_9+"]              |")
console.log("╚===================================╝")