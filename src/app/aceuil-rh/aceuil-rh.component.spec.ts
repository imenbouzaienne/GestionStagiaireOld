import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceuilRhComponent } from './aceuil-rh.component';

describe('AceuilRhComponent', () => {
  let component: AceuilRhComponent;
  let fixture: ComponentFixture<AceuilRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AceuilRhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AceuilRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
