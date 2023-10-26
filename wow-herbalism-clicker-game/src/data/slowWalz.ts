import { Dances } from "./dances";
import { Figure } from "./figure";

const rfClosedChange = new Figure(
  "Übergang Links nach Rechts",
  "RF",
  "Lf",
  3,
  false,
  false,
  "FDW",
  "FDC"
);
const lfClosedChange = new Figure(
  "Übergang von Rechts nach Links",
  "RF",
  "LF",
  3,
  false,
  false,
  "FDC",
  "FDW"
);

const naturelTurn = new Figure(
  "Rechtsdrehung",
  "RF",
  "RF",
  6,
  false,
  false,
  "FDW",
  "FDC"
);
const reverseTurn = new Figure(
  "Linksdrehung",
  "LF",
  "LF",
  6,
  false,
  false,
  "FDC",
  "FDW"
);
const naturelSpinTurn = new Figure(
  "Kreisel",
  "LF",
  "RF",
  6,
  false,
  false,
  "BLOD",
  "BDCagainstLOD"
);

const slowWalz = new Dances("Langsmer Walzer", 30, [
  rfClosedChange,
  lfClosedChange,
  naturelTurn,
  reverseTurn,
  naturelSpinTurn,
]);
