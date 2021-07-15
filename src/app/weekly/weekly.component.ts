import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexChart, 
  ApexNonAxisChartSeries, 
  ApexPlotOptions, 
  ChartComponent } from 'ng-apexcharts';

  export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    plotOptions: ApexPlotOptions;
  };

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})


export class WeeklyComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [25, 50, 67, 83,13,5,44],
      chart: {
        height: 350,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px"
            },
            value: {
              fontSize: "16px"
            },
            total: {
              show: true,
              label: "Weekly(km)",
              formatter: function(w) {
                return "249";
              }
            }
          }
        }
      },
      labels: ["Sunday", "Monday", "Tuesday", "Wednesday","Thrusday","Friday","Saturday"]
    };
  }

}
