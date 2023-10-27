import { Figure } from "./figure";
export class Dances {
  name: String;
  bpm: Number;
  figures: Figure[];

  constructor(name: String, bpm: Number, figures: Figure[]) {
    this.name = name;
    this.bpm = bpm;
    this.figures = figures;
  }
}
