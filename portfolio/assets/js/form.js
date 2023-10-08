////////// Contact Form ///////////
const btn = document.getElementById("contact")

btn.addEventListener("click", () => {

   const anchor = document.getElementById("page-wrapper");
   const form = document.createElement("form");
   const sendBtn = document.createElement("button");
   const nameInput = document.createElement("input", "text");
   const orgInput = document.createElement("input", "text");
   const emailInput = document.createElement("input", "text");
   const numInput = document.createElement("input", "tel");
   const exitBtn = document.createElement("button");
   const privBlrb = document.createElement("p");

   privBlrb.textContent = `Your privacy is of paramount importance to me.
                           I am committed to securly storing and handling your email address,
                           ensuring it is not shared without your explicit permission.`  
   numInput.setAttribute("type", "number");              
   exitBtn.setAttribute("id", "cancel");
   numInput.setAttribute("placeholder", "800-555-1234")
   emailInput.setAttribute("placeholder", "Your E-Mail");
   emailInput.setAttribute("type", "email")
   orgInput.setAttribute("placeholder", "Organization");
   nameInput.setAttribute("placeholder", "Your Name");
   form.setAttribute("name", "contactForm");
   form.setAttribute("class", "contact");
   sendBtn.setAttribute("id", "send");
   sendBtn.textContent = "Send";
   exitBtn.textContent = "Cancel"

   sendBtn.addEventListener("click", (e) => {

      //HTTP REQ
      // fetch or axios
      exitBtn.remove();
      emailInput.remove();
      orgInput.remove();
      sendBtn.remove();
      exitBtn.remove();
      nameInput.remove();
      form.textContent = "Thank You! I will be in touch with you shortly!"
      exitBtn.textContent = "Close Window"
      form.appendChild(exitBtn)
   })

   exitBtn.addEventListener("click", e => form.remove())
   anchor.appendChild(form);
   form.appendChild(nameInput);
   form.appendChild(orgInput);
   form.appendChild(emailInput);
   form.appendChild(numInput);
   form.appendChild(sendBtn);
   form.appendChild(exitBtn)
   form.appendChild(privBlrb)

})

// build form for users to send a message to email