// window:
// let w = window.innerWidth;
// let h = window.innerHeight;
// document.getElementById("bom").innerHTML = "width: " + w + "<br>";
// document.getElementById("bom").innerHTML += "height: " + h+ "<br>";
// document.getElementById("bom").innerHTML += navigator.userAgent+ "<br>";
// window.alert("Hello");
// window.confirm("Are You Shure?");
// console.log(window);
// window.open();
// window.close();
// window.moveTo();
// window.resizeTo();

// screen:
// screen.width
// screen.height
// screen.availWidth
// screen.availHeight
// screen.colorDepth
// screen.pixelDepth

// location:
// window.location.href returns the href (URL) of the current page
// window.location.hostname returns the domain name of the web host
// window.location.pathname returns the path and filename of the current page
// window.location.protocol returns the web protocol used (http: or https:)
// window.location.assign() loads a new document

// history:
// history.back() - same as clicking back in the browser
// history.forward() - same as clicking forward in the browser

// navigator:
// navigator.cookieEnabled
// navigator.platform;
// navigator.appVersion;
// navigator.userAgent;
// navigator.language;
// navigator.onLine;


// Popup:
//  alert("I am an alert box!");

// if (confirm("Press a button!")) {
//   txt = "You pressed OK!";
// } else {
//   txt = "You pressed Cancel!";
// }
// document.getElementById("bom").innerHTML +=  txt + "<br>";
// let person = prompt("Please enter your name", "Harry Potter");
// let text;
// if (person == null || person == "") {
//   text = "User cancelled the prompt.";
// } else {
//   text = "Hello " + person + "! How are you today?";
// }

// function testTime(){
//     document.getElementById("bom").innerHTML += "<h1>Hello My Nmae Is Ammar</h1><br>";
// }

// var x = window.setInterval (testTime, 500);


// timeoutVariable = window.setTimeout(function, milliseconds);
// window.clearTimeout(timeoutVariable);
// window.setInterval(function, milliseconds);
// window.clearInterval(timerVariable);

// setInterval(myTimer, 1000);

// function myTimer() {
//   const d = new Date();
//   document.getElementById("bom").innerHTML = d.toLocaleTimeString();
// }

// function startTime() {
//   const today = new Date();
//   let h = today.getHours();
//   let m = today.getMinutes();
//   let s = today.getSeconds();
//   m = checkTime(m);
//   s = checkTime(s);
//   document.getElementById('bom').innerHTML =  h + ":" + m + ":" + s;
//   setTimeout(startTime, 1000);
// }

// function checkTime(i) {
//   if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//   return i;
// }

// startTime();

