function anh(so){
  var i, anh, button;
  anh = document.getElementsByClassName("phone")
  for (i = 0; i < anh.length; i++) {
      anh[i].style.display = "none";
    }
    anh[so].style.display = "block";
    anh[so].classList.add('animated', 'fadeIn','slow');
  button = document.getElementsByClassName('nut');
  //for(i = 0; i < button.length; i++)
  if(so == 0)
  {
    button[0].style.background = "#EA8025";
    button[1].style.background = "black";
    button[2].style.background = "black";
  }
  if(so == 1)
  {
    button[1].style.background = "#EA8025";
    button[0].style.background = "black";
    button[2].style.background = "black";
  }
  if(so == 2)
  {
    button[2].style.background = "#EA8025";
    button[0].style.background = "black";
    button[1].style.background = "black";
  }
}
function cauhoi(so){
  var i, cauhoi, button;
  cauhoi = document.getElementsByClassName("cac")
  dau = document.getElementsByClassName("fa-plus")
  for (i = 0; i < cauhoi.length; i++) {
      cauhoi[i].style.display = "none";
    }
    cauhoi[so].style.display = "flex";
    for(i = 0 ; i < dau.length;i++)
    {
      if(i == so)
        dau[i].className = dau[i].className.replace("fa-plus", "fa-minus");
      else
        dau[i].className = "fas fa-plus";
    }
    evt.currentTarget.className += "fa-plus"
}
