MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

console.log("IT'S WORKING!!!");

let ad_shown = false;

let image;

// Callback function executes with any change to the page's html (DOM)
var observer = new MutationObserver(function(mutations){
    // this is the same as doing control + f and searching for "div.ad-showing"
    const ad_container = document.querySelector("div.ad-showing");
    const ad_video = document.querySelector("video");

    const bounds = ad_video.getBoundingClientRect();

    // check to see if ad is playing
    if(ad_container){
        let contents = ad_container.innerHTML;
    }

    // check to see if ad is playing; place image if it is
    if (ad_container && !ad_shown) {

        if(image){
            // creates an image element with no_ad.png
            image = document.createElement("img");
            image.src = chrome.runtime.getURL("/images/no_ad.png");
            image.id = "ad_image";
            image.style.position = "absolute";
            image.style.width = bounds.width + "px";
            image.style.height = bounds.height + "px";
            image.style.top = bounds.y + "px";
            image.style.left = bounds.x + "px";
            image.style.zIndex = "99";
            console.log("Image displayed.");

            document.body.appendChild(image);
        }

        // ad is active as a video 
        ad_shown = true;
        console.log("Ad playing!!!");


        setTimeout(() => {
            const button = document.querySelector("button.ytp-ad-skip-button, button.ytp-ad-skip-button-modern");
            console.log(button);
            
            if(button){
                button.click();
                console.log("Button attempted to click.");
            }
            console.log("Button attempted to click - after if.");
        }, 5000);
    }  
    else if(!ad_container && ad_shown) {

        // remove the image from the page
        document.querySelector("#ad_image").remove();

        ad_shown = false;
        console.log("Ad no longer playing.");
    }
    
});

// start observing DOM
observer.observe(document, {
    subtree: true,
    attributes: true
});