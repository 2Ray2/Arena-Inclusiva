(function () {
  "use strict";

  var root = document.documentElement;
  var menuButton = document.querySelector(".menu-button");
  var navigation = document.querySelector("#menu-principal");
  var contrastButton = document.querySelector('[data-action="contrast"]');
  var themeButton = document.querySelector('[data-action="theme"]');
  var filter = document.querySelector("#filtro-noticias");
  var cards = document.querySelectorAll(".news-card");
  var emptyState = document.querySelector(".empty-state");

  function applyPreferences() {
    var contrast = localStorage.getItem("arena_contrast") === "high";
    var dark = localStorage.getItem("arena_theme") === "dark";
    root.dataset.contrast = contrast ? "high" : "normal";
    root.dataset.theme = dark ? "dark" : "light";
    if (contrastButton) contrastButton.setAttribute("aria-pressed", String(contrast));
    if (themeButton) themeButton.setAttribute("aria-pressed", String(dark));
  }

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      var isOpen = navigation.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.querySelector(".sr-only").textContent = isOpen ? "Fechar menu" : "Abrir menu";
    });
  }

  if (contrastButton) {
    contrastButton.addEventListener("click", function () {
      var enabled = root.dataset.contrast !== "high";
      localStorage.setItem("arena_contrast", enabled ? "high" : "normal");
      applyPreferences();
    });
  }

  if (themeButton) {
    themeButton.addEventListener("click", function () {
      var enabled = root.dataset.theme !== "dark";
      localStorage.setItem("arena_theme", enabled ? "dark" : "light");
      applyPreferences();
    });
  }

  if (filter) {
    filter.addEventListener("change", function (event) {
      var selected = event.target.value;
      var visible = 0;
      cards.forEach(function (card) {
        var matches = selected === "todas" || card.dataset.category === selected;
        card.hidden = !matches;
        if (matches) visible += 1;
      });
      if (emptyState) emptyState.hidden = visible !== 0;
    });
  }

  document.querySelectorAll("form[data-validate]").forEach(function (form) {
    var storageKey = "arena_draft_" + (form.id || "formulario");
    var fields = form.querySelectorAll("input, textarea, select");
    var savedDraft = localStorage.getItem(storageKey);

    if (savedDraft) {
      try {
        var draft = JSON.parse(savedDraft);
        fields.forEach(function (field) {
          if (Object.prototype.hasOwnProperty.call(draft, field.name)) field.value = draft[field.name];
        });
      } catch (error) {
        localStorage.removeItem(storageKey);
      }
    }

    form.addEventListener("input", function () {
      var draft = {};
      fields.forEach(function (field) {
        if (field.name) draft[field.name] = field.value;
      });
      localStorage.setItem(storageKey, JSON.stringify(draft));
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var firstInvalid = null;
      form.querySelectorAll("[data-error]").forEach(function (message) {
        message.textContent = "";
      });
      fields.forEach(function (field) {
        field.removeAttribute("aria-invalid");
        field.classList.remove("input-error");
        if (!field.checkValidity()) {
          field.setAttribute("aria-invalid", "true");
          field.classList.add("input-error");
          var message = form.querySelector('[data-error-for="' + field.id + '"]');
          if (message) message.textContent = field.validationMessage;
          if (!firstInvalid) firstInvalid = field;
        }
      });
      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }
      localStorage.removeItem(storageKey);
      var feedback = form.querySelector("[data-form-feedback]");
      if (feedback) feedback.textContent = "Recebemos seus dados. Obrigado por participar!";
      form.reset();
    });
  });

  applyPreferences();
}());
