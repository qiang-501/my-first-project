import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1Component } from './demo1.component';
import { NgChartsModule } from 'ng2-charts';
import { VkTreeComponent } from '../shared/vk-tree/vk-tree.component';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { VkSearchComponent } from '../shared/vk-search/vk-search.component';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

describe('Demo1Component', () => {
  let component: Demo1Component;
  let fixture: ComponentFixture<Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgChartsModule,
        MatCardModule,
        MatDivider,
        MatCheckbox,
        MatIcon,
        MatFormField,
        FormsModule,
        MatFormFieldModule,
        MatInput,
      ],
      declarations: [Demo1Component, VkTreeComponent, VkSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.allColumns.length).toEqual(15);
  });
});
