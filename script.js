// ****find an element by ID****
/*      
- create a variable for the button-1
- it will take the string
- that string is the ID of the element we want to grab
    - in this case, my-button == element ID
*/
let button = document.getElementById('my-button');
console.log(button);
// <button id="my-button">script.js:6:9     <==== this will print out in the console
/*======================================================*/



/*======================================================*/
// ****find an element by tag name****
/*  
- Tag(s) usually will have an opening and closing tag
- Element is denoted in html by its tags
- Some elements only have one tag
    - i.e.: <br> = break

    *created additional buttons to the one from the first example*
    <button>button 2</button>
    <button class="my-class">button 3</button>
    <button>button 4</button>
    <button class="my-class">button 5</button>
*/
/*      
- create a variable for the button tags
- use ---> getElementsByTagName ====> this is plural 
- the string (tag name) is  we want to grab
- make sure to match the text exactly like how it is on the html file
    - in this case it was == button
*/
let buttonsByTag = document.getElementsByTagName('button');
console.log(buttonsByTag);

/* This will print in the console.log
HTMLCollection { 0: button#my-button, 1: button, 2: button.my-class, 3: button, 4: button.my-class
, length: 5, … }
​
0: <button id="my-button">​
1: <button>​
2: <button class="my-class">​
3: <button>​
4: <button class="my-class">
​
length: 5
​
"my-button": <button id="my-button"></button>
*/

/*======================================================*/



/*======================================================*/
// ****find an element by class****
/*
- the method we is singular
- for example: getElementById
- Classes are generally used to identify multiple elements that share the same style
- By finding elements using class, we find multiples
    - get elements by class name is plural
*/
/*      
- create a variable for the button class name
- use ---> getElementsByClassName ====> this is plural 
- the string (className) is  we want to grab
- make sure to match the text exactly like how it is on the html file
    - in this case it was == my-class
*/
let buttonsByClassName = document.getElementsByClassName('my-class');
console.log(buttonsByClassName);
/*
- Next line underneath of this comment is how it will print to the console on the browser
HTMLCollection { 0: button.my-class, 1: button.my-class, length: 2 }
*/