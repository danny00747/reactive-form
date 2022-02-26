import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalConctactComponent } from './personal-conctact.component';

describe('PersonalConctactComponent', () => {
  let component: PersonalConctactComponent;
  let fixture: ComponentFixture<PersonalConctactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalConctactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalConctactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
