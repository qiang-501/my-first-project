import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.scss',
})
export class Demo1Component implements OnInit {
  public items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 11 },
    { name: 'aad', value: 12 },
    { name: 'afd', value: 13 },
    { name: 'and', value: 14 },
    { name: 'Acd', value: 15 },
    { name: 'Abd', value: 16 },
    { name: 'Avd', value: 17 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 },
  ];
  // i need set items sort by name, the same first letter display as a>A , meams it should display as aad,afd,and, Abd,Acd,And,Avd ...
  ngOnInit(): void {
    //set sort here
  }
}