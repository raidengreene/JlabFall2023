var neededFunction = "";
// A $( document ).ready() block.
$( document ).ready(function() {
  
  $("#bdPush").click(function bdPush() {
    $("#bddoor").attr("src","img/bdOpen.jpg");
    $("#bddoor").attr("alt","open door");
    document.getElementById("bdAnswer").innerHTML = "That is correct! How much did you hesitate?";
  });
  
  $("#bdPull").click(function bdPull() {
    $("#bddoor").attr("src","img/bdClose.jpg");
    $("#bddoor").attr("alt","closed door");
    document.getElementById("bdAnswer").innerHTML = "Wrong! Now you look like an idiot!";
  });
  
  $("#gdPush").click(function gdPush() {
    $("#gddoor").attr("src","img/gdOpen.jpg");
    $("#gddoor").attr("alt","open door");
    document.getElementById("gdAnswer").innerHTML = "That is correct! See how easy this is?";
  });
  
  $("#gdPull").click(function gdPull() {
    $("#gddoor").attr("src","img/gdclose.jpg");
    $("#gddoor").attr("alt","closed door");
    document.getElementById("gdAnswer").innerHTML = "Why would you press that? It literally tells you waht to do.";
  });

});


function openDesign(evt, design) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(design).style.display = "block";
    evt.currentTarget.className += " active";
  }



