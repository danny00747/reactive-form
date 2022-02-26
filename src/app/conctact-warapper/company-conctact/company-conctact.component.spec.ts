import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyConctactComponent } from './company-conctact.component';

describe('CompanyConctactComponent', () => {
  let component: CompanyConctactComponent;
  let fixture: ComponentFixture<CompanyConctactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyConctactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyConctactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
