import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceuilStagiaireComponent } from './aceuil-stagiaire.component';

describe('AceuilStagiaireComponent', () => {
  let component: AceuilStagiaireComponent;
  let fixture: ComponentFixture<AceuilStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AceuilStagiaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AceuilStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
