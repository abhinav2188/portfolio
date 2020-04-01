const sidebar = document.querySelector("#sidebar");
const sidebarBackdrop = document.querySelector("#sidebarBackdrop");
const msgModel = document.querySelector("#msgModal");

function showSidebar(){
    sidebar.classList.remove("translate-x-full");
    sidebarBackdrop.classList.remove("hidden", "opacity-0");
    sidebarBackdrop.classList.add("opacity-75")
}
function hideSidebar(){
    sidebar.classList.add("translate-x-full");
    sidebarBackdrop.classList.add("hidden", "opacity-0");
    sidebarBackdrop.classList.remove("opacity-75")
}
function copyEmailToClipboard() {
    /* Get the text field */
    var copyText = document.querySelector("#email").textContent;
    console.log(copyText);
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = copyText;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    /* Alert the copied text */
    msgModel.innerHTML = "email copied "+copyText;
    msgModel.classList.remove("top-0");
    msgModel.classList.add("top-1/5");
    setTimeout( () => {msgModel.classList.add("top-0"); msgModel.classList.remove("top-1/5")} ,2000);

  }
// let posters = [
//     'iris.jpg',
//     'Qafia.jpg',
//     'Buzzer.jpg',
//     'Battle of Bands 2.jpg',
//     'Battle of Bands.jpg',
//     'solo singing 3.jpg',
//     'Buzzer2.jpg',
//     'solo singing dark.jpg',
//     'Dj Wars.jpg',
//     'Grey Matter.jpg',
//     'Impressions.jpg',
//     'Informal pubg.jpg',
//     'Jalsa.jpg',
//     'xenium final.jpg',
//     'Rapbeats Beatbox Battle.jpg',
//     'Spunk Street Dance.jpg',
//     'Spunk Western Group Dance.jpg',
//     'Spunk Western Solo Dance.jpg'
// ];
// const postersPath = "assets/images/posters/";
// let cposter = document.getElementById('poster-display-center');
// let lposter = document.getElementById('poster-display-left');
// let rposter = document.getElementById('poster-display-right');
// let cIndex;
// let lIndex;
// let rIndex;

// function setPoster(){
//     lposter.src = postersPath + posters[lIndex];
//     cposter.src = postersPath + posters[cIndex];
//     rposter.src = postersPath + posters[rIndex];
// }
// function prevPoster(){
//     lIndex--;
//     cIndex--;
//     rIndex--;
//     if(lIndex < 0)
//     lIndex = posters.length - 1;
//     if(cIndex < 0)
//     cIndex = posters.length - 1;
//     if(rIndex < 0)
//     rIndex = posters.length - 1;
//     setPoster();
// }
// function nextPoster(){
//     lIndex++;
//     cIndex++;
//     rIndex++;
//     if(lIndex >= posters.length)
//     lIndex = 0;
//     if(cIndex >= posters.length)
//     cIndex = 0;
//     if(rIndex >= posters.length)
//     rIndex = 0;
//     setPoster();
// }
// function setInitialPoster(){
//     cIndex = 0;
//     lIndex = posters.length-1;
//     rIndex = 1;
//     setPoster();
// }

// window.onload = setInitialPoster;