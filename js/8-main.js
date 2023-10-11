let x = "<h1>Hello My Dears</h1>";
// alert(x);
// document.writeln(x);
// document.getElementById("d1").innerHTML = x;
// console.log(x);

let val = parseInt(prompt("Enter a value!!!!"));

let tab = document.getElementById("mytable");
let res = "";

for(let i = 0; i <= val; i++){
    res += "<tr>";
    for(let j = 0; j <= val; j++){
        if(i == 0 && j == 0){
            res += "<th></th>";
        }
        if(i > 0 && j == 0){
            res += "<th>" + i + "</th>";
        }
        if(i == 0 && j > 0){
            res += "<th>" + j + "</th>";
        }
        if(i > 0 && j > 0){
            let z = i * j;
            if(z % 2 == 0){
                res += "<td class='even'>";
            }
            else{
                res += "<td class='odd'>";
            }
            res += z;
        res += "</td>";
        }  
    }
    res += "</tr>";
}
tab.innerHTML = res;