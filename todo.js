//THIS IS A FUNCTION TO ADD A NEW ITEM TO THE "TO DO" LIST

//CREATING THE VARIABLES FOR THE LISTS
var todo = document.getElementById("todo");
var done = document.getElementById("done");

function validateForm() {
  var x = document.forms["task"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function formEntry(){
	validateForm();
	var formtask = getElementById("task");
 	var tasktext = document.createTextNode(formtask);
 	foo = document.createElement("li");
 	foo.
 	tasktext.appendChild(formtask)
 }



// function ListItem() {
// var submit = prompt("WHAT ARE YOU GOING TO PUT OFF UNTIL TOMORROW?");
// //IF THE USER SUBMITS EITHER NO STRING OR PRESSES 'CANCEL', THEY WILL RETURN TO THE START OF THE PROGRAM.
//  if (submit == null){
//  	return;
//  }
//  if (submit == ""){
//  	return;
//  }


// //CREATING NEW ELEMENT
// var newitem = document.createElement("li");
// //WRITING WHAT WILL GO IN THAT ELEMENT
// var itemtext = document.createTextNode(submit);

// // ADDING CHILD  TEXT NODE "test" TO ITS PARENT, </li>
// var fullitem = newitem.appendChild(itemtext);
// // ADDING CHILD "newitem" TO ITS PARENT 
// //
// todo.appendChild(newitem);
// //FUNCTION TO CREATE "DONE" BUTTON
// 	 function button(){
// 	 	const newbutton = document.createElement("button");
// 	 	//ADDING HTML CLASS
// 	 	newbutton.classList.add("done");
// 	 	//CREATING "DONE" TEXT IN BUTTON
// 	 	let buttontext = document.createTextNode("Done");
// 	 	//ADDING BUTTON TO LIST ITEM
// 	 	newbutton.appendChild(buttontext);
// 	 	//PUTTING IT ALL TOGETHER
// 	 	newitem.appendChild(newbutton);

// 	 	//REMOVING THE ITEM FROM THE LIST
// 	 	newbutton.onclick  = function move(){
// 	 		//CLONING THE TEXT BEFORE MOVING IT TO "DONE"
// 	 		const clone = fullitem.cloneNode(itemtext);
// 	 		//DELETING FROM "TODO"
// 	 		newitem.remove();
// 	 		//CREATING LI 
// 	 		const doneitem = document.createElement("li");
// 	 		const donetext = document.createTextNode(submit);
// 	 		const fulldone = doneitem.appendChild(donetext);
// //adding button
// 	 		var final = done.appendChild(doneitem);
// 	 		var clear = document.createElement("button");
// 	 		let buttontext = document.createTextNode("Clear");
// 	 		clear.appendChild(buttontext);


// 	 		clear.appendChild;
// 	 		final.appendChild(clear)
// 	 		clear.onclick = function remove(){
// 	 				final.remove();
// 	 		;
// 	 		}
// 	 		}
// 	 	 }

// button();
// }