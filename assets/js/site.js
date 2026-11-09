// Small enhancements; the site works fully without JavaScript.
(function () {
  var root = document.documentElement;

  // Light/dark toggle. The choice is remembered when storage is available
  // (the inline script in _includes/head.html re-applies it on load).
  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // "Print or save as PDF" button on the CV page.
  document.querySelectorAll("[data-print]").forEach(function (button) {
    button.addEventListener("click", function () { window.print(); });
  });
})();
