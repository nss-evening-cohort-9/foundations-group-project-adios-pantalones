///////////////////////////
////// BrewMasters ////////
///////////////////////////

const wrestlers = [
    {
        name: 'Stone Cold Steve Austin',
        imgUrl: './assets/Stone-Cold-Steve-Austin.jpg',
        about: 'Stone Cold Steve Austin makes beer for those who are out there crushing it. It hits heavy and goes down smooth. You may just wanna drink two at a time.',
        beerOfChoice: 'Beer of choice: Steveweisers'
    },
    {
        name: 'Andre The Giant',
        imgUrl: './assets/Andre.jpg',
        about: "Andre's beer is big in flavor just like him. It sits on you like a giant. This beer is great with hearty home cooked meals.",
        beerOfChoice: 'Beer of choice: Duff'
    },
    {
        name: 'Macho Man Randy Savage',
        imgUrl: './assets/Macho man.jpg',
        about: "This beer will leave you saying 'Oh Yeahhh'. Made from only locally sourced ingredients Macho Man's Brew brings the noise.",
        beerOfChoice: 'Beer of choice: Amped Beers'
    },
    {
        name: 'Sgt Slaughter',
        imgUrl: './assets/Sgt Slghtr.jpg',
        about: 'Sarges love for brewing started when he home brewed at the barracks at Ft. Benning. His pilsner tastes like America and victory.',
        beerOfChoice: 'Beer of choice: Colonel Crisp'
    },
    {
        name: 'Sting',
        imgUrl: './assets/Sting.jpg',
        about: "When he's not smashing folks with his baseball bat, Sting is brewing up some of the most delicious IPA's you've ever put on your tastebuds.",
        beerOfChoice: 'Beer of choice: Potent Ones'
    },
    // {
    //     name: 'Ric Flair',
    //     imgUrl: './assets/nature boy.jpg',
    //     about: 'Stone Cold Steve Austin makes beer for those who are out there crushing it. It hits heavy and goes down smooth. You may just wanna drink two at a time.',
    //     beerOfChoice: ''
    // },
    {
        name: 'Ultimate Warrior',
        imgUrl: './assets/UW.jpg',
        about: 'Ultimate Warriors attention to flavor profiles is only rivaled by his incredible face paint. A pint of his delish ale will have you breaking out the neon tassles.',
        beerOfChoice: 'Beer of choice: Wildman Beers'
    }
]

