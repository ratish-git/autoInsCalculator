import { Component, OnInit } from '@angular/core';
import { TimelineItem } from 'ngx-vertical-timeline';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent {
  items: TimelineItem[] = [];
  externalVariable = 'hello';
  ngOnInit() {
    const self = this;

    this.items.push({
      label: 'Verify your miles',
      icon: 'fa fa-calendar-plus-o',
      styleClass: 'teste',
      content: `Trip to Banff, town, southwestern Alberta, Canada. Banff lies along the glacial-green Bow River, about 36 miles (58 km)`,
      title: '18th June, 2021, 10:12-58 Km',
      command() {
        alert(`test: ${self.externalVariable}`);
      },
    });

    this.items.push({
      label: 'Verify your Miles',
      icon: 'fa fa-calendar-plus-o',
      styleClass: 'teste',
      content: `Trip to Barkerville, restored mining town, east-central British Columbia, Canada. It lies in the western foothills of the Cariboo Mountains, just west of Bowron Lake Provincial Park and 55 miles (88 km) east of Quesnel.`,
      title: '20th June, 2021, 10:12-88 Km',
      command() {
        alert('Will Contact you soon');
      },
    });

    this.items.push({
      label: 'Verify your Miles',
      icon: 'fa fa-calendar-plus-o',
      styleClass: 'teste',
      content: `Trip to Lethbridge, city, southern Alberta, Canada. It lies on the Oldman River near its junction with the St. Mary River, 135 miles (217 km) south-southeast of Calgary`,
      title: '25 th June, 2020, 10:35-217 Km',
      command() {
        alert('Will Contact you soon');
      },
    });
  }
}
