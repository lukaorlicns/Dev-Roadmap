const input = document.getElementById("newtask");
const form = document.getElementById("form");
const tasklist = document.getElementById("tasklist")

form.addEventListener("submit", function(event){
    event.preventDefault();
    const string_task = input.value;
    if (string_task!=""){
        const new_item = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        new_item.appendChild(checkbox);

        const text = document.createTextNode(string_task);
        new_item.appendChild(text);
        const destroy = document.createElement("button");
       destroy.textContent ="delete";
        new_item.appendChild(destroy);
        tasklist.appendChild(new_item);
        checkbox.addEventListener("change", function(){
            new_item.classList.toggle("done");
        })
         destroy.addEventListener("click", function(){
            new_item.remove();
        })
    }
    input.value ="";
    input.focus();
})