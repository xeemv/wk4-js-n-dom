/*
- reminder:
    - class is the template
        - class is not an object
        - can only have one constructor per class (special kind of a method)
            - It has to have the exact name "constructor"
            - It is executed automatically when a new object is created
            - It is used to initialize object properties
        - method can not be a constructor or you will get a typeError in the console
            - it is a function
            - an object 

- syntax:
    class ClassName {
        constructor() { ... }
        method_1() { ... }
        method_2() { ... }
        method_3() { ... }
    }
*/


class Member {
    constructor(name, position){
        this.name = name;
        this.position = position;
    }
}

class Team {
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.members = [];
        // this one wont get passes in
        // just an empty array
    }

    // add a method called addMember
    addMember(member){
        this.members.push(member);
    }

    // add a method to delete a member
    deleteMember(member){
        let index = this.members.indexOf(member);
        // find the index that the member is at inside the members array of the class team
        this.members.splice(index, 1);
        // this will remove element
        // that one element is the member we are trying to remove
    }
}


// write the code that allows us to use our classes in relationship w/ the html
// use this data and display it in our html

let teams = [];
// all teams created will be in this array
// will use this data to render or draw the new html to our DOM
let teamId = 0;
// used to increment each team automatically w/ a new ID to identify it

/*
===============================================================
create a function 
===============================================================
*/

onclick('new-team', () => {
    teams.push(new Team(teamId++, getValue('new-team-name')));
});

// will be reusing this function so need need to prai
function onClick(id, action) {
// id = w.e element we want to create an event listener for from the html
// action  = a function that basically going to be what will happen when we select on click
    let element = document.getElementById(id);
    element.addEventListener('click', action)
    return element;


}