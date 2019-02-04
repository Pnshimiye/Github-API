import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFoemComponent } from './user-foem.component';

describe('UserFoemComponent', () => {
  let component: UserFoemComponent;
  let fixture: ComponentFixture<UserFoemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFoemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFoemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
