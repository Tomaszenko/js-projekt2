import {NationalTeam} from "./national-team";

export class Fixture {
  id: number;
  date: Date;
  goalsHome: number;
  goalsAway: number;
  teamHome: NationalTeam;
  teamAway: NationalTeam;
  stage: string;
}
