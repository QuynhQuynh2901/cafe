function an(){
    var a = document.getElementById('quangcao');
    var b = document.getElementsByTagName('section');
    var c = document.getElementById('header');
    var d = document.getElementById('footer');
    a.style.display = "none";
    for(var i = 0; i < b.length; i++)
    {
        b[i].style.opacity = "1";
    }
    c.style.opacity = "1";
    d.style.opacity = "1";
}
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}