// =========================================
// Skill Progress Data
// =========================================

const skills = [
  {
    selector: ".html-css",
    valueSelector: ".linux-progress",
    endValue: 85,
    color: "#FCC624",
  },

  {
    selector: ".javascript",
    valueSelector: ".javascript-progress",
    endValue: 80,
    color: "#2496ED",
  },

  {
    selector: ".reactjs",
    valueSelector: ".reactjs-progress",
    endValue: 72,
    color: "#326CE5",
  },
];

// =========================================
// Skill Progress Animation
// =========================================

skills.forEach((skill) => {
  const progressBar = document.querySelector(skill.selector);

  const progressValue = document.querySelector(skill.valueSelector);

  // Prevent errors if element doesn't exist
  if (!progressBar || !progressValue) {
    return;
  }

  let startValue = 0;

  const speed = 25;

  const progressInterval = setInterval(() => {
    startValue++;

    // Update Percentage Text
    progressValue.textContent = `${startValue}%`;

    // Update Circular Progress
    progressBar.style.background = `
      conic-gradient(
        ${skill.color} ${startValue * 3.6}deg,
        #ededed 0deg
      )
    `;

    // Stop Animation
    if (startValue >= skill.endValue) {
      clearInterval(progressInterval);
    }
  }, speed);
});

// =========================================
// Back To Top Button
// =========================================

const mybutton = document.getElementById("btn-back-to-top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Smooth Scroll To Top

if (mybutton) {
  mybutton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// =========================================
// Sticky Navbar
// =========================================

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar-top");

    if (!navbar) {
      return;
    }

    if (window.scrollY > 50) {
      navbar.classList.add("fixed-top");

      const navbarHeight = navbar.offsetHeight;

      document.body.style.paddingTop = `${navbarHeight}px`;
    } else {
      navbar.classList.remove("fixed-top");

      document.body.style.paddingTop = "0";
    }
  });
});

// =========================================
// Portfolio Filter
// =========================================

$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");

    $(".filter-item").removeClass("active");

    $(this).addClass("active");

    if (value === "all") {
      $(".post").fadeIn(500);
    } else {
      $(".post").hide();

      $(`.post.${value}`).fadeIn(500);
    }
  });
});
