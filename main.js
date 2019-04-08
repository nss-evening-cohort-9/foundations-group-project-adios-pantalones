
let inputName = document.getElementById("name");
let inputComment = document.getElementById("bodyText");
const myButton = document.getElementById("commentButton");
const commentAvatar = "http://icons.iconarchive.com/icons/dapino/beach/128/beer-icon.png";
let commentNum = 1;
const commentCollection = [];

const messageBuilder = (commentArray) => {
    let domString = '';
    commentArray.forEach((comment) => {
        domString += `<div>`
        domString += `<div class="media comment">`;
        domString +=    `<img class="mr-3 align-self-center" src="${comment.avatar}" alt="Generic placeholder image">`;
        domString +=    `<div class="media-body">`;
        domString +=        `<h5 class="commentName mt-0">${comment.name}</h5>`;
        domString +=        `<p class="commentText">${comment.comment}</p>`;
        domString +=        `<div class="commentNesting">`;
        domString +=        `</div>`;
        domString +=    `</div>`;
        domString +=    `<div id="${comment.id}" >`;
        domString +=        `<button class="btn btn-success editButton commentButtons">Edit</button>`;
        domString +=        `<button class="btn btn-danger deleteButton commentButtons">Delete</button>`;
        domString +=    `</div>`;
        domString += `</div>`;
        domString += `<div class="${comment.hideOrShow}CommentForm">`;
        domString +=    `<input type="text" class="form-control" id="name" value="${comment.name}"/>`;
        domString +=    `<textarea rows="5" col="30" id="bodyText">${comment.comment}</textarea>`;
        domString +=    `<button class="btn btn-primary mb-2 editCompleteButton">Comment</button>`;
        domString += `</div>`;
        domString += `</div>`;
    });
    printToDom("container", domString); 
    addDeleteEvents();
    addEditEvents();
    console.log("array", document.getElementById("container"))
};

const addComment =(e) => {
    e.preventDefault();
    const commentName = inputName.value;
    const commentContent = inputComment.value;
    const newComment = {
        name: commentName,
        comment: commentContent,
        avatar: `${commentAvatar}`,
        id: `commentNum${commentNum}`,
        hideOrShow: "hidden",
    };
    commentCollection.push(newComment);
    commentNum++; 
    messageBuilder(commentCollection);   
    inputName.value = "";
    inputComment.value = "";
    console.log("array", commentCollection);
};

const editComment = (e) => {
    const buttonId = e.target.parentElement.id 
    const commentFormDiv = e.target.parentElement.parentElement.parentElement.lastChild
    console.log(e.target.parentElement.parentElement.parentElement.lastChild)
    // const commentDiv = e.target.parentElement.parentElement.nextElementSibling
    console.log("got here")
    commentCollection.forEach((comment, index) => {
        if(comment.id === buttonId){
            comment.hideOrShow = "shown";

            messageBuilder(commentCollection)
            addDeleteEvents();
            addEditEvents();
            
        }
    })

}
const deleteComment = (e) => {
    const buttonId = e.target.parentElement.id 
    commentCollection.forEach((comment, index) => {
        if(comment.id === buttonId){
            commentCollection.splice(index, 1);
        }
    })
    messageBuilder(commentCollection);
    addDeleteEvents();
    addEditEvents();
};

const addDeleteEvents = () => {
    const deleteButtons = document.getElementsByClassName('deleteButton');
    for(let i=0; i<deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click', deleteComment);
    }
};

const addEditEvents = () => {
    const editButtons = document.getElementsByClassName('editButton');
    for(let i=0; i<editButtons.length; i++){
        editButtons[i].addEventListener('click', editComment);
    }
};

