function show(){
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

    var fer = database.ref('order');
    fer.on('value',getData,errData);
}

function getData(data){
    // console.log(data.val());
    
     var qty = data.val();
     var keys = Object.keys(qty);
     //console.log(keys);
    for(var i = 0; i< keys.length; i++){    // As per data base loop
         var li = document.createElement("li");
         var k = keys[i];
         var date = qty[k].Date;
         var name = qty[k].Name;
         var tea = qty[k].Tea;
         var coffee = qty[k].Coffee;
         var blacktea = qty[k].Blacktea;
         console.log(tea,coffee,blacktea);
         li.innerHTML = date+"--{Name of customer :-"+name+"---[tea = "+tea+"]---[coffee = "+coffee+"]---[blacktea = "+blacktea+"]}";
         document.getElementById("orderlist").appendChild(li);
     }
 
 }
 
 function errData(err){
     console.log('Error!');
     console.log(err)
 }
 