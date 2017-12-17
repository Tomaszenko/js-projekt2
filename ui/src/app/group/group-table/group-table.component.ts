import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {Fixture} from "../../models/fixture";
import {NationalTeam} from "../../models/national-team";

@Component({
    selector: 'app-group-table',
    templateUrl: './group-table.component.html',
    styleUrls: ['./group-table.component.css']
})
export class GroupTableComponent implements OnInit {

    // @Input()
    // fixtures: Array<Fixture>;

    @Input()
    teams: Array<NationalTeam>;

    dataSource: MatTableDataSource<NationalTeam>;
    displayedColumns = ['Team', 'Scored', 'Lost', 'Difference', 'Points'];

    constructor() {
      console.log(this.teams);
    }

    ngOnInit() {
      this.dataSource = new MatTableDataSource(this.teams);
    }

}
