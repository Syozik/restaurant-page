function showContact(){
    let page = document.querySelector(".main-page");
    page.innerHTML = "";
    let text = document.createElement("div");
    text.className = "header-text";
    text.innerText = "Contact";
    page.append(text);
    let content = document.createElement("div");
    page.append(content);
    content.style.cssText = "display: flex";
    let mapText = document.createElement("h2");
    mapText.style.cssText = "text-align: center; color: #333333;text-shadow: 0px 1px 10px white;";
    mapText.innerHTML = "Find us here!";
    let map = document.createElement("div")
    map.className = "map";
    let googleMaps = document.createElement("iframe");
    googleMaps.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.2568863898894!2d13.240824692163013!3d45.894460074753205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477bb9e358300001%3A0xe7542050b057efda!2sBeer%20Paradise%20Shop!5e0!3m2!1sen!2sca!4v1717467960512!5m2!1sen!2sca");
    googleMaps.style.cssText = "loading = 'lazy';height: 50vh; width: 100%; border:3px double grey; border-radius: 25px; box-shadow: 0px 0px 7px 3px black"
    map.style.cssText = "margin: 2% 10%; flex-grow: 1";
    map.appendChild(mapText);
    map.appendChild(googleMaps);
    content.appendChild(map);
    
    let newBox = document.createElement("div");
    let contactWays = document.createElement("div");

    let phoneNumberLogo = document.createElement("img");
    phoneNumberLogo.setAttribute("src", "../pictures/phone-number.svg");
    phoneNumberLogo.className = "contactLogo";
    phoneNumberLogo.style.marginLeft = "-5px";
    let phoneNumber = document.createElement("div");
    phoneNumber.appendChild(phoneNumberLogo);
    phoneNumber.innerHTML += "(403)-978-27-93";
    phoneNumber.style.cssText = "display: flex; align-items: center; gap: 10px; padding-bottom: 5px; margin-bottom: 10px; border-bottom: 1px solid grey"

    contactWays.appendChild(phoneNumber);

    // contactWays.appendChild(instagram);
    // let instagramLogo = document.createElement("img");
    // instagramLogo.setAttribute("src", "../pictures/instagram.svg");
    // instagramLogo.className = "contactLogo";
    // let instagram = document.createElement("div");
    // let instagramLink = document.createElement("a");
    // instagramLink.href = "https://instagram.com/rubansk1y";
    // instagramLink.innerText = "@rubansk1y";
    // instagram.appendChild(instagramLogo);
    // instagram.appendChild(instagramLink);
    // instagram.style.cssText = "display: flex; align-items: center; gap: 10px; padding-bottom: 5px; border-bottom: 1px solid grey"


    
    let instagramLogo = document.createElement("img");
    instagramLogo.setAttribute("src", "../pictures/instagram.svg");
    instagramLogo.className = "contactLogo";
    let instagram = document.createElement("div");
    let instagramLink = document.createElement("a");
    instagramLink.href = "https://instagram.com/rubansk1y";
    instagramLink.innerText = "@rubansk1y";
    instagram.appendChild(instagramLogo);
    instagram.appendChild(instagramLink);
    instagram.style.cssText = "display: flex; align-items: center; gap: 10px; padding-bottom: 5px; border-bottom: 1px solid grey"


    contactWays.appendChild(instagram);
    contactWays.style.cssText = "background: white; width: 300px; padding: 20px; border: 3px solid grey; margin-top: 50px";
    newBox.style.cssText = "display: flex; flex-direction: column; align-items: center";
    newBox.appendChild(contactWays);
    // newBox.appendChild();
    newBox.style.cssText += "flex-grow: 4";
    content.appendChild(newBox);

}