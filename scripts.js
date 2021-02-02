window.alert("Hello!");

var resourceRef = firebase.database().ref("Things");

//Create a function that will run when the Website is finished loading as well as create a function when the button is clicked.
document.addEventListener('DOMContentLoaded', function() {
   document.getElementById("save").addEventListener('click',function ()
   {

       window.alert("it worked!");

       //Config the Model
       var newResource = {
           techFirstName: document.getElementById("firstName").value, //Put the tech first name here
           techLastName: document.getElementById("lastName").value //Put the tech last name here
       };

       resourceRef.push(newResource);
       window.location = "success.html";

   }  );

});

