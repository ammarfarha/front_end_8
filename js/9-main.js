// function f(x=7){
//     return x ** 4;
// }
// function is_prime(num){
//     let res = true;
//     for(let i = 2; i < num; i++){
//         if (num % i == 0){
//             res = false;
//         }
//     }
//     return res;
// }
// res = "1";
// for(let i = 2; i <= 10000; i++){
//     if(is_prime(i)){
//         res += " - "+i;
//     }
// }
// document.getElementById("m1").innerHTML = res;
let arr = [1,5,15, 500, 600, 10, 8, 3, 45, 100, 70, 60];
console.log(arr);

// document.getElementById("m1").innerHTML = arr[2];
// function find(r, e){
//     res = -1;
//     for(let i = 0; i < r.length; i++){
//         if(e == r[i]){
//             res = i;
//         }
//     }
//     return res;
// }
// let x = parseInt( prompt("Enter a Number") );
// document.getElementById("m1").innerHTML = find(arr, x);

// let divs = document.getElementsByTagName("div");
// for(let i = 0; i < arr.length; i++){
//     divs[i].innerHTML = arr[i];
// }
// console.log(divs);


// let stu = {
//     "fname" : "Ammar",
//     "lname" : "Yaser",
//     "age" : 30,
//     "bdate" : {
//         "day" : 5,
//         "month" : 8,
//         "year" : 1996
//     },
//     "marks" : [90, 70, 80]
// }
// console.log(stu);
// let d = document.getElementById("m1");
// d.innerHTML = stu.fname + " " + stu.lname;
// d.innerHTML += " <br> Birth Date :";
// d.innerHTML += stu.bdate.day + "/" +stu.bdate.month +"/" + stu.bdate.year;

// d.innerHTML += " <br> Marks: ";
// d.innerHTML += stu.marks;




class stu{
    constructor(ln){
        this.fname = "Ahmad";
        this.lname = ln;
    }
    set_fname(fn){
        this.fname = fn;
        return this;
    }
    set_lname(ln){
        this.lname = ln;
        return this;
    }
    get_fname(){
        return this.fname;
    }
    get_lname(){
        return this.lname;
    }

    get_fullname(){
        return this.fname + " " + this.lname;
    }
}

let s1 = new stu("Yaser");

document.getElementById("m1").innerHTML = 
s1.set_fname("XXXXX")
    .set_lname("yyyyyyy")
    .get_fullname();