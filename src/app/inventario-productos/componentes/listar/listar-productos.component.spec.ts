import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioProductosComponent } from './listar-productos.component';

describe('InventarioProductosComponent', () => {
  let component: InventarioProductosComponent;
  let fixture: ComponentFixture<InventarioProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
