(function () {
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");
  var label = document.querySelector("label[for='nav-toggle']");
  if (!toggle || !nav || !label) return;

  function sync() {
    var open = toggle.checked;
    label.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("nav-open", open);
  }

  toggle.addEventListener("change", sync);
  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      toggle.checked = false;
      sync();
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && toggle.checked) {
      toggle.checked = false;
      sync();
      toggle.focus();
    }
  });
  sync();
})();

(function () {
  var form = document.querySelector(".mail-form");
  if (!form) return;
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var data = new FormData(form);
    var name = String(data.get("name") || "").trim();
    var email = String(data.get("email") || "").trim();
    var message = String(data.get("message") || "").trim();
    var body = "Name: " + name + "\nEmail: " + email + "\n\n" + message;
    var href = "mailto:blockbros1808@gmail.com?subject=" + encodeURIComponent("BLOCKBROS — " + name) + "&body=" + encodeURIComponent(body);
    window.location.href = href;
  });
})();
