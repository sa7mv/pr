function myFunction() {
    var x = document.getElementById("ustMenu");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }