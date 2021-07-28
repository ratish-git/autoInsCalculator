import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import { SteeperComponent } from './steeper/steeper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SessionService } from './session/session.service';
import { DemoMaterialModule } from './steeper/material-module';
import { MatNativeDateModule } from '@angular/material/core';
import { WeeklyComponent } from './weekly/weekly.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ActualExpectedComponent } from './actual-expected/actual-expected.component';
import { SpeedAnalysisComponent } from './speed-analysis/speed-analysis.component';
import { DriversBehaviourComponent } from './drivers-behaviour/drivers-behaviour.component';
import { VehicleScoreComponent } from './vehicle-score/vehicle-score.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NgxVerticalTimelineModule } from 'ngx-vertical-timeline';

@NgModule({
  declarations: [
    AppComponent,
    SteeperComponent,
    WeeklyComponent,
    ActualExpectedComponent,
    SpeedAnalysisComponent,
    DriversBehaviourComponent,
    VehicleScoreComponent,
    TimelineComponent
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
    NgApexchartsModule,
    NgxVerticalTimelineModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers:[SessionService],
  bootstrap: [AppComponent,SteeperComponent,WeeklyComponent]
})
export class AppModule { }
