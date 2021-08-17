
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var search = document.getElementsByClassName("searchBox")[0];

var searchRes = document.getElementsByClassName("modal-content")[0]
var searchBox = document.getElementsByClassName("searchInput")[0]

function dosearch(){
  ret = search(searchBox.value)
  res = "<ul>"
  for(item of ret){
      res+="<li><a href='/posts/"+item.urlref+".html'>"+item.title+"</a><p>"+item.res+"</p></li>"
  }
  res+="</ul>"
  searchRes.innerHTML = res
}

searchBox.oninput = ()=>dosearch()


// When the user clicks on the button, open the modal
search.onmouseenter= function() {
  dosearch()
  modal.style.display = "block";
  searchBox.focus()
}

// When the user clicks on <span> (x), close the modal

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
