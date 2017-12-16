import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupFixtureListComponent } from './group-fixture-list.component';

describe('GroupFixtureListComponent', () => {
  let component: GroupFixtureListComponent;
  let fixture: ComponentFixture<GroupFixtureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupFixtureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupFixtureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
