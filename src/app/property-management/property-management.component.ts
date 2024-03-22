import { Component, OnInit } from '@angular/core';
import { propertyForm } from '../../form/form.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PropertyManagementModalComponent } from '../modals/property-management-modal/property-management-modal.component';

@Component({
  selector: 'app-property-management',
  templateUrl: './property-management.component.html',
  styleUrl: './property-management.component.css'
})
export class PropertyManagementComponent{

constructor(private modalService:NgbModal){}

openModal(){
  this.modalService.open(PropertyManagementModalComponent, {
    backdrop: 'static'
  });

}
}