import {Component, Input, OnInit} from '@angular/core';
import {Fixture} from "../../../models/fixture";

@Component({
  selector: 'app-group-fixture',
  templateUrl: './group-fixture.component.html',
  styleUrls: ['./group-fixture.component.css']
})
export class GroupFixtureComponent implements OnInit {
  @Input()
  fixture: Fixture;

  constructor() { }

  ngOnInit() {
  }

}