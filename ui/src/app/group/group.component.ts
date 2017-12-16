import {Component, Input, OnInit} from '@angular/core';
import {Fixture} from "../models/fixture";
import {NationalTeam} from "../models/national-team";

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

  constructor() { }

  ngOnInit() {
  }

}
