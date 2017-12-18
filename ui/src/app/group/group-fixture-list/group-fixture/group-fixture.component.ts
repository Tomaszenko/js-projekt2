import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Fixture} from "../../../models/fixture";

@Component({
  selector: 'app-group-fixture',
  templateUrl: './group-fixture.component.html',
  styleUrls: ['./group-fixture.component.css']
})
export class GroupFixtureComponent implements OnInit {
  @Input() fixture: Fixture;

  @Output() fixtureChange = new EventEmitter<Fixture>();

  constructor() { }

  ngOnInit() {
  }

  changeHomeGoals($event: any) {
    console.log($event);
    this.fixture.goalsHome = $event;
    this.fixtureChange.emit(this.fixture);
    // this.fixture.goalsHome = $event.value;
  }

  changeAwayGoals($event: any) {
    console.log($event);
    this.fixture.goalsAway = $event;
    this.fixtureChange.emit(this.fixture);
  }
}
