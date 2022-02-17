/*======================================================*/
// TO DO App
/*======================================================*/

/* 
- create a unique ID variable for each ID on html file
- we want to create a new row to the table when we click the add button
*/

let id = 0;


document.getElementById('add').addEventListener('click', () => {
    let createDate = new Date();    
    // w/o passing any arguments into new Date, it will take the current date/time
    let table = document.getElementById('list');
    // this is the reference to the table
    let row = table.insertRow(1);
    // the header row is position zero, so we want the new row to begin at position 1
    row.setAttribute('id', `item-${id}`);
    // what this line of code will do is, give each row an ID + the ID from line 10
    row.insertCell(0).innerHTML = document.getElementById('new-task').value;
    // allow us to set the value of the first cell will equal whatever we type into our task input
    row.insertCell(1).innerHTML = `${createDate.getFullYear()}-${createDate.getMonth() + 1}-${createDate.getDate()}`;
    // this will create the date created and format it using template literal to concatenate things
        //  it will read as current year - month - day
        //  plus 1 due to zero based counting for the month
    row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
    //  the start date that we selected at the time of creating the task will drop into this cell
    row.insertCell(3).innerHTML = document.getElementById('new-end-date').value;
    //  the start date that we selected at the time of creating the task will drop into this cell
    let action = row.insertCell(4);
    action.appendChild(createDeleteButton(id++));
    // add a button or append a button so the user could delete the button
    // it will increment
    document.getElementById('new-task').value = "";
    // this will give the user a blank slate to start over and add more task
})

function createDeleteButton(id){
    let btn = document.createElement('button');
    btn.className = "btn btn-primary";
    btn.id = id;
    btn.innerHTML = "Delete";
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}