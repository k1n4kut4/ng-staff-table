import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { MatButtonModule,
         MatTableModule,
         MatFormFieldModule,
         MatInputModule,
         MatCardModule, 
         MatSelectModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
         
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatButtonModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule, 
        MatSelectModule,
        FormsModule, 
        ReactiveFormsModule,
        BrowserAnimationsModule  
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-staff-table'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng-staff-table');
  });

  it('should render Person header', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-card-title').textContent).toContain('Person');
  }); 

  //Ideally need a test of whether from will update table. Could refactor to have form variables passed to a function, then that function can be given sample data, which would expand the table 
});
