if(localStorage.getItem("ch0") == "print"){
  document.getElementById("ch0").src = "print.html";
  document.getElementsByTagName("h1")[0].innerHTML = "Python - The Print Statement - Article";
  localStorage.setItem("ch0", "false");
}

if(localStorage.getItem("ch1") == "library"){
  document.getElementById("ch1").src = "library.html";
  document.getElementsByTagName("h1")[0].innerHTML = "Python - Variables - The Library - Task";
  localStorage.setItem("ch1", "false");
}

function openSide() {
  document.getElementById("sideNavID").style.width = "250px";
  document.getElementById("sideNavID").style.borderWidth = "10px";
}


function closeSide() {
  document.getElementById("sideNavID").style.width = "0";
  document.getElementById("sideNavID").style.borderWidth = "0px";
}

function ch0Switch(inner) {
  if(inner == true) {
    localStorage.setItem("ch0", "print");
    window.top.location.reload();
  }
  else if(inner == false) {
    localStorage.setItem("ch0", "print");
  }
  else if(inner == "previous") {
    localStorage.setItem("ch0", "print");
    window.top.open('/pypilAcademy/chapter0/index.html','_self');
  }
}


function ch1Switch(inner) {
  if(inner == true) {
    localStorage.setItem("ch1", "library");
    window.top.location.reload();
  }
  else {
    localStorage.setItem("ch1", "library");
  }
}
