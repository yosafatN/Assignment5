import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Country } from 'src/app/models/Country';

@Component({
  selector: 'app-all-countries-component',
  templateUrl: './all-countries-component.component.html',
  styleUrls: ['./all-countries-component.component.css']
})
export class AllCountriesComponentComponent implements OnInit {

  @Output() clickCardListener = new EventEmitter<number>()
  @Input() countries: Country[] = []

  ngOnInit(): void {
    this.countries.sort((a,b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
  }

  clickCard(id: number) {
    this.clickCardListener.emit(id)
  }

}
