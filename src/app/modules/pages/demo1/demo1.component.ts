import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.scss',
})
export class Demo1Component implements OnInit {
  public items: { name: string; value: number }[] = [];
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
  // i need set items sort by name, the same first letter display as a>A , meams it should display as aad,afd,and, Abd,Acd,And,Avd ...
  ngOnInit(): void {
    for (let i = 0; i < 3300; i++) {
      this.items.push({ name: this.makeName(5), value: Math.random() });
    }

    //set sort here: bubble sort
    // for (let i = 0; i < this.items.length; i++) {
    //   for (let j = i + 1; j < this.items.length; j++) {
    //     if (this.compareTo(this.items[i].name, this.items[j].name) < 0) {
    //       this.swap(this.items, i, j);
    //     }
    //   }
    // }
    let beginDate = Date.now();
    this.bubbleSort(this.items);
    let endDate = Date.now();
    //spend time on sort
    console.log(endDate - beginDate);
  }

  bubbleSort(arr: { name: string; value: number }[]): void {
    let n: number = arr.length;
    var swapped: boolean;
    for (let i = 0; i < n - 1; i++) {
      swapped = false;
      for (let j = 0; j < n - 1 - i; j++) {
        if (this.compareTo(arr[j].name, arr[j + 1].name) < 0) {
          this.swap(arr, j, j + 1);
          swapped = true;
        }
      }
      if (swapped === false) break;
    }
  }

  /**
   * Helper function to achieve the sorting logic
   * @param s1 - the targetting string
   * @param s2 - the other string
   * @return 1 - if s1 is preceeding to s2; -1 if s2 is precedding to s1; 0 if s1 and s2 are identical
   *  by preceeding: in aA-zZ order,
   */
  compareTo(s1: string, s2: string): number {
    var i = 0;
    while (i < s1.length && i < s2.length) {
      if (s1.toLowerCase().charCodeAt(i) < s2.toLowerCase().charCodeAt(i))
        return 1;
      else if (s1.toLowerCase().charCodeAt(i) > s2.toLowerCase().charCodeAt(i))
        return -1;
      else if (s1.charCodeAt(i) < s2.charCodeAt(i)) return -1;
      else if (s1.charCodeAt(i) > s2.charCodeAt(i)) return 1;
      i++;
    }
    return 0;
  }

  /**
   * Helper functin to swap elements of an array
   * @param array - the targetted array
   * @param i - index
   * @param j - index
   */
  swap(array: any[], i: number, j: number): void {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  /**
   * Helper function to generate random string
   * @param length - length of desired string
   * @returns random string
   */
  makeName(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
}
