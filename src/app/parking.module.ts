import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ParkingFormComponents } from './components/form/form.component.parking';
import { ParkingListComponents } from './components/list/list.component.parking';
import { ParkingService } from './service/service-api/parking.service';
import { ParkingRoutes } from './parking.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';   // dropdown
import { MatTableModule } from '@angular/material/table';  //table
import { MatTabsModule } from '@angular/material/tabs';  // tabs
import { MatDatepickerModule } from '@angular/material/datepicker';  // date


@NgModule({
  declarations: [
    ParkingFormComponents,
    ParkingListComponents
  ],

  imports: [
    BrowserModule,
    RouterModule.forChild(ParkingRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatDatepickerModule
  ],

  exports: [],

  providers: [ParkingService],

  bootstrap: [
    ParkingFormComponents,
    ParkingListComponents
  ]
})
export class ParkingModule { }
