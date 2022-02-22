import navbar from "./navbar.js";
import { getData, appendData } from "./scripts/getData.js";
//console.log("navbar", navbar)
let navbar_div = document.querySelector("#navbar-container");
navbar_div.innerHTML = navbar();



let url = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";
let res = await getData(url);
console.log("res", res);

let parent = document.querySelector("#data")
appendData(res, parent);


//res.then((data) => {
//    console.log(data)
//})