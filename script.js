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
<script>
  function sendToWhatsApp(event) {
    event.preventDefault(); // പേജ് റീഫ്രഷ് ആകുന്നത് തടയാൻ

    // ഫോമിലെ വിവരങ്ങൾ എടുക്കുന്നു
    const service = document.getElementById('bookService').value;
    const name = document.getElementById('bookName').value;
    const phone = document.getElementById('bookPhone').value;
    const date = document.getElementById('bookDate').value;
    const time = document.getElementById('bookTime').value;
    const message = document.getElementById('bookMessage').value;

    const clinicNumber = "918943904357"; // മാലിയിൽ മെഡിക്കൽ സെന്റർ നമ്പർ

    // വാട്സാപ്പ് മെസ്സേജ് ഫോർമാറ്റ് ചെയ്യുന്നു
    let whatsappMessage = `*New Appointment Request*%0A%0A`;
    whatsappMessage += `*Service:* ${service}%0A`;
    whatsappMessage += `*Patient Name:* ${name}%0A`;
    whatsappMessage += `*Contact:* ${phone}%0A`;
    whatsappMessage += `*Date:* ${date}%0A`;
    whatsappMessage += `*Time:* ${time}%0A`;
    
    if(message.trim() !== "") {
      whatsappMessage += `*Details:* ${message}%0A`;
    }

    // വാട്സാപ്പിലേക്ക് റീഡയറക്ട് ചെയ്യുന്നു
    const whatsappURL = `https://wa.me/${clinicNumber}?text=${whatsappMessage}`;
    window.open(whatsappURL, '_blank');
  }

  // പഴയ മൊബൈൽ മെനു സ്ക്രിപ്റ്റ് ഇവിടെ തന്നെ വെക്കാം
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-menu");
  if(toggle){
    toggle.addEventListener("click", function(){
      nav.classList.toggle("active");
    });
  }
</script>

<script>

const toggle =
document.getElementById("menu-toggle");

const nav =
document.getElementById("nav-menu");

const navLinks =
document.querySelectorAll(".nav a");

/* Toggle menu */

if(toggle){

toggle.addEventListener("click", function(){

nav.classList.toggle("active");

});

}

/* Close menu when link clicked */

navLinks.forEach(function(link){

link.addEventListener("click", function(){

nav.classList.remove("active");

});

});

</script>

<script src="script.js"></script>