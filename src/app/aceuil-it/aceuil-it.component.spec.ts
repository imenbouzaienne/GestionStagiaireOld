import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceuilITComponent } from './aceuil-it.component';

describe('AceuilITComponent', () => {
  let component: AceuilITComponent;
  let fixture: ComponentFixture<AceuilITComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AceuilITComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AceuilITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
