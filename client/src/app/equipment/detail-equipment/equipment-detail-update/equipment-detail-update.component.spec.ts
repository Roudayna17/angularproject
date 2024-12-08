import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentDetailUpdateComponent } from './equipment-detail-update.component';

describe('EquipmentDetailUpdateComponent', () => {
  let component: EquipmentDetailUpdateComponent;
  let fixture: ComponentFixture<EquipmentDetailUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentDetailUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentDetailUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
