// $(selector).action(params, callback);

// jQuery Effects:
// ***************************************************
// Hide and Show:
// $("#hide").click(function(){
//     $("p").hide();
//   });
  
//   $("#show").click(function(){
//     $("p").show();
//   });

//   Fading:
//   $("button").click(function(){
//     $("#div1").fadeIn();
//     $("#div2").fadeIn("slow");
//     $("#div3").fadeIn(3000);
//   });
//   $("button").click(function(){
//     $("#div1").fadeOut();
//     $("#div2").fadeOut("slow");
//     $("#div3").fadeOut(3000);
//   });
//   $("button").click(function(){
//     $("#div1").fadeToggle();
//     $("#div2").fadeToggle("slow");
//     $("#div3").fadeToggle(3000);
//   });
//   $("button").click(function(){
//     $("#div1").fadeTo("slow", 0.15);
//     $("#div2").fadeTo("slow", 0.4);
//     $("#div3").fadeTo("slow", 0.7);
//   });

// Sliding:
// slideDown()
// slideUp()
// slideToggle()

// Animation:
// $(selector).animate({params},speed,callback);
// $("button").click(function(){
//     $("div").animate({
//       left: '250px',
//       opacity: '0.5',
//       height: '150px',
//       width: '150px'
//     });
//   }); 
//   $("button").click(function(){
//     $("div").animate({
//       left: '250px',
//       height: '+=150px',
//       width: '+=150px'
//     });
//   }); 
//   $("button").click(function(){
//     var div = $("div");
//     div.animate({height: '300px', opacity: '0.4'}, "slow");
//     div.animate({width: '300px', opacity: '0.8'}, "slow");
//     div.animate({height: '100px', opacity: '0.4'}, "slow");
//     div.animate({width: '100px', opacity: '0.8'}, "slow");
//   }); 
// stop:
//   $("#stop").click(function(){
//     $("#panel").stop();
//   });
// $("#p1").css("color", "red").slideUp(2000).slideDown(2000);


// jQuery DOM Manipulation
// ****************************************************
// text()
// html()
// val()

// Adding:
// append()
// prepend()
// after()
// before()

// Remove:
// remove()
// empty()

// jQuery Manipulating CSS:
// addClass()
// removeClass()
// toggleClass()
// css()
// $("p").css("background-color");
// css("propertyname","value");
// css({"propertyname":"value","propertyname":"value"});

// jQuery - Dimensions:
// width()
// height()
// innerWidth()
// innerHeight()
// outerWidth()
// outerHeight()

// jQuery Traversing
// ***************************************************************
// Ancestors:
// parent()
// parents()
// parentsUntil()

// Descendants:
// children()
// find()

// Siblings:
// siblings()
// next()
// nextAll()
// nextUntil()
// prev()
// prevAll()
// prevUntil()

// Filtering:
// first()
// last()
// eq()
// filter()
// not()

// ******************************************
// $(document).ready(function(){
//     $("#myInput").on("keyup", function() {
//       var value = $(this).val().toLowerCase();
//       $("#myTable tr").filter(function() {
//         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//       });
//     });
//   });


//   $(document).ready(function(){
//     $("#myInput").on("keyup", function() {
//       var value = $(this).val().toLowerCase();
//       $("#myList li").filter(function() {
//         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//       });
//     });
//   });
//   $(document).ready(function(){
//     $("#myInput").on("keyup", function() {
//       var value = $(this).val().toLowerCase();
//       $("#myDIV *").filter(function() {
//         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//       });
//     });
//   });
