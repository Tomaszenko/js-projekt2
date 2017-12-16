import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app.routing.module";
import { GroupComponent } from './group/group.component';
import { TournamentComponent } from './tournament/tournament.component';
import {TournamentService} from "./shared/tournament.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { GroupFixtureComponent } from './group/group-fixture-list/group-fixture/group-fixture.component';
import { GroupFixtureListComponent } from './group/group-fixture-list/group-fixture-list.component';
import { GroupTableComponent } from './group/group-table/group-table.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    TournamentComponent,
    GroupFixtureComponent,
    GroupFixtureListComponent,
    GroupTableComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TournamentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
