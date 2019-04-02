///////////////////////////
////// BrewMasters ////////
///////////////////////////

const wrestlers =[
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
        domString +=   `<div class="col-md-4 d-flex pb-3">`
        domString +=   `<div class="card" class="buzzers">`
        domString +=        `<img src="${drinker.imgUrl}" class="card-img-top" alt="img">`
        domString +=        `<div class="card-body">`
        domString +=        `<h5 class="card-title">${drinker.name}</h5>`
        domString +=        `<p class="card-text">${drinker.about}</p>`
        domString +=        `<p class="card-footer">`
        domString +=        `<small class="text-muted">${drinker.beerOfChoice}</small>`
        domString +=        `</div>`
        domString +=    `</div>`  
        domString += `</div>`
    });
    printToDom('container', domString);
}

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

const brewCardBuilder = (arrayOfBrews) => {
    let domString = '';
    arrayOfBrews.forEach((beer) => {
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
    });
    printToDom("brewDiv", domString);
}


const printToDom = (divId, textToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const init = () => {
    if(window.location.pathname === '/brews.html') {
        brewCardBuilder(brews);
    } else if (window.location.pathname === '/brewmasters.html') {
        brewMasterCards(wrestlers);
    }
}

init();