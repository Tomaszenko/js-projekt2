import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-group-table',
    templateUrl: './group-table.component.html',
    styleUrls: ['./group-table.component.css']
})
export class GroupTableComponent implements OnInit {

    @Input()
    abc: string;

    constructor() {
    }

    ngOnInit() {
    }

}
