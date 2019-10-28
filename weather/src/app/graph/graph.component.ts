import { Input, Component, OnInit } from '@angular/core';
import { ICity, City } from 'src/app/shared/model/city.model';
import { GoogleChartsModule } from 'angular-google-charts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  @Input() childMessage: Array<ICity>;
  arr = [
{name: "London", temp: "7.46 °C", sunrise: "06:46:09", sunset: "16:42:18"},
{name: "Lisbon", temp: "18.86 °C", sunrise: "06:58:34", sunset: "17:41:57"},
{name: "Madrid", temp: "16.64 °C", sunrise: "06:39:23", sunset: "17:17:37" }
]

  
  ngOnInit(){
  this.childMessage.toString;
  console.log(this.childMessage);
  }
  title = 'Temperature ';
   type = 'BarChart';
   data = [
      ["London", 7.46],
      ["Lisbon",18.86 ],
      ["Madrid", 16.64],
   ];
   columnNames = ['City', 'Celsius'];
   options = { };
   width = 750;
   height = 500;
  }
