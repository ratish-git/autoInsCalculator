import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexLegend, ApexPlotOptions, ChartComponent } from 'ng-apexcharts';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  colors: string[];
};
@Component({
  selector: 'app-actual-expected',
  templateUrl: './actual-expected.component.html',
  styleUrls: ['./actual-expected.component.css']
})
  export class ActualExpectedComponent {
    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
  
    constructor() {
      this.chartOptions = {
        series: [
          {
            name: "Actual",
            data: [
              {
                x: "January",
                y: 345,
                goals: [
                  {
                    name: "Expected",
                    value: 300,
                    strokeWidth: 5,
                    strokeColor: "#775DD0"
                  }
                ]
              },
              {
                x: "February",
                y: 500,
                goals: [
                  {
                    name: "Expected",
                    value: 600,
                    strokeWidth: 5,
                    strokeColor: "#775DD0"
                  }
                ]
              },
              {
                x: "March",
                y: 400,
                goals: [
                  {
                    name: "Expected",
                    value: 300,
                    strokeWidth: 5,
                    strokeColor: "#775DD0"
                  }
                ]
              },
              {
                x: "April",
                y: 444,
                goals: [
                  {
                    name: "Expected",
                    value: 222,
                    strokeWidth: 5,
                    strokeColor: "#775DD0"
                  }
                ]
              },
              {
                x: "May",
                y: 676,
                goals: [
                  {
                    name: "Expected",
                    value: 222,
                    strokeWidth: 5,
                    strokeColor: "#775DD0"
                  }
                ]
              },
              {
                x: "June",
                y: 555,
                goals: [
                  {
                    name: "Expected",
                    value: 600,
                    strokeWidth: 5,
                    strokeColor: "#775DD0"
                  }
                ]
              },
              {
                x: "July",
                y: 432,
                goals: [
                  {
                    name: "Expected",
                    value: 500,
                    strokeWidth: 5,
                    strokeColor: "#775DD0"
                  }
                ]
              },
              {
                x: "August",
                y: 434,
                goals: [
                  {
                    name: "Expected",
                    value: 400,
                    strokeWidth: 5,
                    strokeColor: "#775DD0"
                  }
                ]
              }
            ]
          }
        ],
        chart: {
          height: 350,
          type: "bar"
        },
        plotOptions: {
          bar: {
            columnWidth: "60%"
          }
        },
        colors: ["#00E396","#775DD0"],
        dataLabels: {
          enabled: false
        },
        legend: {
          show: true,
          showForSingleSeries: true,
          customLegendItems: ["Actual", "Expected"],
          markers: {
            fillColors: ["#00E396", "#775DD0"]
          }
        }
      };
    }
  }
  