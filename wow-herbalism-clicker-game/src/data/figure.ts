export class Figure {
  name: String;
  footStartsWith: String;
  foodFreeAfterDancing: String;
  steps: Number;
  startsInCBM: Boolean;
  endsInCBM: Boolean;
  alignmentStart: String;
  aligmentEnd: String;

  constructor(
    name: String,
    footStartsWith: String,
    foodFreeAfterDancing: String,
    steps: Number,
    startsInCBM: Boolean,
    endsInCBM: Boolean,
    alignmentStart: String,
    aligmentEnd: String
  ) {
    this.name = name;
    this.footStartsWith = footStartsWith;
    this.foodFreeAfterDancing = foodFreeAfterDancing;
    this.steps = steps;
    this.startsInCBM = startsInCBM;
    this.endsInCBM = endsInCBM;
    this.alignmentStart = alignmentStart;
    this.aligmentEnd = aligmentEnd;
  }
}
