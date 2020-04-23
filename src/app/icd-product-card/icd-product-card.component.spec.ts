import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListDesignComponent } from './icd-product-card.component';

describe('ProductListDesignComponent', () => {
  let component: ProductListDesignComponent;
  let fixture: ComponentFixture<ProductListDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
