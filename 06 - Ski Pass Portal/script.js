const form = document.querySelector("form");

const firstname_input = document.getElementById("firstname");
const lastname_input = document.getElementById("lastname");
const age_input = document.getElementById("age");
const startdate = document.getElementById("startdate");
const enddate = document.getElementById("enddate");

const skipass_name = document.getElementById("skipass_name");
const skipass_surname = document.getElementById("skipass_surname");
const skipass_age = document.getElementById("skipassage");
const skipass_validfrom = document.getElementById("skipass_validfrom");
const skipass_expireson = document.getElementById("skipass_expireson");

const skipass_section = document.querySelector(".skipass");
const cost_label = document.getElementById("cost");

form.addEventListener("submit", function(event){
    event.preventDefault();
    if (updatecost() != true){
        return;
    }
    skipass_section.style.display ="flex";
    
    skipass_name.textContent = firstname_input.value;
    skipass_surname.textContent = lastname_input.value;
    if (age_input.value<18){
        skipass_age.textContent = "CHILD";
    }
    else{
        skipass_age.textContent = "ADULT";
    }

    skipass_validfrom.textContent = "VALID FROM: "+startdate.value;
    skipass_expireson.textContent = "EXPIRES ON: "+enddate.value;
})

function datediff(first, second) {
    const start = new Date(first);
    const end = new Date(second);

    return Math.floor((end - start) / (1000 * 60 * 60 * 24));
}

function updatecost(){
    if (!age_input.value) {
        return;
    }
    if(!startdate.value || !enddate.value){
        return;
    }

    let days = datediff(startdate.value, enddate.value) + 1;
    const datenow= new Date();
    datenow.setHours(0,0,0,0);

    if (days<=0 || new Date(startdate.value)<datenow){
        alert("Invalid Date Entered");
        return;
    }

    let costperday = 30;
    if (age_input.value>=18){
        costperday+=20;
    }
    let total_cost =costperday*days;
    cost_label.textContent = "Ski Pass Cost: "+total_cost.toString()+".00€";
    return true;
}
age_input.addEventListener("input", updatecost);
startdate.addEventListener("change", updatecost);
enddate.addEventListener("change", updatecost);