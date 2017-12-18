import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {Fixture} from "../../models/fixture";
import {NationalTeam} from "../../models/national-team";
import {TableEntry} from "./table-entry";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-group-table',
    templateUrl: './group-table.component.html',
    styleUrls: ['./group-table.component.css']
})
export class GroupTableComponent {

    // @Input()
    // fixtures: Array<Fixture>;

    @Input()
    teams: Array<TableEntry>;

    _dataSubject = new BehaviorSubject<TableEntry[]>(this.teams);

    dataSource: MatTableDataSource<TableEntry>;
    displayedColumns = ['Team', 'Scored', 'Lost', 'Difference', 'Points'];

    constructor() {
        // this.dataSource = new MatTableDataSource<TableEntry>(this.teams);
    }



    ngOnChanges(changes: any) {
      this.dataSource = new MatTableDataSource<TableEntry>(this.teams);
      this._dataSubject.next(changes.teams.currentValue);
    }
}
