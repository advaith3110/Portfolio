const skills = [
  { selector: ".html-css", valueSelector: ".html-progress", endValue: 80, color: "#fca61f" },
  { selector: ".javascript", valueSelector: ".javascript-progress", endValue: 75, color: "#7d2ae8" },
  { selector: ".php", valueSelector: ".php-progress", endValue: 70, color: "#20c997" },
  { selector: ".reactjs", valueSelector: ".reactjs-progress", endValue: 78, color: "#3f396d" },
  { selector: ".react-native", valueSelector: ".react-native-progress", endValue: 65, color: "#61dafb" },
  { selector: ".mongodb", valueSelector: ".mongodb-progress", endValue: 67, color: "#4db33d" },
  { selector: ".expressjs", valueSelector: ".expressjs-progress", endValue: 66, color: "#000000" },
  { selector: ".nodejs", valueSelector: ".nodejs-progress", endValue: 64, color: "#68a063" },
  { selector: ".sql", valueSelector: ".sql-progress", endValue: 72, color: "#00758f" },
  { selector: ".flutter", valueSelector: ".flutter-progress", endValue: 68, color: "#02569B" },
  { selector: ".cpp", valueSelector: ".cpp-progress", endValue: 75, color: "#00599C" }, // C++
  { selector: ".python", valueSelector: ".python-progress", endValue: 80, color: "#306998" } // Python
];

skills.forEach(skill => {
  let progressBar = document.querySelector(skill.selector);
  let progressValue = document.querySelector(skill.valueSelector);

  let startValue = 0;
  let speed = 30;

  let progressInterval = setInterval(() => {
    startValue++;

    progressValue.textContent = `${startValue}%`;
    progressBar.style.background = `conic-gradient(${skill.color} ${startValue * 3.6}deg, #ededed 0deg)`;

    if (startValue == skill.endValue) {
      clearInterval(progressInterval);
    }
  }, speed);
});

// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 

// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post").hide("1000");
      $(".post." + value).show("1000");
    }
  });
});
