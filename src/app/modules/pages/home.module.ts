import { HomeRoutingModule } from './home-routing.module.ts';
import { NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { MainComponent } from './main/main.component.js';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [MainComponent],
  exports: [NgChartsModule, MatCardModule, MainComponent],
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
  ],
})
export class HomeModule {}
