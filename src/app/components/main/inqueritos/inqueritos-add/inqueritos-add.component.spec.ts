import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InqueritosAddComponent } from './inqueritos-add.component';

describe('InqueritosAddComponent', () => {
  let component: InqueritosAddComponent;
  let fixture: ComponentFixture<InqueritosAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InqueritosAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InqueritosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
