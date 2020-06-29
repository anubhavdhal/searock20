// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCwXv0Pom88UOz63idQEQ036o16TqRidjI",
  authDomain: "registrationform-ff6b8.firebaseapp.com",
  databaseURL: "https://registrationform-ff6b8.firebaseio.com",
  projectId: "registrationform-ff6b8",
  storageBucket: "registrationform-ff6b8.appspot.com",
  messagingSenderId: "1096717652160",
  appId: "1:1096717652160:web:21a731771e5633d3e61d25",
  measurementId: "G-EB3BBLVWE6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//collection

var dataRef= firebase.database().ref('regForm');



document.getElementById('registrationform').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();
  var name = getInputVal('bandname');
  var contact = getInputVal('contact');
  var email = getInputVal('email');
  var city = getInputVal('city');
  saveData(name,contact,email, city);

  //submission message

  document.querySelector('.alert').style.display='block';

  setTimeout(function(){
    document.querySelector('.alert').style.display='none';
  },3000);
  
  document.getElementById('registrationform').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

//save data

function saveData(name,contact,email,city){
  var newDataRef = dataRef.push();
  newDataRef.set({
    name:name,
    contact:contact,
    email:email,
    city:city
  })
}