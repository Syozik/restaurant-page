function showReservation(){
    document.querySelector("#back img").style.visibility = "visible";
    
    let page = document.querySelector(".main-page");
    page.innerHTML = "";
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
    let nameLabel = document.createElement("label", {htmlFor: "name"});
    nameLabel.innerHTML = "Your name";
    nameLabel.style.display = "inline-block";
    let nameInput = document.createElement("input", {id: "name", required: true});
    nameInput.type = "text";
    nameInput.style.display = "block";
    let phoneLabel = document.createElement("label", {htmlFor: "number"});
    phoneLabel.innerHTML = "Phone number";
    phoneLabel.style.display = "inline-block";
    let phoneInput = document.createElement("input", {id: "number", type: "number", required: true});
    phoneInput.type = "number";
    phoneInput.style.display = "block";
    let dateLabel = document.createElement("label", {htmlFor: "date"});
    dateLabel.innerHTML = "Select date";
    dateLabel.style.display = "inline-block";
    let dateInput = document.createElement("input", {id: "date", type: "date", required: true});
    dateInput.type = "date";
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
    button.style.cssText = "border-radius: 10px; background: #ae6cba; box-shadow: 0px 0px 10px -1px red; grid-row: 6; grid-column:1/-1; margin-top: auto; width: 150px; margin-left: auto; margin-right: auto"
    for (let child of [nameLabel, nameInput, phoneLabel, phoneInput, dateLabel, dateInput, noteLabel, noteInput, button]){
        form.appendChild(child);
    }

    noteInput.style.cssText += "grid-row: 5; grid-column: 1/-1; width: 100%; height: 50px; padding: 0;"
    form.style.cssText = "background: white; padding: 25px 50px; width: 450px; height: 500px; margin-right: 50px; border-radius: 50px; background-color: blue; box-shadow: 3px 3px 10px black; display: grid; grid-template-columns: 1fr 4fr; grid-template-rows:repeat(5, 0.5fr) 4fr;align-items:start; color: white; margin-left: -100px";
    content.appendChild(form);
}