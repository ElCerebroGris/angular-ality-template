import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InqueritosModalAddComponent } from './inqueritos-modal-add.component';

describe('InqueritosModalAddComponent', () => {
  let component: InqueritosModalAddComponent;
  let fixture: ComponentFixture<InqueritosModalAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InqueritosModalAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InqueritosModalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
