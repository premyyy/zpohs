function order(){
    var name = document.getElementById("name").value;
    var tQty = document.getElementById("tea").value;
    var cQty = document.getElementById("coffee").value;
    var bQty = document.getElementById("blacktea").value;
    var d = new Date();

    console.log(date);
        
    var firebaseConfig = {
        apiKey: "AIzaSyCQ2V9hJhAxtxlbH3eY1nfte1rhF1Ciwc4",
        authDomain: "tea-house-125b6.firebaseapp.com",
        databaseURL: "https://tea-house-125b6.firebaseio.com",
        projectId: "tea-house-125b6",
        storageBucket: "tea-house-125b6.appspot.com",
        messagingSenderId: "449250853579",
        appId: "1:449250853579:web:8430e87f1cec65e93a114e",
        measurementId: "G-MHHT2Q749J"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    console.log(firebase);

    var database = firebase.database()
    var ref= database.ref('order');
    var date = d.toUTCString();
    var data = {
        Date: date,
        Name: name,
        Tea: tQty,
        Coffee: cQty,
        Blacktea: bQty
    }
    console.log(data);
    ref.push(data);

    alert("Order is placed, Thank You!");
    
   

}