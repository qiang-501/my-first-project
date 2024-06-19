import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.scss',
})
export class Demo1Component implements OnInit {
  public items: Array<any> = [];
  public ChartData: any = {
    datasets: [
      {
        data: [10, 20, 30, 60, 90, 180],
      },
    ],
    labels: ['a', 'b', 'c', 'd', 'e', 'f'],
  };
  public ChartOptions: any = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  public ChartLabels: any = [
    'Red',
    'Blue',
    'Yellow',
    'Green',
    'Purple',
    'Orange',
  ];
  // i need set items sort by name, the same first letter display as a>A , meams it should display as aad,afd,and, Abd,Acd,And,Avd ...
  ngOnInit(): void {
    for (let i = 0; i < 10000; i++) {
      let randomCapital = '';
      let randomLowercase = '';
      for (let j = 0; j < 4; j++) {
        randomCapital += String.fromCharCode(
          65 + Math.floor(Math.random() * 26)
        );
        randomLowercase += String.fromCharCode(
          97 + Math.floor(Math.random() * 26)
        );
      }
      this.items.push({
        name: randomCapital,
        value: 12,
      });
      this.items.push({
        name: randomLowercase,
        value: 12,
      });
    }
    //set sort here
    let beginDate = Date.now();
    this.items.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      let index = 0;
      while (index < nameA.length && index < nameB.length) {
        const charA = nameA.charAt(index);
        const charB = nameB.charAt(index);
        if (charA < charB) {
          return -1;
        }
        if (charA > charB) {
          return 1;
        }
        if (charA == charB) {
          if (a.name.charAt(index) > b.name.charAt(index)) {
            return -1;
          }
          if (a.name.charAt(index) < b.name.charAt(index)) {
            return 1;
          }
        }
        index++;
      }

      return 0;
    });
    let endDate = Date.now();
    console.log(endDate - beginDate);
  }
}
