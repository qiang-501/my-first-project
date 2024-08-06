import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VkSearchComponent } from './vk-search.component';

describe('VkSearchComponent', () => {
  let component: VkSearchComponent;
  let fixture: ComponentFixture<VkSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VkSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VkSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
