import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ParkingFormComponents } from './components/form/form.component.parking';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ParkingFormComponents
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ParkingFormComponents);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'new-angular-project'`, () => {
    const fixture = TestBed.createComponent(ParkingFormComponents);
    const app = fixture.componentInstance;
    //expect(app.title).toEqual('new-angular-project');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ParkingFormComponents);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('new-angular-project app is running!');
  });
});
