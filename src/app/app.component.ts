import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material';

export interface dataElement {
  Name: string;
  Company: string;
  Gender: string;
}  

const ELEMENT_DATA: dataElement[] = [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-staff-table';
}
