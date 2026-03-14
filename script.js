function likePlace(event,button){

event.stopPropagation()

button.innerHTML="❤️ Liked"

}

function showMap(url){
  const popup = document.getElementById("mapPopup");
  const frame = document.getElementById("mapFrame");
  frame.src = url;
  popup.classList.add("show");
}

function closeMap(){
  const popup = document.getElementById("mapPopup");
  const frame = document.getElementById("mapFrame");
  popup.classList.remove("show");
  frame.src = ""; 
}

