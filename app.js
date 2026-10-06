/* ============================================================
   ABLAUF DER APP
   Die Inhalte (Tonarten, Dreiklänge) stehen NICHT hier,
   sondern in data/tonarten.js.
   Diese Datei speichert nichts und sendet nichts.
   ============================================================ */

(function () {
  "use strict";

  var wahl = document.getElementById("tonart-wahl");
  var ergebnis = document.getElementById("ergebnis");

  /* Kleines Hilfsmittel: Element mit Text und Klasse erzeugen */
  function element(tag, klasse, text) {
    var e = document.createElement(tag);
    if (klasse) { e.className = klasse; }
    if (text !== undefined) { e.textContent = text; }
    return e;
  }

  /* --- 1. Schaltflächen für alle Tonarten erzeugen --- */
  TONARTEN.forEach(function (tonart) {
    var knopf = element("button");
    knopf.type = "button";
    knopf.setAttribute("aria-pressed", "false");
    knopf.appendChild(element("span", "name", tonart.name));
    knopf.appendChild(element("span", "vz", tonart.vorzeichen));
    knopf.addEventListener("click", function () {
      zeigeTonart(tonart, knopf);
    });
    wahl.appendChild(knopf);
  });

  /* --- 2. Gewählte Tonart anzeigen --- */
  function zeigeTonart(tonart, knopf) {
    // Markierung der gewählten Schaltfläche umsetzen
    Array.prototype.forEach.call(wahl.querySelectorAll("button"), function (b) {
      b.setAttribute("aria-pressed", b === knopf ? "true" : "false");
    });

    ergebnis.textContent = "";

    ergebnis.appendChild(element("h3", null, tonart.name + " (natürlich)"));

    var leiter = element("p", "leiter", "Tonleiter: ");
    leiter.appendChild(element("strong", null, tonart.leiter.join(" – ")));
    ergebnis.appendChild(leiter);

    var liste = element("ul", "stufen");
    tonart.stufen.forEach(function (s) {
      // Farbe der Zeile: Dur oder Moll (aus dem Akkordnamen abgelesen)
      var art = s.akkord.indexOf("Dur") !== -1 ? "dur" : "moll";
      var zeile = element("li", art);

      var nr = element("span", "nr", s.stufe + ". Stufe");
      nr.appendChild(element("span", "ziffer", "Stufenzeichen: " + s.ziffer));
      zeile.appendChild(nr);

      var rechts = element("span");
      rechts.appendChild(element("span", "akkord", s.akkord));
      rechts.appendChild(element("span", "toene", "Töne: " + s.toene.join(" – ")));
      zeile.appendChild(rechts);

      liste.appendChild(zeile);
    });
    ergebnis.appendChild(liste);
  }

  /* --- 3. Schriftgröße verstellen (gilt nur, solange die Seite offen ist) --- */
  var schrift = 100;               // Prozent
  function setzeSchrift(neu) {
    schrift = Math.max(80, Math.min(180, neu));   // Grenzen: 80 % bis 180 %
    document.documentElement.style.setProperty("--schrift", schrift + "%");
  }
  document.getElementById("schrift-kleiner").addEventListener("click", function () {
    setzeSchrift(schrift - 10);
  });
  document.getElementById("schrift-groesser").addEventListener("click", function () {
    setzeSchrift(schrift + 10);
  });
})();
