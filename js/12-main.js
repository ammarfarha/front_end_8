// function f(){
//     var request = new XMLHttpRequest();
//     request.open("GET", "/js/data.json");
//     // request.open("GET", "https://my-json-server.typicode.com/typicode/demo/db");
//     // request.open("GET", "http://api.weatherapi.com/v1/current.json?key=69863d237a644144bfe112940230907&q=Damascus&aqi=no");
//     request.send(); 
//     request.onreadystatechange = function () {
//         let resp = this.responseText;
//         let json_resp = JSON.parse(resp);
//         document.getElementById("mydiv").innerHTML += json_resp.fname + " " + json_resp.lname + "<br>";
//     }
// }

// $(document).ready(function(){
//     $('#btn1').on('click', function(){
//         $.get('/js/data.json', function(d, status){
//             //$('#mydiv').html(d.fname + " " + d.lname);
//             let res = "";
//             res += "<h1>" + d.posts[0].title + "</h1>";
//             res += "<ol>";
//             for(let i = 0; i < d.comments.length; i++){
//                 if(d.posts[0].id == d.comments[i].postId){
//                     res += "<li>" + d.comments[i].body + "</li>";
//                 }
//             }
//             res += "</ol>";
//             $('#mydiv').html(res);
//             console.log(d);
//         });
//     })
// });



$(document).ready(function(){
    $.get("http://api.weatherapi.com/v1/current.json?key=69863d237a644144bfe112940230907&q=Damascus&aqi=yes", function(data, status){
        console.log(data);
        $('#l1').html(data.location.name + " of " + data.location.country);
        $('#l2').html("temp in Cele: " + data.current.temp_c + " <sup>o</sup>C");
        $('#l3').html("temp in Feh: " + data.current.temp_f + " F");
        $('#img1').attr("src", data.current.condition.icon);
    })
});