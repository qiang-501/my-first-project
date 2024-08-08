import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppShellComponent } from './app-shell/app-shell.component';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule, NgChartsModule],
      declarations: [AppComponent, AppShellComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'my-first-project' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-first-project');
  });
});
