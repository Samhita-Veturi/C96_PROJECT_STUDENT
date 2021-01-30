var firebaseConfig = {
    apiKey: "AIzaSyBgE6YBmHl3TmnzJPV44OjKkMTLd9A1ttE",
    authDomain: "c-95-project.firebaseapp.com",
    databaseURL: "https://c-95-project-default-rtdb.firebaseio.com",
    projectId: "c-95-project",
    storageBucket: "c-95-project.appspot.com",
    messagingSenderId: "512265434057",
    appId: "1:512265434057:web:3e4ec92612fdd78a6eee18"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var User_Name = localStorage.getItem("User_1");
var Room_Name = localStorage.getItem("Room_Name");

function Logout(){
    localStorage.removeItem("User_1");
    localStorage.removeItem("Room_Name");
    window.location = "Login.html";
}

function Send(){
    Msg = document.getElementById("Input_Box").value;
    firebase.database().ref(Room_Name).push({
        Name: User_Name,
        Message: Msg,
        Likes: 0
    });
    document.getElementById("Input_Box").value = "";
}