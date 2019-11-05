console.log("╔===================================╗")
console.log("|           Program Matriks         |")
console.log("╚===================================╝")
console.log("╔==========================================╗")
console.log("|               Matriks Ordo 3x3           |")
console.log("|                  Matriks A               |")
console.log("|                   [2 1 2]                |")
console.log("|                   [2 1 2]                |")
console.log("|                   [2 1 2]                |")
console.log("╠==========================================╣")
console.log("|               e.Invers                   |")
console.log("╠==========================================╣")

var a=[[2,1,2],[2,1,2],[2,1,2]]
var b=[[2,1],[2,1],[2,1]]

var hasil=(a[0][0]*a[1][1]*a[2][2]+a[0][1]*a[1][2]*b[2][0]+a[0][2]*b[1][0]*b[2][1])-(a[2][0]*a[1][1]*a[0][2]+a[2][1]*a[1][2]*b[0][0]+a[2][2]*b[1][0]*b[0][1])

var Mi_1=a[1][1]*a[2][2]-a[1][2]*a[2][1]
var Mi_2=a[1][0]*a[2][2]-a[1][2]*a[2][0]
var Mi_3=a[1][0]*a[2][1]-a[1][1]*a[2][0]
var Mi_4=a[0][1]*a[2][2]-a[0][2]*a[2][1]
var Mi_5=a[0][0]*a[2][2]-a[0][2]*a[2][0]
var Mi_6=a[0][0]*a[2][1]-a[0][1]*a[2][0]
var Mi_7=a[0][1]*a[1][2]-a[0][2]*a[1][1]
var Mi_8=a[0][0]*a[1][2]-a[0][2]*a[1][0]
var Mi_9=a[0][0]*a[1][1]-a[0][1]*a[1][0]

console.log("|                [2 1 2]"+" 2 1               |")
console.log("|                [2 1 2]"+" 2 1               |")
console.log("|                [2 1 2]"+" 2 1               |")
console.log("|           Determinan Ordo 3x3 = "+hasil+"        |")
console.log("╠==========================================╣")
console.log("|          Hasil Setelah Diminorkan =      |")
console.log("|                  ["+Mi_1+" "+Mi_2+" "+Mi_3+"]                 |")
console.log("|                  ["+Mi_4+" "+Mi_5+" "+Mi_6+"]                 |")
console.log("|                  ["+Mi_7+" "+Mi_8+" "+Mi_9+"]                 |")
console.log("╠==========================================╣")
console.log("|          Rumus Kofaktor Ordo 3x3         |")
console.log("|      [+ - +]x[0  0   0]=[0  0   0]       |")
console.log("|      [- + -]x[0  0   0]=[0  0   0]       |")
console.log("|      [+ - +]x[0  0   0]=[0  0   0]       |")
console.log("╠==========================================╣")
console.log("|       Hasil Ditranspose = Adjoin A       |")
console.log("|                [0   0    0]              |")
console.log("|                [0   0    0]              |")
console.log("|                [0   0    0]              |")
console.log("|      A^-1 = 1/Determinan x Adjoin A =    |")
console.log("╚==========================================╝")

var c=[0]
var d=[[0,0,0],[0,0,0],[0,0,0]]

var hasil_akhir_1=d[0][0]/c[0]
var hasil_akhir_2=d[0][1]/c[0]
var hasil_akhir_3=d[0][2]/c[0]
var hasil_akhir_4=d[1][0]/c[0]
var hasil_akhir_5=d[1][1]/c[0]
var hasil_akhir_6=d[1][2]/c[0]
var hasil_akhir_7=d[2][0]/c[0]
var hasil_akhir_8=d[2][1]/c[0]
var hasil_akhir_9=d[2][2]/c[0]

console.log("╔==========================================╗")
console.log("|              ["+hasil_akhir_1+"  "+hasil_akhir_2+"   "+hasil_akhir_3+"]            |")
console.log("|              ["+hasil_akhir_4+"   "+hasil_akhir_5+"  "+hasil_akhir_6+"]            | ")       
console.log("|              ["+hasil_akhir_7+"  "+hasil_akhir_8+"   "+hasil_akhir_9+"]            |")
console.log("╚==========================================╝")