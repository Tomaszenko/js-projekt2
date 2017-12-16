import {Injectable, OnInit} from '@angular/core';
import {Fixture} from "../models/fixture";
import {Schedule} from "../models/schedule";
import {NationalTeam} from "../models/national-team";

@Injectable()
export class TournamentService implements OnInit{


  teams: Array<NationalTeam> = [
    {id: 1, name: 'Russia', group: 'A'},
    {id: 2, name: 'Saudi Arabia', group: 'A'},
    {id: 3, name: 'Egypt', group: 'A'},
    {id: 4, name: 'Uruguay', group: 'A'},
    {id: 5, name: 'Portugal', group: 'B'},
    {id: 6, name: 'Spain', group: 'B'},
    {id: 7, name: 'Morocco', group: 'B'},
    {id: 8, name: 'Iran', group: 'B'},
    {id: 9, name: 'France', group: 'C'},
    {id: 10, name: 'Australia', group: 'C'},
    {id: 11, name: 'Peru', group: 'C'},
    {id: 12, name: 'Denmark', group: 'C'},
    {id: 13, name: 'Argentina', group: 'D'},
    {id: 14, name: 'Iceland', group: 'D'},
    {id: 15, name: 'Croatia', group: 'D'},
    {id: 16, name: 'Nigeria', group: 'D'},
    {id: 17, name: 'Brazil', group: 'E'},
    {id: 18, name: 'Switzerland', group: 'E'},
    {id: 19, name: 'Costa Rica', group: 'E'},
    {id: 20, name: 'Serbia', group: 'E'},
    {id: 21, name: 'Germany', group: 'F'},
    {id: 22, name: 'Mexico', group: 'F'},
    {id: 23, name: 'Sweden', group: 'F'},
    {id: 24, name: 'Korea Republic', group: 'F'},
    {id: 25, name: 'Belgium', group: 'G'},
    {id: 26, name: 'Panama', group: 'G'},
    {id: 27, name: 'Tunisia', group: 'G'},
    {id: 28, name: 'England', group: 'G'},
    {id: 29, name: 'Poland', group: 'H'},
    {id: 30, name: 'Senegal', group: 'H'},
    {id: 31, name: 'Colombia', group: 'H'},
    {id: 32, name: 'Japan', group: 'H'}
  ];

  fixtures: Schedule = {matches:[
      {id: 1, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[0], teamAway: this.teams[1], stage: 'group'},
      {id: 2, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[2], teamAway: this.teams[3], stage: 'group'},
      {id: 3, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[0], teamAway: this.teams[2], stage: 'group'},
      {id: 4, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[1], teamAway: this.teams[3], stage: 'group'},
      {id: 5, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[0], teamAway: this.teams[3], stage: 'group'},
      {id: 6, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[1], teamAway: this.teams[2], stage: 'group'},

      {id: 7, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[4], teamAway: this.teams[5], stage: 'group'},
      {id: 8, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[6], teamAway: this.teams[7], stage: 'group'},
      {id: 9, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[4], teamAway: this.teams[6], stage: 'group'},
      {id: 10, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[5], teamAway: this.teams[7], stage: 'group'},
      {id: 11, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[4], teamAway: this.teams[7], stage: 'group'},
      {id: 12, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[5], teamAway: this.teams[6], stage: 'group'},

      {id: 13, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[8], teamAway: this.teams[9], stage: 'group'},
      {id: 14, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[10], teamAway: this.teams[11], stage: 'group'},
      {id: 15, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[8], teamAway: this.teams[10], stage: 'group'},
      {id: 16, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[9], teamAway: this.teams[11], stage: 'group'},
      {id: 17, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[8], teamAway: this.teams[11], stage: 'group'},
      {id: 18, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[9], teamAway: this.teams[10], stage: 'group'},

      {id: 19, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[12], teamAway: this.teams[13], stage: 'group'},
      {id: 20, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[14], teamAway: this.teams[15], stage: 'group'},
      {id: 21, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[12], teamAway: this.teams[14], stage: 'group'},
      {id: 22, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[13], teamAway: this.teams[15], stage: 'group'},
      {id: 23, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[12], teamAway: this.teams[15], stage: 'group'},
      {id: 24, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[13], teamAway: this.teams[14], stage: 'group'},

      {id: 25, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[16], teamAway: this.teams[17], stage: 'group'},
      {id: 26, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[18], teamAway: this.teams[19], stage: 'group'},
      {id: 27, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[16], teamAway: this.teams[18], stage: 'group'},
      {id: 28, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[17], teamAway: this.teams[19], stage: 'group'},
      {id: 29, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[16], teamAway: this.teams[19], stage: 'group'},
      {id: 30, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[17], teamAway: this.teams[18], stage: 'group'},

      {id: 7, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[20], teamAway: this.teams[21], stage: 'group'},
      {id: 8, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[22], teamAway: this.teams[23], stage: 'group'},
      {id: 9, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[20], teamAway: this.teams[22], stage: 'group'},
      {id: 10, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[21], teamAway: this.teams[23], stage: 'group'},
      {id: 11, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[20], teamAway: this.teams[23], stage: 'group'},
      {id: 12, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[21], teamAway: this.teams[22], stage: 'group'},

      {id: 13, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[24], teamAway: this.teams[25], stage: 'group'},
      {id: 14, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[26], teamAway: this.teams[27], stage: 'group'},
      {id: 15, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[24], teamAway: this.teams[26], stage: 'group'},
      {id: 16, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[25], teamAway: this.teams[27], stage: 'group'},
      {id: 17, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[24], teamAway: this.teams[27], stage: 'group'},
      {id: 18, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[25], teamAway: this.teams[26], stage: 'group'},

      {id: 19, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[28], teamAway: this.teams[29], stage: 'group'},
      {id: 20, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[30], teamAway: this.teams[31], stage: 'group'},
      {id: 21, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[28], teamAway: this.teams[30], stage: 'group'},
      {id: 22, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[29], teamAway: this.teams[31], stage: 'group'},
      {id: 23, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[28], teamAway: this.teams[31], stage: 'group'},
      {id: 24, date: null, goalsHome: null, goalsAway: null,
        teamHome: this.teams[29], teamAway: this.teams[30], stage: 'group'}
    ]};



  constructor() {

  }

  ngOnInit() {

  }

  getTeamsForGroup(groupLetter: string): Array<NationalTeam> {
    return this.teams.filter(team => team.group === groupLetter);
  }

  getMatchesForGroup(groupLetter: string): Array<Fixture> {
    return this.fixtures.matches.filter(match =>
      match.teamHome.group === groupLetter && match.stage === 'group'
    );
  }

  getMatchesForPhase(stage: string) {
    return this.fixtures.matches.filter(match =>
      match.stage === stage
    );
  }

}
