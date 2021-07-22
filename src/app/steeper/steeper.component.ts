import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AutoInsControllerService } from '../api-service/services';
import { SessionService } from '../session/session.service';

/**
 * @title Stepper with editable steps
 */
@Component({
   selector: 'app-stepper',
  templateUrl: './steeper.component.html',
  styleUrls: ['./steeper.component.css'],
  
})
export class SteeperComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  submitted = false;
  oldReading: any;
  vin: any;
  newReading: any;
  basefare: any;
  milesCovered: any;
  totalAmount: any;
  inValidNewKm: boolean = true;
  date = new FormControl(new Date(new Date().setDate(new Date().getDate())));
  oldDate = new FormControl(
    new Date(new Date().setDate(new Date().getDate() - 30))
  );

  constructor(
    private _formBuilder: FormBuilder,
    private autoInsService: AutoInsControllerService,
    private storage: SessionService
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      secondOldCtrl: ['', Validators.required],
    });
  }

  setVin(){
    this.firstFormGroup.controls.firstCtrl.setValue("VIN-CN-0003-QC");
    this.storage.storeSession('vin', "VIN-CN-0003-QC");
  }

  checkVin() {
    console.log('Firstform---' + this.firstFormGroup.controls.firstCtrl.value);

    this.autoInsService
      .getOldReadingByVinNumberUsingGET(
        this.firstFormGroup.controls.firstCtrl.value
      )
      .subscribe(
        (response) => {
          console.log(response);
          var responseInfo = JSON.parse(JSON.stringify(response));

          if (responseInfo.errorCode === 'error-001') {
            console.log('Provide valid VIN.....');
          } else {
            this.submitted = true;
            this.storage.storeSession('oldReading', responseInfo.oldReading);
            this.oldReading = this.storage.getFromSession('oldReading');
            this.storage.storeSession('vin', responseInfo.vin);
            this.vin = this.storage.getFromSession('vin');
            console.log('OldReading---->' + this.oldReading);
          }
        },
        (error) => {}
      );
  }

  calculateInsurance() {
    console.log('2ndform---' + this.secondFormGroup.controls.secondCtrl.value);
    let requestparams: AutoInsControllerService.CalculateoldInsUsingGETParams =
      {
        vin: this.vin,
        OldKM: this.oldReading,
        NewKM: this.secondFormGroup.controls.secondCtrl.value,
      };

    this.autoInsService
      .calculateoldInsUsingGETResponse(requestparams)
      .subscribe(
        (response) => {
          console.log(response);
          var responseInfo = JSON.parse(JSON.stringify(response.body));

          if (responseInfo.errorCode === 'error-001') {
            console.log('Provide valid VIN.....');
          } else if (responseInfo.errorCode === 'error-002') {
          } else {
            this.inValidNewKm = false;
            this.submitted = true;
            this.storage.storeSession('basefare', responseInfo.baseFare);
            this.basefare = this.storage.getFromSession('basefare');
            this.storage.storeSession(
              'milesCovered',
              responseInfo.milesCovered
            );
            this.milesCovered = this.storage.getFromSession('milesCovered');
            this.storage.storeSession(
              'totalAmount',
              responseInfo.totalInsurance
            );
            this.totalAmount = this.storage.getFromSession('totalAmount');
          }
        },
        (error) => {
          console.log('ErrorCode-->' + error.error.errorCode);
        }
      );
  }
}
