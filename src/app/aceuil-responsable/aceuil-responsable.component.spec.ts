import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceuilResponsableComponent } from './aceuil-responsable.component';

describe('AceuilResponsableComponent', () => {
  let component: AceuilResponsableComponent;
  let fixture: ComponentFixture<AceuilResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AceuilResponsableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AceuilResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
