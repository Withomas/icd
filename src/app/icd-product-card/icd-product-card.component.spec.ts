import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcdProductCardComponent } from './icd-product-card.component';

describe('ProductListDesignComponent', () => {
  let component: IcdProductCardComponent;
  let fixture: ComponentFixture<IcdProductCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcdProductCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcdProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
