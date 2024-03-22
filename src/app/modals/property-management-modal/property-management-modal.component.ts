import { Component, OnInit } from '@angular/core';
import { propertyForm } from '../../../form/form.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-property-management-modal',
  templateUrl: './property-management-modal.component.html',
  styleUrl: './property-management-modal.component.css'
})
export class PropertyManagementModalComponent {
  form = propertyForm
  constructor(public activeModal: NgbActiveModal) {
    
  }
  
  closeModal() {
    this.activeModal.close();
    this.form.reset();
  }
}