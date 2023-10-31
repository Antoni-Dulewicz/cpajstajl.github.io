<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CPAJSTAJL</title>

    <link rel="icon" href="img/szczuras.jpg" type="image/x-icon" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="boxicons.min.css" />
    <link rel="stylesheet" href="dropdown_navi.css" />
    <script src="drop_navi.js" async></script>
    <link
      href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
      rel="stylesheet"
    />
    <!-- DO NOT CHANGE ^ -->

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=Permanent+Marker&family=Rock+Salt&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
  </head>
  <body>
    <header>
      <nav>
        <div>
          <img src="img/szczuras.webp" alt="niema" class="logo" />
        </div>
        <ul class="navigation">
          <li><a href="my_site.html" class="link">Home</a></li>
          <li><a href="albums.html" class="link">Albums</a></li>
          <li><a href="about_us.html" class="link">About Us</a></li>
        </ul>

        <div class="menu_button">
          <i class="fa-solid fa-bars"></i>
        </div>
      </nav>

      <div class="dropdown_menu">
        <ul>
          <li><a href="my_site.html">Home</a></li>
          <li><a href="albums.html">Albums</a></li>
          <li><a href="about_us.html">About Us</a></li>
        </ul>
      </div>
    </header>

    <section>
      <div class="img-slider">
        <div class="slide active">
          <img src="slider/1.png" alt="niema" width="100%" />
        </div>
        <div class="slide">
          <img src="slider/2.jpg" alt="niema" width="100%" />
        </div>
        <div class="slide">
          <img src="slider/3.png" alt="niema" width="100%" />
        </div>
        <div class="slide">
          <img src="slider/4.png" alt="niema" width="100%" />
        </div>
        <div class="slide">
          <img src="slider/5.png" alt="niema" width="100%" />
        </div>
        <div class="slide">
          <img src="slider/6.png" alt="niema" width="100%" />
        </div>

        <div class="navigation">
          <div class="btn active"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
        </div>
      </div>
    </section>

    <script type="text/javascript">
      //MANUAL SLIDER (BY BUTTONS)
      var slides = document.querySelectorAll(".slide");
      var btns = document.querySelectorAll(".btn");
      let currentSlide = 1;

      var manualNav = function (manual) {
        slides.forEach((slide) => {
          slide.classList.remove("active");

          btns.forEach((btn) => {
            btn.classList.remove("active");
          });
        });

        slides[manual].classList.add("active");
        btns[manual].classList.add("active");
      };

      btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
          manualNav(i);
          currentSlide = i;
        });
      });

      //AUTOSLIDER

      var repeat = function (activeClass) {
        let active = document.getElementsByClassName("active");
        let i = 1;

        var repeater = () => {
          setTimeout(function () {
            [...active].forEach((activeSlide) => {
              activeSlide.classList.remove("active");
            });

            slides[i].classList.add("active");
            btns[i].classList.add("active");
            i++;

            if (slides.length == i) {
              i = 0;
            }
            if (i >= slides.length) {
              return;
            }
            repeater();
          }, 10000);
        };
        repeater();
      };
      repeat();
    </script>

    <footer>
      <div>
        <ul class="icons">
          <li class="foot-ic">
            <a href="https://cpajstajl.pl/"><i class="ri-global-line"></i></a>
          </li>
          <li class="foot-ic">
            <a href="https://pl-pl.facebook.com/cpajstajl/"
              ><i class="ri-facebook-line"></i
            ></a>
          </li>
          <li class="foot-ic">
            <a href="https://www.instagram.com/cpajstajl/"
              ><i class="ri-instagram-line"></i
            ></a>
          </li>
          <li class="foot-ic">
            <a href="https://open.spotify.com/artist/1mAoRpDy7J3s5jX96Bm5jF"
              ><i class="ri-spotify-line"></i
            ></a>
          </li>
        </ul>
      </div>
    </footer>
  </body>
</html>
