import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ParkingManagement, Status, VehicleType } from "../../service/domain/parking.domain";
import { ParkingService } from "../../service/service-api/parking.service";




@Component({
  selector: 'app-root',
  templateUrl: './form.component.parking.html'
})

export class ParkingFormComponents implements OnInit {

  parkingForm: FormGroup;
  parkingFormData = new ParkingManagement();
  vehicleType = VehicleType;
  status = Status;
  parkingList: any[] = [];

  constructor(private parkingService: ParkingService,
    private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.prepareParkingForm(new ParkingManagement());
  }

  prepareParkingForm(formData: any) {
    formData = formData ? formData : new ParkingManagement();
    this.parkingForm = this.formBuilder.group({
      licenseNumber: [formData.licenseNumber],
      vehicleType: [formData.vehicleType],
      name: [formData.name],
      phone: [formData.phone],
      status: [formData.status],
      address: [formData.address],
      entryTime: [formData.entryTime],
      exitTime: [formData.exitTime],
      parkingCharge: [formData.parkingCharge],
    })
  }

  submitForm() {
    this.parkingList = JSON.parse(localStorage.getItem('parkingMngmnt') || '{}');   // get existing data
    let formValue = this.parkingForm.value;
    this.parkingList = [...this.parkingList, formValue];

    localStorage.setItem("keyName", JSON.stringify(this.parkingList));
  }

}

