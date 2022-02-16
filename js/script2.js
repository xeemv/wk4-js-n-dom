/*======================================================*/
// Interacting with the DOM
/*======================================================*/
let button = document.getElementById('btn');
let content = document.getElementById('content');

button.addEventListener('click', () => {
    if (content.innerHTML == "Goodbye"){
        content.innerHTML = "Hello";
    } else{
        content.innerHTML = "Goodbye"
    }
});


// document.getElementById('content').innerHTML = "Goodbye"

/*
- <p id="content">Hello</p> ======> this is from the html file
- we will be calling the <p> element
    - using method innerHTML
        - this is the text inside the element
            - in this case, it is ==> hello
    - then we will set it to "Goodbye"
        - this will change hello => goodbye on the DOM

- this will still show hello in the html file, but in the browser, it will display as goodbye
    - will most likely not see how it starts as hello since the browser will most likely execute it so quickly
        **If we want to see the change:
            - utilize an eventListener
                - this will listen for when the button is clicked
                - the value will only change when the button is clicked
                - go back to html file and add the button
                - add eventListener at the top prior innerhtml code line
                - comment out code line ==>  document.getElementById('content').innerHTML = "Goodbye"

let button = document.getElementById('btn');
let content = document.getElementById('content');
    - using these two lines of code will allow:
        - us to have a reference to the button and the content element in variables 
        - also makes it shorter to refer to them


- create a function:

button.addEventListener('click', () => {
    if (content.innerHTML == "Goodbye"){   <<---- if the contente is "goodbye", change it to hello
        content.innerHTML = "Hello";
    } else{
        content.innerHTML = "Goodbye"
    }
});

- this will create a switch and the innerhtml will switch between hello and goodbye when you click on the button
*/

/*======================================================*/
// Interacting with the DOM ---> how to remove elements
/*======================================================*/

document.getElementById('remove').addEventListener('click', () => {      // this is for the remove button element
    content.parentNode.removeChild(content);
});

/*
- add more elements to the html file
    <p id="content">Hello</p>
    <button id="btn">Change Value</button>
    <button id="remove">Remove Paragraph from DOM</button>
    <!-- this code above will remove <p> element -->

- since we already have a variable for 'button' and created a previous eventListener
    - we do not need to recreate a new code similar to the set above
    - just need to add:
        - .addEventListener to the end of the anonymously returned element
        - 'click' = the action
            - when we click on the button, do this....
        - content.parentNode.removeChild(content);
            - use content to find the parent
                
                - Definition and Usage: https://www.w3schools.com/jsref/prop_node_parentnode.asp
                    ** The parentNode property returns the parent node of the specified node, as a Node object.
                    ** Note: In HTML, the document itself is the parent node of the HTML element, HEAD and BODY are child nodes of the HTML element.**
            
            - the we are telling the dom to remove the child == "content" from the parent
                - completely remove goodye/hello
*/
/*======================================================*/
// Interacting with the DOM ---> how to add elements ------left off at 9:49 minutes out of 17:23.
/*======================================================*/

document.getElementById("add").addEventListener("click", () => {
    var parent = document.getElementById("paragraphs");     // this is the id found w/in the div element
    var newElement = document.createElement('p');           // creating a new element, the <p> element
    newElement.innerHTML = 'this is a new paragraph.';      // what will be pushed through and displayed on the browswer
    parent.appendChild(newElement);                         // ta
})

/*
- follows a straight forward process
    - find the parent that we want to add the child to
        - this will create a new element in js
        - setting it up to have attributes we want it to have
        - append the new element as a child to the parent

- for example:
    - go to html file and create a div

            <div id="paragraphs">
                <p id="content">Hello</p>
            </div>
            <button id="btn">Change Value</button>
            <button id="remove">Remove Paragraph from DOM</button>
            <!-- this code line 12 will remove <p> element -->
            <button id="add">Add new paragraph</button> 

    -


*/

