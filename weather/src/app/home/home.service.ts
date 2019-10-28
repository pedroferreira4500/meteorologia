import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ICity, City } from '../shared/model/city.model';
import { retry, catchError, map, tap } from 'rxjs/operators';
import {  throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  city = new City();
  public resourceUrl = "http://localhost:3200/get_orders?q=";
  cities=[];

  constructor( 
    private httpclient: HttpClient,
    ) { }

    handleError(error: HttpErrorResponse) {
      let errorMessage = 'Unknown error!';
      if (error.error instanceof ErrorEvent) {
        // Client-side errors
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // Server-side errors
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
    }
    getData(cName): Observable<any> {
      return this.httpclient.get(this.resourceUrl+cName).pipe(map(res => res));
}

    getCity(cName){
      let city = new City();
      this.getData(cName).subscribe(
        res =>{
          city.name= res[0]['name'];
          city.sunrise = new Date(1000* res[0]['sys']['sunrise']);
          city.sunset= new Date(1000 * res[0]['sys']['sunset']);
          city.temp= res[0]['main']['temp'];
        }
      )
      return(city);
      }

      //returns an array with the 3 cities
      getCities(c1, c2, c3){
        this.cities.push(this.getCity(c1));
        this.cities.push(this.getCity(c2));
        this.cities.push(this.getCity(c3));
        return this.cities;
      }
  }
