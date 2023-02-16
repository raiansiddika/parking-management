import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";






@Injectable({ providedIn: 'root' })
export class ParkingService {

  constructor(private http: HttpClient) {
  }


}
