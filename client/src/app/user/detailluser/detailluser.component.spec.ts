import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailluserComponent } from './detailluser.component';

describe('DetailluserComponent', () => {
  let component: DetailluserComponent;
  let fixture: ComponentFixture<DetailluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailluserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
