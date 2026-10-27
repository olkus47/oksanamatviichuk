/**
 * Oksana Gesichtsmassage - Application Logic
 * Multilingual Engine (DE / RU / UA), Direct WhatsApp CTA & Navigation
 */

const WHATSAPP_PHONE = "41793229584";
const EMAIL_ADDRESS = "oksmat80@gmail.com";

document.addEventListener("DOMContentLoaded", () => {
  // Current active language (default 'de', or from localStorage)
  let currentLang = localStorage.getItem("oksana_lang") || "de";
  if (!translations[currentLang]) {
    currentLang = "de";
  }

  /* --------------------------------------------------------------------------
     1. Language Switcher Engine
     -------------------------------------------------------------------------- */
  const langButtons = document.querySelectorAll(".lang-btn");

  function updateWhatsAppLinks(lang) {
    const waElements = document.querySelectorAll("[data-wa-type]");
    waElements.forEach((el) => {
      const type = el.getAttribute("data-wa-type") || "general";
      const message = (waMessages[lang] && waMessages[lang][type]) 
        ? waMessages[lang][type] 
        : (waMessages["de"][type] || "Hallo Oksana, ich möchte gerne einen Termin vereinbaren.");
      const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
      el.setAttribute("href", url);
    });
  }

  function updateEmailLinks(lang) {
    const mailElements = document.querySelectorAll("[data-mail-type]");
    const tmpl = (typeof emailTemplates !== "undefined" && emailTemplates[lang])
      ? emailTemplates[lang]
      : ((typeof emailTemplates !== "undefined" && emailTemplates["de"]) || {
          subject: "Terminanfrage Gesichtsmassage — Oksana",
          body: "Hallo Oksana,\n\nich möchte gerne einen Termin für eine Gesichtsmassage vereinbaren.\n\nFreundliche Grüsse"
        });
    mailElements.forEach((el) => {
      const url = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(tmpl.subject)}&body=${encodeURIComponent(tmpl.body)}`;
      el.setAttribute("href", url);
    });
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem("oksana_lang", lang);
    document.documentElement.lang = lang;

    // Update buttons active state
    langButtons.forEach((btn) => {
      if (btn.getAttribute("data-lang") === lang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Update all i18n text nodes
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const translation = translations[lang][key];
      if (translation !== undefined) {
        el.innerHTML = translation;
      }
    });

    // Update placeholders if any
    const placeholderEls = document.querySelectorAll("[data-i18n-placeholder]");
    placeholderEls.forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const translation = translations[lang][key];
      if (translation !== undefined) {
        el.setAttribute("placeholder", translation);
      }
    });

    // Update localized WhatsApp CTA links
    updateWhatsAppLinks(lang);

    // Update localized Email CTA links
    updateEmailLinks(lang);
  }

  // Bind clicks to language buttons
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-lang");
      setLanguage(selected);
    });
  });

  // Initialize language
  setLanguage(currentLang);

  /* --------------------------------------------------------------------------
     2. Mobile Navigation Toggle
     -------------------------------------------------------------------------- */
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      mobileToggle.setAttribute("aria-expanded", isOpen);
    });

    // Close mobile menu when clicking any nav link
    navMenu.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* --------------------------------------------------------------------------
     3. Header Elevation & Back to Top on Scroll
     -------------------------------------------------------------------------- */
  const header = document.getElementById("header");
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (header) {
      if (scrollY > 30) {
        header.style.boxShadow = "0 6px 24px rgba(74, 64, 58, 0.08)";
      } else {
        header.style.boxShadow = "none";
      }
    }

    if (backToTop) {
      if (scrollY > 400) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    }
  });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* --------------------------------------------------------------------------
     4. Legal Modals: Impressum & Datenschutz
     -------------------------------------------------------------------------- */
  const legalModal = document.getElementById("legalModal");
  const legalModalTitle = document.getElementById("legalModalTitle");
  const legalModalBody = document.getElementById("legalModalBody");
  const closeLegalModal = document.getElementById("closeLegalModal");
  const openImpressumBtn = document.getElementById("openImpressumBtn");
  const openDatenschutzBtn = document.getElementById("openDatenschutzBtn");

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (openImpressumBtn && legalModal) {
    openImpressumBtn.addEventListener("click", () => {
      legalModalTitle.innerText = translations[currentLang]["legal.imp_title"] || "Impressum";
      legalModalBody.innerHTML = translations[currentLang]["legal.imp_content"] || "";
      openModal(legalModal);
    });
  }

  if (openDatenschutzBtn && legalModal) {
    openDatenschutzBtn.addEventListener("click", () => {
      legalModalTitle.innerText = translations[currentLang]["legal.dsg_title"] || "Datenschutz";
      legalModalBody.innerHTML = translations[currentLang]["legal.dsg_content"] || "";
      openModal(legalModal);
    });
  }

  if (closeLegalModal && legalModal) {
    closeLegalModal.addEventListener("click", () => closeModal(legalModal));
  }

  // Close modal on backdrop click
  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closeModal(backdrop);
      }
    });
  });

  // Keyboard escape closes modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-backdrop.active").forEach((m) => closeModal(m));
    }
  });

  /* --------------------------------------------------------------------------
     5. Testimonial Read More Toggle
     -------------------------------------------------------------------------- */
  const testimonialToggles = document.querySelectorAll(".btn-testimonial-toggle");
  testimonialToggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".testimonial-card");
      if (!card) return;
      const isExpanded = card.classList.toggle("expanded");
      btn.setAttribute("aria-expanded", isExpanded ? "true" : "false");
    });
  });
});
