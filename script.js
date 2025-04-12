let allCountries = [];
let filteredCountries = [];
let currentPage = 1;
const countryPerPage = 12;

document.getElementById("loadBtn").addEventListener("click",fetchCountries);
document.getElementById("regionSelerct").addEventListener("change",filterByRegion);

function fetchCountries(){
    fetch("https://restcountries.com/v3.1/all")
    .then(repinse => Response.json())
    .then(data =>{
        allCountries = data;
        filteredCountries =data;
        currentPage = 1;
        displayCountries()
        updatePagination()
           
})
    .catch(error =>console.error("error by gettint data",));

    function filterByRegion(){
        const region= document.getElementById("regionSelect").value;
        fetchCountries = region == "all" ? allCountries : allCountries.filter(c =>c.region == region);
        currentPage = 1;
        displayCountries()
        updatePagination()
    }
       
    function displayCountries(){
        const countryList = document.getElementById("countryList");
        countryList.innerHTML = '';
        const countriesToShow = filteredCountries.slice(Start,end)    
        const start =(currentPage-1)*countryPerPage;
        const end = start + countryPerPage;
        countriesToShow.forEach(country =>){
            const card = document.createElemen("div");
            card.className = "col-md-4 mb-4";
            card.innerHTML =  `div class="card h-100 shadow=sm`>
            <img src="$"{country.flags.png}"class=card-img-top" alt="Flag of ${country.name.common}"/>
            <div class="card-body">
                <h5 class="card-tittle">${country.name.common</h5>
                <p class="card-text">
                    <strong></strong>
                </p>
            </div>
           
        }
    }
    }
