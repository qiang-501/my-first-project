import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { MatCard, MatCardSubtitle } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardHeader,
  MatCardTitle,
  MatCardActions,
  MatCardContent,
} from '@angular/material/card';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatCard,
        MatCardHeader,
        MatCardActions,
        MatCardTitle,
        MatCardContent,
        MatCardSubtitle,
        MatDivider,
        MatFormField,
        FormsModule,
        MatFormFieldModule,
        MatInput,
        BrowserAnimationsModule,
      ],
      declarations: [MainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
