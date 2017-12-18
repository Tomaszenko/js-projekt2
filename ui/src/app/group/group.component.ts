import {Component, Input, OnInit} from '@angular/core';
import {Fixture} from "../models/fixture";
import {NationalTeam} from "../models/national-team";
import {TableEntry} from "./group-table/table-entry";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  @Input()
  letter: string;

  @Input()
  teams: Array<NationalTeam>;

  @Input()
  fixtures: Array<Fixture>;

  tableEntries: Array<TableEntry>;

  constructor() { }

  ngOnInit() {
    // this.tableEntries = this.teams.map((natTeam) => new TableEntry(natTeam.name, 0, 0, 0));
    // console.log(this.teams);
    this.recalculateTable(this.fixtures);
  }

  recalculateTable($event: Array<Fixture>) {
    this.fixtures = $event;
    this.tableEntries = [];

    console.log("recalculating");

    let tmp: Array<TableEntry> = [];

    for(let team of this.teams) {
      let teamMatches: Array<Fixture> = this.getMatchesForTeam(team.name);
      let points = this.calculatePointsForTeam(team.name, teamMatches);
      let scored = this.getGoalsForTeam(team.name, teamMatches);
      let lost = this.getGoalsAgainstTeam(team.name, teamMatches);
      tmp.push(new TableEntry(team.name,  points, scored, lost));
    }

    this.tableEntries = tmp;
    console.log(this.tableEntries);
  }

  calculatePointsForTeam(name: string, teamMatches: Array<Fixture>): number {
    let hostMatches = this.getHostMatches(name);
    let awayMatches = this.getAwayMatches(name);

    let wonHome = hostMatches.filter((match) => match.goalsHome > match.goalsAway).length;
    let drawsHome = hostMatches.filter((match) => match.goalsHome === match.goalsAway).length;
    let lostHome = hostMatches.filter((match) => match.goalsHome < match.goalsAway).length;

    let wonAway = awayMatches.filter((match) => match.goalsHome < match.goalsAway).length;
    let drawsAway = awayMatches.filter((match) => match.goalsHome === match.goalsAway).length;
    let lostAway = awayMatches.filter((match) => match.goalsHome > match.goalsAway).length;

    return wonHome*3 + wonAway*3 + drawsHome + drawsAway;
  }

  getGoalsForTeam(name: string, teamMatches: Array<Fixture>): number {
    let hostMatches = this.getHostMatches(name);
    let awayMatches = this.getAwayMatches(name);

    let hostGoals = 0;
    let awayGoals = 0;

    if(hostMatches.length > 0) {
      hostGoals = hostMatches.map((match) => match.goalsHome)
        .reduce((mySum, elem) => mySum + elem);
    }

    if(awayMatches.length > 0) {
      awayGoals = awayMatches.map((match) => match.goalsAway)
        .reduce((mySum, elem) => mySum + elem);
    }

    return hostGoals + awayGoals;
  }

  getGoalsAgainstTeam(name: string, teamMatches: Array<Fixture>): number {
    let hostMatches = this.getHostMatches(name);
    let awayMatches = this.getAwayMatches(name);

    let hostGoals = 0;
    let awayGoals = 0;

    if(hostMatches.length > 0) {
      hostGoals = hostMatches.map((match) => match.goalsAway)
        .reduce((mySum, elem) => mySum + elem);
    }

    if(awayMatches.length > 0) {
      awayGoals = awayMatches.map((match) => match.goalsHome)
        .reduce((mySum, elem) => mySum + elem);
    }

    return hostGoals + awayGoals;
  }

  getAwayMatches(name: string) {
    return this.fixtures.filter((fixture) => fixture.teamAway.name === name);
  }

  getHostMatches(name: string) {
    return this.fixtures.filter((fixture) => fixture.teamHome.name === name);
  }

  getMatchesForTeam(name: string) {
    return this.fixtures.filter((fixture) =>
      fixture.teamHome.name === name || fixture.teamAway.name === name);
  }


}
