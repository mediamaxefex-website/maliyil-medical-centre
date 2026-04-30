/* ADD DATE INTO WHATSAPP MESSAGE */

document.addEventListener("DOMContentLoaded", function(){

const slots =
document.querySelectorAll(".slot-btn");

slots.forEach(function(slot){

slot.addEventListener("click", function(e){

let dateInput =
document.getElementById("appointmentDate");

if(!dateInput){
return;
}

let date =
dateInput.value;

if(!date){

alert("Please select date first");

e.preventDefault();

return;

}

let time =
this.innerText;

let message =
"Hello Doctor,%0A"+
"Name:%20_____%0A"+
"Date:%20"+date+"%0A"+
"Preferred Time:%20"+time+"%0A"+
"Please confirm my appointment.";

this.href =
"https://wa.me/918943904357?text="+message;

});

});

});