const brewMasterCards = (brews) => {
    let domString = '';

    domString += `<div class="card-deck">`
    brews.forEach((drinker) => {
        domString += `<div class="col-md-4 d-flex pb-3">`
        domString += `<div class="card" class="buzzers">`
        domString += `<img src="${drinker.imgUrl}" class="card-img-top" alt="img">`
        domString += `<div class="card-body">`
        domString += `<h5 class="card-title">${drinker.name}</h5>`
        domString += `<p class="card-text">${drinker.about}</p>`
        domString += `<p class="card-footer">`
        domString += `<small class="text-muted">${drinker.beerOfChoice}</small>`
        domString += `</div>`
        domString += `</div>`
        domString += `</div>`
    });
    printToDom('container', domString);
}

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
    }, {
        name: 'OH YEAH Ale',
        imgURL: './assets/Beer2.jpg',
        type: 'Ale',
        abv: '6.6',
        status: 'cruiser',
        ibu: '25',
        tastingNotes: ['Hazy', 'Leathery'],
    }, {
        name: 'Stunner Light',
        imgURL: './assets/Beer3.jpg',
        type: 'Lager',
        abv: '2',
        status: 'light',
        ibu: '5',
        tastingNotes: ['Light', 'Metallic',],
    }, {
        name: 'Andre Ale',
        imgURL: './assets/Beer4.jpg',
        type: 'Ale',
        abv: '12.9',
        status: 'heavy',
        ibu: '50',
        tastingNotes: ['Boozy', 'Bready', 'Robust'],
    }, {
        name: 'Sgt Slaughter Pilsner',
        imgURL: '/assets/Beer5.jpg',
        type: 'Lager',
        abv: '4.5',
        status: 'cruiser',
        ibu: '35',
        tastingNotes: ['Crisp', 'Light', 'Buttery'],
    }, {
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
const unfilteredBtn = document.getElementById("unfilteredBtn");

const brewCardBuilder = (arrayOfBrews, checkboxValue, abvValue) => {
    console.log(abvValue);
    let domString = '';
    arrayOfBrews.forEach((beer) => {
        // function in the for each that checks what "type" was returned 
        // from the checkboxFilter Function
        const checkBoxChecker = () => {
            if (checkboxValue.length === 0) {
                domString = brewCardCreater();
            } else if (checkboxValue.includes(beer.type)) {
                domString = brewCardCreater();
            }
        };

        const brewCardCreater = () => {
            domString += `<div class="col-12 col-md-5 col-lg-4">`;
            domString += `<div class="beerCard card">`;
            domString += `<h1 class="beerName">${beer.name}</h1>`;
            domString += `<div class="beerDescription">`;
            domString += `<img class="beerImage" src=${beer.imgURL}>`;
            domString += `<p class="beerType">Type: ${beer.type}</p>`;
            domString += `<p class="beerABV">ABV: ${beer.abv}%</p>`;
            domString += `<p class="beerIBU">IBU: ${beer.ibu}</p>`;
            domString += `<p> Tasting Notes: `;
            beer.tastingNotes.forEach((notes) => {
                domString += `${notes} `;
            })
            domString += `</p>`;
            domString += `</div>`;
            domString += `</div>`;
            domString += `</div>`;
            return domString;
        };
        // this is the beginning of the for loop and first checks the abv radiobutton
        // the first checks if the all button is checked
        if (abvValue === 'allAbv') {
            // then it checks the checkboxes incase they also were filtered
            checkBoxChecker();
            // this checks to see if the radiobutton matches the beer status
        } else if (abvValue === beer.status) {
            checkBoxChecker();
        }

    });
    // this checks after the for loop if the domstring is empty and then spits out a message
    if (domString === "") {
        domString = `<h2 id="brewEmptyMessage">Sorry, we don't have a brew like that yet!</h2>`;
    }
    printToDom("brewDiv", domString);
};


const checkboxFilter = () => {
    let selectedItems = [];
    let itemsType = document.getElementsByName('beer');
    for (let i = 0; i < itemsType.length; i++) {
        if (itemsType[i].type == 'checkbox' && itemsType[i].checked == true)
            selectedItems.push(itemsType[i].value);
    }
    return selectedItems;
};


const abvFilter = () => {
    for (let i = 0; i < filterRadios.length; i++) {
        if (filterRadios[i].checked) {
            console.log("RadioValue", filterRadios[i].value)
            return filterRadios[i].value;
        }
    } return 'allAbv';
};

const filterBeerFunction = () => {
    let filteredBeerType = checkboxFilter();
    let filteredBeerAbv = abvFilter();
    brewCardBuilder(brews, filteredBeerType, filteredBeerAbv);
};

const unfilteredBeerFunction = () => {
    filterForm.style.display = 'none';
    filterFormRevealBtn.style.display = 'block';
    brewCardBuilder(brews, [], 'allAbv');
    

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
    filterBeerBtn.addEventListener('click', filterBeerFunction);
    unfilteredBtn.addEventListener('click', unfilteredBeerFunction);
};


///////////////////////////////////////
/////////// Home Page Stuff ///////////
///////////////////////////////////////

const pages = [
    {
        title: 'Beers',
        imgURL: './assets/beerlink1.jpg',
        description: 'To view our wide selection of brews',
        linkURL: './brews.html'
    },

    {
        title: 'Brewmasters',
        imgURL: './assets/beerlink2.jpg',
        description: 'To meet our Brewmasters',
        linkURL: './brews.html'
    },

    {
        title: 'About Us',
        imgURL: './assets/beerlink3.jpg',
        description: 'To hear the story of <br>Adios Los Pantalones',
        linkURL: './brews.html'
    }
]

const siteBuilder = (pages) => {
    let domString = '';
    for (let i = 0; i < pages.length; i++) {
        domString += `<div class="site col-4">`;
        domString += `<h1 class="siteName">${pages[i].title}</h1>`;
        domString += `<div class="siteDescription">`;
        domString += `<a class="nav-link" href=${pages[i].linkURL}><img class="pageImage" src=${pages[i].imgURL}></a>`;
        domString += `<p class="pageDescription">${pages[i].description}</p>`;
        domString += `</div>`;
        domString += `</div>`;
    };
    printToDom("sitesDiv", domString);

};

const init = () => {
    if (window.location.pathname === `/brews.html`) {
        brewCardBuilder(brews, [], 'allAbv');
        brewsEventListeners();
    } else if (window.location.pathname === `/brewmasters.html`) {
        brewMasterCards(wrestlers);
    } else if (window.location.pathname === `/index.html`) {
        siteBuilder(pages);
    } else if (window.location.pathname === `/aboutus.html`) {

    }

};

init();