import { Component, ViewChild } from '@angular/core';
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
  public staffForm: FormGroup;
  
  title = 'ng-staff-table'; 

  genders = [
    {gender_id: 0, gender: 'Male'},
    {gender_id: 1, gender: 'Female'}
  ];

  displayedColumns: string[] = ['Name', 'Company', 'Gender'];
  columnsToDisplay: string[] = this.displayedColumns;
  data: dataElement[] = ELEMENT_DATA; 

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  ngOnInit() {
    this.staffForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      company: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      gender: new FormControl('', [Validators.required])
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.staffForm.controls[controlName].hasError(errorName);
  }

  addStaff() { 

    if (this.staffForm.valid) {
      this.data.push({
        Name: this.staffForm.value["name"],
        Company: this.staffForm.value["company"],
        Gender: this.genders[this.staffForm.value["gender"]]["gender"]
      }); 
      
      this.table.renderRows(); 
    }

  } 
}