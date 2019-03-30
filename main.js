/////////////////////////////////////
//////////// BREWS PAGE /////////////
/////////////////////////////////////

const brews = [
    {
        name: 'Sting IPA',
        imgURL: './assets/Beer1.jpg',
        type: 'Ale',
        abv: '9.4',
        ibu: '88',
        tastingNotes: ['Citrusy', 'Hoppy', 'Crisp'],
    },{
        name: 'Macho Man Natural',
        imgURL: './assets/Beer2.jpg',
        type: 'Ale',
        abv: '6.6',
        ibu: '25',
        tastingNotes: ['Hazy', 'Leathery'],
    },{
        name: 'Stone Cold Light',
        imgURL: './assets/Beer3.jpg',
        type: 'Lager',
        abv: '2',
        ibu: '5',
        tastingNotes: ['Light', 'Metallic', ],
    },{
        name: 'Andre Ale',
        imgURL: './assets/Beer4.jpg',
        type: 'Ale',
        abv: '12.9',
        ibu: '50',
        tastingNotes: ['Boozy', 'Bready', 'Robust'],
    },{
        name: 'Sgt Slaughter Pilsner',
        imgURL: '/assets/Beer5.jpg',
        type: 'Lager',
        abv: '4.5',
        ibu: '35',
        tastingNotes: ['Crisp', 'Light', 'Buttery'],
    },{
        name: 'Ultimate Warrior Stout',
        imgURL: './assets/Beer6.jpg',
        type: 'Ale',
        abv: '5.9',
        ibu: '80',
        tastingNotes: ['Heavy', 'Malty', 'Caramely'],
    },
];
const filterFormRevealBtn = document.getElementById("filterFormRevealBtn");
const filterBeerBtn = document.getElementById("filterBtn");
const filterForm = document.getElementById("filterForm");

const brewCardBuilder = (arrayOfBrews, checkboxValue) => {
    let domString = '';
    arrayOfBrews.forEach((beer) => {
        if(checkboxValue.length === 0){
            domString += `<div class="beerCard col-4">`;
            domString +=    `<h1 class="beerName">${beer.name}</h1>`;
            domString +=    `<div class="beerDescription">`;
            domString +=        `<img class="beerImage" src=${beer.imgURL}>`;
            domString +=        `<p class="beerType">Type: ${beer.type}</p>`;
            domString +=        `<p class="beerABV">ABV: ${beer.abv}%</p>`;
            domString +=        `<p class="beerIBU">IBU: ${beer.ibu}</p>`;
            domString +=        `<p> Tasting Notes: `;
            beer.tastingNotes.forEach((notes) => {
            domString +=        `${notes} `;
            })
            domString +=        `</p>`;
            domString +=    `</div>`;
            domString += `</div>`; 
        } else if (checkboxValue.includes(beer.type)){
            domString += `<div class="beerCard col-4">`;
            domString +=    `<h1 class="beerName">${beer.name}</h1>`;
            domString +=    `<div class="beerDescription">`;
            domString +=        `<img class="beerImage" src=${beer.imgURL}>`;
            domString +=        `<p class="beerType">Type: ${beer.type}</p>`;
            domString +=        `<p class="beerABV">ABV: ${beer.abv}%</p>`;
            domString +=        `<p class="beerIBU">IBU: ${beer.ibu}</p>`;
            domString +=        `<p> Tasting Notes: `;
            beer.tastingNotes.forEach((notes) => {
            domString +=        `${notes} `;
            })
            domString +=        `</p>`;
            domString +=    `</div>`;
            domString += `</div>`; 
        }
    });
    printToDom("brewDiv", domString);
};

function checkboxFilter(){
    let selectedItems= [];
    let items=document.getElementsByName('beer');
    for(let i=0; i<items.length; i++){
        if(items[i].type=='checkbox' && items[i].checked==true)
            selectedItems.push(items[i].value);
    }
    brewCardBuilder(brews, selectedItems);
}

const revealForm = () => {
    filterForm.style.display = 'block';
    filterFormRevealBtn.style.display = 'none';
};


const printToDom = (divId, textToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const eventListeners = () => {
    filterFormRevealBtn.addEventListener('click', revealForm);
    filterBeerBtn.addEventListener('click', checkboxFilter);
};


const init = () => {
    brewCardBuilder(brews, []);
    eventListeners();
}

init();
