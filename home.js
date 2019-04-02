const printToDom = (divId, textToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};



// Home Page Stuff //
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
    for(let i = 0; i < pages.length; i++) {
        domString += `<div class="site col-4">`;
        domString +=    `<h1 class="siteName">${pages[i].title}</h1>`;
        domString +=    `<div class="siteDescription">`;
        domString +=        `<a class="nav-link" href=${pages[i].linkURL}><img class="pageImage" src=${pages[i].imgURL}></a>`;
        domString +=        `<p class="pageDescription">${pages[i].description}</p>`;
        domString +=    `</div>`;
        domString += `</div>`; 
    };
    printToDom("sitesDiv", domString);
}

const init = () => {
    siteBuilder(pages)
}

init();