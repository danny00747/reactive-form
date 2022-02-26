import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConctactWarapperComponent } from './conctact-warapper.component';

describe('ConctactWarapperComponent', () => {
  let component: ConctactWarapperComponent;
  let fixture: ComponentFixture<ConctactWarapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConctactWarapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConctactWarapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
