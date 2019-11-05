console.log("╔===================================╗")
console.log("|           Program Matriks         |")
console.log("╚===================================╝")
console.log("╔===================================╗")
console.log("|          Matriks Ordo 3x3         |")
console.log("|              Matriks A            |")
console.log("|               [1 3 5]             |")
console.log("|               [7 9 7]             |")
console.log("|               [5 3 1]             |")
console.log("╠===================================╣")
console.log("|           d.Determinan            |")
console.log("╠===================================╣")
console.log("|           Rumus Determinan        |")
console.log("|            [1 3 5]"+" 1 3            |")
console.log("|            [7 9 7]"+" 7 9            |")
console.log("|            [5 3 1]"+" 5 3            |")
console.log("╠===================================╣")

var a=[[1,3,5],[7,9,7],[5,3,1]]
var b=[[1,3],[7,9],[5,3]]

var hasil=(a[0][0]*a[1][1]*a[2][2]+a[0][1]*a[1][2]*b[2][0]+a[0][2]*b[1][0]*b[2][1])-(a[2][0]*a[1][1]*a[0][2]+a[2][1]*a[1][2]*b[0][0]+a[2][2]*b[1][0]*b[0][1])

console.log("|      Determinan Ordo 3x3 = "+hasil+"    |")
console.log("╚===================================╝") 