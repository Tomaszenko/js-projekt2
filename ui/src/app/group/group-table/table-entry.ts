export class TableEntry {
  team: string;
  points: number;
  scored: number;
  lost: number;
  difference: number;


  constructor(team: string, points: number, scored: number, lost: number) {
    this.team = team;
    this.points = points;
    this.scored = scored;
    this.lost = lost;
    this.difference = scored - lost;
  }
}
