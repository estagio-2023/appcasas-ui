import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReferenceDataModalComponent } from '../modals/reference-data-modal/reference-data-modal.component';
import { RealestateApiService } from '../services/realestate-api.service';
import { RefrenceDataResponseDto } from '../dto/ReferenceDataResponseDto';
import { ReferenceDataModel } from '../models/reference-data-model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-reference-data',
  templateUrl: './reference-data.component.html',
  styleUrl: './reference-data.component.css'
})
export class ReferenceDataComponent {
  referenceDataList$: Observable<RefrenceDataResponseDto>;
  typologyList: ReferenceDataModel[];
  amenitiesList: ReferenceDataModel[];
  citiesList: ReferenceDataModel[];

  constructor(private modalService:NgbModal, private apiService: RealestateApiService){}
  
  ngOnInit(): void {
    this.referenceDataList$ = this.apiService.getAllReferenceData()
  }
  
  openModal(){
    this.modalService.open(ReferenceDataModalComponent, {
      backdrop: 'static'
    });
  }
}