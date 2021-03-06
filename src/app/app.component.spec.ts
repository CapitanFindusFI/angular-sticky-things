import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AngularStickyThingsModule} from '@w11k/angular-sticky-things';
import {InfoComponent} from './info/info.component';

xdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularStickyThingsModule
      ],
      declarations: [
        AppComponent,
        InfoComponent,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
