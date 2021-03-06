/*
************************
Created by Stepan Pesout
*****www.pesout.eu******
************************
*/


/*-------------------------------------------------------------------------------------------------------*/
/*--- WELCOME TO THE COUNTINY. FOR THE DOCUMENTATION AND HELP VISIT https://pesout.github.io/countiny ---*/
/*-------------------------------------------------------------------------------------------------------*/


/*QUADRATIC FORMULA*/

function countiny_quad(a_kva, b_lin, c_abs, x_koren) {

	var diskr = (b_lin * b_lin) - 4 * a_kva * c_abs //D

	if (diskr < 0) return "No solution."; //If D is less then zero
	else {
		var x_jedna = (-b_lin + Math.sqrt(diskr)) / (2*a_kva); //Counting of x1
		var x_dva = (-b_lin - Math.sqrt(diskr)) / (2*a_kva); //Counting of x2

		if (x_koren == 1) return x_jedna;
		if (x_koren == 2) return x_dva;
	}
}


/*COMBINATORICS*/

//Factorial
function countiny_fctr(i) {
         if (i == 0) return 1; //0! = 1
         else return i * arguments.callee(i - 1);    
}

//Cobmination number
function countiny_comb(n, k) {
	 n = n*1;
	 k = k*1;
	 return countiny_fctr(n) / (countiny_fctr(k) * countiny_fctr(n-k));
}

//Variation
function countiny_vari(n, k) {
	 n = n*1;
	 k = k*1;
	 return countiny_fctr(n) / countiny_fctr(n-k);
}


/*LOGARITHMIC*/

//Arbitary-based logarithm
function countiny_alog(a, x) {
  	 return Math.log(x) / Math.log(a);
}


/*ROOTS*/

//N-th root
function countiny_root(x, n) {
  	 n = 1 / n;
  	 return Math.pow(x,n);
}


/*ANGLES*/

//Degrees to radians
function countiny_dgrd(deg) {
	 return deg*(Math.PI/180)
}

//Degrees to radians expressed in multiples of pi
function countiny_dgrd_pi(deg, pi_sign) {
 	 if (pi_sign) return (deg*(Math.PI/180)) / Math.PI + "&pi;";
	 else return (deg*(Math.PI/180)) / Math.PI;
}

//Radians to degrees
function countiny_rddg(rad) {
	 return rad/(Math.PI/180)
}


/*PERCENTAGE*/

//A part of a whole number and a value of percentages (of this part)
function countiny_perc_part(a, b) {
	 return (a/100)*b
}

//A whole number from a part and a value of percentages
function countiny_perc_whol(b, c) {
       	 return (c/b)*100
}

//Percentages, which means a part of the whole number
function countiny_perc_pers(c, a) {
	 return (c/a)*100
}


/*IS A NUMBER IN A RANGE?*/

function countiny_rang(a, min, max) {
	return a <= max && a >= min;
}


/*ROUNDING*/

//Rounding to N decimal places
function countiny_nrnd(num, dec) {
	return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);	
}
