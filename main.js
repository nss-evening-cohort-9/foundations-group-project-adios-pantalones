/////////////////////////////////////
//////////// BREWS PAGE /////////////
/////////////////////////////////////

const brews = [
    {
        name: 'Stinger Splash IPA',
        imgURL: './assets/Beer1.jpg',
        type: 'Ale',
        abv: '9.4',
        status: 'heavy',
        ibu: '88',
        tastingNotes: ['Citrusy', 'Hoppy', 'Crisp'],
    },{
        name: 'OH YEAH Ale',
        imgURL: './assets/Beer2.jpg',
        type: 'Ale',
        abv: '6.6',
        status: 'cruiser',
        ibu: '25',
        tastingNotes: ['Hazy', 'Leathery'],
    },{
        name: 'Stunner Light',
        imgURL: './assets/Beer3.jpg',
        type: 'Lager',
        abv: '2',
        status: 'light',
        ibu: '5',
        tastingNotes: ['Light', 'Metallic', ],
    },{
        name: 'Andre Ale',
        imgURL: './assets/Beer4.jpg',
        type: 'Ale',
        abv: '12.9',
        status: 'heavy',
        ibu: '50',
        tastingNotes: ['Boozy', 'Bready', 'Robust'],
    },{
        name: 'Sgt Slaughter Pilsner',
        imgURL: '/assets/Beer5.jpg',
        type: 'Lager',
        abv: '4.5',
        status: 'cruiser',
        ibu: '35',
        tastingNotes: ['Crisp', 'Light', 'Buttery'],
    },{
        name: 'The Ultimate Stout',
        imgURL: './assets/Beer6.jpg',
        type: 'Ale',
        abv: '5.9',
        status: 'cruiser',
        ibu: '80',
        tastingNotes: ['Heavy', 'Malty', 'Caramely'],
    },
];
const filterFormRevealBtn = document.getElementById("filterFormRevealBtn");
const filterBeerBtn = document.getElementById("filterBtn");
const filterForm = document.getElementById("filterForm");
const filterRadios = document.getElementsByName("abv");


const brewCardBuilder = (arrayOfBrews, checkboxValue, abvValue) => {
console.log(abvValue);
    let domString = '';
    arrayOfBrews.forEach((beer) => {
        const brewCardCreater = () => {
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
            return domString;
        }

        if (abvValue === beer.status) {
            domString = brewCardCreater();
            } else if (checkboxValue.includes(beer.type)){
            domString = brewCardCreater();
        }
    });
    printToDom("brewDiv", domString);
};


const checkboxFilter = () => {
    let selectedItems= [];
    let itemsType=document.getElementsByName('beer');
    for(let i=0; i<itemsType.length; i++){
        if(itemsType[i].type=='checkbox' && itemsType[i].checked==true)
            selectedItems.push(itemsType[i].value);
    }
    return selectedItems;
};


const abvFilter = () => {
    for (let i =0; i < filterRadios.length; i++) {
        if (filterRadios[i].checked) {
           return filterRadios[i].value;
        }
    }
}

const filterBeerFuntion = () => {
    let filteredBeerType = checkboxFilter();
    let filteredBeerAbv = abvFilter();
    brewCardBuilder(brews, filteredBeerType, filteredBeerAbv);
}
const revealForm = () => {
    filterForm.style.display = 'block';
    filterFormRevealBtn.style.display = 'none';
};


const printToDom = (divId, textToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const brewsEventListeners = () => {
    filterFormRevealBtn.addEventListener('click', revealForm);
    filterBeerBtn.addEventListener('click', filterBeerFuntion);
};


const init = () => {
    if(window.location.pathname === `/brews.html`) {
        brewCardBuilder(brews, []);
        brewsEventListeners();
    } else if (window.location.pathname === `/brewmaster.html`) {
        brewMasterCards(wrestlers);
    } else if (window.location.pathname === `/index.html`) {

    } else if (window.location.pathname === `/aboutus.html`) {

    }
   
}

init();
