//problem as example
//You should create a // style comment that contains at least five letters.
//You should create a /* */ style comment that contains at least five letters.

// answer example
//this is inline comment
/*
these 
are
commentes
*/
/**************************************************************************/
//problem no:0
/*creates a variable called ourName. In JavaScript we end statements with semicolons.
 Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces 
 or start with a number.*/

// answer no:0

var ourName;



/**************************************************************************/
//problem no:1
//Assign the value 7 to variable x.
var x = 7;
//Assign the contents of a to variable y.
var y = x;
/**************************************************************************/

//problem no:2
//Define a variable a with var and initialize it to a value of 9.
var A = 9;
/**************************************************************************/
//problem no:3
/*Initialize the three variables a, b, and c with 5, 10, and
 "I am a" respectively so that they will not be undefined.*/

var a = 5;
var b = 10;
var c = 'I am a';

a = a + 1;
b = b + 5;
c = c + " String!";

/**************************************************************************/
//problem no:4
/*Write variable names in JavaScript in camelCase. In camelCase,
 multi-word variable names have the first word in lowercase and 
the first letter of each subsequent word is capitalized. */

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
/**************************************************************************/
//problem no:5
/*Change the 0 so that sum will equal 20. */
//var sum = 10 + 0;
var sum = 10 + 10;

/**************************************************************************/
//problem no: 6
/**Change the 0 so the difference is 12. var difference = 45 - 0; */
var difference = 45 - 33;

/**************************************************************************/
//problem no: 7
/**Change the 0 so that product will equal 80.var product = 8 * 0; */
var product = 8 * 10;

/**************************************************************************/
//problem no: 8
/**Change the 0 so that the quotient is equal to 2.var quotient = 66 / 0;
 */
var quotient = 66 / 33;

/**************************************************************************/
//problem no: 9
/**Change the code to use the ++ operator on myVar.var myVar = 87;

// Only change code below this line
myVar = myVar + 1; */
var myVar = 87;

myVar++;
/**************************************************************************/
//problem no: 10
/**Change the code to use the -- operator on myVar. */
var myVar = 11;

myVar--;
/**************************************************************************/
//problem no: 11
/**Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7). */
var myDecimal = 4.4;
/**************************************************************************/
//problem no: 12
/**Change the 0.0 so that product will equal 5.0.var product = 2.0 * 0.0;
 */
var product = 2.0 * 2.5;

/**************************************************************************/
//problem no: 13
/**Change the 0.0 so that quotient will equal to 2.2.var quotient = 0.0 / 2.0 */
var quotient = 4.4 / 2.0
/**************************************************************************/
//problem no: 14
/** Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.*/
var remainder = 11%3;

/**************************************************************************/
//problem no: 15
/**Convert the assignments for a, b, and c to use the += operator */
var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

/**************************************************************************/
//problem no: 16
/**Convert the assignments for a, b, and c to use the -= operator. */
var a = 11;
var b = 9;
var c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;
/**************************************************************************/
//problem no: 17
/**Convert the assignments for a, b, and c to use the *= operator. */
var a = 5;
var b = 12;
var c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;
/**************************************************************************/
//problem no: 18
/** Convert the assignments for a, b, and c to use the /= operator.*/
var a = 48;
var b = 108;
var c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;
/**************************************************************************/
//problem no: 19
/** Create two new string variables: myFirstName and myLastName and assign them the values of your first and last name, respectively.*/
var myFirstName = 'Asmaa';
var myLastName = 'Fayed';
/**************************************************************************/
//problem no: 20
/**Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:

I am a "double quoted" string inside "double quotes". */
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);
/**************************************************************************/
//problem no: 21
/**Change the provided string to a string with single quotes at the beginning and end and no escape characters.
 * var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
 */
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
/**************************************************************************/
//problem no: 22
/**Assign the following three lines of text into the single variable myStr using escape sequences.

FirstLine
    \SecondLine
ThirdLine */
var myStr = 'FirstLine\n\t\\SecondLine\nThirdLine';

/**************************************************************************/
//problem no: 23
/**Build myStr from the strings "This is the start. " and "This is the end." using the + operator. */
var myStr = 'This is the start. '+'This is the end.';
/**************************************************************************/
//problem no: 24
/**Build myStr over several lines by concatenating these two strings: 
 * "This is the first sentence. " and "This is the second sentence." using the += operator. Use the += operator similar to how it is shown in the editor.
 *  Start by assigning the first string to myStr, then add on the second string. 
 */
var myStr ="This is the first sentence. ";
myStr += "This is the second sentence.";
/**************************************************************************/
//problem no: 25
/**Set myName to a string equal to your name and build myStr with myName between the strings
 *  "My name is " and " and I am well!" */
// Example
var myName = 'Asmaa';
var myStr = 'My name is ' + myName + ' and I am well!';

