MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

console.log("IT'S WORKING!!!");

let ad_shown = false;

// Callback function executes with any change to the page's html (DOM)
var observer = new MutationObserver(function(mutations){
    // this is the same as doing control + f and searching for "div.ad-showing"
    const ad_contents = document.querySelector("div.ad-showing");
    
    if(ad_contents){
        let contents = ad_contents.innerHTML;
    }

    if (ad_contents && !ad_shown) {
        // ad is active as a video 
        ad_shown = true;
        console.log("Ad playing!!!");

        ad_contents.innerHTML = `<img src='${chrome.runtime.getURL('/images/no_ad.png')}' style="width: 100%;">`;
        console.log("We made it!");
    }  
    else if(!ad_contents && ad_shown) {
        ad_shown = false;
        console.log("Ad no longer playing.");

        ad_contents.innerHTML = contents;
    }
    
});

// start observing DOM
observer.observe(document, {
    subtree: true,
    attributes: true
});