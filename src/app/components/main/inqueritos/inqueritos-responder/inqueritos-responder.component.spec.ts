import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InqueritosResponderComponent } from './inqueritos-responder.component';

describe('InqueritosResponderComponent', () => {
  let component: InqueritosResponderComponent;
  let fixture: ComponentFixture<InqueritosResponderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InqueritosResponderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InqueritosResponderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
