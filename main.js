var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

const links = document.querySelectorAll('.navbar a');
const currentUrl = window.location.pathname;

links.forEach(link => {
    if (link.href.includes(`${currentUrl}`)) {
        link.classList.add('active');
    }
});