import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcdHeaderComponent } from './icd-header.component';

describe('IcdHeaderComponent', () => {
  let component: IcdHeaderComponent;
  let fixture: ComponentFixture<IcdHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcdHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcdHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
