import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo2Component } from './demo2.component';
import { MatTabGroup } from '@angular/material/tabs';
import { MatTab } from '@angular/material/tabs';
import { MatIcon } from '@angular/material/icon';
import { MatCheckbox } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('Demo2Component', () => {
  let component: Demo2Component;
  let fixture: ComponentFixture<Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatTabGroup,
        MatTab,
        MatIcon,
        MatCheckbox,
        FormsModule,
        BrowserAnimationsModule,
      ],
      declarations: [Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
