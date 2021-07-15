import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { SteeperComponent } from './steeper/steeper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SessionService } from './session/session.service';
import { DemoMaterialModule } from './steeper/material-module';
import { MatNativeDateModule } from '@angular/material/core';
import { WeeklyComponent } from './weekly/weekly.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ForecastedComponent } from './forecasted/forecasted.component';

@NgModule({
  declarations: [
    AppComponent,
    SteeperComponent,
    WeeklyComponent,
    ForecastedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NgApexchartsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:[SessionService],
  bootstrap: [AppComponent,SteeperComponent,WeeklyComponent]
})
export class AppModule { }
