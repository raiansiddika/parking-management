

export class ParkingManagement {
  licenseNumber: string;
  vehicleType: string;
  name: string;
  phone: string;
  status: boolean;
  address: string;
  entryTime: String;
  exitTime: string;
  parkingCharge: number;
}

export let VehicleType = [
  { label: 'Select a type', value: null },
  { label: 'Microbus', value: 'Microbus' },
  { label: 'Car', value: 'Car' },
  { label: 'Truck', value: 'Truck' },
]

export let Status = [
  { label: 'Select a status', value: null },
  { label: 'In', value: 'In' },
  { label: 'Out', value: 'Out' },
]
