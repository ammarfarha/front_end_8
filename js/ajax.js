// var request = new XMLHttpRequest();
//request.open("GET", "./data/color.json");
//request.open("GET", "https://my-json-server.typicode.com/typicode/demo/db");
// request.open("GET", "http://api.weatherapi.com/v1/current.json?key=69863d237a644144bfe112940230907&q=Damascus&aqi=no");
// request.send(); 
// request.onreadystatechange = function () {
//     let resp = this.responseText;
//     let json_resp = JSON.parse(resp);
//     console.log(json_resp);
//     document.getElementsByTagName("img")[0].src = json_resp.current.condition.icon;
//     document.querySelectorAll("#c span")[0].innerHTML = json_resp.current.temp_c;
//     document.querySelectorAll("#f span")[0].innerHTML = json_resp.current.temp_f;
// }



//    $(document).ready(function(){
//        $.get("http://api.weatherapi.com/v1/current.json?key=69863d237a644144bfe112940230907&q=Damascus&aqi=no", function(data, status){
//            $("#t1").html(data.current.temp_c);
//            console.log(data);
//        });
//    });