import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Country } from 'src/app/models/Country';

@Component({
  selector: 'app-country-detail-component',
  templateUrl: './country-detail-component.component.html',
  styleUrls: ['./country-detail-component.component.css']
})
export class CountryDetailComponentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CountryDetailComponentComponent>, @Inject(MAT_DIALOG_DATA) public country: Country) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close()
  }
}
