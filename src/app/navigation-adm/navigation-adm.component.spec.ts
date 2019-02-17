import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationAdmComponent } from './navigation-adm.component';

describe('NavigationAdmComponent', () => {
  let component: NavigationAdmComponent;
  let fixture: ComponentFixture<NavigationAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
