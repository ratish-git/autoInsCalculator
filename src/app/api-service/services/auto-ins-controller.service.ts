/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ResponseEntity } from '../models/response-entity';

/**
 * Auto Ins Controller
 */
@Injectable({
  providedIn: 'root',
})
class AutoInsControllerService extends __BaseService {
  static readonly calculateInsUsingGETPath = '/autoIns/calculateIns';
  static readonly calculateoldInsUsingGETPath = '/autoIns/calculateOldIns';
  static readonly getAllAvailableVinUsingGETPath = '/autoIns/getAllAvailableVin';
  static readonly getOldReadingByVinNumberUsingGETPath = '/autoIns/oldReading';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * This Api is used to calculate Insurance for new Car
   * @param params The `AutoInsControllerService.CalculateInsUsingGETParams` containing the following parameters:
   *
   * - `vin`: 17 digit Vehicle Identification Number
   *
   * - `KM`: Miles covered in KM
   *
   * @return Success
   */
  calculateInsUsingGETResponse(params: AutoInsControllerService.CalculateInsUsingGETParams): __Observable<__StrictHttpResponse<ResponseEntity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.vin != null) __headers = __headers.set('vin', params.vin.toString());
    if (params.KM != null) __headers = __headers.set('KM', params.KM.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/autoIns/calculateIns`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResponseEntity>;
      })
    );
  }
  /**
   * This Api is used to calculate Insurance for new Car
   * @param params The `AutoInsControllerService.CalculateInsUsingGETParams` containing the following parameters:
   *
   * - `vin`: 17 digit Vehicle Identification Number
   *
   * - `KM`: Miles covered in KM
   *
   * @return Success
   */
  calculateInsUsingGET(params: AutoInsControllerService.CalculateInsUsingGETParams): __Observable<ResponseEntity> {
    return this.calculateInsUsingGETResponse(params).pipe(
      __map(_r => _r.body as ResponseEntity)
    );
  }

  /**
   * This Api is used to calculate Insurance for old Car
   * @param params The `AutoInsControllerService.CalculateoldInsUsingGETParams` containing the following parameters:
   *
   * - `vin`: 17 digit Vehicle Identification Number
   *
   * - `OldKM`: Old KM Reading
   *
   * - `NewKM`: New KM Reading covered
   *
   * @return Success
   */
  calculateoldInsUsingGETResponse(params: AutoInsControllerService.CalculateoldInsUsingGETParams): __Observable<__StrictHttpResponse<ResponseEntity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.vin != null) __headers = __headers.set('vin', params.vin.toString());
    if (params.OldKM != null) __headers = __headers.set('OldKM', params.OldKM.toString());
    if (params.NewKM != null) __headers = __headers.set('NewKM', params.NewKM.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/autoIns/calculateOldIns`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResponseEntity>;
      })
    );
  }
  /**
   * This Api is used to calculate Insurance for old Car
   * @param params The `AutoInsControllerService.CalculateoldInsUsingGETParams` containing the following parameters:
   *
   * - `vin`: 17 digit Vehicle Identification Number
   *
   * - `OldKM`: Old KM Reading
   *
   * - `NewKM`: New KM Reading covered
   *
   * @return Success
   */
  calculateoldInsUsingGET(params: AutoInsControllerService.CalculateoldInsUsingGETParams): __Observable<ResponseEntity> {
    return this.calculateoldInsUsingGETResponse(params).pipe(
      __map(_r => _r.body as ResponseEntity)
    );
  }

  /**
   * getAllAvailableVin
   * @return OK
   */
  getAllAvailableVinUsingGETResponse(): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/autoIns/getAllAvailableVin`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<string>>;
      })
    );
  }
  /**
   * getAllAvailableVin
   * @return OK
   */
  getAllAvailableVinUsingGET(): __Observable<Array<string>> {
    return this.getAllAvailableVinUsingGETResponse().pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * This Api is used to get Details by VIN Number
   * @param vin 17 digit Vehicle Identification Number
   * @return Success
   */
  getOldReadingByVinNumberUsingGETResponse(vin: string): __Observable<__StrictHttpResponse<ResponseEntity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (vin != null) __headers = __headers.set('vin', vin.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/autoIns/oldReading`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResponseEntity>;
      })
    );
  }
  /**
   * This Api is used to get Details by VIN Number
   * @param vin 17 digit Vehicle Identification Number
   * @return Success
   */
  getOldReadingByVinNumberUsingGET(vin: string): __Observable<ResponseEntity> {
    return this.getOldReadingByVinNumberUsingGETResponse(vin).pipe(
      __map(_r => _r.body as ResponseEntity)
    );
  }
}

module AutoInsControllerService {

  /**
   * Parameters for calculateInsUsingGET
   */
  export interface CalculateInsUsingGETParams {

    /**
     * 17 digit Vehicle Identification Number
     */
    vin: string;

    /**
     * Miles covered in KM
     */
    KM: number;
  }

  /**
   * Parameters for calculateoldInsUsingGET
   */
  export interface CalculateoldInsUsingGETParams {

    /**
     * 17 digit Vehicle Identification Number
     */
    vin: string;

    /**
     * Old KM Reading
     */
    OldKM: number;

    /**
     * New KM Reading covered
     */
    NewKM: number;
  }
}

export { AutoInsControllerService }
