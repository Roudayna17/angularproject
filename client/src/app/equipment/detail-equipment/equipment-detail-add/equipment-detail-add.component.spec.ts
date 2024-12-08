import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentDetailAddComponent } from './equipment-detail-add.component';

describe('EquipmentDetailAddComponent', () => {
  let component: EquipmentDetailAddComponent;
  let fixture: ComponentFixture<EquipmentDetailAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentDetailAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentDetailAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
