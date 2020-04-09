import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcdProductListComponent } from './icd-product-list.component';

describe('IcdProductListComponent', () => {
  let component: IcdProductListComponent;
  let fixture: ComponentFixture<IcdProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcdProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcdProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
