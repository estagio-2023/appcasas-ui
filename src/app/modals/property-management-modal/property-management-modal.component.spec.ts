import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PropertyManagementModalComponent } from './property-management-modal.component';

describe('PropertyManagementModalComponent', () => {
  let component: PropertyManagementModalComponent;
  let fixture: ComponentFixture<PropertyManagementModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyManagementModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertyManagementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
