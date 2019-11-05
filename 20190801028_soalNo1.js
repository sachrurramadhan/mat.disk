console.log("╔====================================================╗")
console.log("|             Himpunan A = {1,2,5,8,9,10}            |")
console.log("|            Himpunan B = {4,2,8,10,11,12}           |")
console.log("| Himpunan C = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15} |")
console.log("╠====================================================╣")
console.log("|               a. Irisan A dengan B ?               |")
console.log("|               b. Irisan B dengan C ?               |")
console.log("|               c. Irisan C dengan A ?               |")
console.log("|            d. Kardinal A + Kardinal C ?            |")
console.log("╠====================================================╣")

var a=[1,2,5,8,9,10]
var b=[4,2,8,10,11,12]
var c=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

var hasil=require("array-intersection")
var irisan1=hasil(a,b)
var irisan2=hasil(b,c)
var irisan3=hasil(c,a)
var kardinal=a.length+c.length

console.log("|                  AnB = {"+irisan1+"}                    |")
console.log("|                  BnC = {"+irisan2+"}            |")
console.log("|                  CnA = {"+irisan3+"}              |")
console.log("|              Kardinal A+C = "+kardinal+"                     |")
console.log("╚====================================================╝")