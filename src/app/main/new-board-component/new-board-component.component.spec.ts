import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBoardComponentComponent } from './new-board-component.component';

describe('NewBoardComponentComponent', () => {
  let component: NewBoardComponentComponent;
  let fixture: ComponentFixture<NewBoardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBoardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBoardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
