const form=document.querySelector("#form");
const deleteButton=document.querySelector("#remove-btn");
const searchButton=document.querySelector("#search-btn");
const searchInput=document.querySelector("#search-input");
const gifArea=document.querySelector(".gifs");




async function addGif(searchTerm) {
   let res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)

   let randomUrl= (res.data.data[Math.floor(Math.random() * res.data.data.length)].images.downsized.url);


  

 let image = new Image();
 image.src = randomUrl;
gifArea.appendChild(image);
};

addEventListener("submit", (e) => {
  e.preventDefault();
  addGif(e.target[0].value);
  });

   
 
$("#remove-btn").on("click", function() {
  console.log("hi");
  console.log(gifArea);
  $("#container").empty();
});






 





