/**
 * Samba Runner ($SAMBARUN) — DRY-RUN / NO LAUNCH
 */
(function () {
  "use strict";
  var copyBtn = document.getElementById("copy-ca");
  var caValue = document.getElementById("ca-value");
  var navToggle = document.getElementById("nav-toggle");
  var siteNav = document.getElementById("site-nav");

  if (copyBtn) {
    copyBtn.disabled = true;
    copyBtn.setAttribute("aria-disabled", "true");
    copyBtn.addEventListener("click", function (e) {
      e.preventDefault();
      var prev = copyBtn.textContent;
      copyBtn.textContent = "FAKE — no CA";
      setTimeout(function () { copyBtn.textContent = prev; }, 1600);
    });
  }
  if (caValue && !/FAKE/i.test(caValue.textContent || "")) {
    caValue.textContent = "FAKE1111dryrunNoMintNoLaunchSambaRunnerXXXX";
  }
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var open = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    siteNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
  document.querySelectorAll(".hero__cta .btn, #copy-ca").forEach(function (btn) {
    btn.disabled = true;
    btn.setAttribute("aria-disabled", "true");
  });
  if (typeof console !== "undefined" && console.info) {
    console.info("[SAMBARUN] DRY-RUN / NO LAUNCH — FAKE CA. Fan only. No mint.");
  }
})();
