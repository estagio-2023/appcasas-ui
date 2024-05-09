import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RealEstateHeader, RealEstateBody } from '../models/real-estate-management-model';

@Injectable({
  providedIn: 'root'
})
export class RealEstateManagementApiService {

  baseUrl = "http://localhost:5152/";

  constructor(private httpClient: HttpClient) {}

  getAllRealEstates(): Observable<RealEstateHeader[]> {
    return this.httpClient.get<RealEstateHeader[]>(this.baseUrl + "RealEstate")
  }

  getRealEstateById(propertyId: number): Observable<RealEstateBody> {
    return this.httpClient.get<RealEstateBody>(this.baseUrl + "RealEstate/" + propertyId)
  }

  deleteRealEstate(realEstateId: number) {
    return this.httpClient.delete(this.baseUrl + "RealEstate/" + realEstateId)
  }
}