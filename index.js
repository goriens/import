import navbar from "./navbar.js";
import { getData, appendData } from "./scripts/getData.js";
//console.log(navbar);

let navbar_div = document.querySelector("#navbar-container")
navbar_div.innerHTML = navbar();

document.querySelector("#btn").addEventListener("click", handleEvents);



function handleEvents() {
    let search = document.querySelector("#search").value;
    showData(search);
}
async function showData(search) {
    document.querySelector("#data").innerHTML = "";
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + search;
    let res = await getData(url);
    let parent = document.querySelector("#data")
    appendData(res, parent);

}


let url = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";
let res = await getData(url);
console.log("res", res);

let parent = document.querySelector("#data")
appendData(res, parent);