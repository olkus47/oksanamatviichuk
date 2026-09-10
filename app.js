/**
 * Oksana Gesichtsmassage - Application Logic
 * Multilingual Engine (DE / RU / UA), Modals, Booking & Navigation
 */

// Configurable Booking Platform URL (e.g. Salonkee, Fresha, Treatwell, Calendly, or custom booking tool)
const BOOKING_PLATFORM_URL = "https://wa.me/41761234567?text=Hallo%20Oksana,%20ich%20m%C3%B6chte%20gerne%20einen%20Gesichtsmassage-Termin%20buchen.";

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
  }

  // Bind clicks to language buttons
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-lang");
      setLanguage(selected);
    });
  });

  // Initialize initial language
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
     3. Header Elevation on Scroll
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
     4. Booking Modal & Flow
     -------------------------------------------------------------------------- */
  const bookingModal = document.getElementById("bookingModal");
  const openBookingModalBtn = document.getElementById("openBookingModalBtn");
  const closeBookingModal = document.getElementById("closeBookingModal");
  const proceedToPlatformBtn = document.getElementById("proceedToPlatformBtn");
  const treatmentItems = document.querySelectorAll(".treatment-select-item");

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

  if (openBookingModalBtn && bookingModal) {
    openBookingModalBtn.addEventListener("click", () => openModal(bookingModal));
  }

  if (closeBookingModal && bookingModal) {
    closeBookingModal.addEventListener("click", () => closeModal(bookingModal));
  }

  // Close modals on clicking backdrop
  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closeModal(backdrop);
      }
    });
  });

  // Treatment choice highlight in modal
  treatmentItems.forEach((item) => {
    item.addEventListener("click", () => {
      treatmentItems.forEach((i) => i.classList.remove("selected"));
      item.classList.add("selected");
      const radio = item.querySelector("input[type='radio']");
      if (radio) radio.checked = true;
    });
  });

  // Proceed to platform with selected treatment
  if (proceedToPlatformBtn) {
    proceedToPlatformBtn.addEventListener("click", () => {
      const selectedRadio = document.querySelector("input[name='treatmentChoice']:checked");
      const treatmentVal = selectedRadio ? selectedRadio.value : "intro";
      
      let message = "Hallo Oksana, ich möchte gerne einen Termin buchen:";
      if (treatmentVal === "intro") message += " Kennenlernangebot (75 Min., 70 CHF)";
      else if (treatmentVal === "standard") message += " Standard Gesichtsmassage (60 Min., 80 CHF)";
      else if (treatmentVal === "month") message += " Ein Monat Zeit für sich (4 Termine, 280 CHF)";
      else if (treatmentVal === "course") message += " Individueller Massagekurs (7-10 Termine)";

      // In production, this can point to the external booking engine (Salonkee, Treatwell, Fresha, Calendly)
      const targetUrl = BOOKING_PLATFORM_URL.includes("wa.me") 
        ? `https://wa.me/41761234567?text=${encodeURIComponent(message)}`
        : BOOKING_PLATFORM_URL;

      window.open(targetUrl, "_blank", "noopener,noreferrer");
      closeModal(bookingModal);
    });
  }

  /* --------------------------------------------------------------------------
     5. Legal Modals: Impressum & Datenschutz
     -------------------------------------------------------------------------- */
  const legalModal = document.getElementById("legalModal");
  const legalModalTitle = document.getElementById("legalModalTitle");
  const legalModalBody = document.getElementById("legalModalBody");
  const closeLegalModal = document.getElementById("closeLegalModal");
  const openImpressumBtn = document.getElementById("openImpressumBtn");
  const openDatenschutzBtn = document.getElementById("openDatenschutzBtn");

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

  // Keyboard escape closes modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-backdrop.active").forEach((m) => closeModal(m));
    }
  });
});
