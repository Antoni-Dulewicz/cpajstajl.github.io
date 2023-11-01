<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CPAJSTAJL</title>

    <link rel="icon" href="img/szczuras.jpg" type="image/x-icon" />
    <link rel="stylesheet" href="login.css" />
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
    <div class="container">
      <div class="logo">
        <img src="img/szczuras.webp" alt="niema" width="300" />
      </div>
      <div class="login_form">
        <form
          method="post"
          action="my_site.html"
          name="form"
          onsubmit="return validated()"
        >
          <div class="mail_form">Email or Phone:</div>
          <input type="text" name="email" />
          <div id="email_error">Incorrect email</div>
          <div class="pass_form">Password:</div>
          <input type="password" name="password" />
          <div id="pass_error">Incorrect password</div>
          <div class="s_button"><button type="submit">Login</button></div>
        </form>
      </div>
    </div>
    <script src="validate.js"></script>
  </body>
</html>
