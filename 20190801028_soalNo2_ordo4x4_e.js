var array  = [
    [2,1,2,1],
    [1,2,1,2],
    [2,1,2,1],
    [1,2,1,2]
 ];

console.log("================ DETERMINAN ===============");

var x_t_1    =  (array[0][0] * array[1][1] * array[2][2] * array[3][3]);
var x_t_2    =  (array[0][1] * array[1][2] * array[2][3] * array[3][0]);
var x_t_3    =  (array[0][2] * array[1][3] * array[2][0] * array[3][1]);
var x_t_4    =  (array[0][3] * array[1][0] * array[2][1] * array[3][2]);
var hasil_1  =  (x_t_1 + x_t_2 + x_t_3 + x_t_4);

var x_b_1    =  (array[3][0] , array[2][1] , array[1][2] , array[0][3]);
var x_b_2    =  (array[3][1] , array[2][2] , array[1][3] , array[0][0]);
var x_b_3    =  (array[3][2] , array[2][3] , array[1][0] , array[0][1]);
var x_b_4    =  (array[3][3] , array[2][0] , array[1][1] , array[0][2]);
var hasil_2  =  (x_b_1 + x_b_2 + x_b_3 + x_b_4);

var hasil_final = hasil_1 - hasil_2;

console.log("("+array[0][0] +" * "+ array[1][1] +" * "+ array[2][2] +" * "+ array[3][3]+
") + ("+  array[0][1] +" * "+ array[1][2] +" * "+ array[2][3] +" * "+ array[3][0]+
") + ("+  array[0][2] +" * "+ array[1][3] +" * "+ array[2][0] +" * "+ array[3][1]+
") + ("+  array[0][3] +" * "+ array[1][0] +" * "+ array[2][1] +" * "+ array[3][2]+")");
console.log("Di Kurang");
console.log("("+array[3][0] +" * "+ array[2][1] +" * "+ array[1][2] +" * "+ array[0][3]+
") + ("+      array[3][1] +" * "+ array[2][2] +" * "+ array[1][3] +" * "+ array[0][0]+
") + ("+      array[3][2] +" * "+ array[2][3] +" * "+ array[1][0] +" * "+ array[0][1]+
") + ("+      array[3][3] +" * "+ array[2][0] +" * "+ array[1][1] +" * "+ array[0][2]+")");
console.log("Hasil = "+hasil_1+" - "+ hasil_2);
console.log(hasil_final);
console.log("================= INVERS ==================");

console.log(":: matrik ::");
console.log(array[0][0],array[0][1],array[0][2],array[0][3]);
console.log(array[1][0],array[1][1],array[1][2],array[1][3]);
console.log(array[2][0],array[2][1],array[2][2],array[2][3]);
console.log(array[3][0],array[3][1],array[3][2],array[3][3]);
console.log("\n:: MINOR , KOFAKTOR ,ADJOIN ::\n");

//Minor KOLOM 1
var x_a11 = ( ((array[1][1] * array[2][2] * array[3][3]) + (array[1][2] * array[2][3] * array[3][1]) + (array[1][3] * array[2][1] * array[3][2])) -
  ((array[3][1] * array[2][2] * array[1][3]) + (array[3][2] * array[2][3] * array[1][1]) + (array[3][3] * array[2][1] * array[1][2])) );

var x_a12 = ( ((array[1][0] * array[2][2] * array[3][3]) + (array[1][2] * array[2][3] * array[3][0]) + (array[1][3] * array[2][0] * array[3][2])) -
  ((array[3][0] * array[2][2] * array[1][3]) + (array[3][2] * array[2][3] * array[1][0]) + (array[3][3] * array[2][0] * array[1][2])) );

var x_a13 = ( ((array[1][0] * array[2][1] * array[3][3]) + (array[1][1] * array[2][3] * array[3][0]) + (array[1][3] * array[2][0] * array[3][1])) -
  ((array[3][0] * array[2][1] * array[1][3]) + (array[3][1] * array[2][3] * array[1][0]) + (array[3][3] * array[2][0] * array[1][1])) );

var x_a14 = ( ((array[1][0] * array[2][1] * array[3][2]) + (array[1][1] * array[2][2] * array[3][0]) + (array[1][2] * array[2][0] * array[3][1])) -
  ((array[3][0] * array[2][1] * array[1][2]) + (array[3][1] * array[2][2] * array[1][0]) + (array[3][2] * array[2][0] * array[1][1])) );

//Minor KOLOM 2
var x_a21 = ( ((array[0][1] * array[2][2] * array[3][3]) + (array[0][2] * array[2][3] * array[3][1]) + (array[0][3] * array[2][1] * array[3][2])) -
  ((array[3][1] * array[2][2] * array[0][3]) + (array[3][2] * array[2][3] * array[0][1]) + (array[3][3] * array[2][1] * array[0][2])) );

var x_a22 = ( ((array[0][0] * array[2][2] * array[3][3]) + (array[0][2] * array[2][3] * array[3][0]) + (array[0][3] * array[2][0] * array[3][2])) -
  ((array[3][0] * array[2][2] * array[0][3]) + (array[3][2] * array[2][3] * array[0][0]) + (array[3][3] * array[2][0] * array[0][2])) );

