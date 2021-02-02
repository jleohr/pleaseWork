window.alert("Hello!");

//Reference to the database
let database = firebase.database();

//Reference the items branch of your database
let resourceRef = firebase.database().ref("Things");

function updateFirebase() {
};

//Create a function that will run when the Website is finished loading as well as create a function when the button is clicked.
document.addEventListener('DOMContentLoaded', function() {
   document.getElementById("save").addEventListener('click',function ()
   {

       console.log("it worked!")

       //Config the Model
       var newResource = {
           techFirstName: document.getElementById("firstName").value, //Put the tech first name here
           techLastName: document.getElementById("lastName").value //Put the tech last name here
       };

       database.push(newResource);
       window.location = "success.html";

   }  );

});
