
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const loader = document.getElementById("loader");
const errorMessage = document.getElementById("errorMessage");
const moviePreview = document.getElementById("moviePreview");

searchBtn.addEventListener("click", ()=>{
   const query= searchInput.value.trim();
    if(!query) return;
    fetchMovies(query);
});

const fetchMovies = async(query)=>{
    const APIs = {
        BaseURL : "https://api.kinocheck.com/",
        APIKey : "HhdaQ6tX1M78jYLKN1ZNnmabKDV8RHT3nCgCz0WseEO40oWP5wJcEve9xPF95BrZ"
    }
    //showing loader
     loader.classList.remove("hidden");
     errorMessage.classList.add("hidden");
     moviePreview.querySelector("div").classList.add("hidden");

   try{
    const response = await fetch(`${APIs.BaseURL}movies?query=${encodeURIComponent(query)}`, {
        headers: {
          "X-Api-Key": APIs.APIKey,
          "Accept": "application/json"
        }
      });
    if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
   }
   catch(err)
   {
    console.log(err);
    errorMessage.textContent = err.message;
    errorMessage.classList.remove("hidden");
   }
}