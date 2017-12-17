import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Fixture} from "../../models/fixture";

@Component({
  selector: 'app-group-fixture-list',
  templateUrl: './group-fixture-list.component.html',
  styleUrls: ['./group-fixture-list.component.css']
})
export class GroupFixtureListComponent implements OnInit {

  @Input() fixtures: Array<Fixture>;

  @Output() fixturesChange = new EventEmitter<Array<Fixture>>();

  constructor() { }

  ngOnInit() {
  }

}
