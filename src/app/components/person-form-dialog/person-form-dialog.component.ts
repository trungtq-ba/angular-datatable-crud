import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Person } from 'src/app/core/models/person';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './person-form-dialog.component.html',
  styleUrls: ['./person-form-dialog.component.scss']
})
export class PersonFormDialogComponent implements OnInit {
  formInstance: FormGroup;

  constructor(public dialogRef: MatDialogRef<PersonFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Person) {
    this.formInstance = new FormGroup({
      "id":  new FormControl('', Validators.required),
      "firstName": new FormControl('', Validators.required),
      "age": new FormControl('', Validators.required),
      "job": new FormControl('', Validators.required),
    });

    this.formInstance.setValue(data);
  }

  ngOnInit(): void {
  }

  save(): void {
    this.dialogRef.close(Object.assign(new Person(), this.formInstance.value));
  }
}
