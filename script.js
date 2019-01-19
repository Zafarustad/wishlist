var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputlength(){
	return input.value.length;
}

function additems(){
	var li = document.createElement("li");
	var delbutton = document.createElement("button");

	   li.setAttribute("class", "item");
	   delbutton.setAttribute("onclick", "deleteitem()");
 		
 		delbutton.appendChild(document.createTextNode("Delete!"));
        li.appendChild(document.createTextNode(input.value));
        
        ul.appendChild(li);
        li.appendChild(delbutton);
        
        input.value = "";
}

  
function additemsafterclick() {
	if (inputlength() > 0){ 
    additems();   
 }
}


function additemsafterkeypress() {
	if (inputlength() > 0 && event.which === 13){ 
  additems();
 }	
}
 

ul.setAttribute("onclick", "strikeout()")

function strikeout(){
	var li = event.target;
	li.classList.toggle("done");
}

function deleteitem(){
	var del = event.target
	del.parentNode.remove();
} 

 

button.addEventListener("click", additemsafterclick);

input.addEventListener("keypress", additemsafterkeypress);
 

