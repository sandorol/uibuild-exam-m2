window.addEventListener("load", init);


function init(){
    let root = document.getElementById("root");
    let title = document.createElement("h1");
    title.insertAdjacentHTML("beforeend", "Visszajelzés");
    root.appendChild(title);

    let subjectDiv = document.createElement("div");
    subjectDiv.setAttribute("class", "inputbox");
    root.appendChild(subjectDiv);
    let subjectInput = document.createElement("input");
    subjectInput.setAttribute("class", "targy");
    subjectInput.setAttribute("placeholder", "Tárgy");
    subjectDiv.appendChild(subjectInput); 

    let descDiv = document.createElement("div");
    descDiv.setAttribute("class", "inputbox");
    root.appendChild(descDiv);
    let descInput = document.createElement("input");
    descInput.setAttribute("class", "megjegyzes");
    descInput.setAttribute("placeholder", "Megjegyzés");
    descDiv.appendChild(descInput); 

    let checkboxDiv = document.createElement("div");
    checkboxDiv.setAttribute("class", "inputbox");
    root.appendChild(checkboxDiv);
    let myCheckbox = document.createElement("input");
    myCheckbox.setAttribute("type", "checkbox");
    myCheckbox.setAttribute("placeholder", "Megjegyzés");
    checkboxDiv.appendChild(myCheckbox);
    let privacy = document.createElement("a");
    privacy.setAttribute("href", "#");
    checkboxDiv.appendChild(privacy);

    let buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("class", "inputbox");
    root.appendChild(buttonDiv);
    let submitButton = document.createElement("button");
    submitButton.setAttribute("class", "inputbox");
    submitButton.innerHTML = "MENTÉS";
    buttonDiv.appendChild(submitButton);
}