import { HomeRoutingModule } from './home-routing.module.ts';
import { NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { MainComponent } from './main/main.component.js';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Demo1Component } from './demo1/demo1.component.js';
@NgModule({
  declarations: [MainComponent, Demo1Component],
  exports: [NgChartsModule, MatCardModule, MainComponent, Demo1Component],
  imports: [
    HomeRoutingModule,
    NgChartsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    FormsModule,
    MatSelectModule,
  ],
})
export class HomeModule {}
