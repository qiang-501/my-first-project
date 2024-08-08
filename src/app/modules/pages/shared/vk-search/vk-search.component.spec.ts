import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VkSearchComponent } from './vk-search.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('VkSearchComponent', () => {
  let component: VkSearchComponent;
  let fixture: ComponentFixture<VkSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatInput,
        MatFormFieldModule,
        BrowserAnimationsModule,
      ],
      declarations: [VkSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VkSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
