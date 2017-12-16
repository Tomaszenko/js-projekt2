import {Component, Input, OnInit} from '@angular/core';
import {Fixture} from "../../models/fixture";

@Component({
  selector: 'app-group-fixture-list',
  templateUrl: './group-fixture-list.component.html',
  styleUrls: ['./group-fixture-list.component.css']
})
export class GroupFixtureListComponent implements OnInit {

  @Input()
  fixtures: Array<Fixture>;

  constructor() { }

  ngOnInit() {
  }

}
