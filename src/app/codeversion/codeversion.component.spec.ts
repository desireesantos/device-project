import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeversionComponent } from './codeversion.component';

describe('CodeversionComponent', () => {
  let component: CodeversionComponent;
  let fixture: ComponentFixture<CodeversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
