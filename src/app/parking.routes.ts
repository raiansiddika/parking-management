import { Routes } from '@angular/router';
import { ParkingFormComponents } from './components/form/form.component.parking';

export const ParkingRoutes: Routes = [
  {
    path: '', component: ParkingFormComponents,
    data: { title: 'Parking Management Form', routeName: "parking-form" }
  },
];


