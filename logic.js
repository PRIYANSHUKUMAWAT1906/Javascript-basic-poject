const movieinput=document.getElementById("movieInput");
const moviegrid=document.getElementById("moviesGrid");
const Btn=document.getElementById("searchBtn");
const message=document.querySelector(".message");

Btn.addEventListener("click",async()=>{
     message.textContent="...loading";
    const movie=movieinput.value.trim();
    const api=` http://www.omdbapi.com/?apikey=57491f2b&s=${movie}`;
    if(!movie){
        message.textContent="select write movie";
        clearmovie();
        return;
    }
    try{
    const response=await fetch(api);
   const data=await response.json();
    if(!data.Search){
        throw new Error("Movie is not found"); 
    }
    
clearmovie();
   
   message.textContent = "";

    // Loop through movie list
    data.Search.forEach((movie) => {
      const card = document.createElement("div");
      card.className = "movie-card";

      const poster =
        movie.Poster !== "N/A"
          ? movie.Poster
          : "https://via.placeholder.com/150";

      card.innerHTML = `
        <img src="${poster}" alt="${movie.Title}" />
        <div class="movie-title">${movie.Title}</div>
        <div class="movie-year">${movie.Year}</div>
      `;

        moviegrid.appendChild(card);});
    }
catch(error){
message.textContent="movie not found ";
clearmovie();
}

})

function clearmovie(){
   moviegrid.innerHTML = "";
}