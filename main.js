// console.log("Suh dude");
let inputName = document.getElementById("name");
let inputComment = document.getElementById("bodyText");
const myButton = document.getElementById("commentButton");
const commentAvatar = "https://previews.123rf.com/images/lineartestpilot/lineartestpilot1410/lineartestpilot141004547/32623035-cartoon-beer-bottle.jpg"

const printToDom = (divId, textToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const messageBuilder = () => {
     inputName = document.getElementById("name").value;
     inputComment = document.getElementById("bodyText").value;
    console.log(inputName);
    console.log(inputComment);

    let domString = '';
    domString +=  `<div class="media">`;
    domString += `<img class="mr-3" src="${commentAvatar}" alt="Generic placeholder image">`;
    domString +=  `<div class="media-body">`;
    domString += `<h5 class="mt-0">${inputName}</h5>`;
    domString +=  `<p>${inputComment}</p>`;
    domString += `</div>`;
    printToDom("container", domString); 
    document.getElementById("name").value = "";
    document.getElementById("bodyText").value = "";
}


const eventListeners = () => {
    myButton.addEventListener('click', messageBuilder);

};





const init = () => {
    eventListeners();
};

init();