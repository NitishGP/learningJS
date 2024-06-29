const locationfield= document.querySelector(".weather2 p");
const dateTime= document.querySelector(".weather2 span");
const temperature= document.querySelector(".weather1");
const picture= document.querySelector(".weather3 img");
const  statusField= document.querySelector(".weather3 span");
const  searchingham = document.querySelector(".Searchfield");
const  form= document.querySelector("form");

let target = "new delhi";

const fetchdata = async (target) => {
    const url=`https://api.weatherapi.com/v1/current.json?key=699cec2f8f294886b50172914232210&q=${target}`;

    const response = await fetch(url);
    const data = await response.json();
    const { current:{

        condition:{text,icon} }
    } = data;
    console.log(data);


   updateDom(locationfield,data.location.name);
   updateDom(temperature,data.current.temp_c+"°");
   updateDom(dateTime,data.current.last_updated);
   picture.src = icon;
   updateDom(statusField,text);

};

function updateDom(doc,valuee) {
doc.innerText= valuee;
};

fetchdata(target);

const search = (e) => {
    e.preventDefault();
    target=searchingham.value;
    fetchdata(target);
};

form.addEventListener("submit",search);