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
console.log("|           b.Pengurangan           |")
console.log("╠===================================╣")

var a=[[1,3,5],[7,9,7],[5,3,1]]
var b=[[2,4,6],[8,10,8],[6,4,2]]

var kurang_1=a[0][0]-b[0][0]
var kurang_2=a[0][1]-b[0][1]
var kurang_3=a[0][2]-b[0][2]
var kurang_4=a[1][0]-b[1][0]
var kurang_5=a[1][1]-b[1][1]
var kurang_6=a[1][2]-b[1][2]
var kurang_7=a[2][0]-b[2][0]
var kurang_8=a[2][1]-b[2][1]
var kurang_9=a[2][2]-b[2][2]

console.log("|           b.Pengurangan           |")
console.log("|           ["+kurang_1+" "+kurang_2+" "+kurang_3+"]              |")
console.log("|           ["+kurang_4+" "+kurang_5+" "+kurang_6+"]              |")
console.log("|           ["+kurang_7+" "+kurang_8+" "+kurang_9+"]              |")
console.log("╚===================================╝")