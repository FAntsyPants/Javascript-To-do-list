//THIS IS A FUNCTION TO ADD A NEW ITEM TO THE "TO DO" LIST
function addTD() {
var submit = prompt("WHAT ARE YOU GOING TO PUT OFF UNTIL TOMORROW?");
//CREATING THE VARIABLES FOR THE LISTS
var todo = document.getElementById("todo");
var done = document.getElementById("done");

//CREATING NEW ELEMENT
var newitem = document.createElement("li");
//WRITING WHAT WILL GO IN THAT ELEMENT
var itemtext = document.createTextNode(submit);
// ADDING CHILD  TEXT NODE "test" TO ITS PARENT, </li>
var fullitem = newitem.appendChild(itemtext);
// ADDING CHILD "newitem" TO ITS PARENT
//
todo.appendChild(newitem);
//FUNCTION TO CREATE "DONE" BUTTON
	 function button(){
	 	var newbutton = document.createElement("button");
	 	//ADDING HTML CLASS
	 	newbutton.classList.add("done");
	 	var buttontext = document.createTextNode("Done");
	 	//ADDING BUTTON TO LIST ITEM
	 	newbutton.appendChild(buttontext);
	 	//PUTTING IT ALL TOGETHER
	 	newitem.appendChild(newbutton);

	 	//REMOVING THE ITEM FROM THE LIST
	 	newbutton.onclick  = function move(){
	 		//CLONING THE TEXT BEFORE MOVING IT TO "DONE"
	 		var clone = fullitem.cloneNode(itemtext);
	 		newitem.remove();
	 		var doneitem = document.createElement("li");
	 		var donetext = document.createTextNode(submit);
	 		var fulldone = doneitem.appendChild(donetext);

	 		done.appendChild(doneitem);
	 		
	 		}
	 }
button();
}


