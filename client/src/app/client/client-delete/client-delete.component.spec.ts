import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeleteComponent } from './client-delete.component';

describe('ClientDeleteComponent', () => {
  let component: UserDeleteComponent;
  let fixture: ComponentFixture<UserDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
