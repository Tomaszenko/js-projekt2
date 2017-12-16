import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupFixtureComponent } from './group-fixture.component';

describe('GroupFixtureComponent', () => {
  let component: GroupFixtureComponent;
  let fixture: ComponentFixture<GroupFixtureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupFixtureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
