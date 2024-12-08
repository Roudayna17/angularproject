import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentDetailDeleteComponent } from './equipment-detail-delete.component';

describe('EquipmentDetailDeleteComponent', () => {
  let component: EquipmentDetailDeleteComponent;
  let fixture: ComponentFixture<EquipmentDetailDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentDetailDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentDetailDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
