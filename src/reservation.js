function showReservation(){
    document.querySelector("#back img").style.visibility = "visible";
    let newAlert = document.createElement("h5");
    let dialog = document.createElement("dialog");
    let dialogMessage = document.createElement("h3");
    dialogMessage.innerHTML = "You've successfully booked a table for";
    dialogMessage.style.cssText = "color: green; margin: 0 20px 10px 20px; font-family: sans-serif; letter-spacing: 0";
    let closeButton = document.createElement("button");
    closeButton.innerText = "X";
    closeButton.style.cssText = "font-size: 12px; padding: 3px 5px; margin: 0; color: white; background: #30adc9; margin-left: auto";
    dialog.appendChild(closeButton);
    dialog.appendChild(dialogMessage);
    closeButton.addEventListener("click", ()=>{
        dialog.close();
        resetPage();
    });

    let page = document.querySelector(".main-page");
    page.innerHTML = "";
    page.appendChild(dialog);
    let text = document.createElement("div");
    text.className = "header-text";
    text.innerText = "Reservation";
    page.append(text);
    
    let content = document.createElement("div");
    content.style.cssText = "margin: 30px; display: flex; justify-content: center";
    page.appendChild(content);

    let chefImage = document.createElement("img");
    chefImage.setAttribute('src',"../pictures/chef.png");
    chefImage.style.cssText = "width: 800px; border-radius: 30px;margin-top: -20px; margin-left: auto";
    content.appendChild(chefImage);

    let form = document.createElement("form");
    let nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.innerHTML = "Your name";
    nameLabel.style.display = "inline-block";

    let nameInput = document.createElement("input");
    nameInput.id = "name";
    nameInput.name = "name";
    nameInput.type = "text";
    nameInput.required = true;
    nameInput.style.display = "block";

    let phoneLabel = document.createElement("label");
    phoneLabel.setAttribute("for", "number");
    phoneLabel.innerHTML = "Phone number";
    phoneLabel.style.display = "inline-block";

    let phoneInput = document.createElement("input");
    phoneInput.id = "number";
    phoneInput.name = "number"; // Adding a name attribute here
    phoneInput.type = "number";
    phoneInput.required = true;
    phoneInput.style.display = "block";

    let dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "date");
    dateLabel.innerHTML = "Select date";
    dateLabel.style.display = "inline-block";

    let dateInput = document.createElement("input");
    dateInput.id = "date";
    dateInput.name = "date"; // Adding a name attribute here
    dateInput.type = "date";
    dateInput.required = true;
    dateInput.style.display = "block";
    
    let today = new Date();

    // Format today's date as yyyy-mm-dd for input type="date"
    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let day = String(today.getDate()).padStart(2, '0');
    let minDate = `${year}-${month}-${day}`;
    dateInput.setAttribute('min', minDate);

    let noteLabel = document.createElement("label", {htmlFor: "note"});
    noteLabel.innerHTML = "Message(optional)";
    noteLabel.style.display = "inline-block";
    let noteInput = document.createElement("input", {id: "note", required: false});
    noteInput.type = "textArea";

    let button = document.createElement("button");
    button.innerHTML = "Submit";
    button.style.cssText = "border-radius: 10px; background: #ae6cba; box-shadow: 0px 0px 10px -1px red; grid-row: -2; grid-column:1/-1; margin-top: auto; width: 150px; margin-left: auto; margin-right: auto"
    
    for (let child of [nameLabel, nameInput, phoneLabel, phoneInput, dateLabel, dateInput, noteLabel, noteInput, button]){
        form.appendChild(child);
    }
    button.addEventListener("click", (event)=>{
        event.preventDefault();
        if (nameInput.value === "" || phoneInput.value === "" || dateInput.value === "") {
            newAlert.innerText = "Please fill in all required fields.";
            form.appendChild(newAlert);
            newAlert.style.cssText = "grid-row:-3; grid-column: 1/-1; color: red; font-weight: bold; font-size: 1rem; text-align: center";
            return; // Exit function if validation fails
        }

        newAlert.innerText = "";
        dialogMessage.innerHTML += ` ${dateInput.value}`;
        form.reset();
        dialog.showModal();
    });

    noteInput.style.cssText += "grid-row: 5; grid-column: 1/-1; width: 100%; height: 50px; padding: 0;"
    form.style.cssText = "background: white; padding: 25px 50px; width: 450px; height: 500px; margin-right: 50px; border-radius: 50px; background-color: blue; box-shadow: 3px 3px 10px black; display: grid; grid-template-columns: 1fr 4fr; grid-template-rows:repeat(6, 0.5fr) 4fr;align-items:start; color: white; margin-left: -100px";
    content.appendChild(form);
}