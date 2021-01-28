/*
// Initialize Firebase
 // Initialize Firebase
 let config = {
   apiKey: "AIzaSyDDSWMqf6-V57huLpw37qVLSdJdM14_ZXc",
   authDomain: "pleasework-4e932.firebaseapp.com",
   databaseURL: "https://pleasework-4e932-default-rtdb.firebaseio.com",
   projectId: "pleasework-4e932",
   storageBucket: "pleasework-4e932.appspot.com",
   messagingSenderId: "778216765467",
   appId: "1:778216765467:web:2f8295dee7168a12b4a0be",
   measurementId: "G-628JPPX8JQ"
 };
 
firebase.initializeApp(config);

//Reference to the database
let database = firebase.database();

//Reference the items branch of your database
let resourceRef = firebase.database();

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

    resourceRef.push(newResource);
    
    */
		window.location = "success.html";
/*
   }  );

});
*/
