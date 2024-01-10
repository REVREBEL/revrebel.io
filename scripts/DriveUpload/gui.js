function gui() {
  /* accordion */
  const accordionButtons = document.getElementsByClassName(
      "js-accordion__button"
    ),
    accordionItems = document.getElementsByClassName("accordion__item");

  for (let i = 0; i < accordionButtons.length; i++) {
    accordionButtons[i].addEventListener("click", () => {
      for (let j = 0; j < accordionItems.length; j++) {
        if (i == j) {
          accordionItems[j].classList.toggle("accordion__item--active");
        } else {
          accordionItems[j].classList.remove("accordion__item--active");
        }
      }
    });
  }

  /* header */
  const headerToggler = document.querySelector(".js-header__toggler");
  const headerCollapse = document.querySelector(".js-header__collapse");
  if(headerToggler) {
    headerToggler.onclick = function () {
      headerCollapse.classList.toggle("active");
      headerToggler.classList.toggle("active");
    };
  }

  /* modal */
  const modalClosingButtons = document.querySelectorAll(".js-modal-close");
  const modalOpeningButtons = document.querySelectorAll(".js-modal-show");

  function modalClose(event) {
    event.preventDefault();
    let modal = this.closest(".modal");
    fade(modal);
  }
  function modalOpen(event) {
    event.preventDefault();
    let href = this.getAttribute("href"),
      modal = document.getElementById(href);
    unfade(modal);
  }

  function fade(element) {
    var op = 1; // initial opacity
    var timer = setInterval(function () {
      if (op <= 0.2) {
        clearInterval(timer);
        element.style.display = "none";
      }
      element.style.opacity = op;
      element.style.filter = "alpha(opacity=" + op * 100 + ")";
      op -= op * 0.1;
    }, 5);
  }

  function unfade(element) {
    var op = 0.1; // initial opacity
    element.style.display = "grid";
    var timer = setInterval(function () {
      if (op >= 1) {
        clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = "alpha(opacity=" + op * 100 + ")";
      op += op * 0.1;
    }, 5);
  }

  Array.from(modalClosingButtons).forEach((item) => {
    item.addEventListener("click", modalClose);
  });

  Array.from(modalOpeningButtons).forEach((item) => {
    item.addEventListener("click", modalOpen);
  });

  /* Tabs */
  var tabsBtn = document.getElementsByClassName("tabs__buttons-item");
  for (var i = 0; i < tabsBtn.length; i++) {
    tabsBtn[i].onclick = function () {
      clean();
      this.className = "tabs__buttons-item active";
      activate_multiple(this.id.slice(-1));
      document.getElementById("tab-" + this.id.slice(-1)).className =
        "tabs__content-item active";
    };
  }

  function clean() {
    var tabsBtn = document.getElementsByClassName("tabs__buttons-item");
    for (var i = 0; i < tabsBtn.length; i++) {
      tabsBtn[i].className = "tabs__buttons-item";
      tabsBtn[i].checked = false;
    }
    var tabsTab = document.getElementsByClassName("tabs__content-item");
    for (var i = 0; i < tabsTab.length; i++) {
      tabsTab[i].className = "tabs__content-item";
    }
  }

  function activate_multiple(index) {
    var tabsBtn = document.getElementsByClassName("tabs__buttons-item");
    for (var i = 0; i < tabsBtn.length; i++) {
      if (tabsBtn[i].id == "btn-" + index) {
        window.location.hash = tabsBtn[i].dataset.name;
        tabsBtn[i].className = "tabs__buttons-item active";
        tabsBtn[i].checked = true;
      }
    }
  }
  var anchor = window.location.hash.slice(1);
  var activeTab = document.querySelectorAll('[data-name="' + anchor + '"]');
  if(activeTab.length > 0) {
    clean();
    activeTab[0].className = "tabs__buttons-item active";
    document.getElementById("tab-" + activeTab[0].id.slice(-1)).className =
        "tabs__content-item active";
    activeTab[0].checked = true;
  }
}

window.onload = gui;

// Social sharing
function popup(pageURL, w, h) {
  var left = screen.width / 2 - w / 2;
  var top = screen.height / 2 - h / 2;
  var targetWin = window.open(
    pageURL,
    "_blank",
    "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" +
      w +
      ", height=" +
      h +
      ", top=" +
      top +
      ", left=" +
      left
  );
}

//hide messages
function hideMessages(sec) {
  if (sec === undefined) {
    var sec = 2;
  }
  setTimeout(function () {
    var els = document.getElementsByClassName("message");
    for (var i = 0; i < els.length; i++) {
      els[i].style.display = "none";
    }
  }, sec * 1000);
}

/* Add input field for details when doing downgrade. */
function addDowngradeDetails(option) {
  if (option.value == "option_3") {
    document.getElementById("downgrade_detail").className = "";
    document.getElementById("detail_label").style.cssText =
      "text-align: left; display: block;";
  } else if (option.value == "option_7") {
    document.getElementById("downgrade_detail").className = "";
    document.getElementById("detail_label").style.cssText =
      "text-align: left; display: block;";
  } else {
    document.getElementById("downgrade_detail").className = "hide";
    document.getElementById("detail_label").style.cssText =
      "text-align: left; display: none;";
  }
}

function is_downgrade_reason_selected() {
  if (document.getElementById("downgrade_reason").value == "option_0") {
    alert("Please select your reason for downgrade.");
    return false;
  }
  return true;
}
