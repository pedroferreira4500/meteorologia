import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ICity, City } from '../shared/model/city.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
cities: Array<City>;
hide: boolean = true;
  constructor(
  private homeService: HomeService) { }

  ngOnInit() {   
    }

    getCities(data){
    this.cities= this.homeService.getCities(data.city1, data.city2, data.city3);
    this.hide=false;
    }
  
}


