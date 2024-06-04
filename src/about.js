function showAbout(){
    let page = document.querySelector(".main-page");
    page.innerHTML = "";
    let text = document.createElement("div");
    text.className = "header-text";
    text.innerText = "About Us";
    page.append(text);
}