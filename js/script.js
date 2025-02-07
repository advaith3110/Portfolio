// Back To Top Button
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

// Sticky Navbar
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

// Portfolio Filter
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
