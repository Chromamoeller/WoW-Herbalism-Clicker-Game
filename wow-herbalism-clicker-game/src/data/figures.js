export class Figure {
  name;
  footStartsWith;
  foodFreeAfterDancing;
  steps;
  startsInCBM;
  endsInCBM;
  alignmentStart;
  aligmentEnd;

  constructor(
    name,
    footStartsWith,
    foodFreeAfterDancing,
    steps,
    startsInCBM,
    endsInCBM,
    alignmentStart,
    aligmentEnd
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
