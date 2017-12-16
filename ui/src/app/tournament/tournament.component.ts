import { Component, OnInit } from '@angular/core';

import {MatIconRegistry, MatTabChangeEvent} from '@angular/material';

import {TournamentService} from "../shared/tournament.service";
import {Schedule} from "../models/schedule";
import {Fixture} from "../models/fixture";
import {NationalTeam} from "../models/national-team";
import {MyMap} from "../models/my-map";
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  // schedule: Schedule;
  selectedGroup: string = 'A';
  groups: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  teams: MyMap<Array<NationalTeam>> = {};

  groupMatches: any = {};

  constructor(private service: TournamentService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconInNamespace('img',
      'forward',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/forward.svg'));
  }

  ngOnInit() {

      this.groups.forEach(group => {
        let teams: Array<NationalTeam> = this.service.getTeamsForGroup(group);
        let matches: Array<Fixture> = this.service.getMatchesForGroup(group);
        console.log(matches);
        this.groupMatches[group] = matches;
        this.teams[group] = teams;
        // this.groupMatches[group] = this.service.getMatchesForGroup(group);
      });
  }

  changeGroup(event: MatTabChangeEvent): void {
    console.log(event.index.toString());
    this.selectedGroup = String.fromCharCode('A'.charCodeAt(0) + event.index);
  }
}
