import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VkTreeComponent } from './vk-tree.component';

describe('VkTreeComponent', () => {
  let component: VkTreeComponent;
  let fixture: ComponentFixture<VkTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VkTreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VkTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
