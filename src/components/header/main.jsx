// import Meat from "../../images/Un.png"
// import Dol from "../../images/Untitled.png"
// import Dota_2 from "../../images/led.png"
// import Mum from '../../images/Image-Coming-Soon.jpg'
// var slideIndex = 1;
// showSlides(slideIndex);


// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }


// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
// export default function Map () {


//  return (

//   <> 

//   <div> 

//  <img src={Mum} alt="" srcset="" />


//   </div>
// <div>
// <div class="slideshow-container">

//   <div class="mySlides fade">
//     <div class="numbertext">1 / 3</div>
//     <img src={Dota_2} style="width:100%"/>
//     <div class="text">Caption Text</div>
//   </div>

//   <div class="mySlides fade">
//     <div class="numbertext">2 / 3</div>
//     <img src={Dol} style="width:100%"/>
//     <div class="text">Caption Two</div>
//   </div>

//   <div class="mySlides fade">
//     <div class="numbertext">3 / 3</div>
//     <img src={Meat} style="width:100%"/>
//     <div class="text">Caption Three</div>
//   </div>

//   <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
//   <a class="next" onclick="plusSlides(1)">&#10095;</a>
// </div>



// <div style="text-align:center">
//   <span class="dot" onclick="currentSlide(1)"></span>
//   <span class="dot" onclick="currentSlide(2)"></span>
//   <span class="dot" onclick="currentSlide(3)"></span>
// </div>
// </div>
  
//  </>
//  )
// }