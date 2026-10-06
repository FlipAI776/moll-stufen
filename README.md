# Moll-Stufen

Nachschlagewerkzeug für den Musikunterricht (Kursstufe): Eine Moll-Tonart wählen, die Seite zeigt die Dreiklänge auf der 1., 3., 5. und 7. Stufe im **natürlichen Moll** – mit Stufenzeichen, Akkordname und den drei Tönen.

Enthalten sind die 15 Moll-Tonarten des Quintenzirkels (a, e, h, fis, cis, gis, dis, ais, d, g, c, f, b, es, as) mit deutschen Tonnamen.

## Einsatz

- Läuft über GitHub Pages oder lokal per Doppelklick auf `index.html`.
- Kein Internet nötig, keine externen Dateien.
- Die Seite speichert nichts und sendet nichts.
- Bedienbar mit Maus, Touch und Tastatur (`Tab`, `Enter`); Schriftgröße über `A−` / `A+`.

## Inhalte ändern

Alle Inhalte stehen in `data/tonarten.js`. Dort hat jede Tonart einen eigenen Block mit Name, Vorzeichen, Tonleiter und den vier Dreiklängen. Text zwischen den Anführungszeichen ändern, Datei speichern, Seite neu laden.

## Dateien

```
index.html          – Aufbau der Seite
style.css           – Aussehen, Farben, Layout
app.js              – Ablauf (Auswahl, Anzeige, Schriftgröße)
data/tonarten.js    – alle Inhalte
```

## Grenzen

- Nur natürliches Moll; harmonisches und melodisches Moll sind nicht enthalten.
- Nur die Stufen 1, 3, 5 und 7.
- Keine Übungsaufgaben, keine Rückmeldungen, kein Ton.
