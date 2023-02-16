import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ParkingModule } from './app/parking.module';



platformBrowserDynamic().bootstrapModule(ParkingModule)
  .catch(err => console.error(err));
