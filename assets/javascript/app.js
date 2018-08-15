$(document).ready(function() {
	// Initialize Firebase
	var config = {
	apiKey: "AIzaSyBEi_KBo1G9upq-WFjGjLu-IFMco14KYos",
	authDomain: "rps-online-b88f7.firebaseapp.com",
	databaseURL: "https://rps-online-b88f7.firebaseio.com",
	projectId: "rps-online-b88f7",
	storageBucket: "rps-online-b88f7.appspot.com",
	messagingSenderId: "215163548036"
	};
	firebase.initializeApp(config);

	var database = firebase.database();
	var connectionsRef = database.ref("/connections");
	var connectedRef = database.ref(".info/connected");
	var users;
  
	connectedRef.on("value", function(snap) {
		if (snap.val()) {
			var con = connectionsRef.push(true);
			con.onDisconnect().remove();
		}
	});

	connectionsRef.on("value", function(snap) {
		users = snap.numChildren();
		console.log(users);
		if (users == 2) {
		$("#name").attr("class", "disabled");
	} else {$("#name").removeClass("disabled");}
	});

  
	$("#name-btn").on("click", function(event) {
		event.preventDefault();
		if ($("#name").val().trim() == ""){
			return;
		}
		var name = $("#name").val().trim();
		console.log(name);
		$("#name").val("");
	});
});