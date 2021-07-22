import { Component } from '@angular/core';
import { SessionService } from './session/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'autoInsCalculator';
  vin = this.storage.getFromSession('vin');

  constructor(
    private storage: SessionService
  ) {}

  ngOnInit() {
    this.vin = this.storage.getFromSession('vin');
    console.log("vin--"+this.vin)
  }
}
