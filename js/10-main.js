//console.log(window);

// window.alert("Hello");
// let x = window.prompt("Enter Your Name: ");
// let y = window.confirm("Are You Sure?");
// document.getElementById("info").innerHTML = "ff " + x + "<br>" + y;

// let d = document.getElementById("info");
// d.innerHTML = "";

// d.innerHTML += "window Width: " + window.innerWidth + "<br>";
// d.innerHTML += "window Height: " + window.innerHeight + "<br>";
// d.innerHTML += "screen width: " + window.screen.width + "<br>";
// d.innerHTML += "screen Height: " + window.screen.height + "<br>";

//window.open('https://google.com');
//window.close();

// if(window.location.protocol == "http")
//     window.location.protocol = "https";
// console.log(window.location);

// function timing(){
//     let d = new Date();
//     let h = d.getHours();
//     let m = d.getMinutes();
//     m = (m < 10)? "0" + m : m;
//     let s = d.getSeconds();
//     s = (s < 10)? "0" + s : s;
//     document.getElementById("info").innerHTML = h + ":" + m + ":" + s;
// }

// setInterval(timing,1000);


let divs = document.getElementsByTagName("div");

console.log(divs);


for(let i = 0; i < divs.length; i++){
    if(i % 2 == 0){
        divs[i].setAttribute("class", "even");
    }
    else{
        divs[i].setAttribute("class", "odd");
    }

    if(i % 3 == 0){
        divs[i].style.backgroundColor = "blue";
    }
    
}


document.images[0].src = "/images/cars/01.png";
document.getElementsByTagName("img")[0].width = 200;

