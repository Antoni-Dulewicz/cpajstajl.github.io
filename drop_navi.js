const menuButton = document.querySelector(".menu_button");
      const menuButtonIcon = document.querySelector(".menu_button i");
      const dropDownMenu = document.querySelector(".dropdown_menu");

      menuButton.onclick = function () {
        dropDownMenu.classList.toggle("open");
        const isOpen = dropDownMenu.classList.contains("open");

        menuButtonIcon.classList = isOpen
          ? "fa-solid fa-xmark"
          : "fa-solid fa-bars";
      };