var x_a23 = ( ((array[0][0] * array[2][1] * array[3][3]) + (array[0][1] * array[2][3] * array[3][0]) + (array[0][3] * array[2][0] * array[3][1])) -
  ((array[3][0] * array[2][1] * array[0][3]) + (array[3][1] * array[2][3] * array[0][0]) + (array[3][3] * array[2][0] * array[0][1])) );

var x_a24 = ( ((array[0][0] * array[2][1] * array[3][2]) + (array[0][1] * array[2][2] * array[3][0]) + (array[0][2] * array[2][0] * array[3][1])) -
  ((array[3][0] * array[2][1] * array[0][2]) + (array[3][1] * array[2][2] * array[0][0]) + (array[3][2] * array[2][0] * array[0][1])) );

//Minor KOLOM 3
var x_a31 = ( ((array[0][1] * array[1][2] * array[3][3]) + (array[0][2] * array[1][3] * array[3][1]) + (array[0][3] * array[1][1] * array[3][2])) -
  ((array[3][1] * array[1][2] * array[0][3]) + (array[3][2] * array[1][3] * array[0][1]) + (array[3][3] * array[1][1] * array[0][2])) );

var x_a32 = ( ((array[0][0] * array[1][2] * array[3][3]) + (array[0][1] * array[1][3] * array[3][0]) + (array[0][3] * array[1][0] * array[3][2])) -
  ((array[3][0] * array[1][2] * array[0][3]) + (array[3][1] * array[1][3] * array[0][0]) + (array[3][3] * array[1][0] * array[0][2])) );

var x_a33 = ( ((array[0][0] * array[1][1] * array[3][3]) + (array[0][1] * array[1][3] * array[3][0]) + (array[0][3] * array[1][0] * array[3][1])) -
  ((array[3][0] * array[1][1] * array[0][3]) + (array[3][1] * array[1][3] * array[0][0]) + (array[3][3] * array[1][0] * array[0][1])) );

var x_a34 = ( ((array[0][0] * array[1][1] * array[3][2]) + (array[0][1] * array[1][2] * array[3][0]) + (array[0][2] * array[1][0] * array[3][1])) -
  ((array[3][0] * array[1][1] * array[0][2]) + (array[3][1] * array[1][2] * array[0][0]) + (array[3][2] * array[1][0] * array[0][1])) );

//Minor KOLOM 4
var x_a41 = ( ((array[0][1] * array[1][2] * array[2][3]) + (array[0][2] * array[1][3] * array[2][1]) + (array[0][3] * array[1][1] * array[2][2])) -
  ((array[2][1] * array[1][2] * array[0][3]) + (array[2][2] * array[1][3] * array[0][1]) + (array[2][3] * array[1][1] * array[0][2])) );

var x_a42 = ( ((array[0][0] * array[1][2] * array[2][3]) + (array[0][1] * array[1][3] * array[2][0]) + (array[0][3] * array[1][0] * array[2][2])) -
  ((array[2][0] * array[1][2] * array[0][3]) + (array[2][1] * array[1][3] * array[0][0]) + (array[2][3] * array[1][0] * array[0][2])) );

var x_a43 = ( ((array[0][0] * array[1][1] * array[2][3]) + (array[0][1] * array[1][3] * array[2][0]) + (array[0][3] * array[1][0] * array[2][1])) -
  ((array[2][0] * array[1][1] * array[0][3]) + (array[2][1] * array[1][3] * array[0][0]) + (array[2][3] * array[1][0] * array[0][1])) );

var x_a44 = ( ((array[0][0] * array[1][1] * array[2][2]) + (array[0][1] * array[1][2] * array[2][0]) + (array[0][2] * array[1][0] * array[2][1])) -
  ((array[2][0] * array[1][1] * array[0][2]) + (array[2][1] * array[1][2] * array[0][0]) + (array[2][2] * array[1][0] * array[0][1])) );
/*Kofaktor
+   -   +   -
-   +   -   +
+   -   +   -
-   +   -   +
*/
console.log(x_a11,x_a21,x_a31,x_a41);//ADJOIN
console.log(x_a12,x_a22,x_a32,x_a42);
console.log(x_a13,x_a23,x_a33,x_a43);
console.log(x_a14,x_a24,x_a34,x_a44);

console.log(":: ADJOIN DI BAGI HASIL DETERMINAN ::");
//INVERS = hasil determinan / Adjoin
console.log((x_a11/hasil_final),(x_a21/hasil_final),(x_a31/hasil_final),(x_a41/hasil_final));
console.log((x_a12/hasil_final),(x_a22/hasil_final),(x_a32/hasil_final),(x_a42/hasil_final));
console.log((x_a13/hasil_final),(x_a23/hasil_final),(x_a33/hasil_final),(x_a43/hasil_final));
console.log((x_a14/hasil_final),(x_a24/hasil_final),(x_a34/hasil_final),(x_a44/hasil_final));

console.log("===========================================");