import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'demo',
    component: Demo1Component,
  },
  {
    path: 'demo1',
    component: Demo2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
