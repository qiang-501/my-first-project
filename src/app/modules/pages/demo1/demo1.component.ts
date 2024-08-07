import { Component, OnInit } from '@angular/core';
import { ItemNode } from '../shared/vk-tree/vk-tree.component';
import { newTableColumns } from './all-columns.constants';
@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.scss',
})
export class Demo1Component implements OnInit {
  allColumns: Array<ItemNode>;
  public items: { name: string; value: number }[] = [];
  public ChartData: any = {
    datasets: [
      {
        data: [],
      },
    ],
    labels: [],
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
    var data: Array<ItemNode> = [];
    this.allColumns = [];
    newTableColumns.map((_) => {
      var temp = data.filter((f) => f.displayName == _.typeName);
      if (temp.length > 0) {
        if (!temp[0].children) temp[0].children = [];
        temp[0].children.push({
          name: _.typeName,
          displayName: _.displayName,
          checked: false,
          display: true,
          indeterminate: false,
          expand: false,
          field: _.field,
          children: [],
        });
      } else {
        data.push({
          displayName: _.typeName,
          name: _.type,
          expand: false,
          checked: false,
          indeterminate: false,
          display: true,
          field: '', // parent node has no field value
          children: [
            {
              display: true,
              indeterminate: false,
              expand: false,
              displayName: _.displayName,
              name: _.typeName,
              checked: false,
              field: _.field,
              children: [],
            },
          ],
        });
      }
    });
    this.allColumns = data;
    // const N: number = 200000; // max iteration allowed
    // for (let i = 0; i < N; i++) {
    //   this.items.push({ name: this.makeName(5), value: Math.random() });
    // }
    // let n = 0;
    // while (n <= N) {
    //   this.ChartData.labels.push(n);
    //   var beginDate = Date.now();
    //   this.items.slice(0, n).sort((a, b) => this.compareTo(a.name, b.name));
    //   var endDate = Date.now();
    //   this.ChartData.datasets[0].data.push(endDate - beginDate);
    //   n += 1000;
    // }
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
