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
import {
  ScrollingModule,
  CdkVirtualScrollViewport,
  CdkVirtualForOf,
} from '@angular/cdk/scrolling';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Demo1Component } from './demo1/demo1.component.js';
import { Demo2Component } from './demo2/demo2.component.js';
import { VkTreeComponent } from './shared/vk-tree/vk-tree.component.js';
import { VkSearchComponent } from './shared/vk-search/vk-search.component.js';
@NgModule({
  declarations: [
    MainComponent,
    Demo1Component,
    Demo2Component,
    VkTreeComponent,
    VkSearchComponent,
  ],
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
    ScrollingModule,
    CdkVirtualScrollViewport,
    CdkVirtualForOf,
    MatTabsModule,
    MatIconModule,
    MatCheckboxModule,
  ],
})
export class HomeModule {}
