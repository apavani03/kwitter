var firebaseConfig = {
    apiKey: "AIzaSyCh24hSWwguDQ4NjiS_2-GXtFcXgJo9pbM",
    authDomain: "kwitter-2-28842.firebaseapp.com",
    databaseURL: "https://kwitter-2-28842-default-rtdb.firebaseio.com",
    projectId: "kwitter-2-28842",
    storageBucket: "kwitter-2-28842.appspot.com",
    messagingSenderId: "185298666002",
    appId: "1:185298666002:web:1c86413bc74f2eac8f0ecb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

  function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:  "Adding Room"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
    
  }
