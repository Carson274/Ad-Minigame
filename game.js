MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

console.log("IT'S WORKING!!!");

let ad_shown = false;

// Callback function executes with any change to the page's html (DOM)
var observer = new MutationObserver(function(mutations){
    const ad_contents = document.querySelector("div.ad-showing");
    // this is the same as doing control + f and searching for "div.ad-showing"
    if (ad_contents && !ad_shown) {
        // ad is active as a video 
        ad_shown = true;
        console.log("Ad playing!!!");

        ad_contents.innerHTML = "<h1>RAGGGH</h1>";
        console.log(ad_contents);
        console.log("We made it!");
        }  
    else if(!ad_contents && ad_shown) {
        ad_shown = false;
        // console.log("Video is playin!!!")
    }
    
});

// start observing DOM
observer.observe(document, {
    subtree: true,
    attributes: true
});