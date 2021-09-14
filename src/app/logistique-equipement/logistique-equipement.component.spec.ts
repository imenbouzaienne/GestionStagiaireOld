import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogistiqueEquipementComponent } from './logistique-equipement.component';

describe('LogistiqueEquipementComponent', () => {
  let component: LogistiqueEquipementComponent;
  let fixture: ComponentFixture<LogistiqueEquipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogistiqueEquipementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogistiqueEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
