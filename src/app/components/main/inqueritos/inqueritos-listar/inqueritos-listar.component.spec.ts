import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InqueritosListarComponent } from './inqueritos-listar.component';

describe('InqueritosListarComponent', () => {
  let component: InqueritosListarComponent;
  let fixture: ComponentFixture<InqueritosListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InqueritosListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InqueritosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
