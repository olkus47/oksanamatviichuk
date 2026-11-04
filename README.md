# Oksana Gesichtsmassage · Degersheim, Schweiz 🌸

Offizielle Website und Landing Page für **Oksana Matviichuk** – zertifizierte Massage-Therapeutin und Kosmetikerin in Degersheim (Kanton St. Gallen, Schweiz), spezialisiert auf achtsame, ganzheitliche Gesichtsmassagen, natürliche Verjüngung und Tiefenentspannung.

---

## 📋 Inhaltsverzeichnis

- [Über das Projekt](#-über-das-projekt)
- [Hauptfunktionen](#-hauptfunktionen)
- [Technologie-Stack](#-technologie-stack)
- [Projektstruktur](#-projektstruktur)
- [Lokale Entwicklung](#-lokale-entwicklung)
- [Bereitstellung & Hosting](#-bereitstellung--hosting)
- [Konfiguration & Pflege](#-konfiguration--pflege)
  - [Kontaktdaten ändern](#kontaktdaten-ändern)
  - [Texte & Übersetzungen anpassen](#texte--übersetzungen-anpassen)
  - [Kundenbewertungen verwalten](#kundenbewertungen-verwalten)
  - [Preise anpassen](#preise-anpassen)
- [Rechtliches & Datenschutz](#-rechtliches--datenschutz)
- [Kontakt](#-kontakt)

---

## 🌿 Über das Projekt

Die Website präsentiert Oksana Matviichuks Behandlungskonzept in einer ruhigen, eleganten Ästhetik im Stil eines modernen Schweizer Spa- und Wellness-Studios. Das Farbschema basiert auf warmem Creme (*Warm Cream*), sanftem Alabaster (*Soft Alabaster*) sowie Akzenten in Terrakotta (*Terracotta*) und Pfirsich (*Peach*).

Typografisch kombiniert die Seite die edle Serifenschrift **Playfair Display** mit der modernen, hochlesbaren Sans-Serif-Schrift **Plus Jakarta Sans**.

---

## ✨ Hauptfunktionen

- **🌐 Dreisprachig (DE / RU / UA):**
  - Vollständige clientseitige Übersetzung in Deutsch, Russisch und Ukrainisch ohne Neuladen der Seite.
  - Gewählte Sprache wird automatisch im `localStorage` gespeichert.
  - Dynamische Anpassung aller Inhaltselemente, Formulare und CTA-Links.

- **💬 Direkte Buchung via WhatsApp & E-Mail:**
  - Klick auf «Termin vereinbaren» öffnet direkt WhatsApp oder das E-Mail-Programm.
  - Vorformulierte Nachricht in der aktuell gewählten Sprache (z. B. *"Guten Tag Oksana, ich interessiere mich für eine Gesichtsmassage..."*).

- **⭐ Kundenstimmen mit interaktivem Akkordeon:**
  - Initial werden zwei ausgewählte Bewertungen angezeigt (platzsparend & übersichtlich).
  - Über den Button **«Weitere Bewertungen anzeigen (+2)»** können weitere Stimmen sanft eingeblendet werden.
  - Bei langen Rezensionen existiert ein **«Ganze Bewertung lesen»**-Ausklapper.

- **💆 Detaillierte Angebots- & Methodenübersicht:**
  - **Kennenlernangebot:** 60 Min. Massage + 15 Min. Analyse & Beratung für 70 CHF.
  - **Einzelbehandlung & Abos:** Einzelsitzung (80 CHF), 5er-Abo (350 CHF), 10er-Abo (650 CHF).
  - Erklärung der Techniken: Myofasziale Griffe, Lymphdrainage, bukkale Elemente, Gua Sha.
  - Checklisten für Indikationen (*Besonders empfohlen bei...*) und Kontraindikationen (*Wann abzuwarten ist*).

- **📱 Vollständig responsive & barrierefrei:**
  - Mobile-First optimiert – nahtlose Darstellung auf Smartphones, Tablets und großen Desktop-Monitoren.
  - Ausklappbares Mobile-Menü mit ARIA-Attributen für Barrierefreiheit.
  - Touch-optimierte Buttons und Bedienelemente.

- **⚡ Maximale Geschwindigkeit & Unabhängigkeit:**
  - Pure Vanilla Webtechnologien (HTML5, CSS3, ES6+).
  - **Kein Build-Step**, keine Framework-Abhängigkeiten, kein Node/npm im Produktionsbetrieb erforderlich.
  - Sofort auf jedem Webserver oder statischen Hoster lauffähig.

- **🔒 Rechtssicherheit (Schweiz / DSG):**
  - Interaktive, barrierefreie Modale für **Impressum** und **Datenschutz**.
  - Zusätzliche statische Standalone-Seiten ([impressum.html](impressum.html) und [datenschutz.html](datenschutz.html)) als Ausfallsicherung.

---

## 🛠️ Technologie-Stack

| Bereich | Technologie | Beschreibung |
|---|---|---|
| **Markup** | HTML5 | Semantisches, barrierefreies Markup mit `data-i18n`-Attributen |
| **Styling** | CSS3 | Modernes CSS mit Custom Properties (Variables), Flexbox & Grid |
| **Logik** | Vanilla JavaScript (ES6+) | i18n-Engine, WhatsApp-/E-Mail-Link-Generator, Modale & Toggles |
| **Typografie** | Google Fonts | *Playfair Display* (Serif) & *Plus Jakarta Sans* (Sans-serif) |
| **Icons** | Inline SVG | Vektor-Icons für minimale Ladezeiten und gestochen scharfe Optik |

---

## 📁 Projektstruktur

```text
oksanamatviichuk/
├── index.html              # Hauptseite (Landing Page, alle Sektionen & Modale)
├── styles.css              # Vollständiges Stylesheet / Spa Design System
├── app.js                  # Anwendungslogik (i18n, Modale, WhatsApp/Mail-Links, Toggles)
├── translations.js         # Sprachwörterbuch (DE, RU, UA)
├── impressum.html          # Statische Impressum-Seite (Fallback)
├── datenschutz.html        # Statische Datenschutzerklärung (Fallback)
├── favicon.svg             # Wellness-Blatt-Favicon im SVG-Format
├── oksana-matviichuk.png   # Porträtfoto von Oksana Matviichuk
├── room.png                # Foto des Behandlungsraums / Studios
└── README.md               # Projektdokumentation
```

---

## 🚀 Lokale Entwicklung

Da das Projekt ohne Build-Tools auskommt, genügt ein beliebiger Browser oder ein kleiner lokaler Server:

### Option 1: VS Code Live Server (Empfohlen)
1. Repository in Visual Studio Code öffnen.
2. Extension **Live Server** (von Ritwick Dey) installieren.
3. Rechtsklick auf `index.html` → **Open with Live Server**.

### Option 2: Python HTTP-Server
```bash
# Python 3
python -m http.server 8000
```
Anschließend im Browser `http://localhost:8000` aufrufen.

### Option 3: Node.js (npx)
```bash
npx serve .
```

### Option 4: Direkt öffnen
Alternativ kann die Datei `index.html` per Doppelklick direkt im Browser geöffnet werden.

---

## 🌐 Bereitstellung & Hosting

Da es sich um eine statische Website handelt, kann sie kostenfrei und blitzschnell auf gängigen Plattformen gehostet werden:

### GitHub Pages
1. Repository auf GitHub pushen.
2. In den Repository-Einstellungen zu **Settings** → **Pages** navigieren.
3. Unter **Source** den Branch `main` und das Root-Verzeichnis `/ (root)` auswählen.
4. Nach wenigen Momenten ist die Seite unter `https://<username>.github.io/<repo>/` erreichbar.

### Netlify / Vercel / Cloudflare Pages
- Einfach das GitHub-Repository verknüpfen.
- Kein Build-Befehl erforderlich (Build Command leer lassen).
- Publish Directory: `.` (Root-Verzeichnis).

---

## ⚙️ Konfiguration & Pflege

### Kontaktdaten ändern

In [`app.js`](app.js) befinden sich ganz oben die zentralen Kontaktkonstanten:

```javascript
const WHATSAPP_PHONE = "41793229584";      // Telefonnummer im internationalen Format (ohne + und Leerzeichen)
const EMAIL_ADDRESS = "oksmat80@gmail.com"; // Empfänger-E-Mail-Adresse
```

Änderungen hier aktualisieren automatisch alle WhatsApp- und E-Mail-Buttons auf der Website.

### Texte & Übersetzungen anpassen

Alle Texte sind in [`translations.js`](translations.js) zentral hinterlegt. Die Struktur gliedert sich in:
- `translations.de` (Deutsch)
- `translations.ru` (Russisch)
- `translations.ua` (Ukrainisch)

Beispiel zum Anpassen eines Textes:
```javascript
"hero.title": "Individuelle Gesichtsmassage für Ihre natürliche Schönheit",
```

### Kundenbewertungen verwalten

Die Rezensionen werden an zwei Stellen gepflegt:

1. **In [`index.html`](index.html)**:
   - Jede Bewertung ist eine `<div class="testimonial-card">` innerhalb von `.testimonials-grid`.
   - Bewertungen, die initial ausgeblendet sein sollen, erhalten zusätzlich die Klasse `testimonial-card--extra`.

2. **In [`translations.js`](translations.js)**:
   - Unter `reviewX.text` und `reviewX.author` wird der Text für alle Sprachen eingetragen (authentische Zitate verbleiben üblicherweise im deutschen Original).

### Preise anpassen

Preise und Angebote können in [`translations.js`](translations.js) unter den Schlüsseln `pricing.*`, `intro.*` und `packages.*` geändert werden. Entsprechende statische Fallbacks befinden sich in [`index.html`](index.html).

---

## ⚖️ Rechtliches & Datenschutz

- **Impressum:** Erreichbar über den Link im Footer (öffnet ein Modal) oder direkt unter [`impressum.html`](impressum.html).
- **Datenschutz:** Datenschutzbestimmungen nach Schweizer Recht (DSG / DSGVO-kompatibel), aufrufbar per Modal oder unter [`datenschutz.html`](datenschutz.html).

---

## 📍 Kontakt & Standort

**Oksana Gesichtsmassage**  
Inhaberin: Oksana Matviichuk  
Adresse: Sennrütistrasse 17, 9113 Degersheim, Schweiz  
Öffnungszeiten: Mi, Do, Fr nach Terminvereinbarung  
Telefon / WhatsApp: [+41 79 322 95 84](https://wa.me/41793229584)  
E-Mail: [oksmat80@gmail.com](mailto:oksmat80@gmail.com)

