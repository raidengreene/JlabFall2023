var neededFunction = "";
// A $( document ).ready() block.
$( document ).ready(function() {
  
  $("#bdPush").click(function bdPush() {
    $("#bddoor").attr("src","img/bdOpen.jpg");
    document.getElementById("bdAnswer").innerHTML = "That is correct! How much did you hesitate?";
  });
  
  $("#bdPull").click(function bdPush() {
    document.getElementById("bdAnswer").innerHTML = "Wrong! ";
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



