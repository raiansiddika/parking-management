import { Component, OnInit } from "@angular/core";
import { ParkingService } from "../../service/service-api/parking.service";

@Component({
  selector: 'app-root-list',
  templateUrl: './list.component.parking.html'
})

export class ParkingListComponents implements OnInit {
  parkingList: any[] = []

  constructor(private parkingService: ParkingService,) {

  }

  ngOnInit() {
    let storedValue: string = localStorage.getItem("parkingMngmnt") || '';
    this.parkingList = JSON.parse(storedValue) || [];
  }
}
