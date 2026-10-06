/* ============================================================
   INHALTE DER APP – hier kann die Lehrkraft alles ändern.

   Jede Tonart steht in einem Block zwischen { und }.
   - name:        Anzeige auf der Schaltfläche
   - vorzeichen:  kurze Angabe unter dem Namen
   - leiter:      die sieben Töne der natürlichen Moll-Tonleiter
   - stufen:      die vier angezeigten Dreiklänge
                  (stufe = Zahl, ziffer = römische Ziffer,
                   akkord = Name, toene = die drei Töne)

   Wichtig: Anführungszeichen und Kommas stehen lassen.
   Eine Tonart löschen = den ganzen Block von { bis }, löschen.
   ============================================================ */

const TONARTEN = [
  {
    name: "a-Moll",
    vorzeichen: "keine Vorzeichen",
    leiter: ["a", "h", "c", "d", "e", "f", "g"],
    stufen: [
      { stufe: 1, ziffer: "i", akkord: "a-Moll", toene: ["a", "c", "e"] },
      { stufe: 3, ziffer: "III", akkord: "C-Dur", toene: ["c", "e", "g"] },
      { stufe: 5, ziffer: "v", akkord: "e-Moll", toene: ["e", "g", "h"] },
      { stufe: 7, ziffer: "VII", akkord: "G-Dur", toene: ["g", "h", "d"] }
    ]
  },
  {
    name: "e-Moll",
    vorzeichen: "1 ♯",
    leiter: ["e", "fis", "g", "a", "h", "c", "d"],
    stufen: [
      { stufe: 1, ziffer: "i", akkord: "e-Moll", toene: ["e", "g", "h"] },
      { stufe: 3, ziffer: "III", akkord: "G-Dur", toene: ["g", "h", "d"] },
      { stufe: 5, ziffer: "v", akkord: "h-Moll", toene: ["h", "d", "fis"] },
      { stufe: 7, ziffer: "VII", akkord: "D-Dur", toene: ["d", "fis", "a"] }
    ]
  },
  {
    name: "h-Moll",
    vorzeichen: "2 ♯",
    leiter: ["h", "cis", "d", "e", "fis", "g", "a"],
    stufen: [
      { stufe: 1, ziffer: "i", akkord: "h-Moll", toene: ["h", "d", "fis"] },
      { stufe: 3, ziffer: "III", akkord: "D-Dur", toene: ["d", "fis", "a"] },
      { stufe: 5, ziffer: "v", akkord: "fis-Moll", toene: ["fis", "a", "cis"] },
      { stufe: 7, ziffer: "VII", akkord: "A-Dur", toene: ["a", "cis", "e"] }
    ]
  },
  {
    name: "fis-Moll",
    vorzeichen: "3 ♯",
    leiter: ["fis", "gis", "a", "h", "cis", "d", "e"],
    stufen: [
      { stufe: 1, ziffer: "i", akkord: "fis-Moll", toene: ["fis", "a", "cis"] },
      { stufe: 3, ziffer: "III", akkord: "A-Dur", toene: ["a", "cis", "e"] },
      { stufe: 5, ziffer: "v", akkord: "cis-Moll", toene: ["cis", "e", "gis"] },
      { stufe: 7, ziffer: "VII", akkord: "E-Dur", toene: ["e", "gis", "h"] }
    ]
  },
  {
    name: "cis-Moll",
    vorzeichen: "4 ♯",
    leiter: ["cis", "dis", "e", "fis", "gis", "a", "h"],
    stufen: [
      { stufe: 1, ziffer: "i", akkord: "cis-Moll", toene: ["cis", "e", "gis"] },
      { stufe: 3, ziffer: "III", akkord: "E-Dur", toene: ["e", "gis", "h"] },
      { stufe: 5, ziffer: "v", akkord: "gis-Moll", toene: ["gis", "h", "dis"] },
      { stufe: 7, ziffer: "VII", akkord: "H-Dur", toene: ["h", "dis", "fis"] }
    ]
  },
  {
    name: "gis-Moll",
    vorzeichen: "5 ♯",
    leiter: ["gis", "ais", "h", "cis", "dis", "e", "fis"],
    stufen: [
      { stufe: 1, ziffer: "i", akkord: "gis-Moll", toene: ["gis", "h", "dis"] },
      { stufe: 3, ziffer: "III", akkord: "H-Dur", toene: ["h", "dis", "fis"] },
      { stufe: 5, ziffer: "v", akkord: "dis-Moll", toene: ["dis", "fis", "ais"] },
      { stufe: 7, ziffer: "VII", akkord: "Fis-Dur", toene: ["fis", "ais", "cis"] }
    ]
  },
  {
    name: "dis-Moll",
    vorzeichen: "6 ♯",
    leiter: ["dis", "eis", "fis", "gis", "ais", "h", "cis"],
    stufen: [
      { stufe: 1, ziffer: "i", akkord: "dis-Moll", toene: ["dis", "fis", "ais"] },
      { stufe: 3, ziffer: "III", akkord: "Fis-Dur", toene: ["fis", "ais", "cis"] },
      { stufe: 5, ziffer: "v", akkord: "ais-Moll", toene: ["ais", "cis", "eis"] },
      { stufe: 7, ziffer: "VII", akkord: "Cis-Dur", toene: ["cis", "eis", "gis"] }
    ]
  },
  {
    name: "ais-Moll",
    vorzeichen: "7 ♯",
    leiter: ["ais", "his", "cis", "dis", "eis", "fis", "gis"],
    stufen: [
      { stufe: 1, ziffer: "i", akkord: "ais-Moll", toene: ["ais", "cis", "eis"] },
      { stufe: 3, ziffer: "III", akkord: "Cis-Dur", toene: ["cis", "eis", "gis"] },
      { stufe: 5, ziffer: "v", akkord: "eis-Moll", toene: ["eis", "gis", "his"] },
      { stufe: 7, ziffer: "VII", akkord: "Gis-Dur", toene: ["gis", "his", "dis"] }
    ]
  },
  {
    name: "d-Moll",
    vorzeichen: "1 ♭",
    leiter: ["d", "e", "f", "g", "a", "b", "c"],
    stufen: [
      { stufe: 1, ziffer: "i", akkord: "d-Moll", toene: ["d", "f", "a"] },
      { stufe: 3, ziffer: "III", akkord: "F-Dur", toene: ["f", "a", "c"] },
      { stufe: 5, ziffer: "v", akkord: "a-Moll", toene: ["a", "c", "e"] },
      { stufe: 7, ziffer: "VII", akkord: "C-Dur", toene: ["c", "e", "g"] }
    ]
  },
  {
    name: "g-Moll",
    vorzeichen: "2 ♭",
    leiter: ["g", "a", "b", "c", "d", "es", "f"],
    stufen: [
      { stufe: 1, ziffer: "i", akkord: "g-Moll", toene: ["g", "b", "d"] },
      { stufe: 3, ziffer: "III", akkord: "B-Dur", toene: ["b", "d", "f"] },
      { stufe: 5, ziffer: "v", akkord: "d-Moll", toene: ["d", "f", "a"] },
      { stufe: 7, ziffer: "VII", akkord: "F-Dur", toene: ["f", "a", "c"] }
    ]
  },
  {
    name: "c-Moll",
    vorzeichen: "3 ♭",
    leiter: ["c", "d", "es", "f", "g", "as", "b"],
    stufen: [
      { stufe: 1, ziffer: "i", akkord: "c-Moll", toene: ["c", "es", "g"] },
      { stufe: 3, ziffer: "III", akkord: "Es-Dur", toene: ["es", "g", "b"] },
      { stufe: 5, ziffer: "v", akkord: "g-Moll", toene: ["g", "b", "d"] },
      { stufe: 7, ziffer: "VII", akkord: "B-Dur", toene: ["b", "d", "f"] }
    ]
  },
  {
    name: "f-Moll",
    vorzeichen: "4 ♭",
    leiter: ["f", "g", "as", "b", "c", "des", "es"],
    stufen: [
      { stufe: 1, ziffer: "i", akkord: "f-Moll", toene: ["f", "as", "c"] },
      { stufe: 3, ziffer: "III", akkord: "As-Dur", toene: ["as", "c", "es"] },
      { stufe: 5, ziffer: "v", akkord: "c-Moll", toene: ["c", "es", "g"] },
      { stufe: 7, ziffer: "VII", akkord: "Es-Dur", toene: ["es", "g", "b"] }
    ]
  },
  {
    name: "b-Moll",
    vorzeichen: "5 ♭",
    leiter: ["b", "c", "des", "es", "f", "ges", "as"],
    stufen: [
      { stufe: 1, ziffer: "i", akkord: "b-Moll", toene: ["b", "des", "f"] },
      { stufe: 3, ziffer: "III", akkord: "Des-Dur", toene: ["des", "f", "as"] },
      { stufe: 5, ziffer: "v", akkord: "f-Moll", toene: ["f", "as", "c"] },
      { stufe: 7, ziffer: "VII", akkord: "As-Dur", toene: ["as", "c", "es"] }
    ]
  },
  {
    name: "es-Moll",
    vorzeichen: "6 ♭",
    leiter: ["es", "f", "ges", "as", "b", "ces", "des"],
    stufen: [
      { stufe: 1, ziffer: "i", akkord: "es-Moll", toene: ["es", "ges", "b"] },
      { stufe: 3, ziffer: "III", akkord: "Ges-Dur", toene: ["ges", "b", "des"] },
      { stufe: 5, ziffer: "v", akkord: "b-Moll", toene: ["b", "des", "f"] },
      { stufe: 7, ziffer: "VII", akkord: "Des-Dur", toene: ["des", "f", "as"] }
    ]
  },
  {
    name: "as-Moll",
    vorzeichen: "7 ♭",
    leiter: ["as", "b", "ces", "des", "es", "fes", "ges"],
    stufen: [
      { stufe: 1, ziffer: "i", akkord: "as-Moll", toene: ["as", "ces", "es"] },
      { stufe: 3, ziffer: "III", akkord: "Ces-Dur", toene: ["ces", "es", "ges"] },
      { stufe: 5, ziffer: "v", akkord: "es-Moll", toene: ["es", "ges", "b"] },
      { stufe: 7, ziffer: "VII", akkord: "Ges-Dur", toene: ["ges", "b", "des"] }
    ]
  }
];