const aboutEventListeners = () => {
    myButton.addEventListener('click', addComment);
};




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
        domString += `<div class="card buzzers">`
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
        tagline: 'It’s Showtime!',
        type: 'Ale',
        abv: '9.4',
        status: 'heavy',
        ibu: '88',
        tastingNotes: ['Citrusy', 'Hoppy', 'Crisp'],
    }, {
        name: 'OH YEAH Ale',
        imgURL: './assets/Beer2.jpg',
        tagline: 'Crack into a cold one, OH YEAH!',
        type: 'Ale',
        abv: '6.6',
        status: 'cruiser',
        ibu: '25',
        tastingNotes: ['Hazy', 'Leathery'],
    }, {
        name: 'Stunner Light',
        imgURL: './assets/Beer3.jpg',
        tagline: 'At 2%, you gotta drink 2 at a time!',
        type: 'Lager',
        abv: '2',
        status: 'light',
        ibu: '5',
        tastingNotes: ['Light', 'Metallic',],
    }, {
        name: 'Andre Ale',
        imgURL: './assets/Beer4.jpg',
        tagline: 'Drink six of these to join the Brute Squad!',
        type: 'Ale',
        abv: '12.9',
        status: 'heavy',
        ibu: '50',
        tastingNotes: ['Boozy', 'Bready', 'Robust'],
    }, {
        name: 'Sgt Slaughter Pilsner',
        imgURL: '/assets/Beer5.jpg',
        tagline: 'Drink it! That‘s an order!',
        type: 'Lager',
        abv: '4.5',
        status: 'cruiser',
        ibu: '35',
        tastingNotes: ['Crisp', 'Light', 'Buttery'],
    }, {
        name: 'The Ultimate Stout',
        imgURL: './assets/Beer6.jpg',
        tagline: 'The power of the warrioooooor!!!',
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
const brewDiv = document.getElementById("brewDiv");


//this makes a smooth scroll down to the target div when button is clicked
window.smoothScroll = function(target) {
    let scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    let targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};

// This function take in three inputs, the array it loops through, the value of 
// the type checkboxes and the value of the abv radio buttons

const brewCardBuilder = (arrayOfBrews, checkboxValue, abvValue) => {
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
            domString += `<div class="beerImage">`;
            domString += `<img class="beerImage" src=${beer.imgURL}>`;
            domString += `</div>`;
            domString += `<p class="card-text"><small>- ${beer.tagline}</small></p>`
            domString += `<div class="beerDescription row">`;
            domString += `<p class="beerABV col-4 col-md-5 offset-1 col-lg-4">ABV: ${beer.abv}%</p>`;
            domString += `<p class="beerType col-3 col-md-6 col-lg-3">${beer.type}</p>`;
            domString += `<p class="beerIBU col-3 col-md-6 col-lg-4">IBU: ${beer.ibu}</p>`;
            domString += `</div>`;
            domString += `<div class="beerTastingNotes row">`;
            domString += `<p class="col-12"> Tasting Notes: `;
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

// this function gets the value(s) from the checked boxes and returns that array
const checkboxFilter = () => {
    let selectedItems = [];
    let itemsType = document.getElementsByName('beer');
    for (let i = 0; i < itemsType.length; i++) {
        if (itemsType[i].type == 'checkbox' && itemsType[i].checked == true)
            selectedItems.push(itemsType[i].value);
    }
    return selectedItems;
};

//this function returns the value of the clicked abv radiobutton 
const abvFilter = () => {
    for (let i = 0; i < filterRadios.length; i++) {
        if (filterRadios[i].checked) {
            return filterRadios[i].value;
        }
    } return 'allAbv';
};

const filterBeerFunction = () => {
    let filteredBeerType = checkboxFilter();
    let filteredBeerAbv = abvFilter();
    brewCardBuilder(brews, filteredBeerType, filteredBeerAbv)
    smoothScroll(brewDiv);
};

const unfilteredBeerFunction = () => {
    filterForm.style.display = 'none';
    filterFormRevealBtn.style.display = 'block';
    brewCardBuilder(brews, [], 'allAbv');
};

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
        linkURL: './brewmasters.html'
    },

    {
        title: 'About Us',
        imgURL: './assets/beerlink3.jpg',
        description: 'To hear the story of Adios Los Pantalones',
        linkURL: './about.html'
    }
]

const siteBuilder = (pages) => {
    let domString = '';
    pages.forEach((page) => {
        domString += `<div class="col-12 col-md-6 col-lg-4">`;
        domString += `<div class="site card">`;
        domString +=    `<h1 class="siteName">${page.title}</h1>`;
        domString +=    `<div class="siteDescription">`;
        domString +=        `<a class="nav-link" href=${page.linkURL}><img class="pageImage" src=${page.imgURL}></a>`;
        domString +=        `<p class="pageDescription">${page.description}</p>`;
        domString +=    `</div>`;
        domString +=    `</div>`;
        domString += `</div>`; 
    });
    printToDom("sitesDiv", domString)
};

const init = () => {
    if (window.location.pathname === `/brews.html`) {
        brewCardBuilder(brews, [], 'allAbv');
        brewsEventListeners();
    } else if (window.location.pathname === `/brewmasters.html`) {
        brewMasterCards(wrestlers);
    } else if (window.location.pathname === `/index.html`) {
        siteBuilder(pages);
    } else if (window.location.pathname === `/about.html`) {
        aboutEventListeners();
    }

};

init();